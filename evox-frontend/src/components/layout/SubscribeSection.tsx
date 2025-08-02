import Link from "next/link"
import { subscribeSectionContent } from "@/data/subscribe-data"

export default function SubscribeSection() {
  return (
    <div className="bg-blue-50 py-16 lg:py-24 px-4 md:px-6 lg:px-12">
      <div
        className="relative mx-auto bg-cover bg-center bg-no-repeat py-20 lg:py-28 rounded-2xl shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${subscribeSectionContent.backgroundImage.src})` }}
        role="img"
        aria-label={subscribeSectionContent.backgroundImage.alt}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-custom-black opacity-75"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl lg:text-6xl font-semibold plus-jakarta-sans-semibold text-white leading-tight mb-4">
            {subscribeSectionContent.heading}
          </h2>
          <p className="text-lg sm:text-2xl plus-jakarta-sans-regular leading-relaxed mb-10">{subscribeSectionContent.description}</p>
          <div className="flex flex-row gap-6 items-center justify-center">
            <Link
              href={subscribeSectionContent.primaryButton.href}
              className="bg-custom-black text-white px-6 sm:px-8 py-4 rounded-full plus-jakarta-sans-medium font-medium hover:opacity-80 transition-all duration-200 text-sm"
            >
              {subscribeSectionContent.primaryButton.text}
            </Link>
            <Link
              href={subscribeSectionContent.secondaryButton.href}
              className="bg-white text-custom-black px-6 sm:px-8 py-4 rounded-full plus-jakarta-sans-medium font-medium hover:opacity-80 transition-all duration-200 text-sm"
            >
              {subscribeSectionContent.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
