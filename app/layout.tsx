import Navbar from "./components/Navbar"; // Điều chỉnh đường dẫn nếu cần
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* Luôn nằm trên cùng của mọi trang */}
        {children}
        
        {/* Bạn có thể thêm Footer ở đây sau này */}
        <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm border-t border-gray-800">
          <p>© 2026 ThienDev CMS. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}