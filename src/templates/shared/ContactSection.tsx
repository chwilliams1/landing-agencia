import type { SiteData } from "@/types/site";

export default function ContactSection({ data }: { data: SiteData }) {
  const phone = data.whatsapp.replace(/[\s\-+]/g, "");
  const mapQuery = encodeURIComponent(data.direccion);

  return (
    <section id="contacto" className="py-16 md:py-20 px-6" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3 text-center"
          style={{ color: "var(--t-primary)", fontFamily: "var(--t-body-font)" }}
        >
          Ubicaci&oacute;n
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-text)" }}
        >
          Enc&uacute;entranos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Info card */}
          <div
            className="border p-6 space-y-5"
            style={{
              borderRadius: "calc(var(--t-radius) * 2)",
              borderColor: "color-mix(in srgb, var(--t-text) 10%, transparent)",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontFamily: "var(--t-body-font)", color: "var(--t-text)" }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)" }}>
                  <svg className="w-4 h-4" style={{ color: "var(--t-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--t-primary)" }}>Direcci&oacute;n</p>
                  <p className="text-sm">{data.direccion}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)" }}>
                  <svg className="w-4 h-4" style={{ color: "var(--t-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--t-primary)" }}>WhatsApp</p>
                  <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-70">
                    {data.whatsapp}
                  </a>
                </div>
              </div>

              {data.email && (
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 10%, transparent)" }}>
                    <svg className="w-4 h-4" style={{ color: "var(--t-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--t-primary)" }}>Email</p>
                    <a href={`mailto:${data.email}`} className="text-sm underline hover:opacity-70">{data.email}</a>
                  </div>
                </div>
              )}

              {data.pagos.length > 0 && (
                <div className="pt-4 border-t" style={{ borderColor: "color-mix(in srgb, var(--t-text) 8%, transparent)" }}>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--t-primary)" }}>
                    Formas de pago
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.pagos.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "color-mix(in srgb, var(--t-primary) 8%, transparent)", color: "var(--t-primary)" }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map */}
          <div
            className="overflow-hidden h-64 md:h-auto min-h-[320px] shadow-sm border"
            style={{ borderRadius: "calc(var(--t-radius) * 2)", borderColor: "color-mix(in srgb, var(--t-text) 10%, transparent)" }}
          >
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
