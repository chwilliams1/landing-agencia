"use client";

import { useState, useRef } from "react";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const specialties = [
  { emoji: "🦷", label: "General" },
  { emoji: "😁", label: "Ortodoncia" },
  { emoji: "🔩", label: "Implantes" },
  { emoji: "✨", label: "Estética" },
  { emoji: "👶", label: "Pediatría" },
  { emoji: "🏥", label: "Varias" },
];

const servicesList = [
  { emoji: "🪥", label: "Limpieza" },
  { emoji: "⚡", label: "Blanqueamiento" },
  { emoji: "😬", label: "Brackets" },
  { emoji: "🔲", label: "Alineadores" },
  { emoji: "🔩", label: "Implantes" },
  { emoji: "✨", label: "Carillas" },
  { emoji: "🦷", label: "Endodoncia" },
  { emoji: "🩹", label: "Extracciones" },
  { emoji: "🫦", label: "Prótesis" },
  { emoji: "👶", label: "Niños" },
  { emoji: "💎", label: "Diseño de sonrisa" },
  { emoji: "🚨", label: "Urgencias" },
  { emoji: "🩺", label: "Periodoncia" },
  { emoji: "📷", label: "Radiografías/3D" },
  { emoji: "🏥", label: "Cirugía maxilofacial" },
];

const estrellaOptions = [
  "Blanqueamiento", "Ortodoncia invisible", "Implantes rápidos",
  "Diseño de sonrisa", "Pediatría sin miedo", "Tecnología 3D", "Otro",
];

const publicoOptions = [
  { emoji: "👨‍👩‍👧", label: "Familias" },
  { emoji: "🧑", label: "Jóvenes" },
  { emoji: "👔", label: "Adultos" },
  { emoji: "👵", label: "Mayores" },
  { emoji: "👶", label: "Niños" },
  { emoji: "💎", label: "Premium" },
  { emoji: "🌐", label: "Todo público" },
];

const pagosOptions = [
  { emoji: "💵", label: "Efectivo" },
  { emoji: "💳", label: "Tarjetas" },
  { emoji: "🏦", label: "Transferencia" },
  { emoji: "📋", label: "Cuotas" },
  { emoji: "🤝", label: "Seguros" },
];

const estilos = [
  { emoji: "🏛️", label: "Minimalista", desc: "Limpio, espacioso" },
  { emoji: "👑", label: "Premium", desc: "Lujoso, sofisticado" },
  { emoji: "☀️", label: "Cálido", desc: "Cercano, acogedor" },
  { emoji: "🏢", label: "Profesional", desc: "Serio, confiable" },
  { emoji: "🎨", label: "Juvenil", desc: "Dinámico, vibrante" },
  { emoji: "🧸", label: "Infantil", desc: "Divertido, niños" },
];

