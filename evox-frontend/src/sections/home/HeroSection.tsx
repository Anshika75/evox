"use client"

import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  heroSectionData?: {
    title: string;
    subTitle: string;
    trustedCompanies: {
      id: number;
      title: string;
      logos: Array<{
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        url: string;
      }>;
    };
    image: {
      id: number;
      name: string;
      alternativeText: string | null;
      url: string;
    };
    ctaPrimaryLink: {
      id: number;
      text: string;
      href: string;
      isExternal: boolean;
    };
    ctaSecondaryLink: {
      id: number;
      text: string;
      href: string;
      isExternal: boolean;
    };
  } | null;
}

export default function HeroSection({ heroSectionData }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const trustedCompanies = heroSectionData?.trustedCompanies.logos || []
  
  const companiesPerSlide = 3
  const totalSlides = Math.ceil(trustedCompanies.length / companiesPerSlide)

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [totalSlides])

  if (!heroSectionData) {
    return null;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full mx-auto px-2 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] py-12 lg:py-20">
          <div className="relative sm:hidden lg:pl-4">
            {/* Chef Image Container */}
            <div className="relative bg-white overflow-hidden shadow-2xl">
              <StrapiImage
                src={heroSectionData.image.url || "/placeholder.svg"}
                alt={heroSectionData.image.alternativeText || heroSectionData.image.name || "Hero Image"}
                className="w-full h-[250px] object-cover"
                width={588}
                height={600}
              />
            </div>
          </div>
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-4">
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold plus-jakarta-sans-semibold text-custom-black leading-tight text-center sm:text-left">
                {heroSectionData.title}
              </h1>
              <p className="text-lg sm:text-2xl text-custom-black plus-jakarta-sans-regular leading-relaxed text-center sm:text-left">
                {heroSectionData.subTitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-between sm:items-center sm:gap-12">
              <Link
                href={heroSectionData.ctaPrimaryLink.href}
                target={heroSectionData.ctaPrimaryLink.isExternal ? "_blank" : "_self"}
                rel={heroSectionData.ctaPrimaryLink.isExternal ? "noopener noreferrer" : undefined}
                className="bg-custom-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-3 group plus-jakarta-sans-regular justify-center sm:justify-start"
              >
                <span>{heroSectionData.ctaPrimaryLink.text}</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
              </Link>
              <Link
                href={heroSectionData.ctaSecondaryLink.href}
                target={heroSectionData.ctaSecondaryLink.isExternal ? "_blank" : "_self"}
                rel={heroSectionData.ctaSecondaryLink.isExternal ? "noopener noreferrer" : undefined}
                className="text-custom-black font-medium hover:text-gray-600 transition-colors duration-200 underline underline-offset-4 plus-jakarta-sans-regular text-center sm:text-left"
              >
                {heroSectionData.ctaSecondaryLink.text}
              </Link>
            </div>

            {/* Trusted Companies Section - Horizontal layout */}
            <div className="pt-4 sm:pt-8">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
                {/* Text on the left */}
                <div className="flex-shrink-0">
                  <p className="hidden md:flex text-lg text-custom-black plus-jakarta-sans-semibold font-semibold mb-1">
                    Trusted by the world&apos;s <br /> biggest companies
                  </p>
                  
                  <p className="flex md:hidden text-custom-black plus-jakarta-sans-semibold font-semibold mb-2 text-center">
                    {heroSectionData.trustedCompanies.title}
                  </p>
                </div>

                {/* Logos carousel on the right */}
                {trustedCompanies.length > 0 && (
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
                              .map((company) => (
                                <div key={company.id} className="flex items-center justify-center">
                                  <StrapiImage
                                    src={company.url || "/placeholder.svg"}
                                    alt={company.alternativeText || company.name || "Company Logo"}
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
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Chef Image */}
          <div className="hidden sm:block relative lg:pl-4">
            {/* Chef Image Container */}
            <div className="relative bg-white overflow-hidden shadow-2xl">
              <StrapiImage
                src={heroSectionData.image.url || "/placeholder.svg"}
                alt={heroSectionData.image.alternativeText || heroSectionData.image.name || "Hero Image"}
                className="w-full h-auto object-cover lg:h-[550px]"
                height={588}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}