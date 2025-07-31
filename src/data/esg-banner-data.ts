import type { EsgBannerContent } from "@/types/esg-banner"

export const esgBannerContent: EsgBannerContent = {
  heading: "Evox - Where ESG Shapes Hospitality.",
  backgroundImage: {
    src: "/images/home/esg.png",
    alt: "Hands gently holding a small globe, serving as a background",
  },
  primaryButton: {
    text: "Contact US",
    href: "/contact",
    icon: "fas fa-arrow-right",
  },
  secondaryButton: {
    text: "learn more",
    href: "/esg-policy",
  },
}
