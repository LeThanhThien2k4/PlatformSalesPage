import { PageData } from "../types/sections";
export async function getAllLandingPages(): Promise<PageData[]> {
  const res = await fetch(
    `http://localhost:1337/api/landing-pages?populate=*`,
    { next: { revalidate: 10 } } // Tự động cập nhật dữ liệu sau mỗi 60s
  );
if (!res.ok) {
    // Nếu lỗi 403 hoặc 500, ném ra lỗi rõ ràng để debug
  return [];
  }
  const json = await res.json();
  
  if (!json.data) return [];

  // Chuẩn hóa dữ liệu cho cả Strapi v4 và v5
  return json.data.map((entry: any) => ({
    id: entry.id,
    documentId: entry.documentId,
    title: entry.title,
    slug: entry.slug,
    sections: entry.sections || []
  })) as PageData[];

}