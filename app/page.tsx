import Hero from "./components/Hero";
import CTA from "./components/CTA";
import { PageData } from "./types/sections";

const pageData: PageData = {
  sections: [
    { type: "hero", data: { title: "Hello", subtitle: "Welcome to our site" } },
    { type: "cta", data: { text: "Buy now", link: "/buy" } }
  ]
};

export default function Page() {
  return (
    <>
      {pageData.sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <Hero key={i} {...section.data} />;

          case "cta":
            return <CTA key={i} {...section.data} />;

          default:
            return null;
        }
      })}
    </>
  );
}