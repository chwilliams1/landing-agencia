"use client";

import { useInView } from "@/hooks/useInView";

export default function CtaFinal() {
  const ref = useInView();

  return (
    <section id="cta-final" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-accent/90" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Preview personalizada gratis en 24 horas
          </div>
        </div>

        <h2 className="fade-up fade-up-delay-1 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
          Tu consulta merece{" "}
          <span className="text-accent-light">una presencia digital profesional</span>
        </h2>

        <p className="fade-up fade-up-delay-2 mt-4 sm:mt-6 text-white/70 text-base sm:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
          Cuando un paciente te pida tu web, ten algo profesional que mostrar. Escríbenos hoy y en 48 horas está lista.
        </p>

        <div className="fade-up fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/intake"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-white/90 text-navy px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all shadow-2xl shadow-black/20 hover:-translate-y-1"
          >
            Quiero mi web dental
            <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#precio"
            className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white px-6 py-3.5 sm:py-5 rounded-full text-base font-semibold transition-colors"
          >
            Ver planes y precios
          </a>
        </div>

        <div className="fade-up fade-up-delay-4 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60">
          {["Preview gratis en 24 hrs", "Sin compromiso", "Dominio .cl incluido", "Soporte por WhatsApp"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
