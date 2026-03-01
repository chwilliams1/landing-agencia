"use client";

import { useEffect, useState, useCallback } from "react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);

  const close = useCallback(() => {
    setShow(false);
    sessionStorage.setItem("exitIntentShown", "1");
  }, []);

  useEffect(() => {
    // Skip on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Skip if already shown this session
    if (sessionStorage.getItem("exitIntentShown")) return;

    let armed = false;

    // Arm after 5s delay
    const timer = setTimeout(() => {
      armed = true;
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exitIntentShown", "1");
        document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Escape key to close
  useEffect(() => {
    if (!show) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [show, close]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="animate-fadeIn bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center relative">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg-alt transition-colors text-text-muted hover:text-text-primary"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-4xl mb-4">🦷</div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
          ¿Te vas sin cotizar?
        </h3>

        <p className="mt-3 text-text-secondary text-sm sm:text-base leading-relaxed">
          Obtén una <span className="font-semibold text-accent">evaluación gratuita</span> de tu presencia online. Sin compromiso, respondemos en menos de 1 hora.
        </p>

        <a
          href="https://wa.me/56984494128?text=Hola%2C%20quiero%20una%20evaluaci%C3%B3n%20gratuita%20de%20mi%20web%20dental"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-base font-bold transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 w-full sm:w-auto"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.591-.838-6.312-2.234l-.44-.366-3.065 1.028 1.028-3.065-.366-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          Sí, quiero mi evaluación gratis
        </a>

        <p className="mt-4 text-xs text-text-muted">
          Prometemos no enviar spam. Solo responderemos tu consulta.
        </p>
      </div>
    </div>
  );
}