const paletas = [
  { name: "Confianza Clínica", desc: "Azul médico + dorado. Profesional y confiable", value: "Confianza Clínica — Principal #2563eb, Secundario #e0f2fe, Acento #f59e0b, Fondo #f8fafc, Texto #1e293b", colors: ["#2563eb", "#e0f2fe", "#f59e0b", "#f8fafc", "#1e293b"] },
  { name: "Sonrisa Fresca", desc: "Turquesa + celeste. Moderna y fresca", value: "Sonrisa Fresca — Principal #0d9488, Secundario #ccfbf1, Acento #0ea5e9, Fondo #f0fdfa, Texto #134e4a", colors: ["#0d9488", "#ccfbf1", "#0ea5e9", "#f0fdfa", "#134e4a"] },
  { name: "Elegancia Dental", desc: "Azul noche + dorado. Luxury y premium", value: "Elegancia Dental — Principal #1a1a2e, Secundario #16213e, Acento #c9a84c, Fondo #fafaf9, Texto #1a1a2e", colors: ["#1a1a2e", "#16213e", "#c9a84c", "#fafaf9", "#1a1a2e"] },
  { name: "Naturaleza y Salud", desc: "Verde + ámbar. Orgánico y saludable", value: "Naturaleza y Salud — Principal #166534, Secundario #dcfce7, Acento #a16207, Fondo #f7fdf9, Texto #14532d", colors: ["#166534", "#dcfce7", "#a16207", "#f7fdf9", "#14532d"] },
  { name: "Sonrisa Cálida", desc: "Terracota + crema. Acogedor y familiar", value: "Sonrisa Cálida — Principal #9a3412, Secundario #fef3c7, Acento #d97706, Fondo #fffbeb, Texto #451a03", colors: ["#9a3412", "#fef3c7", "#d97706", "#fffbeb", "#451a03"] },
  { name: "Pediatría Feliz", desc: "Violeta + cyan. Divertida e infantil", value: "Pediatría Feliz — Principal #7c3aed, Secundario #ede9fe, Acento #06b6d4, Fondo #faf5ff, Texto #4c1d95", colors: ["#7c3aed", "#ede9fe", "#06b6d4", "#faf5ff", "#4c1d95"] },
  { name: "Estética Blanca", desc: "Blanco + negro. Ultra minimalista", value: "Estética Blanca — Principal #111827, Secundario #f3f4f6, Acento #e5e7eb, Fondo #ffffff, Texto #111827", colors: ["#111827", "#f3f4f6", "#e5e7eb", "#ffffff", "#111827"] },
  { name: "Rosa Dental", desc: "Rosa + fucsia. Femenina y moderna", value: "Rosa Dental — Principal #be185d, Secundario #fce7f3, Acento #ec4899, Fondo #fdf2f8, Texto #831843", colors: ["#be185d", "#fce7f3", "#ec4899", "#fdf2f8", "#831843"] },
];

const sloganOptions = [
  "Tu sonrisa, nuestra pasión",
  "Sonrisas que transforman",
  "Tecnología y confianza",
  "Cuidamos tu sonrisa",
  "Cada sonrisa importa",
  "Sin slogan",
];

const paquetes = [
  {
    id: "esencial",
    emoji: "📄",
    badge: "Esencial",
    badgeClass: "bg-border text-text-muted",
    name: "Una página, directo al grano",
    tagline: "Landing page con todo lo necesario para que te encuentren y te contacten",
    includes: ["Hero con foto", "Servicios", "Sobre el doctor", "Testimonios", "Horarios + Mapa", "WhatsApp flotante", "Contacto"],
    value: "Esencial: Hero con foto, Servicios, Sobre el doctor, Testimonios, Horarios + Mapa, WhatsApp flotante, Contacto",
  },
  {
    id: "completa",
    emoji: "🌐",
    badge: "⭐ Popular",
    badgeClass: "bg-accent text-white",
    name: "Completa — la más elegida",
    tagline: "Sitio profesional con múltiples secciones para transmitir confianza total",
    includes: ["Todo lo Esencial", "Galería de fotos", "Antes y después", "FAQ", "Reserva de citas", "Página de servicios"],
    value: "Completa: Hero con foto, Servicios, Sobre el doctor, Testimonios, Horarios + Mapa, WhatsApp flotante, Contacto, Galería de fotos, Antes y después, FAQ, Reserva de citas, Página de servicios",
  },
  {
    id: "premium",
    emoji: "🚀",
    badge: "💎 Premium",
    badgeClass: "bg-gradient-to-r from-amber-500 to-yellow-500 text-white",
    name: "Premium — máximo nivel",
    tagline: "Web de alta gama con todas las funcionalidades y animaciones premium",
    includes: ["Todo lo Completa", "Blog/Tips", "Precios/Tarifas", "Equipo médico", "Animaciones premium", "Chat en vivo"],
    value: "Premium: Hero con foto, Servicios, Sobre el doctor, Testimonios, Horarios + Mapa, WhatsApp flotante, Contacto, Galería de fotos, Antes y después, FAQ, Reserva de citas, Página de servicios, Blog/Tips, Precios/Tarifas, Equipo médico, Animaciones premium, Chat en vivo",
  },
];

