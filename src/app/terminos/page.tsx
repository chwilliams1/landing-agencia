import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | DentalWeb",
  description: "Términos y condiciones de uso de los servicios de DentalWeb.",
  robots: { index: false, follow: false },
};

export default function Terminos() {
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
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">Términos de Servicio</h1>
        <p className="text-text-muted text-sm mb-10">Última actualización: marzo 2026</p>

        <div className="prose-legal space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Descripción del servicio</h2>
            <p>
              DentalWeb ofrece servicios de diseño y desarrollo de páginas web especializadas para dentistas y clínicas dentales en Chile. Nuestro servicio incluye diseño web personalizado, configuración de dominio, hosting, integración de WhatsApp y soporte técnico continuo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. Precios y formas de pago</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pago único de setup:</strong> entre $150.000 y $250.000 CLP, dependiendo de la complejidad del proyecto.</li>
              <li><strong>Mensualidad:</strong> $25.000 CLP/mes, que incluye hosting, dominio y soporte técnico.</li>
              <li>Los precios pueden variar según servicios adicionales (add-ons) contratados.</li>
              <li>Los pagos se realizan mediante transferencia bancaria o los medios habilitados al momento de la contratación.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Plazos de entrega</h2>
            <p>
              El plazo estándar de entrega es de 48 horas hábiles desde la recepción del contenido necesario (textos, fotos, logo) y la confirmación del pago. Este plazo puede extenderse si el cliente requiere revisiones adicionales o si el contenido no es proporcionado en tiempo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Revisiones y cambios</h2>
            <p>
              El plan incluye 30 días de cambios ilimitados desde la entrega del primer borrador. Esto cubre correcciones de texto, fotos, colores y ajustes de diseño. Cambios estructurales mayores (rediseño completo, nuevas secciones) pueden tener costos adicionales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. Garantía de satisfacción</h2>
            <p>
              Ofrecemos garantía de devolución de dinero. Si al finalizar el período de 30 días de revisiones no estás conforme con el resultado y hemos sido incapaces de resolver tus observaciones, te devolvemos el pago de setup íntegramente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Cancelación</h2>
            <p>
              No existen contratos de permanencia. Puedes cancelar la mensualidad en cualquier momento. Al cancelar:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>El hosting y dominio se desactivarán al finalizar el período pagado.</li>
              <li>Te entregaremos una copia de los archivos de tu sitio web si lo solicitas.</li>
              <li>El pago de setup no es reembolsable después del período de garantía de 30 días.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Propiedad intelectual</h2>
            <p>
              Una vez completado el pago total, el cliente es dueño del contenido de su sitio web (textos, imágenes propias, logo). El código fuente y la tecnología base utilizada para construir la web son propiedad de DentalWeb. El cliente recibe una licencia de uso mientras mantenga el servicio activo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Responsabilidades del cliente</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Proporcionar contenido veraz y actualizado para su página web.</li>
              <li>Contar con las licencias necesarias para las imágenes y textos proporcionados.</li>
              <li>Cumplir con la normativa sanitaria vigente en la publicidad de servicios dentales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. Limitación de responsabilidad</h2>
            <p>
              DentalWeb no se hace responsable por pérdida de pacientes, ingresos u oportunidades de negocio derivadas del uso o no uso de la página web. Nuestro compromiso es entregar un producto de calidad según las especificaciones acordadas. Los resultados en términos de captación de pacientes pueden variar según múltiples factores externos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">10. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia será resuelta por los tribunales ordinarios de justicia de La Serena, Región de Coquimbo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">11. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos:
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
