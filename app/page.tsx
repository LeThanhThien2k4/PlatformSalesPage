import { getAllLandingPages } from "./lib/api";
import CourseCard from "./components/CourseCard";

export default async function HomePage() {
  const courses = await getAllLandingPages();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section Trang Chủ */}
      <section className="bg-blue-900 text-white py-20 px-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Học Lập Trình Thực Chiến
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Tổng hợp các khóa học Fullstack giúp bạn làm chủ công nghệ và triển khai Landing Page thần tốc.
        </p>
      </section>

      {/* Danh sách khóa học */}
      <section className="max-w-7xl mx-auto py-16 px-5">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Khóa học mới nhất</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <p className="text-gray-500 font-medium">Hiển thị {courses.length} khóa học</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: any) => (
            <CourseCard 
              key={course.id} 
              title={course.title} 
              slug={course.slug} 
              sections={course.sections} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}