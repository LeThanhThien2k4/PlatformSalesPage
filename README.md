# 🚀 Platform Sales Page (Next.js + Strapi + Supabase)

## 📌 Giới thiệu

Dự án xây dựng hệ thống **Landing Page động** chuyên dụng cho việc bán khóa học và sản phẩm công nghệ, sử dụng kiến trúc hiện đại để tối ưu hóa quy trình marketing và vận hành:

- **Next.js** → Render giao diện tốc độ cao, hỗ trợ SEO tối đa.
- **Strapi (Headless CMS)** → Quản lý nội dung trực quan, linh hoạt.
- **Dynamic Zone UI** → Thay thế JSON tĩnh bằng các thành phần UI có thể tùy biến thứ tự từ CMS.
- **Supabase** → Database PostgreSQL cloud thay vì SQLite local.
- **Cloudinary** → Lưu trữ và tối ưu hình ảnh/video.

**Mục tiêu:**
- Tạo landing page nhanh chóng (<24h).
- Marketing có thể tự chủ động thay đổi nội dung và cấu trúc trang mà không cần can thiệp code.
- Hệ thống ổn định, dễ mở rộng (affiliate, dashboard, thanh toán).

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
```
Frontend
Next.js 14/15 (App Router).

TypeScript (Type-safe).

TailwindCSS (Styling).

Backend / Infrastructure
Strapi v4/v5: Headless CMS.

Supabase: Database PostgreSQL lưu trữ dữ liệu bền vững.

Cloudinary: Lưu trữ và tối ưu hóa hình ảnh khóa học.
```
---

## 📂 Cấu trúc project
```
bash
.
├── app/                # Next.js App Router
│   ├── page.tsx        # Homepage (Danh sách khóa học)
│   └── [slug]/         # Landing page động cho từng khóa học
├── components/         # UI Components (Hero, CTA, Pricing, CourseCard...)
├── types/              # TypeScript types (Section, PageData)
├── lib/                # API fetch (Logic kết nối Strapi)
├── cms/                # Mã nguồn Strapi project (kết nối Supabase)
│   ├── .env.example    # Mẫu biến môi trường
│   ├── .gitignore      # Bỏ qua .env, node_modules...
│   └── ...
└── README.md
```
## 🔁 Cách hoạt động
```
1. Quản lý nội dung trong Strapi
Sử dụng Dynamic Zone thay vì trường JSON tĩnh để quản lý các thành phần giao diện:

Thêm/Xóa/Sắp xếp các khối: Hero, CTA, Pricing.

Dữ liệu được "làm phẳng" (Flattened) giúp việc truyền Props vào Component đơn giản hơn.

2. Next.js fetch data
Sử dụng tham số populate=* để lấy đầy đủ các thành phần bên trong Dynamic Zone.

ts
const page = await getLandingPage(slug);
3. Render UI linh hoạt
Giao diện được render dựa trên thuộc tính __component của từng section:

tsx
sections.map((section, i) => {
  const type = section.__component.split(".")[1]; // Lấy 'hero', 'cta'...
  switch (type) {
    case "hero": return <Hero key={i} {...section} />;
    case "cta":  return <CTA key={i} {...section} />;
  }
});
```
## 🔐 Cấu hình môi trường (.env) & Bảo mật
```
Yêu cầu bắt buộc trước khi cài đặt
Node.js 18+ và npm/yarn.

Tài khoản Supabase (miễn phí).

Tài khoản Cloudinary (miễn phí).

1. File .gitignore – Không commit mật khẩu
Hãy đảm bảo trong thư mục cms/ có file .gitignore với nội dung:

gitignore
# Dependencies
node_modules/
dist/
build/

# Environment variables – QUAN TRỌNG
.env
.env.*
!.env.example

# Strapi
.tmp/
.cache/
uploads/
⚠️ Chỉ duy nhất .env bị bỏ qua, .env.example (bản mẫu) sẽ được commit lên repo để hướng dẫn.

2. Tạo file .env từ bản mẫu
bash
cd cms
cp .env.example .env
Nếu chưa có .env.example, hãy tự tạo với nội dung mẫu bên dưới.

3. Sinh giá trị ngẫu nhiên cho các khóa bí mật
Trong file .env, các biến như APP_KEYS, JWT_SECRET, ADMIN_JWT_SECRET, API_TOKEN_SALT, TRANSFER_TOKEN_SALT phải là chuỗi ngẫu nhiên, không dùng chung.

Bạn có thể tạo chúng bằng một trong hai cách:

🐧 Dùng OpenSSL (Linux, macOS, Git Bash trên Windows)
bash
openssl rand -base64 32
```
## 📦 Dùng Node.js (nếu đã cài Node)

bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
Chạy lệnh này 4-5 lần để lấy các giá trị khác nhau, mỗi lần cho một biến.

Riêng APP_KEYS cần hai chuỗi, cách nhau bằng dấu phẩy, ví dụ:
APP_KEYS=abc123,xyz789

4. Cấu hình kết nối Supabase
Điền các thông tin thật từ Supabase vào .env:

env
# Server
HOST=0.0.0.0
PORT=1337

# Database (PostgreSQL trên Supabase)
DATABASE_HOST=aws-0-xxxx.pooler.supabase.com
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres.xxxx
DATABASE_PASSWORD=your_supabase_password

# Secrets (thay bằng chuỗi ngẫu nhiên đã sinh)
APP_KEYS=generatedKey1,generatedKey2
API_TOKEN_SALT=randomTokenSalt
ADMIN_JWT_SECRET=randomAdminSecret
JWT_SECRET=randomJwtSecret
TRANSFER_TOKEN_SALT=randomTransferSalt
📌 Bạn có thể lấy thông tin Supabase tại: Project Settings → Database → Connection string.

## 🚀 Cài đặt & chạy project
```
1. Clone project
bash
git clone <repo-url>
cd project
2. Cài đặt Backend (Strapi + Supabase)
bash
cd cms
npm install
Sau đó chạy Strapi lần đầu:

bash
npm run develop
Lần đầu tiên, Strapi sẽ tự động tạo các bảng trong Supabase và mở giao diện đăng ký admin tại:
http://localhost:1337/admin/auth/register

Nếu muốn tạo admin qua terminal (hữu ích cho đồng đội), dùng:

bash
npm run strapi admin:create
3. Cài đặt Frontend (Next.js)
Mở terminal mới, quay lại thư mục gốc:

bash
cd ..
npm install
npm run dev
👉 Website: http://localhost:3000

4. Kiểm tra và chia sẻ cho đồng đội
Luôn commit .env.example và không commit .env.

Đồng đội clone về sẽ chạy cp .env.example .env, sinh lại các khóa ngẫu nhiên cho riêng họ, và tự tạo admin (hoặc dùng chung database nếu được cấp quyền).

5. Export/Import dữ liệu mẫu (tùy chọn)
Nếu bạn muốn đồng bộ các landing page, sections, media có sẵn cho đồng đội, hãy dùng lệnh export/import của Strapi:

bash
# Export (bạn làm, trong thư mục cms)
npm run strapi export -- --file ../seed-data --no-encrypt

# Commit file seed-data.tar.gz lên Git
git add ../seed-data.tar.gz
git commit -m "chore: add seed data"

# Import (đồng đội làm sau khi clone)
npm run strapi import -- --file ../seed-data.tar.gz
Lưu ý: Lệnh import sẽ xóa sạch dữ liệu hiện có trong database trước khi nạp dữ liệu mới.
```
## 🎯 Routing & API
```
Next.js Dynamic Route: /app/[slug]/page.tsx cho phép tạo không giới hạn trang mới từ CMS.

API Query:

text
GET /api/landing-pages?filters[slug][$eq]=slug-name&populate=*
🔥 Tính năng hiện tại
Dynamic Landing Page: Tự động sinh trang dựa trên slug.

Flattened Data: Dữ liệu phẳng giúp code sạch sẽ, dễ bảo trì.

Cloud Database Integration (Supabase): Dữ liệu an toàn, đồng bộ team, dễ triển khai.

Component-based UI: Dễ dàng tái sử dụng và mở rộng.

Cloudinary hỗ trợ media: Lưu ảnh/video, CDN, tối ưu tự động.
```
## 🚧 Roadmap
```
Affiliate Tracking: Hệ thống theo dõi link tiếp thị liên kết.

Authentication (JWT): Đăng nhập học viên.

Payment Integration: Tích hợp cổng thanh toán (Stripe/Momo/VNPay).

ISR (Incremental Static Regeneration): Tối ưu hiệu năng render trang tĩnh.
```

## ⚠️ Lưu ý quan trọng
```
Publish dữ liệu: Đảm bảo nội dung trong Strapi đã được nhấn nút Publish, nếu không API sẽ trả về mảng rỗng.

Dynamic Zone Name: Luôn đặt tên Dynamic Zone là sections để khớp với logic xử lý trong code.

Không commit .env – đã có trong .gitignore.

Mỗi thành viên tự sinh JWT secret riêng để tránh xung đột bảo mật.

Nếu dùng chung Supabase: Các thành viên cần cấp quyền truy cập database (thêm IP hoặc dùng connection pooler).
```

👨‍💻 Author
Le Thanh Thien
IT Student & Full-stack Developer.

📄 License
MIT
