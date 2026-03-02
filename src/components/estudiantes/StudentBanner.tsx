"use client";

export default function StudentBanner() {
  return (
    <>
      {/* Push the Navbar (fixed top-0) down so it sits below this banner */}
      <style>{`nav.fixed { top: 40px !important; }`}</style>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-600 via-purple-600 to-accent text-white text-center py-2.5 px-4 text-sm font-semibold">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span>🎓 Descuento Estudiante — <strong>30% OFF por 6 meses</strong> en todos los planes</span>
          <a
            href="#precio"
            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-0.5 rounded-full text-xs font-bold transition-colors"
          >
            Ver planes
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the fixed banner */}
      <div className="h-[40px]" />
    </>
  );
}
