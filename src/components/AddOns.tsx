"use client";

import { useRef, useState, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

/* ── Before/After Slider ── */
function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] rounded-xl overflow-hidden cursor-col-resize select-none touch-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <svg className="w-16 h-16 sm:w-24 sm:h-24 text-amber-400/70" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M32 8c-6 0-11 3-14 8-3 5-3 12-1 18 1 4 3 9 5 14 1 3 3 6 5 8h10c2-2 4-5 5-8 2-5 4-10 5-14 2-6 2-13-1-18-3-5-8-8-14-8z" />
            <path d="M26 20c2-1 4-1 6 0s4 1 6 0" strokeLinecap="round" />
          </svg>
          <span className="mt-3 text-sm sm:text-base font-semibold text-amber-700/70">Antes</span>
          <span className="text-xs text-amber-600/50 mt-1">Sonrisa original</span>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-white"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <svg className="w-16 h-16 sm:w-24 sm:h-24 text-teal-500" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M32 8c-6 0-11 3-14 8-3 5-3 12-1 18 1 4 3 9 5 14 1 3 3 6 5 8h10c2-2 4-5 5-8 2-5 4-10 5-14 2-6 2-13-1-18-3-5-8-8-14-8z" />
            <path d="M26 20c2-1 4-1 6 0s4 1 6 0" strokeLinecap="round" />
            <circle cx="18" cy="16" r="2" fill="currentColor" opacity={0.3} />
            <circle cx="46" cy="14" r="1.5" fill="currentColor" opacity={0.25} />
            <circle cx="48" cy="26" r="1" fill="currentColor" opacity={0.2} />
          </svg>
          <span className="mt-3 text-sm sm:text-base font-semibold text-teal-700">Después</span>
          <span className="text-xs text-teal-600/60 mt-1">Sonrisa renovada</span>
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent cursor-grab active:cursor-grabbing">
          <svg className="w-5 h-5 text-accent pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup: Perfil del doctor ── */
function MockDoctorProfile() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 sm:p-5 border border-border/50">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-text-primary text-sm sm:text-base">Dra. María González</p>
          <p className="text-accent text-xs sm:text-sm font-medium">Ortodoncista</p>
          <p className="text-text-muted text-[11px] sm:text-xs mt-1">Universidad de Chile - 12 años de experiencia</p>
          <p className="text-text-muted text-[11px] sm:text-xs mt-2 leading-relaxed line-clamp-2">&ldquo;Mi pasión es devolverte la confianza de sonreír. Cada tratamiento es personalizado a tus necesidades.&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup: Diplomas y certificaciones ── */
