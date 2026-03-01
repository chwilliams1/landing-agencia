"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const specialties = [
  "Odontología General",
  "Implantología",
  "Ortodoncia",
  "Odontopediatría",
  "Endodoncia",
  "Estética Dental",
  "Periodoncia",
  "Cirugía Maxilofacial",
];

const colorsBySpecialty: Record<string, { primary: string; light: string; bg: string }> = {
  "Odontología General": { primary: "#1E40AF", light: "#60A5FA", bg: "#EFF6FF" },
  "Implantología": { primary: "#14532D", light: "#D4A017", bg: "#F7F5EF" },
  "Ortodoncia": { primary: "#7C3AED", light: "#A78BFA", bg: "#F5F3FF" },
  "Odontopediatría": { primary: "#DB2777", light: "#F9A8D4", bg: "#FDF2F8" },
  "Endodoncia": { primary: "#0E7490", light: "#22D3EE", bg: "#F0FDFA" },
  "Estética Dental": { primary: "#B45309", light: "#FCD34D", bg: "#FFFBEB" },
  "Periodoncia": { primary: "#059669", light: "#6EE7B7", bg: "#ECFDF5" },
  "Cirugía Maxilofacial": { primary: "#4338CA", light: "#818CF8", bg: "#EEF2FF" },
};

const servicesBySpecialty: Record<string, string[]> = {
  "Odontología General": ["Limpieza Dental", "Restauraciones", "Endodoncia", "Blanqueamiento"],
  "Implantología": ["Implantes Unitarios", "All-on-4", "Injerto Óseo", "Prótesis Fija"],
  "Ortodoncia": ["Brackets Metálicos", "Brackets Cerámicos", "Invisalign", "Ortopedia"],
  "Odontopediatría": ["Primera Visita Infantil", "Sellantes y Flúor", "Caries Infantil", "Ortodoncia Interceptiva"],
  "Endodoncia": ["Tratamiento de Conducto", "Retratamiento", "Apicectomía", "Microcirugía"],
  "Estética Dental": ["Carillas", "Blanqueamiento", "Diseño de Sonrisa", "Coronas"],
  "Periodoncia": ["Limpieza Profunda", "Cirugía Periodontal", "Injerto Encía", "Mantenimiento"],
  "Cirugía Maxilofacial": ["Extracción Muelas", "Cirugía Ortognática", "Biopsia", "Implantes Complejos"],
};

const credentialsBySpecialty: Record<string, { year: string; text: string }[]> = {
  "Odontología General": [
    { year: "2014", text: "Cirujano Dentista — Universidad de La Serena" },
    { year: "2016", text: "Diplomado Estética Dental — U. de Chile" },
    { year: "2019", text: "Curso Endodoncia Avanzada — U. de Valparaíso" },
  ],
  "Implantología": [
    { year: "2012", text: "Cirujano Dentista — U. de Valparaíso" },
    { year: "2015", text: "Especialista en Implantología — U. de los Andes" },
    { year: "2020", text: "Certificación Cirugía Guiada 3D — Nobel Biocare" },
  ],
  "Ortodoncia": [
    { year: "2013", text: "Cirujano Dentista — U. de Chile" },
    { year: "2016", text: "Especialista en Ortodoncia — U. de Valparaíso" },
    { year: "2021", text: "Certificación Invisalign Provider" },
  ],
  "Odontopediatría": [
    { year: "2015", text: "Cirujano Dentista — U. de La Serena" },
    { year: "2018", text: "Especialista en Odontopediatría — U. de Valparaíso" },
    { year: "2022", text: "Curso Sedación Consciente — SOCHIPE" },
  ],
  "Endodoncia": [
    { year: "2012", text: "Cirujano Dentista — U. de Chile" },
    { year: "2015", text: "Especialista en Endodoncia — U. de Valparaíso" },
    { year: "2020", text: "Microcirugía Endodóntica — U. de los Andes" },
  ],
  "Estética Dental": [
    { year: "2014", text: "Cirujano Dentista — U. de Concepción" },
    { year: "2017", text: "Diplomado en Estética Dental — NYU" },
    { year: "2021", text: "Certificación DSD (Digital Smile Design)" },
  ],
  "Periodoncia": [
    { year: "2013", text: "Cirujano Dentista — U. de Chile" },
    { year: "2016", text: "Especialista en Periodoncia — U. de Valparaíso" },
    { year: "2021", text: "Regeneración Tisular Guiada — Straumann" },
  ],
  "Cirugía Maxilofacial": [
    { year: "2011", text: "Cirujano Dentista — U. de Chile" },
    { year: "2015", text: "Especialista Cirugía Maxilofacial — U. de Chile" },
    { year: "2020", text: "Fellowship Trauma Facial — Hospital Barros Luco" },
  ],
};

