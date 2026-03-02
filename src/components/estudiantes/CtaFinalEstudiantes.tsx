"use client";

import { useInView } from "@/hooks/useInView";

export default function CtaFinalEstudiantes() {
  const ref = useInView();

  return (
    <section id="cta-final" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-600 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="text-base">🎓</span>
            30% de descuento por 6 meses
          </div>
        </div>

        <h2 className="fade-up fade-up-delay-1 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Empieza tu carrera digital{" "}
          <span className="gradient-text">con el pie derecho</span>
        </h2>

        <p className="fade-up fade-up-delay-2 mt-4 sm:mt-6 text-text-secondary text-base sm:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
          No esperes a tener tu consulta propia para tener presencia online. Con tu web profesional, los pacientes te encuentran desde el día uno.
        </p>

        <div className="fade-up fade-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/estudiantes/intake"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-accent hover:bg-accent-light text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-base sm:text-xl font-bold transition-all shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-1"
          >
            Quiero mi web con descuento
            <svg className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#precio"
            className="inline-flex items-center justify-center gap-2 text-text-secondary hover:text-accent px-6 py-3.5 sm:py-5 rounded-full text-base font-semibold transition-colors"
          >
            Ver planes y precios
          </a>
        </div>

        <div className="fade-up fade-up-delay-4 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Preview gratis en 24 hrs
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin compromiso
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30% dcto estudiante
          </div>
        </div>
      </div>
    </section>
  );
}
