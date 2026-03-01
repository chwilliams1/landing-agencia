"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

/* ── Before/After Slider ── */
function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
    >
      {/* "Before" side */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          {/* Tooth illustration — before */}
          <svg className="w-16 h-16 sm:w-24 sm:h-24 text-amber-400/70" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M32 8c-6 0-11 3-14 8-3 5-3 12-1 18 1 4 3 9 5 14 1 3 3 6 5 8h10c2-2 4-5 5-8 2-5 4-10 5-14 2-6 2-13-1-18-3-5-8-8-14-8z" />
            <path d="M26 20c2-1 4-1 6 0s4 1 6 0" strokeLinecap="round" />
          </svg>
          <span className="mt-3 text-sm sm:text-base font-semibold text-amber-700/70">Antes</span>
          <span className="text-xs text-amber-600/50 mt-1">Sonrisa original</span>
        </div>
      </div>

      {/* "After" side — clipped */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-white"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <svg className="w-16 h-16 sm:w-24 sm:h-24 text-teal-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M32 8c-6 0-11 3-14 8-3 5-3 12-1 18 1 4 3 9 5 14 1 3 3 6 5 8h10c2-2 4-5 5-8 2-5 4-10 5-14 2-6 2-13-1-18-3-5-8-8-14-8z" />
            <path d="M26 20c2-1 4-1 6 0s4 1 6 0" strokeLinecap="round" />
            {/* Sparkles */}
            <circle cx="18" cy="16" r="2" fill="currentColor" opacity={0.3} />
            <circle cx="46" cy="14" r="1.5" fill="currentColor" opacity={0.25} />
            <circle cx="48" cy="26" r="1" fill="currentColor" opacity={0.2} />
          </svg>
          <span className="mt-3 text-sm sm:text-base font-semibold text-teal-700">Después</span>
          <span className="text-xs text-teal-600/60 mt-1">Sonrisa renovada</span>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent">
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Add-on data ── */
const extras = [
  {
    title: "Blog Dental",
    price: "$40.000",
    priceSuffix: "pago único",
    description:
      "Publica artículos sobre salud dental. Genera confianza y mejora tu posicionamiento en Google.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: "Reseñas de Google",
    price: "$20.000",
    priceSuffix: "pago único",
    description:
      "Widget que muestra tus reseñas de Google Maps directo en la web. Social proof automático.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Web en Inglés",
    price: "$35.000",
    priceSuffix: "pago único",
    description:
      "Versión bilingüe de tu web para atraer pacientes extranjeros y turistas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const whatsappBase = "https://wa.me/56984494128?text=";

export default function AddOns() {
  const ref = useInView();

  function consultarUrl(extra: string) {
    return whatsappBase + encodeURIComponent(`Hola, me interesa el extra "${extra}" para mi web dental.`);
  }

  return (
    <section id="extras" className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Extras</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Potencia tu web con{" "}
            <span className="gradient-text">extras premium</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Tu web funciona perfecto sin ellos, pero si quieres destacar aún más, estos extras marcan la diferencia.
          </p>
        </div>

        {/* Featured: Before/After slider */}
        <div className="fade-up fade-up-delay-2 mb-6 sm:mb-8">
          <div className="bg-bg-card border border-accent/30 rounded-2xl overflow-hidden shadow-xl shadow-accent/5">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  Galería Antes / Después
                </h3>
                <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  Más popular
                </span>
              </div>
              <p className="text-sm text-text-muted mb-5">
                Slider interactivo que muestra resultados de tratamientos. Desliza para comparar — tus pacientes lo van a amar.
              </p>
              <BeforeAfterSlider />
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-2xl font-extrabold text-text-primary">$30.000</span>
                  <span className="text-text-muted text-sm ml-1">pago único</span>
                </div>
                <a
                  href={consultarUrl("Galería Antes/Después")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 text-sm"
                >
                  Consultar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of other extras */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {extras.map((extra, i) => (
            <div
              key={extra.title}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group bg-bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col`}
            >
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {extra.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-text-primary">{extra.title}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">{extra.description}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-lg font-extrabold text-text-primary">{extra.price}</span>
                  <span className="text-text-muted text-xs ml-1">{extra.priceSuffix}</span>
                </div>
                <a
                  href={consultarUrl(extra.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  Consultar
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