const contactoOptions = [
  { emoji: "💬", label: "WhatsApp directo" },
  { emoji: "📧", label: "Formulario → Email" },
  { emoji: "💬📧", label: "Ambos" },
];

const horarios = [
  { id: "clasico", name: "Horario clásico", value: "Horario clásico: L-V 9:00-18:00 / Sáb 9:00-13:00 / Dom Cerrado", rows: [["Lun - Vie", "9:00 - 18:00"], ["Sábado", "9:00 - 13:00"], ["Domingo", "Cerrado"]] },
  { id: "extendido", name: "Horario extendido", value: "Horario extendido: L-V 8:00-20:00 / Sáb 9:00-14:00 / Dom Cerrado", rows: [["Lun - Vie", "8:00 - 20:00"], ["Sábado", "9:00 - 14:00"], ["Domingo", "Cerrado"]] },
  { id: "completo", name: "Lunes a sábado completo", value: "Lunes a sábado completo: L-S 9:00-19:00 / Dom Cerrado", rows: [["Lun - Sáb", "9:00 - 19:00"], ["Domingo", "Cerrado"]] },
  { id: "tarde", name: "Apertura tarde", value: "Apertura tarde: L-V 10:00-20:00 / Sáb 10:00-15:00 / Dom Cerrado", rows: [["Lun - Vie", "10:00 - 20:00"], ["Sábado", "10:00 - 15:00"], ["Domingo", "Cerrado"]] },
];

