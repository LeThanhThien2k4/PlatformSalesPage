type CTAProps = {
  text: string;
  link?: string;
};

export default function CTA({ text, link }: CTAProps) {
  return (
    <section className="p-10 text-center">
      <a href={link} className="px-6 py-3 bg-blue-500 text-white rounded">
        {text}
      </a>
    </section>
  );
}