import BlogSection from "@/sections/home/BlogSection";
import EsgBannerSection from "@/sections/home/EsgBannerSection";
import FaqSection from "@/sections/home/FaqSection";
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
      <EsgBannerSection />
      <FaqSection />
    </>
  );
}
