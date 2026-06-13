import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as CartIcon, X, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function ShoppingCart() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getCartTotal } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[var(--color-surface)] shadow-2xl z-50 flex flex-col border-l border-[var(--color-border)]"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CartIcon /> Tu Carrito
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-[var(--color-surface-hover)] rounded-full transition-colors">
                <X />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-[var(--color-text-muted)] mt-10">El carrito está vacío</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
                    <img src={item.image || 'https://placehold.co/100x100/1e1e1e/f9fafb?text=Comida'} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-bold text-[var(--color-primary)]">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-[var(--color-primary)]"><Minus size={16} /></button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-[var(--color-primary)]"><Plus size={16} /></button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-300">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex justify-between items-center mb-4 text-lg font-bold">
                <span>Total:</span>
                <span className="text-[var(--color-primary)]">${getCartTotal().toFixed(2)}</span>
              </div>
              <button disabled={items.length === 0} className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold transition-colors">
                Proceder al pago
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
