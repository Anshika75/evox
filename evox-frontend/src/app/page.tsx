import { getLandingPageData, isBlogSection, isEsgBannerSection, isFaqSection, isHeroSection, isServiceSection, isWhyUsSection } from "@/lib/StrapiLandingPage";
import BlogSection from "@/sections/home/BlogSection";
import EsgBannerSection from "@/sections/home/EsgBannerSection";
import FaqSection from "@/sections/home/FaqSection";
import HeroSection from "@/sections/home/HeroSection";
import ServicesSection from "@/sections/home/ServicesSection";
import WhyUsSection from "@/sections/home/WhyUsSection";

export default async function HomePage() {
  let heroSectionData = null;
  let serviceSectionData = null;
  let blogSectionData = null;
  let whyUsSectionData = null;
  let esgBannerSectionData = null;
  let faqSectionData = null;

  try {
    const strapiData = await getLandingPageData();

    // Extract each section data using type guards
    for (const section of strapiData.data.sections) {
      if (isHeroSection(section)) {
        heroSectionData = {
          title: section.title,
          subTitle: section.subTitle,
          trustedCompanies: {
            id: section.trustedCompanies.id,
            title: section.trustedCompanies.title,
            logos: section.trustedCompanies.companyLogos.map((logo: any) => ({
              id: logo.logoImage.id,
              documentId: logo.logoImage.documentId,
              name: logo.logoImage.name,
              alternativeText: logo.logoImage.alternativeText || null,
              url: logo.logoImage.url
            }))
          },
          image: {
            id: section.image.id,
            name: section.image.name,
            alternativeText: section.image.alternativeText || null,
            url: section.image.url
          },
          ctaPrimaryLink: {
            id: section.ctaPrimaryLink.id,
            text: section.ctaPrimaryLink.text,
            href: section.ctaPrimaryLink.href,
            isExternal: section.ctaPrimaryLink.isExternal
          },
          ctaSecondaryLink: {
            id: section.ctaSecondaryLink.id,
            text: section.ctaSecondaryLink.text,
            href: section.ctaSecondaryLink.href,
            isExternal: section.ctaSecondaryLink.isExternal
          }
        };
      } else if (isServiceSection(section)) {
        serviceSectionData = {
          preHeading: section.preHeading,
          heading: section.heading,
          description: section.description,
          serviceCard: section.serviceCard.map(card => ({
            id: card.id,
            title: card.title,
            description: card.description,
            image: card.image,
            ctaExploreLink: card.ctaExploreLink
          }))
        };
      } else if (isBlogSection(section)) {
        blogSectionData = {
          preHeading: section.preHeading,
          heading: section.heading,
          featuredBlogPost: section.featuredBlogPost.map(post => ({
            id: post.id,
            blogHighlight: post.blogHighlight,
            published: post.published,
            excerpt: post.excerpt,
            coverImage: post.coverImage,
            ctaText: post.ctaText
          }))
        };
      } else if (isWhyUsSection(section)) {
        whyUsSectionData = {
          heading: section.heading,
          description: section.description,
          image: section.image,
          features: section.features,
          stats: section.stats
        };
      } else if (isEsgBannerSection(section)) {
        esgBannerSectionData = {
          heading: section.heading,
          backgroundImage: section.backgroundImage,
          ctaPrimaryLink: section.ctaPrimaryLink,
          ctaSecondaryLink: section.ctaSecondaryLink
        };
      } else if (isFaqSection(section)) {
        faqSectionData = {
          heading: section.heading,
          image: section.image,
          faqItems: section.faqItems
        };
      }
    }
  } catch (error) {
    console.error('Failed to fetch landing page data:', error);
  }
  

  return (
    <>
      <HeroSection heroSectionData={heroSectionData} />
      <ServicesSection serviceSectionData={serviceSectionData} />
      <BlogSection blogSectionData={blogSectionData} />
      <WhyUsSection whyUsSectionData={whyUsSectionData} />
      <EsgBannerSection esgBannerSectionData={esgBannerSectionData} />
      <FaqSection faqSectionData={faqSectionData} />
    </>
  );
}