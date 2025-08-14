"use client"

import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";



interface ServicesSectionProps {
  serviceSectionData?: {
    preHeading: string;
    heading: string;
    description: string;
    serviceCard: Array<{
      id: number;
      title: string | null;
      description: string | null;
      image: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        url: string;
      } | null;
      ctaExploreLink: {
        id: number;
        text: string;
        href: string;
        isExternal: boolean;
      } | null;
    }>;
  } | null;
}

interface ProcessedServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  linkText: string;
  isExternal: boolean;
}

export default function ServicesSection({ serviceSectionData }: ServicesSectionProps) {
  const carouselInnerRef = useRef<HTMLDivElement>(null)
  const [visibleCardsCount, setVisibleCardsCount] = useState(3)
  const [currentSlide, setCurrentSlide] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const processedServiceCards: ProcessedServiceCard[] = serviceSectionData 
    ? serviceSectionData.serviceCard
        .filter(card => card.title && card.description && card.image && card.ctaExploreLink)
        .map(card => ({
          id: card.id,
          title: card.title!,
          description: card.description!,
          image: card.image!.url,
          alt: card.image!.alternativeText || card.image!.name || "Service Image",
          link: card.ctaExploreLink!.href,
          linkText: card.ctaExploreLink!.text,
          isExternal: card.ctaExploreLink!.isExternal
        }))
    : [];

  const clonesAtEachEnd = visibleCardsCount
  const extendedServiceCards = [
    ...processedServiceCards.slice(-clonesAtEachEnd),
    ...processedServiceCards,
    ...processedServiceCards.slice(0, clonesAtEachEnd),
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCardsCount(1)
      } else {
        setVisibleCardsCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setCurrentSlide(visibleCardsCount)
  }, [visibleCardsCount])

  const totalRealSlides = Math.ceil(processedServiceCards.length / visibleCardsCount)

  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      if (isTransitioning && smooth) return

      if (carouselInnerRef.current) {
        carouselInnerRef.current.style.transition = smooth ? "transform 0.7s ease-in-out" : "none"
      }

      setCurrentSlide(index)
      setIsTransitioning(smooth)

      if (!smooth && carouselInnerRef.current) {
        void carouselInnerRef.current.offsetWidth
      }
    },
    [isTransitioning],
  )

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false)

    if (currentSlide >= processedServiceCards.length + clonesAtEachEnd) {
      goToSlide(clonesAtEachEnd, false)
    } else if (currentSlide < clonesAtEachEnd) {
      goToSlide(processedServiceCards.length + clonesAtEachEnd - 1, false)
    }
  }, [currentSlide, clonesAtEachEnd, processedServiceCards.length, goToSlide])

  const nextSlide = () => {
    goToSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1)
  }

  const getTransformValue = () => {
    if (carouselInnerRef.current && carouselInnerRef.current.children.length > 0) {
      const firstCard = carouselInnerRef.current.children[0] as HTMLElement
      const cardWidth = firstCard.offsetWidth
      return `translateX(-${currentSlide * cardWidth}px)`
    }
    return "translateX(0px)"
  }

  // Early returns after all hooks
  if (!serviceSectionData) {
    return null;
  }

  if (processedServiceCards.length === 0) {
    return null;
  }

  return (
    <div className="bg-white text-gray-900 lg:py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center gap-8 md:gap-16 mb-12 lg:mb-20">
          <div>
            <p className="text-gray-600 text-sm sm:text-3xl text-custom-black tracking-[7px] plus-jakarta-sans-medium font-medium">
              {serviceSectionData.preHeading}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold plus-jakarta-sans-bold text-gray-900 leading-tight">
              {serviceSectionData.heading}
            </h2>
          </div>
          <div className="max-w-5xl">
            <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed">{serviceSectionData.description}</p>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselInnerRef}
              className="flex"
              style={{ transform: getTransformValue() }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedServiceCards.map((card: ProcessedServiceCard, index: number) => (
                <div key={`${card.id}-${index}`} className="flex-shrink-0 w-full md:w-1/3 sm:px-4">
                  <ServiceCardItem card={card} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalRealSlides > 1 && (
            <>
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

          {/* Mobile Navigation Arrows */}
          {totalRealSlides > 1 && (
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
  card: ProcessedServiceCard
}

function ServiceCardItem({ card }: ServiceCardItemProps) {

  const [isHovered, setIsHovered] = useState(false)


  return (
    <div
      className="flex-shrink-0 w-full">
      <div className="relative h-[550px] overflow-hidden shadow-lg group transition-all duration-700 ease-in-out cursor-pointer">
        {/* Image */}
        <StrapiImage
          height={500}
          width={500}
          src={card.image || "/placeholder.svg"}
          alt={card.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:bg-[#010205] bg-[rgba(54,54,54,0.5)]"></div>

        <div className="absolute inset-0 flex flex-col p-6 sm:p-12 transition-all duration-700 ease-in-out">
          <div className="flex flex-col flex-grow transition-all duration-500 justify-end group-hover:justify-start">
            <h3 className="text-2xl plus-jakarta-sans-medium font-medium text-white mb-4 leading-tight">
              {card.title}
            </h3>
            <p className="text-gray-300 plus-jakarta-sans-regular font-regular transition-all duration-500 delay-100 group-hover:flex hidden leading-7">
              {card.description}
            </p>
          </div>



          <Link
            href={card.link}
            className="flex items-center text-white text-sm font-medium group-hover:text-gray-300 transition-colors duration-300 mt-auto"
          >
            {card.linkText}
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}