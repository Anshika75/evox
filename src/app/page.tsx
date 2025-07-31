import BlogSection from "@/sections/home/BlogSection";
import HeroSection from "@/sections/home/HeroSection";
import ServicesSection from "@/sections/home/ServicesSection";
import WhyUsSection from "@/sections/home/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BlogSection />
      <WhyUsSection />
    </>
  );
}
