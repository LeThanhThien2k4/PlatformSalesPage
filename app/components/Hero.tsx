type HeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="p-10 text-center bg-blue-100">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
      {image && <img src={image} alt={title} className="mx-auto mt-4" />}
    </section>
  );
}