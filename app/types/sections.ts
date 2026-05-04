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
export type PricingSection = {
  type: "pricing";
  data: {
    planName: string;
    price: string;
    description?: string;
    features: string[]; // Danh sách các lợi ích: "Hỗ trợ 24/7", "Code mẫu",...
    buttonText: string;
  };
};
export type Section = HeroSection | CTASection | PricingSection;

export type PageData = {
  id: number;
  title: string;
  slug: string;
  sections: Section[]; // Sử dụng Section type chúng ta đã định nghĩa
};