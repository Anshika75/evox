import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";

interface EsgBannerSectionProps {
  esgBannerSectionData?: {
    heading: string;
    backgroundImage: {
      id: number;
      documentId: string;
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

export default function EsgBannerSection({ esgBannerSectionData }: EsgBannerSectionProps) {
  return (
    <div className="relative py-16 overflow-hidden">
  {/* Background Image using StrapiImage */}
  <div className="absolute inset-0 z-0">
    <StrapiImage
      src={esgBannerSectionData?.backgroundImage.url||  ""}
      alt={esgBannerSectionData?.backgroundImage.alternativeText || esgBannerSectionData?.backgroundImage.name || "ESG Banner Background"}
      className="w-full h-full object-cover"
      fill
      priority
    />
  </div>
      {/* Optional: Overlay for better text readability if needed */}
       <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Section: Empty (image is now background) */}
          <div className="hidden lg:block"></div> 
          {/* Right Section: Heading and CTAs */}
          <div className="space-y-8 text-center lg:text-left sm:ml-12">
            <h2 className="text-4xl sm:text-5xl lg:text-8xl plus-jakarta-sans-semibold text-white leading-tight">
              {esgBannerSectionData?.heading}
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center sm:items-center justify-center lg:justify-start">
              <Link
                href={esgBannerSectionData?.ctaPrimaryLink.href||""}
                target={esgBannerSectionData?.ctaPrimaryLink.isExternal ? "_blank" : "_self"}
                rel={esgBannerSectionData?.ctaPrimaryLink.isExternal ? "noopener noreferrer" : undefined}
                className="bg-custom-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 flex items-center space-x-3 group plus-jakarta-sans-regular justify-center sm:justify-start"
              >
                <span>{esgBannerSectionData?.ctaPrimaryLink.text}</span>
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
              </Link>
              <Link
                href={esgBannerSectionData?.ctaSecondaryLink.href|| ""}
                target={esgBannerSectionData?.ctaSecondaryLink.isExternal ? "_blank" : "_self"}
                rel={esgBannerSectionData?.ctaSecondaryLink.isExternal ? "noopener noreferrer" : undefined}
                className="text-white font-medium hover:text-gray-600 transition-colors duration-200 underline underline-offset-4 plus-jakarta-sans-regular text-center sm:text-left"
              >
                {esgBannerSectionData?.ctaSecondaryLink.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}