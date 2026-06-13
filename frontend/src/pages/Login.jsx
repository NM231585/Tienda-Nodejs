import Layout from '../components/Layout.tsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-[var(--color-text-main)] tracking-tight mb-2">
              Bienvenido de nuevo
            </h1>
            <p className="text-[var(--color-text-muted)]">
              Ingresa a tu cuenta para continuar tus compras.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-[var(--color-text-main)]" htmlFor="password">
                  Contraseña
                </label>
                <a href="#" className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-main)] px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" size={20} />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3 px-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20 mt-6"
            >
              Iniciar Sesión <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors">
              Regístrate aquí
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
