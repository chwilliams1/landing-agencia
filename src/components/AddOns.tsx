"use client";

import { useRef, useState, useCallback } from "react";
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
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent cursor-grab active:cursor-grabbing">
          <svg className="w-5 h-5 text-accent pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}


export default function AddOns() {
  const ref = useInView();

  return (
    <section id="extras" className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Antes / Después</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Muestra tus{" "}
            <span className="gradient-text">resultados reales</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Tus pacientes podrán comparar el antes y después de tus tratamientos con un slider interactivo. Desliza para probar.
          </p>
        </div>

        <div className="fade-up fade-up-delay-2">
          <div className="bg-bg-card border border-accent/30 rounded-2xl overflow-hidden shadow-xl shadow-accent/5">
            <div className="p-5 sm:p-6 lg:p-8" role="region" aria-label="Galería Antes/Después con slider interactivo">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
