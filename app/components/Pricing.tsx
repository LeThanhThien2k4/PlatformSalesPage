type PricingProps = {
  planName: string;
  price: string;
  description?: string;
  features: string[];
  buttonText: string;
};

export default function Pricing({ planName, price, description, features, buttonText }: PricingProps) {
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-md mx-auto border-2 border-blue-600 rounded-2xl p-8 shadow-xl relative overflow-hidden">
        {/* Nhãn phổ biến */}
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
          Best Seller
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{planName}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
          <div className="mt-4 flex justify-center items-baseline">
            <span className="text-5xl font-extrabold tracking-tight text-gray-900">{price}</span>
            <span className="ml-1 text-xl font-semibold text-gray-500">/khóa</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>

        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-200">
          {buttonText}
        </button>
      </div>
    </section>
  );
}