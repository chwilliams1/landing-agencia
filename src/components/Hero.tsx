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

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Secondary gradient blob */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-32 lg:pb-40 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Webs profesionales para dentistas en Chile
          </div>
        </div>

        <h1 className="fade-up fade-up-delay-1 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Tu web dental profesional,{" "}
          <span className="gradient-text">lista en 48 horas</span>
        </h1>

        <p className="fade-up fade-up-delay-2 mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Diseñamos tu web dental en{" "}
          <span className="text-text-primary font-semibold">48 horas</span>.{" "}
          Con dominio .cl propio, WhatsApp integrado y un diseño que transmite confianza a tus pacientes.
        </p>

        <div className="fade-up fade-up-delay-3 mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#demo"
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            Ver cómo se vería mi web
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

        {/* Social proof */}
        <div className="fade-up fade-up-delay-4 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Overlapping avatars */}
          <div className="flex items-center">
            <div className="flex -space-x-2.5">
              {[
                { initials: "CM", color: "bg-teal-500" },
                { initials: "FA", color: "bg-blue-500" },
                { initials: "VR", color: "bg-violet-500" },
                { initials: "AG", color: "bg-amber-500" },
              ].map((avatar) => (
                <div
                  key={avatar.initials}
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${avatar.color} rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-white`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Rating + text */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm sm:text-base font-bold text-text-primary">4.9/5</span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted">de dentistas satisfechos en Chile</p>
          </div>
        </div>
      </div>
    </section>
  );
}
