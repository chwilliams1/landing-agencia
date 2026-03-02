import type { SiteData } from "@/types/site";

const serviceEmojis: Record<string, string> = {
  Limpieza: "🪥", Blanqueamiento: "⚡", Brackets: "😬", Alineadores: "🔲",
  Implantes: "🔩", Carillas: "✨", Endodoncia: "🦷", Extracciones: "🩹",
  "Prótesis": "🫦", "Niños": "👶", "Diseño de sonrisa": "💎", Urgencias: "🚨",
  Periodoncia: "🩺", "Radiografías/3D": "📷", "Cirugía maxilofacial": "🏥",
};

export default function ServiceCards({ data }: { data: SiteData }) {
  const phone = data.whatsapp.replace(/[\s\-+]/g, "");

  return (
    <section id="servicios" className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3 text-center"
          style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}
        >
          Servicios
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-text)" }}
        >
          Nuestros Tratamientos
        </h2>
        <p
          className="text-center text-sm md:text-base max-w-xl mx-auto mb-10"
          style={{ color: "color-mix(in srgb, var(--t-text) 60%, transparent)", fontFamily: "var(--t-body-font)" }}
        >
          Contamos con tratamientos especializados para cuidar tu salud dental. Haz clic en cualquier servicio para consultar.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.servicios.map((s) => {
            const isEstrella = s === data.estrella;
            const msg = `Hola, quiero consultar por ${s} en ${data.consultorio}`;
            return (
              <a
                key={s}
                href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 p-5 border transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{
                  borderRadius: "var(--t-radius)",
                  backgroundColor: isEstrella ? "var(--t-secondary)" : "white",
                  borderColor: isEstrella ? "var(--t-primary)" : "color-mix(in srgb, var(--t-text) 10%, transparent)",
                }}
              >
                {isEstrella && (
                  <span
                    className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white whitespace-nowrap"
                    style={{ backgroundColor: "var(--t-accent)" }}
                  >
                    Destacado
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)" }}
                >
                  {serviceEmojis[s] || "🦷"}
                </div>
                <span
                  className="text-sm font-semibold text-center leading-tight"
                  style={{ fontFamily: "var(--t-body-font)", color: "var(--t-text)" }}
                >
                  {s}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
