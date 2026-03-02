import type { SiteData } from "@/types/site";

export default function TenantHero({ data }: { data: SiteData }) {
  const phone = data.whatsapp.replace(/[\s\-+]/g, "");

  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, var(--t-secondary), white)` }}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)", color: "var(--t-primary)" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 2C9.5 2 7 3.5 6 6c-1.5 3.5-.5 5.5 0 8 .5 2.5 1 5 2 6s2 1 3-1c.5-1 1-1 1-1s.5 0 1 1c1 2 2 2 3 1s1.5-3.5 2-6c.5-2.5 1.5-4.5 0-8-1-2.5-3.5-4-6-4z" />
              </svg>
              {data.especialidad}
            </div>

            <h1
              className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-text)" }}
            >
              {data.slogan || `Tu dentista de confianza`}
            </h1>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--t-body-font)", color: "color-mix(in srgb, var(--t-text) 70%, transparent)" }}
            >
              {data.bio
                ? data.bio.slice(0, 120) + (data.bio.length > 120 ? "..." : "")
                : `Especialista en ${data.especialidad.toLowerCase()} con atención personalizada en ${data.direccion.split(",")[1]?.trim() || data.direccion}.`}
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm text-white shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: "#25D366", borderRadius: "var(--t-radius)", fontFamily: "var(--t-body-font)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                {data.ctaPreferido || "Agendar por WhatsApp"}
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-5 py-3 font-medium text-sm border transition hover:shadow-sm"
                style={{
                  borderColor: "color-mix(in srgb, var(--t-primary) 25%, transparent)",
                  color: "var(--t-primary)",
                  borderRadius: "var(--t-radius)",
                  fontFamily: "var(--t-body-font)",
                }}
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Doctor avatar */}
          <div className="hidden md:flex flex-col items-center gap-3 shrink-0">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ background: `linear-gradient(135deg, var(--t-primary), var(--t-accent))` }}
            >
              <svg className="w-20 h-20 text-white/20 absolute bottom-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-2xl font-bold text-white relative z-10">
                {data.doctor.split(" ").map(n => n[0]).filter(Boolean).slice(0, 2).join("")}
              </span>
            </div>
            <p className="text-sm font-medium" style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}>
              {data.doctor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
