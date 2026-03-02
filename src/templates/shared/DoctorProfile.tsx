import type { SiteData } from "@/types/site";

export default function DoctorProfile({ data }: { data: SiteData }) {
  const initials = data.doctor.split(" ").map(n => n[0]).filter(Boolean).slice(0, 2).join("");

  return (
    <section id="doctor" className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3 text-center"
          style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}
        >
          Tu Profesional
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-text)" }}
        >
          Conoce al Doctor
        </h2>

        {/* Quote card */}
        <div
          className="border p-6 md:p-8 mb-8"
          style={{
            borderRadius: "calc(var(--t-radius) * 2)",
            background: `linear-gradient(135deg, var(--t-secondary), white)`,
            borderColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)",
          }}
        >
          <svg className="w-8 h-8 mb-3" style={{ color: "color-mix(in srgb, var(--t-primary) 25%, transparent)" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
          </svg>
          {data.bio && (
            <p
              className="text-base md:text-lg italic leading-relaxed mb-5"
              style={{ fontFamily: "var(--t-body-font)", color: "color-mix(in srgb, var(--t-text) 80%, transparent)" }}
            >
              &ldquo;{data.bio}&rdquo;
            </p>
          )}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, var(--t-primary), var(--t-accent))` }}
            >
              <svg className="w-8 h-8 text-white/20 absolute bottom-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-sm font-bold text-white relative z-10">{initials}</span>
            </div>
            <div>
              <p className="font-bold" style={{ color: "var(--t-text)", fontFamily: "var(--t-heading-font)" }}>
                {data.doctor}
              </p>
              <p className="text-sm" style={{ color: "color-mix(in srgb, var(--t-text) 50%, transparent)", fontFamily: "var(--t-body-font)" }}>
                {data.especialidad}
                {data.experiencia && ` · ${data.experiencia}`}
              </p>
            </div>
          </div>
        </div>

        {/* Diplomas timeline */}
        {data.diplomas.length > 0 && (
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}
            >
              Formaci&oacute;n y Trayectoria
            </p>
            <div className="relative pl-6">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 20%, transparent)" }}
              />
              <div className="space-y-4">
                {data.diplomas.map((d, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div
                      className="absolute -left-[17px] top-2 w-3 h-3 rounded-full ring-2 ring-white"
                      style={{ backgroundColor: "var(--t-primary)" }}
                    />
                    <div
                      className="flex-1 p-4 border"
                      style={{
                        borderRadius: "var(--t-radius)",
                        borderColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)",
                        backgroundColor: "color-mix(in srgb, var(--t-primary) 3%, transparent)",
                      }}
                    >
                      <p className="font-semibold text-sm" style={{ color: "var(--t-text)", fontFamily: "var(--t-body-font)" }}>
                        {d.nombre}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "color-mix(in srgb, var(--t-text) 50%, transparent)" }}>
                        {d.institucion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
