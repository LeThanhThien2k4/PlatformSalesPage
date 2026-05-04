import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Pricing from "../components/Pricing";
import { getAllLandingPages } from "../lib/api";
import { PageData, Section } from "../types/sections";

// 1. Chỉnh sửa định nghĩa Type cho props
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // 2. PHẢI await params ngay đầu hàm
  const { slug } = await params;

  // 3. Gọi API với slug đã unwrap
  const pages = await getAllLandingPages();
const page = pages.find((p: PageData) => p.slug === slug);
  if (!page) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p>Slug: {slug}</p>
      </div>
    );
  }
    const sections = page.sections || [];

  return (
    <main>
      {sections.map((section: Section, i: number) => {
        switch (section.type) {
          case "hero":
            return <Hero key={i} {...section.data} />;
          case "cta":
                return <CTA key={i} {...section.data} />;
          case "pricing": 
                return <Pricing key={i} {...section.data} />;
          default:
            return <p key={i}>Unknown section type: {section.type}</p>;
        }
      })}
    </main>
  );
}