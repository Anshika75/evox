export interface WhyUsContent {
  heading: string
  description: string
  features: {
    id: string
    icon: string
    title: string // Added title for each feature pointer
    description: string
  }[]
  stats: {
    value: string
    label: string
    targetValue: number
  }[]
  image: {
    src: string
    alt: string
  }
}
