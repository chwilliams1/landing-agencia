import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | DentalWeb",
  description: "Política de privacidad de DentalWeb. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-bg">
      <nav className="border-b border-border bg-bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-medium">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver a DentalWeb
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">Política de Privacidad</h1>
        <p className="text-text-muted text-sm mb-10">Última actualización: marzo 2026</p>

        <div className="prose-legal space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Responsable del tratamiento</h2>
            <p>
              DentalWeb, con domicilio en La Serena, Región de Coquimbo, Chile, es responsable del tratamiento de los datos personales recopilados a través de este sitio web. Puedes contactarnos en <a href="mailto:hola@dentalweb.cl" className="text-accent hover:underline">hola@dentalweb.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. Datos que recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de WhatsApp / teléfono</li>
              <li>Nombre de la consulta o clínica dental</li>
              <li>Datos de navegación (cookies, dirección IP, tipo de navegador)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder a tus consultas y solicitudes de servicio</li>
              <li>Crear y entregar tu página web dental</li>
              <li>Enviarte información relevante sobre nuestros servicios (solo si lo autorizas)</li>
              <li>Mejorar la experiencia de usuario en nuestro sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Cookies y tecnologías de seguimiento</h2>
            <p>
              Este sitio utiliza cookies y tecnologías similares para analíticas y publicidad, incluyendo:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Google Analytics / Google Ads:</strong> para medir el tráfico y la efectividad de nuestras campañas publicitarias.</li>
              <li><strong>Meta Pixel (Facebook):</strong> para medir conversiones y crear audiencias de remarketing.</li>
              <li><strong>Vercel Analytics:</strong> para métricas de rendimiento del sitio.</li>
            </ul>
            <p className="mt-2">
              Puedes desactivar las cookies en la configuración de tu navegador. Sin embargo, esto puede afectar la funcionalidad de algunos elementos del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. Compartición de datos</h2>
            <p>
              No vendemos ni compartimos tus datos personales con terceros, salvo con proveedores de servicios necesarios para operar nuestro negocio (hosting, email, herramientas de análisis) que están obligados a proteger tu información.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Tus derechos</h2>
            <p>
              De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile, tienes derecho a:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, escríbenos a <a href="mailto:hola@dentalweb.cl" className="text-accent hover:underline">hola@dentalweb.cl</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Todo nuestro sitio utiliza conexión HTTPS cifrada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: <a href="mailto:hola@dentalweb.cl" className="text-accent hover:underline">hola@dentalweb.cl</a></li>
              <li>WhatsApp: <a href="https://wa.me/56984494128" className="text-accent hover:underline">+56 9 8449 4128</a></li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-6">
        <p className="text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} DentalWeb. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
