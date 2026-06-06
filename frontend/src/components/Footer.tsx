export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xl font-bold text-slate-200 mb-2">NexusTienda</p>
        <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4 opacity-70">
          <a href="#" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
