import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            ThienDev CMS
          </span>
        </Link>

        {/* Menu điều hướng */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
          <a href="#courses" className="hover:text-blue-600 transition-colors">Khóa học</a>
          <Link href="/about" className="hover:text-blue-600 transition-colors">Về chúng tôi</Link>
        </div>

        {/* Nút hành động */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-blue-600">Đăng nhập</button>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200"
          >
            Bắt đầu học
          </Link>
        </div>
      </div>
    </nav>
  );
}