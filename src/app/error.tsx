"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto animate-fadeIn">
        {/* Tooth with X mark SVG */}
        <svg
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 text-accent"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tooth shape */}
          <path
            d="M60 10C45 10 38 18 34 28C30 38 28 52 32 65C35 74 38 85 40 95C41 100 43 105 47 105C51 105 52 98 53 92C54 86 56 80 60 80C64 80 66 86 67 92C68 98 69 105 73 105C77 105 79 100 80 95C82 85 85 74 88 65C92 52 90 38 86 28C82 18 75 10 60 10Z"
            fill="currentColor"
            opacity="0.12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* X mark */}
          <path
            d="M48 40L72 64M72 40L48 64"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">
          Algo salió mal
        </h1>
        <p className="text-text-secondary text-sm sm:text-base mb-8">
          Hubo un problema al cargar esta página. Puedes intentar de nuevo o volver al inicio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-text-secondary hover:text-accent font-medium px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
