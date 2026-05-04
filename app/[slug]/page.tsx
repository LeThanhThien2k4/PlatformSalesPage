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

const rawData = page.sections;

// Kiểm tra nếu dữ liệu JSON bị bọc trong object 'data' của Strapi
const sections = Array.isArray(rawData) 
  ? rawData 
  : (rawData && typeof rawData === 'object' && Array.isArray(rawData.data) ? rawData.data : []);

console.log("Dữ liệu sections sau khi xử lý:", sections);
  return (
    <main>
      
      
      {sections.map((section: any, i: number) => {
        // Strapi Dynamic Zone dùng __component thay vì type
        const type = section.__component.split(".")[1]; // Lấy chữ 'hero' từ 'sections.hero'

        switch (type) {
          case "hero":
            return <Hero key={i} {...section} />;
          case "cta":
            return <CTA key={i} {...section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}