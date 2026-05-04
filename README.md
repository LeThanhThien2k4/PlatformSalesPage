# 🚀 Platform Sales Page (Next.js + Strapi)

## 📌 Giới thiệu

Dự án xây dựng hệ thống **Landing Page động** cho việc bán khóa học và sản phẩm, sử dụng:

* **Next.js** → render UI + SEO
* **Strapi (Headless CMS)** → quản lý nội dung
* **JSON-driven UI** → render giao diện từ dữ liệu

Mục tiêu:

* Tạo landing page nhanh (<24h)
* Marketing có thể tự tạo nội dung
* Dễ mở rộng (affiliate, dashboard, analytics)

---

## 🧠 Kiến trúc hệ thống

```text
Strapi (CMS)
     ↓ API (REST)
Next.js (Render Engine)
     ↓
UI (Landing Page)
```

---

## ⚙️ Công nghệ sử dụng

### Frontend

* Next.js
* React
* TypeScript
* TailwindCSS

### Backend / CMS

* Strapi (Headless CMS)

---

## 📂 Cấu trúc project

```bash
.
├── app/                # Next.js App Router
│   └── [slug]/         # Dynamic landing page
│       └── page.tsx
├── components/         # UI Components (Hero, CTA,...)
├── types/              # TypeScript types (Section, PageData)
├── lib/                # API fetch (Strapi)
├── cms/                # Strapi project
└── README.md
```

---

## 🔁 Cách hoạt động

### 1. Strapi quản lý nội dung

Ví dụ dữ liệu:

```json
{
  "title": "Landing A",
  "slug": "landing-a",
  "sections": [
    {
      "type": "hero",
      "data": {
        "title": "Hello từ CMS"
      }
    },
    {
      "type": "cta",
      "data": {
        "text": "Buy now"
      }
    }
  ]
}
```

---

### 2. Next.js fetch data

```ts
const page = await getLandingPage(slug);
```

---

### 3. Render UI

```tsx
sections.map((section) => {
  switch (section.type) {
    case "hero":
      return <Hero {...section.data} />;
    case "cta":
      return <CTA {...section.data} />;
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

---

### 2. Cài frontend

```bash
npm install
npm run dev
```

👉 http://localhost:3000

---

### 3. Cài CMS (Strapi)

```bash
cd cms
npm install
npm run develop
```

👉 Admin: http://localhost:1337/admin

---

## 🔑 Tạo dữ liệu trong Strapi

* Tạo Collection: `landing-pages`
* Fields:

  * title (text)
  * slug (UID)
  * sections (JSON)

---

## 🌐 API

```bash
GET /api/landing-pages?filters[slug][$eq]=landing-a
```

---

## 🎯 Routing

Next.js sử dụng dynamic route:

```bash
/app/[slug]/page.tsx
```

Ví dụ:

```bash
/landing-a
```

---

## 🧩 Core Concept

* Component = UI
* Props = dữ liệu
* JSON = nguồn dữ liệu

---

## 🔥 Tính năng hiện tại

* Dynamic landing page theo slug
* Render UI từ CMS
* Component-based architecture
* Type-safe với TypeScript

---

## 🚧 Roadmap

* Affiliate tracking system
* Dashboard báo cáo
* Authentication (JWT)
* Payment integration
* ISR (Incremental Static Regeneration)

---

## ⚠️ Lưu ý

* Field `sections` phải là **array**
* Không nested JSON sai cấu trúc
* Đảm bảo dữ liệu đã publish trong Strapi

---

## 👨‍💻 Author

Le Thanh Thien

---

## 📄 License

MIT
