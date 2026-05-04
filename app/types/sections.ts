export type HeroSection = {
  type: "hero";
  data: {
    title: string;
    subtitle ?: string;
    image ?: string;
  };
};

export type CTASection = {
  type: "cta";
  data: {
    text: string;
    link?: string;
  };
};

export type Section = HeroSection | CTASection;

export type PageData = {
  sections: Section[];
};