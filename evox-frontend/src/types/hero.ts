export interface HeroContent {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
    icon?: string
  }
  secondaryButton: {
    text: string
    href: string
  }
  image: {
    src: string
    alt: string
  }
}

export interface TrustedCompany {
  id: string
  name: string
  logo: string
  alt: string
}
