export interface EsgBannerContent {
  heading: string
  backgroundImage: {
    src: string
    alt: string
  }
  primaryButton: {
    text: string
    href: string
    icon?: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}
