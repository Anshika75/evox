export interface FaqItem {
  id: string
  question: string
  answer: string | string[] // Can be a single string or an array for lists
}

export interface FaqSectionContent {
  heading: string
  image: {
    src: string
    alt: string
  }
}
