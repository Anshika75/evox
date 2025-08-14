import type { HeroContent, TrustedCompany } from "@/types/home/hero"

export const heroContent: HeroContent = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
  description:
    'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well" which means eating quality food & living happiest life forever.',
  primaryButton: {
    text: "Schedule Call",
    href: "/schedule-call",
    icon: "fas fa-arrow-right",
  },
  secondaryButton: {
    text: "Learn more about us",
    href: "/about",
  },
  image: {
    src: "/images/home/HeroSection.png",
    alt: "Professional EVOX Chef in White Uniform",
  },
}

export const trustedCompanies: TrustedCompany[] = [
  {
    id: "1",
    name: "Tata Consultancy Services",
    logo: "/images/home/CompanyLogo.png",
    alt: "TCS - Tata Consultancy Services",
  },
  {
    id: "2",
    name: "Tata Consultancy Services",
    logo: "/images/home/CompanyLogo.png",
    alt: "TCS - Tata Consultancy Services",
  },
  {
    id: "3",
    name: "Tata Consultancy Services",
    logo: "/images/home/CompanyLogo.png",
    alt: "TCS - Tata Consultancy Services",
  },
  {
    id: "4",
    name: "Infosys",
    logo: "/images/home/CompanyLogo.png",
    alt: "Infosys",
  },
  {
    id: "5",
    name: "Wipro",
    logo: "/images/home/CompanyLogo.png",
    alt: "Wipro",
  },
  {
    id: "6",
    name: "HCL Technologies",
    logo: "/images/home/CompanyLogo.png",
    alt: "HCL Technologies",
  },
  {
    id: "7",
    name: "Tech Mahindra",
    logo: "/images/home/CompanyLogo.png",
    alt: "Tech Mahindra",
  },
  {
    id: "8",
    name: "Cognizant",
    logo: "/images/home/CompanyLogo.png",
    alt: "Cognizant",
  },
]
