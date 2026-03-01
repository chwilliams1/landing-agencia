"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    name: "Dr. Alejandro Vergara",
    specialty: "Implantología Oral",
    location: "Av. Balmaceda 2195, La Serena",
    url: "https://demo-dental-2ys2.vercel.app",
    resultBadge: "+45 consultas/mes",
    challenge: "Consulta nueva sin presencia online. El Dr. Vergara dependía exclusivamente del boca a boca y no tenía forma de que pacientes potenciales lo encontraran en internet.",
    solution: "Diseñamos una web profesional enfocada en implantología, con SEO local optimizado para La Serena, integración de WhatsApp para agendar citas y testimonios de pacientes reales.",
    results: ["+45 consultas mensuales desde la web", "Primer paciente en menos de 72 horas", "Top 3 en Google para 'implantes dentales La Serena'"],
    timeline: "48 horas",
  },
  {
    name: "Mi Primera Clínica",
    specialty: "Salud Integral Infantil",
    location: "La Serena",
    url: "https://demo-mi-primera-clinica.vercel.app",
    resultBadge: "+60% agenda",
    challenge: "Clínica infantil sin diferenciación online. Competía contra clínicas generales sin poder comunicar su especialización en salud dental infantil.",
    solution: "Creamos una web con diseño amigable y colorido orientado a padres, destacando la especialización infantil, el equipo pediátrico y un sistema de reserva fácil por WhatsApp.",
    results: ["+60% de ocupación en agenda", "Reducción de llamadas repetitivas en un 40%", "Posicionamiento como referente infantil en La Serena"],
    timeline: "48 horas",
  },
  {
    name: "Dra. Valentina Herrera",
    specialty: "Odontología Integral",
    location: "Balmaceda 461, La Serena",
    url: "https://demo-dental-cl.vercel.app",
    resultBadge: "+35 pacientes/mes",
    challenge: "Dependía solo de referidos y no tenía canal digital. La Dra. Herrera perdía pacientes que buscaban dentista en Google y no la encontraban.",
    solution: "Desarrollamos su web con foco en odontología integral, mostrando todos sus servicios, ubicación con mapa interactivo y botón de WhatsApp prominente para contacto inmediato.",
    results: ["+35 pacientes nuevos por mes", "80% de contactos llegan por WhatsApp", "Presencia profesional que genera confianza desde el primer click"],
    timeline: "48 horas",
  },
];

export default function Portfolio() {
  const ref = useInView();
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const close = useCallback(() => { setSelected(null); setShowCaseStudy(false); }, []);
  const openProject = useCallback((p: typeof projects[number]) => { setSelected(p); setShowCaseStudy(false); }, []);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <>
      <section id="portfolio" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Webs reales</span>
            <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Dentistas que ya están{" "}
              <span className="gradient-text">captando pacientes online</span>
            </h2>
            <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg">
              Cada sitio está diseñado para la especialidad y personalidad de cada doctor. Haz click para explorarlos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => openProject(p)}
                className={`fade-up fade-up-delay-${i + 1} group block text-left w-full`}
              >
                <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  {/* Browser chrome + live preview */}
                  <div className="flex flex-col aspect-[4/3]">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F1F5F9] border-b border-border shrink-0">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                        <div className="w-2 h-2 rounded-full bg-green-400/50" />
                      </div>
                      <div className="flex-1 mx-2">
                        <div className="bg-white border border-border/50 rounded-md px-2 py-0.5 text-[9px] text-text-muted text-center truncate flex items-center justify-center gap-1">
                          <svg className="w-2 h-2 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          {p.url.replace("https://", "")}
                        </div>
                      </div>
                    </div>

                    {/* Live iframe preview */}
                    <div className="relative flex-1 overflow-hidden bg-white">
                      <iframe
                        src={p.url}
                        title={`Preview de ${p.name}`}
                        className="absolute top-0 left-0 w-[400%] h-[400%] border-0 origin-top-left scale-[0.25]"
                        loading="lazy"
                        tabIndex={-1}
                        style={{ pointerEvents: "none" }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-navy font-semibold text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                          Ver sitio web
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info below preview */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-text-primary group-hover:text-accent transition-colors">
                        {p.name}
                      </h3>
                      <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                    <p className="text-sm text-text-muted">{p.specialty}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {p.location}
                      </div>
                      <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-[11px] font-bold px-2 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                        {p.resultBadge}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Floating window */}
          <div className="relative flex flex-col w-full h-full max-w-6xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F1F5F9] border-b border-border shrink-0">
              <div className="hidden sm:flex gap-1.5">
                <button onClick={close} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" aria-label="Cerrar" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-white border border-border/50 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-text-muted text-center truncate flex items-center justify-center gap-2 max-w-md mx-auto">
                  <svg className="w-3 h-3 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">{selected.url.replace("https://", "")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowCaseStudy(!showCaseStudy)}
                  className="hidden sm:flex text-xs font-medium transition-colors items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border hover:bg-white"
                  style={{ color: showCaseStudy ? "var(--accent)" : "var(--text-muted)" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  Caso de estudio
                </button>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex text-xs text-accent hover:text-accent-light font-medium transition-colors items-center gap-1"
                >
                  Abrir
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <button
                  onClick={close}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border hover:bg-gray-100 transition-colors text-text-secondary"
                  aria-label="Cerrar"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-xs font-medium hidden sm:inline">Cerrar</span>
                </button>
              </div>
            </div>

            {/* Case study panel */}
            {showCaseStudy && (
              <div className="bg-[#F8FAFC] border-b border-border px-4 sm:px-6 py-4 sm:py-5 shrink-0 overflow-y-auto max-h-[40vh]">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-bold px-2.5 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                      {selected.resultBadge}
                    </span>
                    <span className="text-xs text-text-muted">Entrega en {selected.timeline}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-bold">1</span>
                        Desafío
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selected.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">2</span>
                        Solución
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{selected.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold">3</span>
                        Resultados
                      </h4>
                      <ul className="space-y-1.5">
                        {selected.results.map((r) => (
                          <li key={r} className="flex items-start gap-1.5 text-xs sm:text-sm text-text-secondary">
                            <svg className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Iframe */}
            <div className="flex-1 bg-white overflow-hidden">
              <iframe
                src={selected.url}
                title={`${selected.name} — vista completa`}
                className="w-full h-full border-0"
              />
            </div>

            {/* Bottom bar — mobile */}
            <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-[#F1F5F9] border-t border-border shrink-0">
              <button
                type="button"
                onClick={() => setShowCaseStudy(!showCaseStudy)}
                className="text-xs font-medium flex items-center gap-1"
                style={{ color: showCaseStudy ? "var(--accent)" : "var(--text-muted)" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                Caso
              </button>
              <div className="flex items-center gap-3">
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent font-medium flex items-center gap-1"
                >
                  Abrir
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <button
                  onClick={close}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-border text-text-primary font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
