export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002856] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg font-bold text-white">DentalWeb</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-xs">
              Diseñamos webs profesionales exclusivamente para dentistas. Tu consulta visible en Google, tus pacientes a un click.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 text-sm mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <a href="https://wa.me/56984494128" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                  +56 9 8449 4128
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:hola@dentalweb.cl" className="hover:text-teal-300 transition-colors">
                  hola@dentalweb.cl
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
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#demo" className="hover:text-teal-300 transition-colors inline-block py-1.5">Demo interactiva</a></li>
              <li><a href="#portfolio" className="hover:text-teal-300 transition-colors inline-block py-1.5">Portfolio</a></li>
              <li><a href="#proceso" className="hover:text-teal-300 transition-colors inline-block py-1.5">¿Cómo funciona?</a></li>
              <li><a href="#precio" className="hover:text-teal-300 transition-colors inline-block py-1.5">Planes y precios</a></li>
              <li><a href="#funcionalidades" className="hover:text-teal-300 transition-colors inline-block py-1.5">Funcionalidades</a></li>
              <li><a href="#nosotros" className="hover:text-teal-300 transition-colors inline-block py-1.5">Nosotros</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors inline-block py-1.5">Preguntas frecuentes</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} DentalWeb. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="/privacidad" className="text-gray-500 hover:text-teal-300 transition-colors">Política de Privacidad</a>
            <span className="text-gray-600">|</span>
            <a href="/terminos" className="text-gray-500 hover:text-teal-300 transition-colors">Términos de Servicio</a>
          </div>
          <p className="text-gray-500 text-xs">
            Hecho con cariño en La Serena
          </p>
        </div>
      </div>
    </footer>
  );
}
