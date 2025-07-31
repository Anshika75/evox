"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { servicesSectionContent, serviceCards as originalServiceCards } from "@/data/services-data"
import type { ServiceCard } from "@/types/services"

export default function ServicesSection() {
  const carouselInnerRef = useRef<HTMLDivElement>(null) // Ref for the flex container
  const [visibleCardsCount, setVisibleCardsCount] = useState(3) // Default for desktop

  // Number of cards to clone at each end for seamless looping
  // It's important to clone at least `visibleCardsCount` cards
  const clonesAtEachEnd = visibleCardsCount

  // Create an extended array with clones for infinite scroll
  const extendedServiceCards = [
    ...originalServiceCards.slice(-clonesAtEachEnd), // Clones from end (e.g., last 3 cards)
    ...originalServiceCards, // Original cards
    ...originalServiceCards.slice(0, clonesAtEachEnd), // Clones from beginning (e.g., first 3 cards)
  ]

  // Initial slide index points to the first "real" card in the extended array
  const [currentSlide, setCurrentSlide] = useState(clonesAtEachEnd)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Determine visible cards count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCardsCount(1)
      } else {
        setVisibleCardsCount(3)
      }
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Recalculate extended cards and reset slide when visibleCardsCount changes
  useEffect(() => {
    // When visibleCardsCount changes, the clonesAtEachEnd also changes.
    // We need to re-initialize the currentSlide to the correct starting point
    // (the first "real" card after the new set of leading clones).
    setCurrentSlide(visibleCardsCount)
  }, [visibleCardsCount])

  // Calculate total "real" slides for navigation arrow visibility
  const totalRealSlides = Math.ceil(originalServiceCards.length / visibleCardsCount)

  // Function to move to a specific slide, with an option for smooth transition
  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      if (isTransitioning && smooth) return // Prevent rapid clicks during smooth transition

      if (carouselInnerRef.current) {
        // Control CSS transition property directly
        carouselInnerRef.current.style.transition = smooth ? "transform 0.7s ease-in-out" : "none"
      }

      setCurrentSlide(index)
      setIsTransitioning(smooth) // Set transitioning state

      if (!smooth && carouselInnerRef.current) {
        // Force reflow to apply the 'transition: none' immediately for instant jump
        void carouselInnerRef.current.offsetWidth
      }
    },
    [isTransitioning],
  )

  // Callback for when a CSS transition ends
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false) // Transition has completed

    // Check if we've moved into the cloned sections and need to jump back
    // If currentSlide is at or beyond the first clone of the original first card
    if (currentSlide >= originalServiceCards.length + clonesAtEachEnd) {
      goToSlide(clonesAtEachEnd, false) // Jump to the first "real" card
    }
    // If currentSlide is before the first "real" card (i.e., in the leading clones)
    else if (currentSlide < clonesAtEachEnd) {
      goToSlide(originalServiceCards.length + clonesAtEachEnd - 1, false) // Jump to the last "real" card
    }
  }, [currentSlide, clonesAtEachEnd, originalServiceCards.length, goToSlide])

  // Navigation functions
  const nextSlide = () => {
    goToSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1)
  }

  // Calculate the transform value based on the actual width of a single card
  const getTransformValue = () => {
    if (carouselInnerRef.current && carouselInnerRef.current.children.length > 0) {
      const firstCard = carouselInnerRef.current.children[0] as HTMLElement
      const cardWidth = firstCard.offsetWidth // Get the actual rendered width of one card
      return `translateX(-${currentSlide * cardWidth}px)`
    }
    return "translateX(0px)"
  }

  return (
    <div className="bg-white text-gray-900 lg:py-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center gap-8 md:gap-16 mb-12 lg:mb-20">
          <div>
            <p className="text-gray-600 text-sm sm:text-3xl text-custom-black tracking-[7px] plus-jakarta-sans-medium font-medium">
              {servicesSectionContent.preHeading}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold plus-jakarta-sans-bold text-gray-900 leading-tight">
              {servicesSectionContent.heading}
            </h2>
          </div>
          <div className="max-w-5xl">
            <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed">{servicesSectionContent.description}</p>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselInnerRef} // Attach ref here
              className="flex" // Transition property is controlled via style.transition
              style={{ transform: getTransformValue() }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedServiceCards.map((card: ServiceCard, index: number) => (
                // Each card takes full width on mobile, 1/3 on desktop
                <div key={`${card.id}-${index}`} className="flex-shrink-0 w-full md:w-1/3 sm:px-4">
                  <ServiceCardItem card={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalRealSlides > 1 && ( // Only show arrows if there's more than one real slide
            <>
              {/* Desktop Navigation Arrows (Sides) */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 -translate-x-8 bg-gray-200 rounded-full p-4 shadow-lg hover:bg-gray-300 transition-colors duration-200 z-10 hidden md:block"
                aria-label="Previous service"
              >
                <i className="fas fa-chevron-left text-gray-700"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 translate-x-8 bg-gray-200 rounded-full p-4 shadow-lg hover:bg-gray-300 transition-colors duration-200 z-10 hidden md:block"
                aria-label="Next service"
              >
                <i className="fas fa-chevron-right text-gray-700"></i>
              </button>
            </>
          )}

          {/* Mobile Navigation Arrows (Bottom) */}
          {totalRealSlides > 1 && ( // Only show arrows if there's more than one real slide
            <div className="flex justify-center space-x-4 mt-8 md:hidden">
              <button
                onClick={prevSlide}
                className="bg-gray-200 rounded-full p-3 shadow-lg hover:bg-gray-300 transition-colors duration-200"
                aria-label="Previous service"
              >
                <i className="fas fa-chevron-left text-gray-700 text-sm"></i>
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-200 rounded-full p-3 shadow-lg hover:bg-gray-300 transition-colors duration-200"
                aria-label="Next service"
              >
                <i className="fas fa-chevron-right text-gray-700 text-sm"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ServiceCardItemProps {
  card: ServiceCard
}

function ServiceCardItem({ card }: ServiceCardItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex-shrink-0 w-full">
      <div className="relative h-[550px] overflow-hidden shadow-lg group transition-all duration-700 ease-in-out cursor-pointer">
        {/* Image */}
        <Image
          height={500}
          width={500}
          src={card.image || "/placeholder.svg"}
          alt={card.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay that fades in */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:bg-[#010205] bg-[rgba(54,54,54,0.5)]"
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col p-6 sm:p-12 transition-all duration-700 ease-in-out">
          {/* Container for title and description, controls their vertical position */}
          <div
            className="flex flex-col flex-grow transition-all duration-500 justify-end group-hover:justify-start"
          >
            <h3 className="text-2xl plus-jakarta-sans-medium font-medium text-white mb-4 leading-tight">{card.title}</h3>
            <p
              className="text-gray-300 plus-jakarta-sans-regular font-regular transition-all duration-500 delay-100 group-hover:flex hidden leading-7"
            >
              {card.description}
            </p>
          </div>

          {/* Explore More always at the bottom */}
          <Link
            href={card.link}
            className="flex items-center text-white text-sm font-medium group-hover:text-gray-300 transition-colors duration-300 mt-auto"
          >
            EXPLORE MORE
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
