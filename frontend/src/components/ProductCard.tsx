import { Plus } from 'lucide-react';
import { useCartStore, Product } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--color-primary-hover)] transition-all duration-300 group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={product.image || `https://placehold.co/400x400/1e1e1e/f9fafb?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.category && (
          <div className="absolute top-3 left-3 bg-[var(--color-background)]/80 backdrop-blur-sm text-[var(--color-text-main)] text-xs font-bold px-3 py-1 rounded-full">
            {product.category}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1 line-clamp-2">{product.name}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-black text-[var(--color-primary)]">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addItem(product)}
            className="bg-[var(--color-background)] hover:bg-[var(--color-primary)] text-[var(--color-text-main)] hover:text-white border border-[var(--color-border)] hover:border-transparent p-2 rounded-full transition-colors flex items-center justify-center"
            title="Añadir al carrito"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
