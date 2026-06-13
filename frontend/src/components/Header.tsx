import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

export default function Header() {
  const { toggleCart, items } = useCartStore();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-30 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 hover:bg-[var(--color-surface-hover)] rounded-md transition-colors">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl font-black text-[var(--color-primary)] tracking-tighter">
            NEXUS<span className="text-[var(--color-text-main)]">MART</span>
          </Link>
        </div>

        {/* Search Bar (Hidden on small mobile, visible on sm+) */}
        <div className="hidden sm:flex flex-1 max-w-2xl relative">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar abarrotes, carnes, lácteos..."
              className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={18} />
          </div>
          <button className="ml-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2 rounded-full font-semibold transition-colors">
            Buscar
          </button>
        </div>

        {/* Actions (User & Cart) */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login" className="hidden md:flex items-center gap-2 p-2 hover:bg-[var(--color-surface-hover)] rounded-md transition-colors">
            <User size={24} />
            <span className="font-medium">Ingresar</span>
          </Link>
          
          <button onClick={toggleCart} className="relative p-2 hover:bg-[var(--color-surface-hover)] rounded-md transition-colors flex items-center gap-2">
            <div className="relative">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="hidden md:block font-medium">Carrito</span>
          </button>
        </div>

      </div>
      
      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={18} />
        </div>
      </div>
    </header>
  );
}