import type { WhyUsContent } from "@/types/why-us"

export const whyUsContent: WhyUsContent = {
  heading: "Tailored Strategies for serving your people effectively",
  description: 'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well"',
  features: [
    {
      id: "1",
      icon: "fas fa-chart-line", // Example icon for line chart
      title: "Enhance experiences through innovation", // Added dummy title
      description: 'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well"',
    },
    {
      id: "2",
      icon: "fas fa-chart-bar", // Example icon for line chart
      title: "Team experience", // Added dummy title
      description: 'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well"',
    },
    {
      id: "3",
      icon: "fas fa-chart-line", // Example icon for bar chart
      title: "ESG and sustainability", // Added dummy title
      description: 'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well"',
    },
    {
      id: "4",
      icon: "fas fa-chart-bar", // Example icon for line chart
      title: "Technology", // Added dummy title
      description: 'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well"',
    },
  ],
  stats: [
    { value: "121+", label: "years of combined experiences", targetValue: 121 },
    { value: "23+", label: "world's biggest clients", targetValue: 23 },
    { value: "700+", label: "trained and skilled employees", targetValue: 700 },
  ],
  image: {
    src: "/images/home/WhyUsImage.png",
    alt: "Chef standing in a modern kitchen",
  },
}
