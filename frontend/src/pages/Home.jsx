import Layout from '../components/Layout.tsx';
import ProductCard from '../components/ProductCard.tsx';
import { motion } from 'framer-motion';

// Mock data for Phase 1 (UI/UX)
const MOCK_PRODUCTS = [
  { id: '1', name: 'Manzanas Frescas (1 kg)', price: 3.50, category: 'Frutas' },
  { id: '2', name: 'Carne Molida de Res (Libra)', price: 4.25, category: 'Carnes' },
  { id: '3', name: 'Leche Entera (1 Galón)', price: 4.99, category: 'Lácteos' },
  { id: '4', name: 'Pan de Caja Integral', price: 2.85, category: 'Panadería' },
  { id: '5', name: 'Huevos Blancos (Cartón 30)', price: 5.50, category: 'Abarrotes' },
  { id: '6', name: 'Queso Fresco (Libra)', price: 3.10, category: 'Lácteos' },
  { id: '7', name: 'Tomates de Cocina (Libra)', price: 1.20, category: 'Verduras' },
  { id: '8', name: 'Pechuga de Pollo Sin Hueso (Libra)', price: 3.80, category: 'Carnes' },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section / Offers Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--color-primary-hover)] to-emerald-900 text-white min-h-[300px] flex items-center p-8 md:p-16"
      >
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Frescura en la puerta de tu casa
          </h1>
          <p className="text-lg md:text-xl mb-8 text-emerald-100 opacity-90">
            Descubre ofertas exclusivas en carnes, frutas, verduras y todos los productos de tu canasta básica.
          </p>
          <button className="bg-white text-[var(--color-primary-hover)] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Ver Ofertas
          </button>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </motion.section>

      {/* Main Content Area */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-main)] mb-2">
              Productos Destacados
            </h2>
            <p className="text-[var(--color-text-muted)]">Lo mejor de nuestro catálogo para ti.</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
