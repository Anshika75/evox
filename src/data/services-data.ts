import type { ServiceCard, ServicesSectionContent } from "../types/services"

export const servicesSectionContent: ServicesSectionContent = {
  preHeading: "what we offer",
  heading: "Our Services",
  description:
    'We are one of fastest B2B F&B growing company in India with unique philosophy "Eat well Live well" which means eating quality food & living happiest life forever.',
}

export const serviceCards: ServiceCard[] = [
  {
    id: "1",
    title: "Institutional food services",
    description:
      "It's good to yell at people and tell people that you're from Tennessee, so that way you'll be safe. You ever roasted doughnuts?Did you feel that?",
    image: "/images/home/rectangle.png",
    alt: "Smiling chef in institutional kitchen",
    link: "/services/institutional-food",
  },
  {
    id: "2",
    title: "Facility management",
    description:
      "It's good to yell at people and tell people that you're from Tennessee, so that way you'll be safe. You ever roasted doughnuts?Did you feel that?",
    image: "/images/home/rectangle1.png",
    alt: "Facility manager inspecting building",
    link: "/services/facility-management",
  },
  {
    id: "3",
    title: "Event Management",
    description:
      "It's good to yell at people and tell people that you're from Tennessee, so that way you'll be safe. You ever roasted doughnuts?Did you feel that?",
    image: "/images/home/rectangle.png",
    alt: "Event planner setting up an event",
    link: "/services/event-management",
  },
  {
    id: "4",
    title: "Corporate Hospitality",
    description:
      "It's good to yell at people and tell people that you're from Tennessee, so that way you'll be safe. You ever roasted doughnuts?Did you feel that?",
    image: "/images/home/rectangle1.png",
    alt: "Corporate hospitality staff serving guests",
    link: "/services/corporate-hospitality",
  },
  {
    id: "5",
    title: "Consultation Services",
    description:
      "It's good to yell at people and tell people that you're from Tennessee, so that way you'll be safe. You ever roasted doughnuts?Did you feel that?",
    image: "/images/home/rectangle.png",
    alt: "Business consultant meeting with client",
    link: "/services/consultation-services",
  },
]