const quotesBySpecialty: Record<string, string> = {
  "Odontología General": "Cada paciente merece ser escuchado. Mi compromiso es un trato honesto y resultados reales.",
  "Implantología": "Devolver la sonrisa con implantes cambia vidas. Uso tecnología 3D para resultados predecibles.",
  "Ortodoncia": "Una sonrisa alineada transforma la confianza. Trabajo con cada paciente hasta lograr su mejor versión.",
  "Odontopediatría": "Los niños merecen una experiencia positiva. Aquí el dentista es un amigo, no un miedo.",
  "Endodoncia": "Salvar un diente siempre vale la pena. Con técnica moderna, el tratamiento de conducto no tiene por qué doler.",
  "Estética Dental": "El diseño de sonrisa es arte y ciencia. Cada detalle importa para un resultado natural y armónico.",
  "Periodoncia": "Las encías son la base de una boca sana. Prevenir hoy es la mejor inversión para tu sonrisa.",
  "Cirugía Maxilofacial": "La cirugía bien planificada es segura y predecible. La tecnología es mi mejor aliada.",
};

export default function DemoMagica() {
  const ref = useInView();
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phone, setPhone] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && specialty && phone) setShowPreview(true);
  };

  const colors = colorsBySpecialty[specialty] || colorsBySpecialty["Odontología General"];
  const services = servicesBySpecialty[specialty] || servicesBySpecialty["Odontología General"];
  const credentials = credentialsBySpecialty[specialty] || credentialsBySpecialty["Odontología General"];
  const quote = quotesBySpecialty[specialty] || quotesBySpecialty["Odontología General"];
  const doctorTitle = specialty === "Odontopediatría" || specialty === "Estética Dental" ? "Dra." : "Dr.";
  const displayName = name || "Tu Nombre";
  const initials = displayName.split(" ").map(n => n[0]?.toUpperCase() || "").join("").slice(0, 2);
  const domain = name ? `${name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}.cl` : "tunombre.cl";

  return (
    <section id="demo" className="py-24 sm:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Demo Interactiva</span>
          <h2 className="fade-up fade-up-delay-1 mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Mira cómo se vería{" "}
            <span className="gradient-text">tu web</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Ingresa tus datos y en segundos verás un preview real de tu página web dental personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="fade-up lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Nombre del doctor/a
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: María Lagos"
                  className="w-full bg-bg-alt border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Especialidad
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-bg-alt border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors appearance-none"
                  required
                >
                  <option value="" disabled>Selecciona especialidad</option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej: +56 9 1234 5678"
                  className="w-full bg-bg-alt border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                Generar mi preview
              </button>
            </form>

            {!showPreview && (
              <p className="mt-4 text-center text-text-muted text-sm">
                Completa los 3 campos y haz clic para ver la magia
              </p>
            )}
          </div>

          {/* Preview */}
          <div className="fade-up fade-up-delay-2 lg:col-span-3">
            <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#F1F5F9] border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white border border-border rounded-lg px-3 py-1 text-xs text-text-muted text-center truncate flex items-center justify-center gap-1.5">
                    <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    {domain}
                  </div>
                </div>
              </div>

              {/* Mini website preview — scrollable */}
              <div className="relative overflow-y-auto max-h-[600px]" style={{ background: showPreview ? "#fff" : "#F8FAFB" }}>
                {!showPreview ? (
                  <div className="flex items-center justify-center py-24 sm:py-32">
                    <div className="text-center px-4">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18 12h.01M12 18h.01" />
                        </svg>
                      </div>
                      <p className="text-text-secondary font-medium">Tu preview aparecerá aquí</p>
                      <p className="text-text-muted text-sm mt-1">Completa el formulario para ver la magia</p>
                    </div>
                  </div>
                ) : (
                  <div className="transition-all duration-500">
                    {/* ── NAVBAR ── */}
                    <div className="sticky top-0 z-10 px-4 sm:px-6 py-2.5 flex items-center justify-between bg-white/90 backdrop-blur-sm border-b" style={{ borderColor: `${colors.primary}10` }}>
                      <span className="font-bold text-xs sm:text-sm" style={{ color: colors.primary }}>
                        {doctorTitle} {displayName}
                      </span>
                      <div className="hidden sm:flex gap-3 text-[10px] font-medium" style={{ color: "#94a3b8" }}>
                        <span>Servicios</span>
                        <span>Trayectoria</span>
                        <span>Testimonios</span>
                        <span>Ubicación</span>
                      </div>
                      <div className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full" style={{ background: colors.primary }}>
                        Agendar
                      </div>
                    </div>

                    {/* ── HERO ── */}
                    <div className="relative px-4 sm:px-8 py-8 sm:py-10" style={{ background: `linear-gradient(135deg, ${colors.bg}, white)` }}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="text-[10px] font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1 mb-3" style={{ background: `${colors.primary}12`, color: colors.primary }}>
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            {specialty}
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold leading-tight" style={{ color: "#0f172a" }}>
                            Tu dentista de confianza en La Serena
                          </h3>
                          <p className="text-[11px] mt-2 leading-relaxed" style={{ color: "#64748b" }}>
                            Especialista en {specialty.toLowerCase()} con atención personalizada. Primera evaluación sin costo.
                          </p>
                          <div className="flex gap-2 mt-3">
                            <span className="text-[10px] font-semibold text-white px-3 py-1.5 rounded-full inline-flex items-center gap-1 shadow-sm" style={{ background: "#25D366" }}>
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                              Agendar por WhatsApp
                            </span>
                            <span className="text-[10px] font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: `${colors.primary}25`, color: colors.primary }}>
                              Ver servicios
                            </span>
                          </div>
                        </div>
                        {/* Floating cards */}
                        <div className="hidden sm:flex flex-col gap-2 shrink-0">
                          <div className="bg-white rounded-lg shadow-sm p-2 border border-gray-100 text-center">
                            <div className="flex gap-0.5 justify-center">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              ))}
                            </div>
                            <p className="text-[8px] font-medium text-gray-600 mt-0.5">4.9/5 Google</p>
                          </div>
                          <div className="rounded-lg p-2 text-center text-white" style={{ background: colors.primary }}>
                            <p className="text-sm font-bold leading-none">10+</p>
                            <p className="text-[7px] mt-0.5 opacity-80">años</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── SERVICES ── */}
                    <div className="px-4 sm:px-8 py-5 bg-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                        Servicios
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {services.map((service, i) => (
                          <div key={i} className="p-2 rounded-lg border" style={{ borderColor: `${colors.primary}12`, background: `${colors.primary}04` }}>
                            <div className="w-5 h-5 rounded-md mb-1 flex items-center justify-center" style={{ background: `${colors.primary}12` }}>
                              <div className="w-2 h-2 rounded-full" style={{ background: colors.primary }} />
                            </div>
                            <span className="text-[10px] font-semibold block leading-tight" style={{ color: "#0f172a" }}>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── ABOUT + QUOTE ── */}
                    <div className="px-4 sm:px-8 py-5" style={{ background: "#f8fafc" }}>
                      <div className="rounded-xl p-4 border" style={{ background: `linear-gradient(135deg, ${colors.bg}, white)`, borderColor: `${colors.primary}10` }}>
                        <svg className="w-4 h-4 mb-2" style={{ color: `${colors.primary}30` }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                        </svg>
                        <p className="text-[11px] italic leading-relaxed" style={{ color: "#334155" }}>
                          &ldquo;{quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: colors.primary }}>
                            {initials}
                          </div>
                          <div>
                            <p className="text-[10px] font-bold" style={{ color: "#0f172a" }}>{doctorTitle} {displayName}</p>
                            <p className="text-[8px]" style={{ color: "#94a3b8" }}>Cirujano Dentista</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── CREDENTIALS TIMELINE ── */}
                    <div className="px-4 sm:px-8 py-5 bg-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                        Formación y Trayectoria
                      </p>
                      <div className="relative pl-4">
                        {/* Vertical line */}
                        <div className="absolute left-[5px] top-1 bottom-1 w-px" style={{ background: `${colors.primary}20` }} />
                        <div className="space-y-2.5">
                          {credentials.map((cred, i) => (
                            <div key={i} className="relative flex items-start gap-3">
                              <div className="absolute -left-[13px] top-1 w-2 h-2 rounded-full ring-2 ring-white" style={{ background: colors.primary }} />
                              <div className="flex-1 rounded-lg p-2 border" style={{ borderColor: `${colors.primary}10`, background: `${colors.primary}03` }}>
                                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: `${colors.primary}12`, color: colors.primary }}>
                                  {cred.year}
                                </span>
                                <p className="text-[10px] font-medium mt-1 leading-snug" style={{ color: "#0f172a" }}>{cred.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ── TESTIMONIALS ── */}
                    <div className="px-4 sm:px-8 py-5" style={{ background: "#f8fafc" }}>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                        Testimonios
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: "Claudia A.", text: "Excelente profesional. Me devolvió la confianza para sonreír." },
                          { name: "Patricio M.", text: "El mejor dentista de La Serena. Atención de primera y sin dolor." },
                        ].map((t, i) => (
                          <div key={i} className="bg-white rounded-lg p-2.5 border border-gray-100">
                            <div className="flex gap-0.5 mb-1">
                              {[...Array(5)].map((_, j) => (
                                <svg key={j} className="w-2 h-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              ))}
                            </div>
                            <p className="text-[9px] leading-snug" style={{ color: "#64748b" }}>&ldquo;{t.text}&rdquo;</p>
                            <p className="text-[9px] font-semibold mt-1.5" style={{ color: "#0f172a" }}>{t.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── MAP ── */}
                    <div className="px-4 sm:px-8 py-5 bg-white">
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: colors.primary }}>
                        Ubicación
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-2 space-y-1.5">
                          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                            <div className="flex items-center gap-1 mb-0.5">
                              <svg className="w-2.5 h-2.5" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                              <span className="text-[8px] font-semibold" style={{ color: "#0f172a" }}>Dirección</span>
                            </div>
                            <p className="text-[7px] leading-snug" style={{ color: "#94a3b8" }}>Balmaceda 461, Of. 204, La Serena</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                            <div className="flex items-center gap-1 mb-0.5">
                              <svg className="w-2.5 h-2.5" style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                              <span className="text-[8px] font-semibold" style={{ color: "#0f172a" }}>Teléfono</span>
                            </div>
                            <p className="text-[7px]" style={{ color: colors.primary }}>{phone}</p>
                          </div>
                          <div className="rounded-lg p-2 text-white text-center" style={{ background: "#25D366" }}>
                            <p className="text-[8px] font-bold">WhatsApp</p>
                          </div>
                        </div>
                        <div className="col-span-3 rounded-lg overflow-hidden border border-gray-100 bg-gray-100 relative min-h-[100px]">
                          {/* Stylized map placeholder */}
                          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, #e2e8f0 100%)` }}>
                            {/* Streets grid */}
                            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 120">
                              <line x1="30" y1="0" x2="30" y2="120" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="80" y1="0" x2="80" y2="120" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="130" y1="0" x2="130" y2="120" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="170" y1="0" x2="170" y2="120" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="0" y1="30" x2="200" y2="30" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="0" y1="65" x2="200" y2="65" stroke={colors.primary} strokeWidth="0.5" />
                              <line x1="0" y1="95" x2="200" y2="95" stroke={colors.primary} strokeWidth="0.5" />
                            </svg>
                            {/* Pin */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                              <div className="flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center shadow-md" style={{ background: colors.primary }}>
                                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full mt-[-2px] opacity-30" style={{ background: colors.primary }} />
                              </div>
                            </div>
                            <p className="absolute bottom-1 right-2 text-[6px] font-medium" style={{ color: colors.primary }}>La Serena, Chile</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── FOOTER ── */}
                    <div className="px-4 sm:px-8 py-4" style={{ background: "#0f172a" }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold text-white">{doctorTitle} {displayName}</p>
                          <p className="text-[8px] text-gray-500 mt-0.5">{specialty} &middot; La Serena</p>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
                          </div>
                          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                        <p className="text-[7px] text-gray-600">&copy; 2026 {doctorTitle} {displayName}</p>
                        <p className="text-[7px] text-gray-600">{phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {showPreview && (
              <div className="mt-6 text-center">
                <p className="text-text-secondary mb-4">
                  ¿Te gusta? Podemos tener tu web{" "}
                  <span className="text-accent font-semibold">lista en 48 horas</span>
                </p>
                <a
                  href="#precio"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors"
                >
                  Ver planes y precios
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
