import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-4 relative overflow-hidden">
      {/* Large decorative 404 */}
      <p className="absolute text-[12rem] sm:text-[20rem] font-black text-text-primary/[0.03] select-none leading-none pointer-events-none">
        404
      </p>

      <div className="text-center max-w-md mx-auto animate-fadeIn relative z-10">
        {/* Tooth with question mark SVG */}
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
          {/* Question mark */}
          <text
            x="60"
            y="58"
            textAnchor="middle"
            dominantBaseline="central"
            fill="currentColor"
            fontSize="36"
            fontWeight="800"
            fontFamily="system-ui, sans-serif"
          >
            ?
          </text>
        </svg>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2">
          Página no encontrada
        </h1>
        <p className="text-text-secondary text-sm sm:text-base mb-8">
          La página que buscas no existe o fue movida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/56984494128?text=Hola%2C%20necesito%20ayuda%20con%20DentalWeb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-accent text-text-secondary hover:text-accent font-medium px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
