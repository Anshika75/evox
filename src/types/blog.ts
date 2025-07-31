export interface BlogPost {
  id: string
  image: string
  alt: string
  date: string
  title: string
  link: string
}

export interface BlogSectionContent {
  preHeading: string // Added preHeading
  heading: string
}
