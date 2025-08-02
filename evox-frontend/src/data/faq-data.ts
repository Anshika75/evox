import type { FaqItem, FaqSectionContent } from "../types/faq"

export const faqSectionContent: FaqSectionContent = {
  heading: "Our Services Deliver the Best Results for Your Business",
  image: {
    src: "/images/home/Faq.png",
    alt: "Smiling barista standing behind a counter with pastries",
  },
}

export const faqItems: FaqItem[] = [
  {
    id: "item-1",
    question: "How we serves best dishes to everyone",
    answer: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur lorem ipsum lorem ipsum lorem ipsum",
    ],
  },
  {
    id: "item-2",
    question: "Lorem ipsum lorem ipsum lorem ipsum lorem",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: "item-3",
    question: "What are your core values?",
    answer:
      "Our core values revolve around quality, sustainability, and customer satisfaction. We believe in 'Eat well Live well' philosophy.",
  },
  {
    id: "item-4",
    question: "Do you offer custom catering solutions?",
    answer:
      "Yes, we provide tailored catering solutions for various events, from corporate gatherings to private parties. Contact us to discuss your specific needs.",
  },
]
