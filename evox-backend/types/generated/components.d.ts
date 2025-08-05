import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    featuredBlogPost: Schema.Attribute.Component<
      'elements.blog-component',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlocksEsgBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_esg_banner_sections';
  info: {
    displayName: 'ESG Banner Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaPrimaryLink: Schema.Attribute.Component<'elements.link', false>;
    ctaSecondaryLink: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.Text;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    faqItems: Schema.Attribute.Component<'elements.faq-item', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footer_sections';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    contactUs: Schema.Attribute.Component<'elements.footer-contact-us', false>;
    ctaContactLink: Schema.Attribute.Component<'elements.link', false>;
    ctaSubscribeLink: Schema.Attribute.Component<'elements.link', false>;
    footerCompanyDescription: Schema.Attribute.RichText;
    newLetterDescription: Schema.Attribute.RichText;
    newLetterHeading: Schema.Attribute.Text;
    newLetterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    openingHours: Schema.Attribute.Component<
      'elements.footer-opening-hour',
      true
    >;
    quickLink: Schema.Attribute.Component<'elements.footer-quick-links', false>;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    ctaPrimaryLink: Schema.Attribute.Component<'elements.link', false>;
    ctaSecondaryLink: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    trustedCompanies: Schema.Attribute.Component<
      'elements.truested-company',
      false
    >;
  };
}

export interface BlocksNavbarSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_navbar_sections';
  info: {
    displayName: 'Navbar Section';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phoneNumber: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    serviceCard: Schema.Attribute.Component<'elements.service-section', true>;
  };
}

export interface BlocksWhyUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_us_sections';
  info: {
    displayName: 'Why Us Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.why-us-feature', true>;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stats: Schema.Attribute.Component<'elements.why-us-stats', true>;
  };
}

export interface ElementsBlogComponent extends Struct.ComponentSchema {
  collectionName: 'components_elements_blog_components';
  info: {
    displayName: 'Blog Component';
  };
  attributes: {
    blogHighlight: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaText: Schema.Attribute.Component<'elements.link', false>;
    excerpt: Schema.Attribute.RichText;
    published: Schema.Attribute.Date;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    Answer: Schema.Attribute.RichText;
    Question: Schema.Attribute.Text;
  };
}

export interface ElementsFooterCompanyDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_company_descriptions';
  info: {
    displayName: 'Footer Company Description';
  };
  attributes: {
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsFooterContactUs extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_contact_uses';
  info: {
    displayName: 'Footer Contact Us';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phoneNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
    websiteLink: Schema.Attribute.String;
  };
}

export interface ElementsFooterNewLetterSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_new_letter_sections';
  info: {
    displayName: 'Footer NewLetter Section';
  };
  attributes: {
    ctaContactUsLink: Schema.Attribute.Component<'elements.link', false>;
    ctaSubscribeLink: Schema.Attribute.Component<'elements.link', false>;
    newLetterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    newsLetterDescription: Schema.Attribute.Text;
    newsLetterTitle: Schema.Attribute.Text;
  };
}

export interface ElementsFooterOpeningHour extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_opening_hours';
  info: {
    displayName: 'Footer Opening Hour';
  };
  attributes: {
    dayRange: Schema.Attribute.String;
    hours: Schema.Attribute.String;
  };
}

export interface ElementsFooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_quick_links';
  info: {
    displayName: 'Footer Quick Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_sections';
  info: {
    displayName: 'Service Component';
  };
  attributes: {
    ctaExploreLink: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTruestedCompany extends Struct.ComponentSchema {
  collectionName: 'components_elements_truested_companies';
  info: {
    displayName: 'trustedCompany';
  };
  attributes: {
    companyLogos: Schema.Attribute.Component<'elements.logo', true>;
    companyName: Schema.Attribute.String;
  };
}

export interface ElementsWhyUsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_why_us_features';
  info: {
    displayName: 'Why Us Feature';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface ElementsWhyUsStats extends Struct.ComponentSchema {
  collectionName: 'components_elements_why_us_stats';
  info: {
    displayName: 'Why us Stats';
  };
  attributes: {
    label: Schema.Attribute.Text;
    targetValue: Schema.Attribute.BigInteger;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-section': BlocksBlogSection;
      'blocks.esg-banner-section': BlocksEsgBannerSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.footer-section': BlocksFooterSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.navbar-section': BlocksNavbarSection;
      'blocks.service-section': BlocksServiceSection;
      'blocks.why-us-section': BlocksWhyUsSection;
      'elements.blog-component': ElementsBlogComponent;
      'elements.faq-item': ElementsFaqItem;
      'elements.footer-company-description': ElementsFooterCompanyDescription;
      'elements.footer-contact-us': ElementsFooterContactUs;
      'elements.footer-new-letter-section': ElementsFooterNewLetterSection;
      'elements.footer-opening-hour': ElementsFooterOpeningHour;
      'elements.footer-quick-links': ElementsFooterQuickLinks;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.service-section': ElementsServiceSection;
      'elements.truested-company': ElementsTruestedCompany;
      'elements.why-us-feature': ElementsWhyUsFeature;
      'elements.why-us-stats': ElementsWhyUsStats;
    }
  }
}
