export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border)] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-black text-[var(--color-primary)] tracking-tighter mb-4">
            NEXUS<span className="text-[var(--color-text-main)]">MART</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Tu supermercado digital de confianza. Compra en línea y recibe en tu casa alimentos frescos y de calidad.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">Contacto</h3>
          <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
            <li><span className="font-semibold text-[var(--color-text-main)]">Correo:</span> contacto@nexusmart.com</li>
            <li><span className="font-semibold text-[var(--color-text-main)]">Teléfono:</span> +503 1234-5678</li>
            <li><span className="font-semibold text-[var(--color-text-main)]">WhatsApp:</span> +503 1234-5678</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">Síguenos</h3>
          <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-4">Legal</h3>
          <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Políticas de Privacidad</a></li>
            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Políticas de Reembolso</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm">
        <p>© {new Date().getFullYear()} NexusMart. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
