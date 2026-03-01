"use client";

import { useInView } from "@/hooks/useInView";

const included = [
  "Web dental profesional responsive",
  "Dominio .cl personalizado (1er año)",
  "Hosting rápido en Vercel",
  "WhatsApp integrado en toda la web",
  "SEO + Schema markup LocalBusiness",
  "Certificado SSL (https)",
  "Google Maps y horarios",
  "Hasta 6 secciones personalizadas",
  "Diseño adaptado a tu especialidad",
  "Soporte técnico por WhatsApp",
  "Actualizaciones menores incluidas",
  "Panel para cambios de contenido",
];

export default function Pricing() {
  const ref = useInView();
  const whatsappUrl = "https://wa.me/56912345678?text=Hola%2C%20quiero%20mi%20web%20dental.%20Me%20interesa%20conocer%20los%20planes.";

  return (
    <section id="precio" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Planes</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Inversión transparente,{" "}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg">
            Un solo plan que incluye todo. Pagas el setup y una mensualidad que cubre hosting, dominio y soporte.
          </p>
        </div>

        <div className="fade-up fade-up-delay-2">
          <div className="bg-bg-card border border-accent/30 rounded-3xl overflow-hidden shadow-xl shadow-accent/5">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-5 sm:p-8 lg:p-10 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                  <span className="text-accent font-semibold text-sm">Web Dental Profesional</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-extrabold text-text-primary">$150.000</span>
                    <span className="text-text-muted text-lg">- $250.000</span>
                  </div>
                  <p className="text-text-muted mt-1">Pago único de setup (según complejidad)</p>
                </div>
                <div className="sm:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-text-primary">+ $25.000</span>
                    <span className="text-text-muted">/mes</span>
                  </div>
                  <p className="text-text-muted text-sm mt-1">Hosting + dominio + soporte</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">Todo incluido</p>
              <div className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4">
                {included.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-5 sm:px-8 lg:px-10 pb-5 sm:pb-8 lg:pb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent hover:bg-accent-light text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 text-base sm:text-lg"
              >
                Quiero mi web dental
              </a>
              <p className="text-center text-text-muted text-sm mt-4">
                Sin contratos de permanencia. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <div className="fade-up fade-up-delay-3 mt-10 text-center">
          <p className="text-text-muted text-sm">
            Una web con agencia tradicional cuesta <span className="line-through">$800.000 - $2.000.000</span> y demora semanas.
            <br />
            <span className="text-text-secondary font-medium">Nosotros: desde $150.000 en 48 horas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
