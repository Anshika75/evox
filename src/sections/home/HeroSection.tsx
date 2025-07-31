"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { heroContent, trustedCompanies } from "@/data/hero-data"
import type { TrustedCompany } from "@/types/hero"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const companiesPerSlide = 3
  const totalSlides = Math.ceil(trustedCompanies.length / companiesPerSlide)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full mx-auto px-2 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] py-12 lg:py-20">
          <div className="relative sm:hidden lg:pl-4">

            {/* Chef Image Container */}
            <div className="relative bg-white overflow-hidden shadow-2xl">
              <img
                src={heroContent.image.src || "/placeholder.svg"}
                alt={heroContent.image.alt}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
          {/* Left Content */}
          <div className="space-y-8 lg:pr-4">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold plus-jakarta-sans-semibold text-custom-black leading-tight text-center sm:text-left">
                {heroContent.title}
              </h1>
              <p className="text-lg sm:text-2xl text-custom-black plus-jakarta-sans-regular leading-relaxed text-center sm:text-left">{heroContent.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-between sm:items-center sm:gap-12">
              <Link
                href={heroContent.primaryButton.href}
                className="bg-custom-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-3 group plus-jakarta-sans-regular justify-center sm:justify-start"
              >
                <span>{heroContent.primaryButton.text}</span>
                {heroContent.primaryButton.icon && (
                  <i
                    className={`${heroContent.primaryButton.icon} text-sm group-hover:translate-x-1 transition-transform duration-200`}
                  ></i>
                )}
              </Link>
              <Link
                href={heroContent.secondaryButton.href}
                className="text-custom-black font-medium hover:text-gray-600 transition-colors duration-200 underline underline-offset-4 plus-jakarta-sans-regular  text-center sm:text-left"
              >
                {heroContent.secondaryButton.text}
              </Link>
            </div>

            {/* Trusted Companies Section - Horizontal layout */}
            <div className="pt-4 sm:pt-8">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
                {/* Text on the left */}
                <div className="flex-shrink-0">
                  <p className="hidden md:flex text-lg text-custom-black plus-jakarta-sans-semibold font-semibold mb-1">Trusted by the world's <br /> biggest companies</p>
                  
                  <p className="flex md:hidden text-custom-black plus-jakarta-sans-semibold font-semibold mb-2 text-center">Trusted by the world's biggest companies</p>
                </div>

                {/* Logos carousel on the right */}
                <div className="flex-1 overflow-hidden">
                  <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-3 gap-4">
                          {trustedCompanies
                            .slice(slideIndex * companiesPerSlide, slideIndex * companiesPerSlide + companiesPerSlide)
                            .map((company: TrustedCompany) => (
                              <div key={company.id} className="flex items-center justify-center">
                                <Image
                                  src={company.logo || "/placeholder.svg"}
                                  alt={company.alt}
                                  height={100}
                                  width={100}
                                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain"
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Chef Image */}
          <div className="hidden sm:block relative lg:pl-4">

            {/* Chef Image Container */}
            <div className="relative bg-white overflow-hidden shadow-2xl">
              <img
                src={heroContent.image.src || "/placeholder.svg"}
                alt={heroContent.image.alt}
                className="w-full h-auto object-cover lg:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