const stepLabels = ["Clínica", "Servicios", "Estilo", "Paquete", "Extras"];

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function RadioPill({ name, value, checked, onChange, children }: {
  name: string; value: string; checked: boolean;
  onChange: (v: string) => void; children: React.ReactNode;
}) {
  return (
    <label className={`inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-[1.5px] cursor-pointer transition-all text-xs sm:text-sm font-medium select-none active:scale-95 ${checked ? "bg-accent text-white border-accent" : "bg-bg-alt border-border text-text-secondary hover:border-accent hover:bg-accent/5"}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} className="sr-only" />
      {children}
    </label>
  );
}

function CheckPill({ name, value, checked, onChange, children }: {
  name: string; value: string; checked: boolean;
  onChange: (v: string, c: boolean) => void; children: React.ReactNode;
}) {
  return (
    <label className={`inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-[1.5px] cursor-pointer transition-all text-xs sm:text-sm font-medium select-none active:scale-95 ${checked ? "bg-accent text-white border-accent" : "bg-bg-alt border-border text-text-secondary hover:border-accent hover:bg-accent/5"}`}>
      <input type="checkbox" name={name} value={value} checked={checked} onChange={() => onChange(value, !checked)} className="sr-only" />
      {children}
    </label>
  );
}

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */

export default function IntakeWizard() {
  const [step, setStep] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // Step 1
  const [consultorio, setConsultorio] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dedica, setDedica] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [redes, setRedes] = useState("");

  // Step 2
  const [servicios, setServicios] = useState<string[]>([]);
  const [estrella, setEstrella] = useState("");
  const [publico, setPublico] = useState<string[]>([]);
  const [pagos, setPagos] = useState<string[]>([]);

  // Step 3
  const [estilo, setEstilo] = useState("");
  const [paleta, setPaleta] = useState("");
  const [logo, setLogo] = useState("");
  const [slogan, setSlogan] = useState("");
  const [sloganCustom, setSloganCustom] = useState("");

  // Step 4
  const [paquete, setPaquete] = useState("");
  const [contacto, setContacto] = useState("");
  const [horario, setHorario] = useState("");
  const [horarioCustom, setHorarioCustom] = useState("");

  // Step 5
  const [fotos, setFotos] = useState("");
  const [antesDespues, setAntesDespues] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [bio, setBio] = useState("");
  const [testimonios, setTestimonios] = useState("");
  const [referencia, setReferencia] = useState("");
  const [notas, setNotas] = useState("");

  // Output
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function toggleArray(arr: string[], val: string, on: boolean) {
    return on ? [...arr, val] : arr.filter(v => v !== val);
  }

  function goTo(n: number) {
    setStep(n);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function generate() {
    const sloganFinal = sloganCustom || slogan;
    const horarioFinal = horario === "custom" ? horarioCustom : horario;

    const prompt = `# BRIEF SITIO WEB DENTAL — PROMPT PARA CLAUDE CODE

## INSTRUCCIÓN
Crea un sitio web profesional, responsive (mobile-first) y moderno para esta clínica dental. Usa los datos, colores y estructura indicados abajo. El resultado debe ser un sitio completo, listo para producción, con animaciones suaves y diseño atractivo.

## DATOS DE LA CLÍNICA
- Consultorio: ${consultorio}
- Doctor/a: ${doctor}
- Especialidad: ${dedica}
- WhatsApp: ${whatsapp}
- Email: ${email || "No proporcionado"}
- Dirección: ${direccion}
- Redes sociales: ${redes || "No proporcionadas"}

## SERVICIOS
- Servicios ofrecidos: ${servicios.join(", ") || "No especificados"}
- Servicio estrella: ${estrella || "No especificado"}
- Público objetivo: ${publico.join(", ") || "No especificado"}
- Formas de pago: ${pagos.join(", ") || "No especificadas"}

## DISEÑO VISUAL
- Estilo visual: ${estilo || "No seleccionado"}
- Paleta de colores: ${paleta || "No seleccionada"}
- Logo: ${logo || "No especificado"}
- Slogan: ${sloganFinal || "No especificado"}

## ESTRUCTURA DE LA WEB
- Paquete: ${paquete || "No seleccionado"}
- Método de contacto: ${contacto || "No especificado"}
- Horario: ${horarioFinal || "No especificado"}

## CONTENIDO
- Fotos propias: ${fotos || "No especificado"}
- Fotos antes/después: ${antesDespues || "No especificado"}
- Años de experiencia: ${experiencia || "No especificado"}
- Bio del doctor: ${bio || "Generar con IA basándose en la especialidad y experiencia"}
- Testimonios: ${testimonios || "Generar testimonios ficticios realistas"}
- Referencia visual: ${referencia || "Ninguna"}
- Notas adicionales: ${notas || "Ninguna"}

## REQUISITOS TÉCNICOS (aplicar siempre)
1. Mobile-first, 100% responsive
2. SEO: meta tags, Open Graph, schema markup para dentista
3. Velocidad: lazy loading, código optimizado
4. Botón flotante de WhatsApp con link wa.me/${whatsapp.replace(/[^0-9]/g, "")}
5. CTA claros: "Agendar Cita", "Llamar Ahora", "Escríbenos"
6. Google Maps embebido con la dirección proporcionada
7. Formulario de contacto funcional
8. Animaciones suaves al scroll
9. Colores consistentes con los hex exactos de la paleta seleccionada
10. Tipografía profesional y legible
11. Favicon y meta tags completos
12. Accesibilidad básica (alt tags, contraste, semántica)

## TONO DEL CONTENIDO
Profesional pero cercano. Transmitir confianza y calidez. Evitar lenguaje demasiado técnico. Hablar directamente al paciente con empatía. Usar llamados a la acción que inviten sin presionar.`;

    setOutput(prompt);
    setTimeout(() => {
      document.getElementById("output-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function copyPrompt() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div ref={topRef}>
      {/* ── Hero ── */}
      <div className="relative bg-gradient-to-br from-accent to-[#0a5e6e] text-white text-center px-5 pt-8 sm:pt-11 pb-12 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <h1 className="relative text-xl sm:text-3xl font-extrabold tracking-tight">
          🦷 Intake — Web Dental
        </h1>
        <p className="relative mt-1.5 sm:mt-2 text-white/80 text-xs sm:text-base max-w-md mx-auto">
          Completa los datos de tu cliente y genera un prompt listo para Claude Code.
        </p>
        {/* Curve */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[140%] h-10 bg-bg-alt rounded-[50%]" />
      </div>

      {/* ── Steps Nav ── */}
      <div className="flex justify-center gap-1.5 sm:gap-2 px-4 py-4 sm:py-5 overflow-x-auto scrollbar-hide">
        {stepLabels.map((label, i) => {
          const n = i + 1;
          const isActive = step === n;
          const isDone = step > n;
          return (
            <button
              key={n}
              onClick={() => goTo(n)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border-[1.5px] text-[11px] sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                isActive ? "bg-accent text-white border-accent" :
                isDone ? "bg-accent/10 text-accent border-accent" :
                "bg-bg-alt text-text-muted border-border"
              }`}
            >
              <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold transition-all shrink-0 ${
                isActive ? "bg-white/25 text-white" :
                isDone ? "bg-accent text-white" :
                "bg-border text-text-muted"
              }`}>{n}</span>
              <span className="hidden min-[380px]:inline">{label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Cards ── */}
      <div className="max-w-[680px] mx-auto px-4 pb-10">

        {/* ════ PASO 1 ════ */}
        {step === 1 && (
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Cuéntanos de tu clínica</h2>
            <p className="text-text-muted text-sm mb-5">Información básica de contacto</p>

            <Field label="Nombre del consultorio *">
              <input type="text" value={consultorio} onChange={e => setConsultorio(e.target.value)} placeholder="Ej: Clínica Dental Sonrisa Perfecta" className="input-field" />
            </Field>
            <Field label="Nombre del doctor/a *">
              <input type="text" value={doctor} onChange={e => setDoctor(e.target.value)} placeholder="Dr./Dra. Nombre Apellido" className="input-field" />
            </Field>

            <Field label="¿A qué te dedicas?">
              <div className="flex flex-wrap gap-2">
                {specialties.map(s => (
                  <RadioPill key={s.label} name="dedica" value={s.label} checked={dedica === s.label} onChange={setDedica}>
                    {s.emoji} {s.label}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <Field label="WhatsApp *" mb={false}>
                <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="+56 9 1234 5678" className="input-field" />
              </Field>
              <Field label="Email" mb={false}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="contacto@clinica.cl" className="input-field" />
              </Field>
            </div>

            <Field label="Dirección *">
              <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} placeholder="Calle, número, ciudad, país" className="input-field" />
            </Field>
            <Field label="Redes sociales">
              <textarea value={redes} onChange={e => setRedes(e.target.value)} rows={2} placeholder={"Instagram: ...\nFacebook: ..."} className="input-field" />
            </Field>

            <NavBtns onNext={() => goTo(2)} />
          </div>
        )}

        {/* ════ PASO 2 ════ */}
        {step === 2 && (
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">¿Qué servicios ofreces?</h2>
            <p className="text-text-muted text-sm mb-5">Selecciona todos los que apliquen</p>

            <Field label="Servicios">
              <div className="flex flex-wrap gap-2">
                {servicesList.map(s => (
                  <CheckPill key={s.label} name="servicios" value={s.label} checked={servicios.includes(s.label)} onChange={(v, c) => setServicios(toggleArray(servicios, v, c))}>
                    {s.emoji} {s.label}
                  </CheckPill>
                ))}
              </div>
            </Field>

            <Field label="Servicio estrella">
              <div className="flex flex-wrap gap-2">
                {estrellaOptions.map(s => (
                  <RadioPill key={s} name="estrella" value={s} checked={estrella === s} onChange={setEstrella}>
                    {s}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="¿A quién atiendes más?">
              <div className="flex flex-wrap gap-2">
                {publicoOptions.map(s => (
                  <CheckPill key={s.label} name="publico" value={s.label} checked={publico.includes(s.label)} onChange={(v, c) => setPublico(toggleArray(publico, v, c))}>
                    {s.emoji} {s.label}
                  </CheckPill>
                ))}
              </div>
            </Field>

            <Field label="Formas de pago">
              <div className="flex flex-wrap gap-2">
                {pagosOptions.map(s => (
                  <CheckPill key={s.label} name="pagos" value={s.label} checked={pagos.includes(s.label)} onChange={(v, c) => setPagos(toggleArray(pagos, v, c))}>
                    {s.emoji} {s.label}
                  </CheckPill>
                ))}
              </div>
            </Field>

            <NavBtns onBack={() => goTo(1)} onNext={() => goTo(3)} />
          </div>
        )}

        {/* ════ PASO 3 ════ */}
        {step === 3 && (
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">¿Cómo quieres que se vea?</h2>
            <p className="text-text-muted text-sm mb-5">Elige el estilo visual de tu web</p>

            <Field label="Estilo visual">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {estilos.map(s => (
                  <label key={s.label} className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all active:scale-95 ${estilo === s.label ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="estilo" value={s.label} checked={estilo === s.label} onChange={() => setEstilo(s.label)} className="sr-only" />
                    <span className="text-xl sm:text-2xl mb-1">{s.emoji}</span>
                    <span className="text-[11px] sm:text-xs font-bold text-text-primary">{s.label}</span>
                    <span className="text-[10px] sm:text-[11px] text-text-muted">{s.desc}</span>
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Paleta de colores">
              <div className="grid sm:grid-cols-2 gap-2.5">
                {paletas.map(p => (
                  <label key={p.name} className={`block p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${paleta === p.value ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="paleta" value={p.value} checked={paleta === p.value} onChange={() => setPaleta(p.value)} className="sr-only" />
                    <div className="flex items-center gap-1 mb-1.5">
                      {p.colors.map((c, i) => {
                        const isLight = ["#ffffff","#fafaf9","#f8fafc","#f0fdfa","#f7fdf9","#fffbeb","#faf5ff","#fdf2f8","#e0f2fe","#ccfbf1","#dcfce7","#fef3c7","#ede9fe","#f3f4f6","#fce7f3","#e5e7eb"].includes(c);
                        return (
                          <div key={i} className={`rounded-full transition-transform hover:scale-110 ${i < 3 ? "w-6 h-6 sm:w-8 sm:h-8" : "w-4 h-4 sm:w-5 sm:h-5"}`} style={{ background: c, border: isLight ? "1px solid #e2e8f0" : "none" }} />
                        );
                      })}
                    </div>
                    <div className="text-xs font-bold text-text-primary">{p.name}</div>
                    <div className="text-[11px] text-text-muted">{p.desc}</div>
                  </label>
                ))}
              </div>
            </Field>

            <Field label="¿Tienes logo?">
              <div className="flex flex-wrap gap-2">
                {["Sí, lo envío", "No tengo", "Quiero renovarlo"].map((v, i) => (
                  <RadioPill key={v} name="logo" value={v} checked={logo === v} onChange={setLogo}>
                    {["✅", "❌", "🔄"][i]} {v}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="Slogan o frase">
              <div className="flex flex-wrap gap-2 mb-2">
                {sloganOptions.map(s => (
                  <RadioPill key={s} name="slogan" value={s} checked={slogan === s} onChange={(v) => { setSlogan(v); setSloganCustom(""); }}>
                    {s}
                  </RadioPill>
                ))}
              </div>
              <input type="text" value={sloganCustom} onChange={e => { setSloganCustom(e.target.value); setSlogan(""); }} placeholder="O escribe el tuyo aquí..." className="input-field" />
            </Field>

            <NavBtns onBack={() => goTo(2)} onNext={() => goTo(4)} />
          </div>
        )}

        {/* ════ PASO 4 ════ */}
        {step === 4 && (
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Elige tu tipo de web</h2>
            <p className="text-text-muted text-sm mb-5">Selecciona el paquete que más te guste — solo haz clic</p>

            <Field label="">
              <div className="space-y-3">
                {paquetes.map(pkg => (
                  <label key={pkg.id} className={`block p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${paquete === pkg.value ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="paquete" value={pkg.value} checked={paquete === pkg.value} onChange={() => setPaquete(pkg.value)} className="sr-only" />
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${pkg.badgeClass}`}>{pkg.badge}</span>
                    <div className="text-xl sm:text-2xl mt-2">{pkg.emoji}</div>
                    <div className="text-sm font-bold text-text-primary mt-1">{pkg.name}</div>
                    <div className="text-[11px] sm:text-xs text-text-muted italic">{pkg.tagline}</div>
                    <div className="border-t border-border mt-3 pt-3 flex flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1">
                      {pkg.includes.map(inc => (
                        <span key={inc} className="text-[11px] sm:text-xs text-text-secondary flex items-center gap-1">
                          <span className="text-accent font-bold text-[11px]">✓</span> {inc}
                        </span>
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Contacto">
              <div className="flex flex-wrap gap-2">
                {contactoOptions.map(c => (
                  <RadioPill key={c.label} name="contacto" value={c.label} checked={contacto === c.label} onChange={setContacto}>
                    {c.emoji} {c.label}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="Horario de atención">
              <div className="grid sm:grid-cols-2 gap-2.5 mb-2.5">
                {horarios.map(h => (
                  <label key={h.id} className={`block p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${horario === h.value ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="horario" value={h.value} checked={horario === h.value} onChange={() => setHorario(h.value)} className="sr-only" />
                    <div className="text-[11px] sm:text-xs font-bold text-text-primary mb-1.5">{h.name}</div>
                    {h.rows.map(([day, time]) => (
                      <div key={day} className="flex justify-between text-[11px] sm:text-xs py-0.5">
                        <span className="font-medium text-text-primary">{day}</span>
                        <span className={time === "Cerrado" ? "text-red-500 font-semibold" : "text-text-muted tabular-nums"}>{time}</span>
                      </div>
                    ))}
                  </label>
                ))}
              </div>
              <label className={`block p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${horario === "custom" ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                <input type="radio" name="horario" value="custom" checked={horario === "custom"} onChange={() => setHorario("custom")} className="sr-only" />
                <div className="text-[11px] sm:text-xs font-bold text-text-primary">✏️ Mi horario es diferente</div>
              </label>
              {horario === "custom" && (
                <input type="text" value={horarioCustom} onChange={e => setHorarioCustom(e.target.value)} placeholder="Ej: L-V 8:30-17:30 / Sáb 10:00-14:00" className="input-field mt-2.5" />
              )}
            </Field>

            <NavBtns onBack={() => goTo(3)} onNext={() => goTo(5)} />
          </div>
        )}

        {/* ════ PASO 5 ════ */}
        {step === 5 && (
          <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Últimos detalles</h2>
            <p className="text-text-muted text-sm mb-5">Casi listo — solo un par de cosas más</p>

            <Field label="¿Tienes fotos propias?">
              <div className="flex flex-wrap gap-2">
                {[{ e: "📸", l: "Sí, envío todo" }, { e: "🤳", l: "Solo del doctor" }, { e: "🖼️", l: "Usar stock" }].map(o => (
                  <RadioPill key={o.l} name="fotos" value={o.l} checked={fotos === o.l} onChange={setFotos}>
                    {o.e} {o.l}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="¿Fotos de antes y después?">
              <div className="flex flex-wrap gap-2">
                {[{ e: "✅", l: "Sí" }, { e: "❌", l: "No tengo" }, { e: "🔜", l: "Pronto" }].map(o => (
                  <RadioPill key={o.l} name="antes_despues" value={o.l} checked={antesDespues === o.l} onChange={setAntesDespues}>
                    {o.e} {o.l}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="Años de experiencia">
              <div className="flex flex-wrap gap-2">
                {["1-5 años", "5-10 años", "10-20 años", "+20 años"].map(v => (
                  <RadioPill key={v} name="experiencia" value={v} checked={experiencia === v} onChange={setExperiencia}>
                    {v}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="Bio del doctor" hint="Si no la tienes, la generaremos con IA">
              <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} placeholder="Breve biografía profesional..." className="input-field" />
            </Field>

            <Field label="Testimonios" hint="Escribe 2-3 testimonios reales. Si no tienes, déjalo vacío.">
              <textarea value={testimonios} onChange={e => setTestimonios(e.target.value)} rows={3} placeholder="Escribe 2-3 testimonios reales de pacientes..." className="input-field" />
            </Field>

            <Field label="Referencia visual">
              <input type="url" value={referencia} onChange={e => setReferencia(e.target.value)} placeholder="https://ejemplo.com — una web que te guste" className="input-field" />
            </Field>

            <Field label="Notas extra">
              <textarea value={notas} onChange={e => setNotas(e.target.value)} rows={2} placeholder="Algo más que debamos saber..." className="input-field" />
            </Field>

            <div className="flex gap-2.5 justify-between border-t border-border pt-5 mt-6">
              <button type="button" onClick={() => goTo(4)} className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-semibold bg-border text-text-primary hover:bg-gray-300 active:scale-95 transition-all">← Atrás</button>
              <button type="button" onClick={generate} className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 transition-all">🚀 Generar Prompt</button>
            </div>
          </div>
        )}

        {/* ══ Output ══ */}
        {output && (
          <div id="output-section" className="mt-5 animate-fadeIn">
            <pre className="bg-[#1e293b] text-[#e2e8f0] rounded-2xl p-3.5 sm:p-5 text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap break-words max-h-[400px] sm:max-h-[500px] overflow-y-auto">{output}</pre>
            <button type="button" onClick={copyPrompt} className="mt-3 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full text-sm font-semibold bg-accent text-white hover:bg-accent-light active:scale-95 transition-all shadow-lg shadow-accent/20">
              {copied ? "✓ Copiado" : "📋 Copiar Prompt"}
            </button>
          </div>
        )}
      </div>

      {/* Toast */}
      <div className={`fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 text-center px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold shadow-xl transition-all duration-300 pointer-events-none z-50 ${copied ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
        ✓ Copiado al portapapeles
      </div>
    </div>
  );
}

/* ═══════ Small helpers ═══════ */

function Field({ label, hint, children, mb = true }: { label: string; hint?: string; children: React.ReactNode; mb?: boolean }) {
  return (
    <div className={mb ? "mb-4" : ""}>
      {label && <label className="block text-sm font-semibold text-text-secondary mb-1.5">{label}</label>}
      {children}
      {hint && <p className="text-xs text-text-muted mt-1 italic">{hint}</p>}
    </div>
  );
}

function NavBtns({ onBack, onNext }: { onBack?: () => void; onNext?: () => void }) {
  return (
    <div className={`flex gap-2.5 border-t border-border pt-5 mt-6 ${onBack ? "justify-between" : "justify-end"}`}>
      {onBack && (
        <button type="button" onClick={onBack} className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-semibold bg-border text-text-primary hover:bg-gray-300 active:scale-95 transition-all">← Atrás</button>
      )}
      {onNext && (
        <button type="button" onClick={onNext} className="flex-1 sm:flex-none px-5 sm:px-6 py-3 sm:py-2.5 rounded-full text-sm font-semibold bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 active:scale-95 transition-all">Siguiente →</button>
      )}
    </div>
  );
}
