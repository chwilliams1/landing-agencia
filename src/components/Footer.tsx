export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002856] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">WebDental</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-xs">
              Creamos páginas web profesionales para dentistas en La Serena y todo Chile. Rápido, bonito y efectivo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 text-sm mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:hola@webdental.cl" className="hover:text-teal-300 transition-colors">
                  hola@webdental.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                La Serena, Chile
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 text-sm mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#demo" className="hover:text-teal-300 transition-colors">Demo interactiva</a></li>
              <li><a href="#portfolio" className="hover:text-teal-300 transition-colors">Ejemplos reales</a></li>
              <li><a href="#precio" className="hover:text-teal-300 transition-colors">Planes y precios</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} WebDental. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Hecho con Next.js en La Serena
          </p>
        </div>
      </div>
    </footer>
  );
}
