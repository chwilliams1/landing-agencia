"use client";

import { useInView } from "@/hooks/useInView";

const included = [
  "Web dental profesional responsive",
  "Dominio .cl personalizado (1er año)",
  "Hosting ultrarrápido (carga en menos de 1 segundo)",
  "WhatsApp integrado en toda la web",
  "Sitio seguro con candado verde (HTTPS)",
  "Google Maps y horarios",
  "Hasta 9 secciones personalizadas",
  "Diseño adaptado a tu especialidad",
  "Soporte técnico por WhatsApp",
  "Correcciones de texto, fotos y colores (30 días)",
];

export default function Pricing() {
  const ref = useInView();
  const whatsappUrl = "https://wa.me/56984494128?text=Hola%2C%20quiero%20mi%20web%20dental.%20Me%20interesa%20conocer%20los%20planes.";

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
            Precio justo,{" "}
            <span className="gradient-text">sin letra chica</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg">
            Un solo plan con todo incluido. Pagas el diseño una vez y una mensualidad que cubre hosting, dominio y soporte.
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
              <div className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3.5 sm:gap-y-4">
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
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Garantía de satisfacción</p>
                    <p className="text-xs text-text-muted mt-0.5">30 días de cambios ilimitados</p>
                  </div>
                </div>
                <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Devolución garantizada</p>
                    <p className="text-xs text-text-muted mt-0.5">Si no te gusta, te devolvemos tu dinero</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-text-muted text-sm mt-4">
                Sin contratos de permanencia. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison note */}
        <div className="fade-up fade-up-delay-3 mt-10 text-center">
          <p className="text-text-muted text-sm">
            Una agencia tradicional cobra <span className="line-through">$800.000 - $2.000.000</span> y se demora semanas.
            <br />
            <span className="text-text-secondary font-medium">Con DentalWeb: desde $150.000 y lista en 48 horas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
