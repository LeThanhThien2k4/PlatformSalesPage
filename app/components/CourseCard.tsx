import Link from "next/link";
import { Section,HeroSection } from "../types/sections";
type CourseCardProps = {
  title: string;
  slug: string;
  sections: Section[]; // Không dùng any[] nữa, dùng Section[] để biết rõ bên trong có gì
};

export default function CourseCard({ title, slug, sections }: CourseCardProps) {
  const safeSections = Array.isArray(sections) ? sections : [];

  // 1. Sửa logic tìm kiếm: Kiểm tra __component thay vì type
  // Strapi trả về định dạng "category.name", ví dụ: "sections.hero"
  const heroSection = safeSections.find(s => 
    (s as any).__component === "sections.hero" || (s as any).type === "hero"
  ) as any;

  // 2. Sử dụng dữ liệu phẳng hoàn toàn
  const imageUrl = heroSection?.image || "https://via.placeholder.com/400x200";
  const subtitle = heroSection?.subtitle || "Khám phá lộ trình học bài bản cùng chuyên gia.";

  return (
    <Link href={`/${slug}`} className="group h-full">
      <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            HOT
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          {/* 3. SỬA TẠI ĐÂY: Bỏ hoàn toàn .data */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {subtitle}
          </p>
          
          <div className="mt-auto pt-4 border-t flex justify-between items-center">
            <span className="text-blue-600 font-semibold">Xem chi tiết →</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Free Access</span>
          </div>
        </div>
      </div>
    </Link>
  );
}