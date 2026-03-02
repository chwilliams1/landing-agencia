import type { SiteData } from "@/types/site";

export default function ScheduleTable({ data }: { data: SiteData }) {
  const rows = data.horario
    ?.split("/")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const parts = s.split(/\s+/);
      const day = parts.slice(0, -1).join(" ");
      const time = parts[parts.length - 1];
      return { day, time };
    }) || [];

  if (rows.length === 0) return null;

  return (
    <section id="horario" className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3 text-center"
          style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}
        >
          Horario
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-text)" }}
        >
          Horario de Atenci&oacute;n
        </h2>
        <div
          className="border overflow-hidden shadow-sm"
          style={{ borderRadius: "calc(var(--t-radius) * 2)", borderColor: "color-mix(in srgb, var(--t-text) 10%, transparent)" }}
        >
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex justify-between px-6 py-4 text-sm"
              style={{
                backgroundColor: i % 2 === 0 ? "white" : "var(--t-secondary)",
                fontFamily: "var(--t-body-font)",
                color: "var(--t-text)",
              }}
            >
              <span className="font-semibold">{r.day}</span>
              <span
                className="font-medium px-3 py-0.5 rounded-full text-xs"
                style={{
                  backgroundColor: r.time === "Cerrado"
                    ? "color-mix(in srgb, red 8%, transparent)"
                    : "color-mix(in srgb, var(--t-primary) 8%, transparent)",
                  color: r.time === "Cerrado" ? "#dc2626" : "var(--t-primary)",
                }}
              >
                {r.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
