// sections.ts
export type HeroSection = {
  type: "hero"; 
  title: string;
  subtitle?: string;
  image?: string;
};

export type CTASection = {
  type: "cta";
  text: string;
  link?: string;
};

export type PricingSection = {
  type: "pricing";
  planName: string;
  price: string;
  description?: string;
  features: string[];
  buttonText: string;
};

export type Section = HeroSection | CTASection | PricingSection;

export type PageData = {
  id: number;
  slug: string;
  sections: Section[];
};