import Link from "next/link";

export default function BlogCta() {
  return (
    <aside className="mt-12 rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-transparent to-navy/5 p-6 sm:p-8 text-center">
      <p className="text-2xl sm:text-3xl font-bold text-navy mb-2">
        ¿Listo para tu web dental?
      </p>
      <p className="text-text-secondary mb-6 max-w-lg mx-auto">
        Páginas web profesionales para dentistas, listas en 48 horas. WhatsApp integrado y dominio .cl incluido.
      </p>
      <Link
        href="/intake"
        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
      >
        Desde $19.990/mes — Empezar
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
          <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </aside>
  );
}
