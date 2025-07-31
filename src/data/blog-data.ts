import type { BlogPost, BlogSectionContent } from "../types/blog"

export const blogSectionContent: BlogSectionContent = {
  preHeading: "our blog", // Added preHeading for "our blog"
  heading: "What's New?", // Changed heading to "What's New?"
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    image: "/images/home/rectangle.png",
    alt: "Chef preparing food",
    date: "May 1, 2023",
    title: "lorem ipsum lorem ipsum lore ip sum lore ipsum lor em ipsum jailorie is",
    link: "/blog/post-1",
  },
  {
    id: "2",
    image: "/images/home/rectangle1.png",
    alt: "People laughing at a table",
    date: "May 1, 2023",
    title: "lorem ipsum lorem ipsum lore ip sum lore ipsum lor em ipsum jailorie is",
    link: "/blog/post-2",
  },
  {
    id: "3",
    image: "/images/home/rectangle.png",
    alt: "Man with singing bowl",
    date: "May 1, 2023",
    title: "lorem ipsum lorem ipsum lore ip sum lore ipsum lor em ipsum jailorie is",
    link: "/blog/post-3",
  },
  {
    id: "4",
    image: "/images/home/rectangle1.png",
    alt: "Healthy food preparation",
    date: "May 5, 2023",
    title: "New trends in healthy eating and sustainable food practices",
    link: "/blog/post-4",
  },
  {
    id: "5",
    image: "/images/home/rectangle.png",
    alt: "Business meeting",
    date: "May 10, 2023",
    title: "The future of corporate catering and event management solutions",
    link: "/blog/post-5",
  },
]
