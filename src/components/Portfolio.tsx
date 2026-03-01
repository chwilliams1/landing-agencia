"use client";

import { useInView } from "@/hooks/useInView";

const projects = [
  {
    name: "Dr. Alejandro Vergara",
    specialty: "Implantología Oral",
    location: "Av. Balmaceda 2195, La Serena",
    url: "https://demo-dental-2ys2.vercel.app",
  },
  {
    name: "Mi Primera Clínica",
    specialty: "Salud Integral Infantil",
    location: "La Serena",
    url: "https://demo-mi-primera-clinica.vercel.app",
  },
  {
    name: "Dra. Valentina Herrera",
    specialty: "Odontología Integral",
    location: "Balmaceda 461, La Serena",
    url: "https://demo-dental-cl.vercel.app",
  },
];

export default function Portfolio() {
  const ref = useInView();

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="fade-up fade-up-delay-1 mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Así se ven nuestras webs
          </h2>
          <p className="fade-up fade-up-delay-2 mt-4 text-text-secondary text-lg">
            Cada web es única, diseñada para la especialidad y personalidad del dentista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-up fade-up-delay-${i + 1} group block`}
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
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
                    <svg className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-muted">{p.specialty}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-text-muted">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {p.location}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
