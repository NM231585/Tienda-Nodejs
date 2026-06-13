import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShoppingCart from './ShoppingCart';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-main)]">
      <Header />
      <ShoppingCart />
      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
