import Link from "next/link"
import { esgBannerContent } from "@/data/esg-banner-data"

export default function EsgBannerSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${esgBannerContent.backgroundImage.src})`,
        backgroundSize: "100% 100%", 
        backgroundPosition: "0 0",
      }}
      role="img"
      aria-label={esgBannerContent.backgroundImage.alt}
    >
      {/* Optional: Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section: Empty (image is now background) */}
          <div className="hidden lg:block"></div> 
          {/* Right Section: Heading and CTAs */}
          <div className="space-y-8 text-center lg:text-left sm:ml-12">
            <h2 className="text-4xl sm:text-5xl lg:text-8xl plus-jakarta-sans-semibold text-white leading-tight">
              <span className="plus-jakarta-sans-semibold text-[#331249]">Evox</span> - Where ESG Shapes Hospitality.
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center sm:items-center justify-center lg:justify-start">
              <Link
                href={esgBannerContent.primaryButton.href}
                className="bg-custom-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-3 group plus-jakarta-sans-regular justify-center sm:justify-start"
              >
                <span>{esgBannerContent.primaryButton.text}</span>
                {esgBannerContent.primaryButton.icon && (
                  <i
                    className={`${esgBannerContent.primaryButton.icon} text-sm group-hover:translate-x-1 transition-transform duration-200`}
                  ></i>
                )}
              </Link>
              <Link
                href={esgBannerContent.secondaryButton.href}
                className="text-white font-medium hover:text-gray-600 transition-colors duration-200 underline underline-offset-4 plus-jakarta-sans-regular  text-center sm:text-left"
              >
                {esgBannerContent.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