function MockDiplomas() {
  const diplomas = [
    { title: "Cirujano Dentista", institution: "Universidad de Chile", year: "2012" },
    { title: "Especialista en Ortodoncia", institution: "U. de Valparaíso", year: "2015" },
    { title: "Invisalign Certified", institution: "Align Technology", year: "2020" },
  ];
  return (
    <div className="space-y-2.5">
      {diplomas.map((d) => (
        <div key={d.title} className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-3 sm:p-3.5 border border-border/50 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200/50 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-text-primary text-xs sm:text-sm truncate">{d.title}</p>
            <p className="text-text-muted text-[10px] sm:text-xs">{d.institution} &middot; {d.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Mockup: Tratamientos ── */
function MockTreatments() {
  const treatments = [
    { name: "Ortodoncia", desc: "Brackets y alineadores", color: "bg-teal-50 text-teal-600 border-teal-200/50" },
    { name: "Implantes", desc: "Dientes fijos permanentes", color: "bg-blue-50 text-blue-600 border-blue-200/50" },
    { name: "Blanqueamiento", desc: "Sonrisa más blanca", color: "bg-violet-50 text-violet-600 border-violet-200/50" },
    { name: "Limpieza dental", desc: "Prevención y salud", color: "bg-amber-50 text-amber-600 border-amber-200/50" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {treatments.map((t) => (
        <div key={t.name} className={`rounded-lg p-3 border ${t.color}`}>
          <p className="font-semibold text-xs sm:text-sm">{t.name}</p>
          <p className="text-[10px] sm:text-xs opacity-70 mt-0.5">{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Mockup: WhatsApp ── */
function MockWhatsApp() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 sm:p-5 border border-border/50">
      <div className="flex items-center justify-between mb-3">
        <p className="text-text-muted text-xs sm:text-sm">Así se ve en tu web:</p>
      </div>
      <div className="relative bg-white rounded-lg border border-border/50 p-4 h-24 sm:h-28">
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-green-500/30">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 bg-border/40 rounded w-3/4" />
          <div className="h-2 bg-border/30 rounded w-1/2" />
          <div className="h-2 bg-border/20 rounded w-2/3" />
        </div>
      </div>
      <p className="text-center text-text-muted text-[10px] sm:text-xs mt-2.5">Botón flotante visible en toda la web</p>
    </div>
  );
}

/* ── Mockup: Galería ── */
function MockGallery() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        "from-teal-100 to-teal-50",
        "from-blue-100 to-blue-50",
        "from-violet-100 to-violet-50",
        "from-amber-100 to-amber-50",
        "from-rose-100 to-rose-50",
        "from-cyan-100 to-cyan-50",
      ].map((gradient, i) => (
        <div key={i} className={`aspect-square rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ── Mockup: Horarios y ubicación ── */
function MockSchedule() {
  const hours = [
    { day: "Lun - Vie", time: "09:00 - 19:00" },
    { day: "Sábado", time: "09:00 - 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ];
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg border border-border/50 p-3">
        {hours.map((h, i) => (
          <div key={h.day} className={`flex items-center justify-between py-1.5 ${i < hours.length - 1 ? "border-b border-border/30" : ""}`}>
            <span className="text-xs sm:text-sm text-text-primary font-medium">{h.day}</span>
            <span className={`text-xs sm:text-sm ${h.time === "Cerrado" ? "text-red-400" : "text-text-muted"}`}>{h.time}</span>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg border border-blue-200/30 h-20 sm:h-24 flex items-center justify-center">
        <div className="flex items-center gap-1.5 text-blue-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-xs font-medium">Google Maps</span>
        </div>
      </div>
    </div>
  );
}

/* ── Feature cards config ── */
const featureCards = [
  { title: "Perfil del doctor", mockup: <MockDoctorProfile /> },
  { title: "Diplomas y certificaciones", mockup: <MockDiplomas /> },
  { title: "Tratamientos detallados", mockup: <MockTreatments /> },
  { title: "WhatsApp y llamada directa", mockup: <MockWhatsApp /> },
  { title: "Galería de casos reales", mockup: <MockGallery /> },
  { title: "Horarios y ubicación", mockup: <MockSchedule /> },
];

export default function AddOns() {
  const ref = useInView();

  return (
    <section id="funcionalidades" className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Funcionalidades</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Cada sección de tu web{" "}
            <span className="gradient-text">diseñada para generar confianza</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Tu paciente ve tus credenciales, resultados y tratamientos — y te contacta sin dudarlo.
          </p>
        </div>

        {/* Featured: Before/After slider */}
        <div className="fade-up fade-up-delay-2 mb-8 sm:mb-10">
          <div className="bg-bg-card border border-accent/30 rounded-2xl overflow-hidden shadow-xl shadow-accent/5">
            <div className="p-5 sm:p-6 lg:p-8" role="region" aria-label="Galería Antes/Después con slider interactivo">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  Slider Antes / Después
                </h3>
                <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                  Interactivo
                </span>
              </div>
              <p className="text-sm text-text-muted mb-5">
                Tus pacientes comparan resultados de tratamientos deslizando el slider. Desliza para probar.
              </p>
              <BeforeAfterSlider />
            </div>
          </div>
        </div>

        {/* Feature mockups grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {featureCards.map((feat, i) => (
            <div
              key={feat.title}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} bg-bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300`}
            >
              <h3 className="text-sm sm:text-base font-bold text-text-primary mb-3 sm:mb-4">{feat.title}</h3>
              {feat.mockup}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
