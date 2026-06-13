import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, ShoppingBag, User, Settings, LogOut, Grid } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { Link } from 'react-router-dom';

const CATEGORIES = ['Carnes', 'Frutas', 'Verduras', 'Lácteos', 'Abarrotes', 'Panadería'];

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar, setSearchQuery } = useAppStore();

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed left-0 top-0 h-full w-[280px] bg-[var(--color-surface)] shadow-2xl z-50 flex flex-col border-r border-[var(--color-border)]"
          >
            <div className="p-4 flex items-center justify-between border-b border-[var(--color-border)]">
              <span className="text-2xl font-black text-[var(--color-primary)] tracking-tighter">
                NEXUS<span className="text-[var(--color-text-main)]">MART</span>
              </span>
              <button onClick={toggleSidebar} className="p-2 hover:bg-[var(--color-surface-hover)] rounded-md transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-1 px-3">
                <Link to="/" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors font-medium">
                  <Home size={20} className="text-[var(--color-primary)]" />
                  Inicio
                </Link>
                <Link to="/profile" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors font-medium">
                  <User size={20} className="text-[var(--color-primary)]" />
                  Mi Perfil
                </Link>
                <Link to="/" onClick={toggleSidebar} className="flex items-center gap-3 px-3 py-2 text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors font-medium">
                  <ShoppingBag size={20} className="text-[var(--color-primary)]" />
                  Mis Pedidos
                </Link>
              </nav>

              <div className="mt-8 px-6">
                <h3 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                  Categorías
                </h3>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => {
                        setSearchQuery(cat);
                        toggleSidebar();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors text-sm"
                    >
                      <Grid size={16} className="text-[var(--color-text-muted)]" />
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[var(--color-border)]">
              <button className="flex items-center gap-3 px-3 py-2 w-full text-red-400 hover:bg-red-400/10 rounded-lg transition-colors font-medium text-sm">
                <LogOut size={20} />
                Cerrar Sesión
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
