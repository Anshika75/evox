const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';



export interface StrapiLandingPageData {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    header: Array<{
      __component: string;
      id: number;
      phoneNumber: string;
      email: string;
      socialLinks: Array<{
        id: number;
        text: string;
        href: string;
        isExternal: boolean;
      }>;
    }>;
    sections: Array<
      // Hero Section
      {
        __component: "blocks.hero-section";
        id: number;
        title: string;
        subTitle: string;
        trustedCompanies: {
          id: number;
          title: string;
          logos: Array<{
            id: number;
            documentId: string;
            name: string;
            alternativeText: string | null;
            url: string;
          }>;
        };
        image: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string | null;
          url: string;
        };
        ctaPrimaryLink: {
          id: number;
          text: string;
          href: string;
          isExternal: boolean;
        };
        ctaSecondaryLink: {
          id: number;
          text: string;
          href: string;
          isExternal: boolean;
        };
      } |
      // Service Section
      {
        __component: "blocks.service-section";
        id: number;
        preHeading: string;
        heading: string;
        description: string;
        serviceCard: Array<{
          id: number;
          title: string | null;
          description: string | null;
          image: {
            id: number;
            documentId: string;
            name: string;
            alternativeText: string | null;
            url: string;
          } | null;
          ctaExploreLink: {
            id: number;
            text: string;
            href: string;
            isExternal: boolean;
          } | null;
        }>;
      } |
      // Blog Section
      {
        __component: "blocks.blog-section";
        id: number;
        preHeading: string;
        heading: string;
        featuredBlogPost: Array<{
          id: number;
          blogHighlight: string;
          published: string;
          excerpt: string;
          coverImage: {
            id: number;
            documentId: string;
            name: string;
            alternativeText: string | null;
            url: string;
          };
          ctaText: {
            id: number;
            text: string;
            href: string;
            isExternal: boolean;
          };
        }>;
      } |
      // Why Us Section
      {
        __component: "blocks.why-us-section";
        id: number;
        heading: string;
        description: string;
        image: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string | null;
          url: string;
        };
        features: Array<{
          id: number;
          heading: string;
          description: string;
          icon: string
        }>;
        stats: Array<{
          id: number;
          value: string;
          label: string;
          targetValue: string;
        }>;
      } |
      // ESG Banner Section
      {
        __component: "blocks.esg-banner-section";
        id: number;
        heading: string;
        backgroundImage: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string | null;
          url: string;
        };
        ctaPrimaryLink: {
          id: number;
          text: string;
          href: string;
          isExternal: boolean;
        };
        ctaSecondaryLink: {
          id: number;
          text: string;
          href: string;
          isExternal: boolean;
        };
      } |
      // FAQ Section
      {
        __component: "blocks.faq-section";
        id: number;
        heading: string;
        image: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string | null;
          url: string;
        };
        faqItems: Array<{
          id: number;
          Question: string | null;
          Answer: string | null;
        }>;
      }
    >;
  };
  meta: Record<string, unknown>;
}
 
export async function getLandingPageData(): Promise<StrapiLandingPageData> {
  const url = `${STRAPI_URL}/api/landing-page?populate[header][on][blocks.navbar-section][populate]=*&populate[sections][on][blocks.hero-section][populate][trustedCompanies][populate][logos][fields]=id,name,alternativeText,url&populate[sections][on][blocks.hero-section][populate][image][fields]=id,name,alternativeText,url&populate[sections][on][blocks.hero-section][populate][ctaPrimaryLink]=*&populate[sections][on][blocks.hero-section][populate][ctaSecondaryLink]=*&populate[sections][on][blocks.service-section][populate][serviceCard][populate][image][fields]=id,name,alternativeText,url&populate[sections][on][blocks.service-section][populate][serviceCard][populate][ctaExploreLink]=*&populate[sections][on][blocks.blog-section][populate][featuredBlogPost][populate][coverImage][fields]=id,name,alternativeText,url&populate[sections][on][blocks.blog-section][populate][featuredBlogPost][populate][ctaText]=*&populate[sections][on][blocks.why-us-section][populate][image][fields]=id,name,alternativeText,url&populate[sections][on][blocks.why-us-section][populate][features]=*&populate[sections][on][blocks.why-us-section][populate][stats]=*&populate[sections][on][blocks.esg-banner-section][populate][backgroundImage][fields]=id,name,alternativeText,url&populate[sections][on][blocks.esg-banner-section][populate][ctaPrimaryLink]=*&populate[sections][on][blocks.esg-banner-section][populate][ctaSecondaryLink]=*&populate[sections][on][blocks.faq-section][populate][image][fields]=id,name,alternativeText,url&populate[sections][on][blocks.faq-section][populate][faqItems]=*`;
  
  const response = await fetch(url, {
    next: { revalidate: 0 } // Cache for 1 hour
  });
  

  if (!response.ok) {
    throw new Error('Failed to fetch navbar data');
  }

  return response.json();
}
// Add these helper functions to c:\Users\avich\Documents\GitHub\evox\evox-frontend\src\lib\StrapiLandingPage.ts

// Type guards for section identification
export function isHeroSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.hero-section" }> {
  return section.__component === "blocks.hero-section";
}

export function isServiceSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.service-section" }> {
  return section.__component === "blocks.service-section";
}

export function isBlogSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.blog-section" }> {
  return section.__component === "blocks.blog-section";
}

export function isWhyUsSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.why-us-section" }> {
  return section.__component === "blocks.why-us-section";
}

export function isEsgBannerSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.esg-banner-section" }> {
  return section.__component === "blocks.esg-banner-section";
}

export function isFaqSection(section: StrapiLandingPageData['data']['sections'][0]): section is Extract<StrapiLandingPageData['data']['sections'][0], { __component: "blocks.faq-section" }> {
  return section.__component === "blocks.faq-section";
}