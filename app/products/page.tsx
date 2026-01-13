import ProductCard from '@/components/ProductCard';

const products = [
  {
    title: 'Pharmaceuticals',
    description: 'Comprehensive range of prescription and over-the-counter medicines meeting international quality standards. Our pharmaceutical portfolio includes treatments for various medical conditions, manufactured with precision and rigorous quality control.',
    icon: '💊',
  },
  {
    title: 'Medical Equipment',
    description: 'Advanced medical devices and equipment designed for healthcare facilities. From diagnostic tools to surgical instruments, we provide reliable medical equipment that meets the highest safety and performance standards.',
    icon: '🏥',
  },
  {
    title: 'Diapers',
    description: 'Premium quality baby and adult diapers with superior absorption and comfort. Our diaper products are designed with healthcare providers and caregivers in mind, ensuring hygiene and comfort for patients of all ages.',
    icon: '👶',
  },
  {
    title: 'Medical Gloves',
    description: 'High-quality examination and surgical gloves providing superior protection and dexterity. Available in various sizes and materials, our gloves meet strict medical standards for infection control and healthcare safety.',
    icon: '🧤',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet the diverse needs
            of healthcare providers across Middle East & Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            Interested in learning more about our product range?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-neon-blue text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-neon-blue/50 transition-shadow neon-border"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
