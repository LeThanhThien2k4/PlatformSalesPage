Đây là bản **README.md** được viết lại đầy đủ, kết hợp nội dung cũ của bạn và cập nhật các công nghệ mới (Supabase, Cloudinary, Dynamic Zone) để phản ánh đúng trạng thái dự án hiện tại.

---

# 🚀 PlatForm Sales Page (Next.js + Strapi + Supabase)

## 📌 Giới thiệu

Dự án xây dựng hệ thống **Landing Page động** chuyên dụng cho việc bán khóa học và sản phẩm công nghệ, sử dụng kiến trúc hiện đại để tối ưu hóa quy trình marketing và vận hành:

*   **Next.js** → Render giao diện tốc độ cao, hỗ trợ SEO tối đa.
*   **Strapi (Headless CMS)** → Quản lý nội dung trực quan, linh hoạt.
*   **Dynamic Zone UI** → Thay thế JSON tĩnh bằng các thành phần UI có thể tùy biến thứ tự từ CMS.

**Mục tiêu:**
*   Tạo landing page nhanh chóng (<24h).
*   Marketing có thể tự chủ động thay đổi nội dung và cấu trúc trang mà không cần can thiệp code.
*   Hệ thống ổn định, dễ mở rộng (affiliate, dashboard, thanh toán).

---

## 🧠 Kiến trúc hệ thống

```text
Strapi (CMS Dashboard)  <--->  Supabase (PostgreSQL Cloud)
          ↓ 
    API (REST + Populate)
          ↓ 
  Next.js (Render Engine)  <--->  Cloudinary (Media Storage)
          ↓ 
   UI (Landing Page)
```

---

## ⚙️ Công nghệ sử dụng

### Frontend
*   Next.js 14/15 (App Router).
*   TypeScript (Type-safe).
*   TailwindCSS (Styling).

### Backend / Infrastructure
*   **Strapi v4/v5**: Headless CMS.
*   **Supabase**: Database PostgreSQL lưu trữ dữ liệu bền vững thay vì SQLite local.
*   **Cloudinary**: Lưu trữ và tối ưu hóa hình ảnh khóa học.

---

## 📂 Cấu trúc project

```bash
.
├── app/                # Next.js App Router
│   ├── page.tsx        # Homepage (Danh sách khóa học)
│   └── [slug]/         # Landing page động cho từng khóa học
├── components/         # UI Components (Hero, CTA, Pricing, CourseCard...)
├── types/              # TypeScript types (Section, PageData)
├── lib/                # API fetch (Logic kết nối Strapi)
├── cms/                # Mã nguồn Strapi project (Kết nối Supabase)
└── README.md
```

---

## 🔁 Cách hoạt động

### 1. Quản lý nội dung trong Strapi
Sử dụng **Dynamic Zone** thay vì trường JSON tĩnh để quản lý các thành phần giao diện:
*   Thêm/Xóa/Sắp xếp các khối: `Hero`, `CTA`, `Pricing`.
*   Dữ liệu được "làm phẳng" (Flattened) giúp việc truyền Props vào Component đơn giản hơn.

### 2. Next.js fetch data
Sử dụng tham số `populate=*` để lấy đầy đủ các thành phần bên trong Dynamic Zone.
```ts
const page = await getLandingPage(slug);
```

### 3. Render UI linh hoạt
Giao diện được render dựa trên thuộc tính `__component` của từng section:
```tsx
sections.map((section, i) => {
  const type = section.__component.split(".")[1]; // Lấy 'hero', 'cta'...
  switch (type) {
    case "hero":
      return <Hero key={i} {...section} />; // Truyền trực tiếp data phẳng
    case "cta":
      return <CTA key={i} {...section} />;
  }
});
```

---

## 🚀 Cài đặt & chạy project

### 1. Clone project
```bash
git clone <repo-url>
cd project
```

### 2. Cài đặt Backend (Strapi + Supabase)
*   Cấu hình biến môi trường database trong `cms/.env` để kết nối với **Supabase PostgreSQL**.
```bash
cd cms
npm install
npm run develop
```
👉 Admin: http://localhost:1337/admin

### 3. Cài đặt Frontend (Next.js)
```bash
cd ..
npm install
npm run dev
```
👉 Website: http://localhost:3000

---

## 🎯 Routing & API

*   **Next.js Dynamic Route**: `/app/[slug]/page.tsx` cho phép tạo không giới hạn trang mới từ CMS.
*   **API Query**: `GET /api/landing-pages?filters[slug][$eq]=slug-name&populate=*`.

---

## 🔥 Tính năng hiện tại
*   **Dynamic Landing Page**: Tự động sinh trang dựa trên slug.
*   **Flattened Data**: Dữ liệu phẳng giúp code sạch sẽ, dễ bảo trì.
*   **Cloud Database Integration**: Kết nối Supabase giúp dữ liệu an toàn và dễ triển khai.
*   **Component-based**: Dễ dàng tái sử dụng và mở rộng UI.

---

## 🚧 Roadmap
*   **Affiliate Tracking**: Hệ thống theo dõi link tiếp thị liên kết.
*   **Authentication (JWT)**: Đăng nhập học viên.
*   **Payment Integration**: Tích hợp cổng thanh toán (Stripe/Momo).
*   **ISR (Incremental Static Regeneration)**: Tối ưu hiệu năng render trang tĩnh.

---

## ⚠️ Lưu ý
*   **Publish dữ liệu**: Đảm bảo nội dung trong Strapi đã được nhấn nút **Publish**, nếu không API sẽ trả về mảng rỗng.
*   **Dynamic Zone Name**: Luôn đặt tên Dynamic Zone là `sections` để khớp với logic xử lý trong code.

---

## 👨‍💻 Author
**Le Thanh Thien**
*   IT Student & Full-stack Developer.

---

## 📄 License
MIT
