"use client";

import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const ref = useInView();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-32 lg:py-40 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            La web de tu consulta, lista en 48 hrs
          </div>
        </div>

        <h1 className="fade-up fade-up-delay-1 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
          ¿Tus pacientes te buscan en Google{" "}
          <span className="gradient-text">y no te encuentran?</span>
        </h1>

        <p className="fade-up fade-up-delay-2 mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Te diseñamos una web profesional en{" "}
          <span className="text-text-primary font-semibold">48 horas</span>{" "}
          para que tus pacientes te encuentren en Google, vean tus servicios y te escriban por WhatsApp — incluso mientras duermes.
        </p>

        <div className="fade-up fade-up-delay-3 mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#demo"
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            Ver cómo se vería MI web
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-bg-alt border border-border text-text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-bg-card-hover hover:border-accent/30 hover:shadow-md transition-all"
          >
            Ver ejemplos reales
          </a>
        </div>

        <div className="fade-up fade-up-delay-4 mt-8 sm:mt-12 flex items-center justify-center flex-wrap gap-3 sm:gap-8 text-xs sm:text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin contratos largos
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Lista en 48 hrs
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Desde $150.000
          </div>
        </div>
      </div>
    </section>
  );
}
