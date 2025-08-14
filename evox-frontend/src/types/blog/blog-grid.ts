export interface BlogGridPost {
  id: string
  title: string
  excerpt: string
  image: string
  alt: string
  category: string
  date: string
  author?: {
    name: string
    avatar: string
    initial: string
  }
  link: string
  featured?: boolean
}

export interface BlogGridContent {
  heading: string
}
