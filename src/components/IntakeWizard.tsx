"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const specialties = [
  { emoji: "🦷", label: "General" },
  { emoji: "😁", label: "Ortodoncia" },
  { emoji: "🔩", label: "Implantes" },
  { emoji: "✨", label: "Estética" },
  { emoji: "👶", label: "Odontopediatría" },
  { emoji: "🦠", label: "Endodoncia" },
  { emoji: "🩺", label: "Periodoncia" },
  { emoji: "🏥", label: "Cirugía maxilofacial" },
  { emoji: "🫦", label: "Prótesis / Rehabilitación" },
  { emoji: "📷", label: "Radiología oral" },
  { emoji: "⚖️", label: "Odontología legal" },
  { emoji: "💊", label: "Patología oral" },
  { emoji: "😴", label: "Odontología del sueño" },
  { emoji: "🏥", label: "Varias / Multidisciplinaria" },
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

const convenioOptions = [
  { emoji: "🏥", label: "Fonasa" },
  { emoji: "🛡️", label: "Colmena" },
  { emoji: "🛡️", label: "Cruz Blanca" },
  { emoji: "🛡️", label: "Banmédica" },
  { emoji: "🛡️", label: "Consalud" },
  { emoji: "🛡️", label: "Vida Tres" },
  { emoji: "🛡️", label: "Nueva Masvida" },
  { emoji: "👤", label: "Particular" },
  { emoji: "🏢", label: "Convenio empresas" },
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

const contactoOptions = [
  { emoji: "💬", label: "WhatsApp directo" },
  { emoji: "📧", label: "Formulario → Email" },
  { emoji: "💬📧", label: "Ambos" },
];

const ctaOptions = [
  { emoji: "📅", label: "Agendar cita" },
  { emoji: "💬", label: "Escríbenos por WhatsApp" },
  { emoji: "📞", label: "Llamar ahora" },
  { emoji: "🌐", label: "Reservar hora online" },
];

const horarios = [
  { id: "clasico", name: "Horario clásico", value: "L-V 9:00-18:00 / Sáb 9:00-13:00 / Dom Cerrado", rows: [["Lun - Vie", "9:00 - 18:00"], ["Sábado", "9:00 - 13:00"], ["Domingo", "Cerrado"]] },
  { id: "extendido", name: "Horario extendido", value: "L-V 8:00-20:00 / Sáb 9:00-14:00 / Dom Cerrado", rows: [["Lun - Vie", "8:00 - 20:00"], ["Sábado", "9:00 - 14:00"], ["Domingo", "Cerrado"]] },
  { id: "completo", name: "Lunes a sábado completo", value: "L-S 9:00-19:00 / Dom Cerrado", rows: [["Lun - Sáb", "9:00 - 19:00"], ["Domingo", "Cerrado"]] },
  { id: "tarde", name: "Apertura tarde", value: "L-V 10:00-20:00 / Sáb 10:00-15:00 / Dom Cerrado", rows: [["Lun - Vie", "10:00 - 20:00"], ["Sábado", "10:00 - 15:00"], ["Domingo", "Cerrado"]] },
];

type PlanId = "presencia" | "crecimiento" | "autopilot";

const planes = [
  {
    id: "presencia" as PlanId,
    emoji: "🦷",
    name: "Presencia",
    price: "$19.990",
    priceNum: 19990,
    tagline: "Tu consulta visible en Google, 24/7",
    features: ["Web profesional de una página", "WhatsApp integrado", "Perfil del doctor", "Tratamientos", "Horarios y mapa", "SEO base"],
  },
  {
    id: "crecimiento" as PlanId,
    emoji: "📈",
    name: "Crecimiento",
    price: "$34.990",
    priceNum: 34990,
    tagline: "Tu web trabaja por ti mientras atiendes",
    featured: true,
    features: ["Todo lo de Presencia", "Antes/después", "Galería de casos", "Diplomas y certificaciones", "Testimonios", "Google Analytics"],
  },
  {
    id: "autopilot" as PlanId,
    emoji: "🤖",
    name: "Autopilot",
    price: "$49.990",
    priceNum: 49990,
    tagline: "Marketing dental automatizado con IA",
    features: ["Todo lo de Crecimiento", "Blog SEO con IA", "Equipo médico", "Convenios Fonasa/Isapre", "Soporte prioritario", "Hasta 10 páginas"],
  },
];

const stepLabels = ["Consulta", "Servicios", "Perfil", "Diseño", "Enviar"];

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function RadioPill({ name, value, checked, onChange, children }: {
  name: string; value: string; checked: boolean;
  onChange: (v: string) => void; children: React.ReactNode;
}) {
  return (
    <label className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full border-[1.5px] cursor-pointer transition-all text-[13px] sm:text-sm font-medium select-none min-h-[44px] active:scale-95 ${checked ? "bg-accent text-white border-accent" : "bg-bg-alt border-border text-text-secondary hover:border-accent hover:bg-accent/5"}`}>
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
    <label className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full border-[1.5px] cursor-pointer transition-all text-[13px] sm:text-sm font-medium select-none min-h-[44px] active:scale-95 ${checked ? "bg-accent text-white border-accent" : "bg-bg-alt border-border text-text-secondary hover:border-accent hover:bg-accent/5"}`}>
      <input type="checkbox" name={name} value={value} checked={checked} onChange={() => onChange(value, !checked)} className="sr-only" />
      {children}
    </label>
  );
}

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */

interface Diploma { nombre: string; institucion: string; }
interface MiembroEquipo { nombre: string; especialidad: string; bio: string; }

export default function IntakeWizard() {
  const [step, setStep] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // Step 1 — Consulta
  const [consultorio, setConsultorio] = useState("");
  const [doctor, setDoctor] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [redes, setRedes] = useState("");
  const [dominio, setDominio] = useState("");
  const [plan, setPlan] = useState<PlanId>("crecimiento");

  const searchParams = useSearchParams();
  useEffect(() => {
    const urlPlan = searchParams.get("plan");
    if (urlPlan && ["presencia", "crecimiento", "autopilot"].includes(urlPlan)) {
      setPlan(urlPlan as PlanId);
    }
  }, [searchParams]);

  // Step 2 — Servicios
  const [servicios, setServicios] = useState<string[]>([]);
  const [estrella, setEstrella] = useState("");
  const [publico, setPublico] = useState<string[]>([]);
  const [pagos, setPagos] = useState<string[]>([]);
  const [convenios, setConvenios] = useState<string[]>([]);
  const [horario, setHorario] = useState("");
  const [horarioCustom, setHorarioCustom] = useState("");
  const [contacto, setContacto] = useState("");
  const [ctaPreferido, setCtaPreferido] = useState("");

  // Step 3 — Perfil
  const [experiencia, setExperiencia] = useState("");
  const [bio, setBio] = useState("");
  const [fotos, setFotos] = useState("");
  const [fotosLink, setFotosLink] = useState("");
  const [antesDespues, setAntesDespues] = useState("");
  const [testimonios, setTestimonios] = useState("");
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);
  const [equipo, setEquipo] = useState<MiembroEquipo[]>([]);
  const [mostrarConveniosWeb, setMostrarConveniosWeb] = useState(false);

  // Step 4 — Diseño
  const [estilo, setEstilo] = useState("");
  const [paleta, setPaleta] = useState("");
  const [logo, setLogo] = useState("");
  const [slogan, setSlogan] = useState("");
  const [sloganCustom, setSloganCustom] = useState("");
  const [referencia, setReferencia] = useState("");
  const [notas, setNotas] = useState("");

  // UI
  const [errors, setErrors] = useState<string[]>([]);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    consulta: true, servicios: true, perfil: true, diseno: true,
  });

  const planLevel = plan === "presencia" ? 1 : plan === "crecimiento" ? 2 : 3;
  const planData = planes.find(p => p.id === plan)!;

  function toggleArray(arr: string[], val: string, on: boolean) {
    return on ? [...arr, val] : arr.filter(v => v !== val);
  }

  function validateStep(s: number): string[] {
    const errs: string[] = [];
    if (s === 1) {
      if (!consultorio.trim()) errs.push("Nombre del consultorio");
      if (!doctor.trim()) errs.push("Doctor/a responsable");
      if (!whatsapp.trim()) errs.push("WhatsApp");
      if (!direccion.trim()) errs.push("Dirección");
    }
    if (s === 2) {
      if (servicios.length === 0) errs.push("Al menos un servicio");
      if (!horario) errs.push("Horario de atención");
      if (horario === "custom" && !horarioCustom.trim()) errs.push("Horario personalizado");
    }
    if (s === 4) {
      if (!estilo) errs.push("Estilo visual");
      if (!paleta) errs.push("Paleta de colores");
    }
    return errs;
  }

  function goTo(n: number) {
    setStep(n);
    setErrors([]);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function markCompleted(s: number) {
    setCompletedSteps(prev => new Set(prev).add(s));
  }

  function tryNext(nextStep: number) {
    const errs = validateStep(step);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    markCompleted(step);
    setErrors([]);
    goTo(nextStep);
  }

  function tryGoTo(target: number) {
    // Going back to current or already-completed steps is always allowed
    if (target <= step || completedSteps.has(target) || target < step) {
      // But first validate current step if going forward
      if (target > step) {
        // Validate all steps between current and target
        for (let s = step; s < target; s++) {
          const errs = validateStep(s);
          if (errs.length > 0) {
            setStep(s);
            setErrors(errs);
            topRef.current?.scrollIntoView({ behavior: "smooth" });
            return;
          }
          markCompleted(s);
        }
      }
      goTo(target);
      return;
    }
    // Going forward to a new step: validate all steps in between
    for (let s = step; s < target; s++) {
      const errs = validateStep(s);
      if (errs.length > 0) {
        setStep(s);
        setErrors(errs);
        topRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      markCompleted(s);
    }
    goTo(target);
  }

  function toggleSection(key: string) {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  }

  // Diplomas
  function addDiploma() {
    setDiplomas([...diplomas, { nombre: "", institucion: "" }]);
  }
  function updateDiploma(i: number, field: keyof Diploma, value: string) {
    const updated = [...diplomas];
    updated[i] = { ...updated[i], [field]: value };
    setDiplomas(updated);
  }
  function removeDiploma(i: number) {
    setDiplomas(diplomas.filter((_, idx) => idx !== i));
  }

  // Equipo
  function addMiembro() {
    setEquipo([...equipo, { nombre: "", especialidad: "", bio: "" }]);
  }
  function updateMiembro(i: number, field: keyof MiembroEquipo, value: string) {
    const updated = [...equipo];
    updated[i] = { ...updated[i], [field]: value };
    setEquipo(updated);
  }
  function removeMiembro(i: number) {
    setEquipo(equipo.filter((_, idx) => idx !== i));
  }

  // WhatsApp
  function buildWhatsAppMessage(): string {
    const sloganFinal = sloganCustom || slogan;
    const horarioFinal = horario === "custom" ? horarioCustom : horario;
    const diplomasText = diplomas.filter(d => d.nombre).map(d => `  - ${d.nombre} (${d.institucion})`).join("\n");
    const equipoText = equipo.filter(m => m.nombre).map(m => `  - ${m.nombre} — ${m.especialidad}${m.bio ? `: ${m.bio}` : ""}`).join("\n");

    let msg = `🦷 *NUEVO PROYECTO WEB DENTAL*\n\n`;
    msg += `*Plan:* ${planData.name} (${planData.price}/mes)\n\n`;

    msg += `📋 *CONSULTA*\n`;
    msg += `*Consultorio:* ${consultorio}\n`;
    msg += `*Doctor/a:* ${doctor}\n`;
    msg += `*Especialidad:* ${especialidad}\n`;
    msg += `*WhatsApp:* ${whatsapp}\n`;
    if (email) msg += `*Email:* ${email}\n`;
    msg += `*Dirección:* ${direccion}\n`;
    if (dominio) msg += `*Dominio deseado:* ${dominio}\n`;
    if (redes) msg += `*Redes:* ${redes}\n`;

    msg += `\n🩺 *SERVICIOS*\n`;
    if (servicios.length) msg += `*Servicios:* ${servicios.join(", ")}\n`;
    if (estrella) msg += `*Servicio estrella:* ${estrella}\n`;
    if (publico.length) msg += `*Público:* ${publico.join(", ")}\n`;
    if (pagos.length) msg += `*Formas de pago:* ${pagos.join(", ")}\n`;
    if (convenios.length) msg += `*Convenios/Seguros:* ${convenios.join(", ")}\n`;
    if (horarioFinal) msg += `*Horario:* ${horarioFinal}\n`;
    if (contacto) msg += `*Contacto preferido:* ${contacto}\n`;
    if (ctaPreferido) msg += `*CTA principal:* ${ctaPreferido}\n`;

    msg += `\n👨‍⚕️ *PERFIL PROFESIONAL*\n`;
    if (experiencia) msg += `*Experiencia:* ${experiencia}\n`;
    if (bio) msg += `*Bio:* ${bio}\n`;
    if (fotos) msg += `*Fotos propias:* ${fotos}\n`;
    if (fotosLink) msg += `*Link fotos:* ${fotosLink}\n`;
    if (planLevel >= 2 && antesDespues) msg += `*Antes/después:* ${antesDespues}\n`;
    if (planLevel >= 2 && testimonios) msg += `*Testimonios:* ${testimonios}\n`;
    if (planLevel >= 2 && diplomasText) msg += `*Diplomas:*\n${diplomasText}\n`;
    if (planLevel >= 3 && equipoText) msg += `*Equipo médico:*\n${equipoText}\n`;
    if (planLevel >= 3 && mostrarConveniosWeb) msg += `*Convenios en web:* Sí\n`;

    msg += `\n🎨 *DISEÑO*\n`;
    if (estilo) msg += `*Estilo:* ${estilo}\n`;
    if (paleta) msg += `*Paleta:* ${paleta.split(" — ")[0]}\n`;
    if (logo) msg += `*Logo:* ${logo}\n`;
    if (sloganFinal) msg += `*Slogan:* ${sloganFinal}\n`;
    if (referencia) msg += `*Referencia:* ${referencia}\n`;
    if (notas) msg += `*Notas:* ${notas}\n`;

    if (msg.length > 4000) {
      msg = msg.substring(0, 3950) + "\n\n... _(ver resumen completo)_";
    }

    return msg;
  }

  function sendWhatsApp() {
    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/56984494128?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  function copyResumen() {
    navigator.clipboard.writeText(buildWhatsAppMessage()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const lightColors = ["#ffffff","#fafaf9","#f8fafc","#f0fdfa","#f7fdf9","#fffbeb","#faf5ff","#fdf2f8","#e0f2fe","#ccfbf1","#dcfce7","#fef3c7","#ede9fe","#f3f4f6","#fce7f3","#e5e7eb"];

  return (
    <div ref={topRef} className="overflow-x-hidden">
      {/* ── Hero ── */}
      <div className="relative bg-gradient-to-br from-accent to-[#0a5e6e] text-white text-center px-5 pt-8 sm:pt-11 pb-10 sm:pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        {/* Incentive banner */}
        <div className="relative inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <span>🎁</span>
          Preview personalizada gratis en 24 horas
        </div>
        <h1 className="relative text-xl sm:text-3xl font-extrabold tracking-tight">
          Cuéntanos sobre tu consulta
        </h1>
        <p className="relative mt-1.5 sm:mt-2 text-white/80 text-xs sm:text-base max-w-md mx-auto">
          Completa este formulario y en 24 horas recibirás una preview personalizada de cómo se vería tu web dental. Totalmente gratis.
        </p>
      </div>

      {/* ── Steps Nav ── */}
      <div className="flex justify-center gap-2 px-3 sm:px-4 py-3 sm:py-5">
        {stepLabels.map((label, i) => {
          const n = i + 1;
          const isActive = step === n;
          const isDone = completedSteps.has(n);
          const canAccess = n <= step || isDone;
          return (
            <button
              key={n}
              onClick={() => tryGoTo(n)}
              className={`flex items-center justify-center gap-1.5 px-2 sm:px-3.5 py-2 sm:py-2 rounded-full border-[1.5px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all min-h-[40px] min-w-[40px] sm:min-w-0 ${
                isActive ? "bg-accent text-white border-accent active:scale-95" :
                isDone ? "bg-accent/10 text-accent border-accent cursor-pointer active:scale-95" :
                canAccess ? "bg-bg-alt text-text-muted border-border cursor-pointer active:scale-95" :
                "bg-bg-alt text-text-muted/40 border-border/50 cursor-not-allowed"
              }`}
            >
              <span className={`w-5 h-5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                isActive ? "bg-white/25 text-white" :
                isDone ? "bg-accent text-white" :
                canAccess ? "bg-border text-text-muted" :
                "bg-border/50 text-text-muted/40"
              }`}>{isDone && !isActive ? "✓" : n}</span>
              <span className="hidden min-[420px]:inline">{label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Progress bar ── */}
      <div className="max-w-[680px] mx-auto px-4">
        <div className="h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
        <p className="text-xs text-text-muted text-center mt-2 mb-4">
          Paso {step} de 5 — {["Empecemos", "Casi a la mitad", "¡Vas genial!", "Último paso de datos", "¡A enviar!"][step - 1]}
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="max-w-[680px] mx-auto px-4 pb-10">

        {/* ════ PASO 1: Consulta ════ */}
        {step === 1 && (
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Cuéntanos de tu consulta</h2>
            <p className="text-text-muted text-sm mb-5">Con estos datos armamos la base de tu web. Solo toma 2 minutos.</p>

            <Field label="Nombre del consultorio *">
              <input type="text" value={consultorio} onChange={e => setConsultorio(e.target.value)} placeholder="Ej: Clínica Dental Sonrisa Perfecta" className="input-field" />
            </Field>
            <Field label="Doctor/a responsable *">
              <input type="text" value={doctor} onChange={e => setDoctor(e.target.value)} placeholder="Dr./Dra. Nombre Apellido" className="input-field" />
            </Field>

            <Field label="Especialidad principal">
              <div className="flex flex-wrap gap-2">
                {specialties.map(s => (
                  <RadioPill key={s.label} name="especialidad" value={s.label} checked={especialidad === s.label} onChange={setEspecialidad}>
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
              <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} placeholder="Calle, número, ciudad" className="input-field" />
            </Field>
            <Field label="Redes sociales">
              <textarea value={redes} onChange={e => setRedes(e.target.value)} rows={2} placeholder={"Instagram: ...\nFacebook: ..."} className="input-field" />
            </Field>
            <Field label="Dominio deseado" hint="Si ya tienes uno o tienes preferencia. Ej: sonrisaperfecta.cl">
              <input type="text" value={dominio} onChange={e => setDominio(e.target.value)} placeholder="miclínica.cl" className="input-field" />
            </Field>

            {/* Plan selector */}
            <Field label="Selecciona tu plan">
              <div className="space-y-3">
                {planes.map(p => (
                  <label
                    key={p.id}
                    className={`block p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] ${
                      plan === p.id
                        ? "border-accent bg-accent/5 shadow-sm"
                        : "border-border hover:border-accent/40"
                    }`}
                  >
                    <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} className="sr-only" />
                    {/* Header: nombre + precio */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xl shrink-0">{p.emoji}</span>
                        <span className="text-sm font-bold text-text-primary truncate">{p.name}</span>
                        {p.featured && (
                          <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0">
                            Recomendado
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-base sm:text-lg font-extrabold text-accent">{p.price}</span>
                        <span className="text-[11px] text-text-muted">/mes</span>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted mb-2">{p.tagline}</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      {p.features.map(f => (
                        <span key={f} className="text-[11px] sm:text-xs text-text-secondary flex items-center gap-1">
                          <span className="text-accent font-bold">✓</span> {f}
                        </span>
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </Field>

            <NavBtns errors={errors} onNext={() => tryNext(2)} />
          </div>
        )}

        {/* ════ PASO 2: Servicios y atención ════ */}
        {step === 2 && (
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">¿Qué ofreces a tus pacientes?</h2>
            <p className="text-text-muted text-sm mb-5">Esto nos ayuda a destacar lo que te hace único. ¡Vas muy bien!</p>

            <Field label="Servicios que ofreces">
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

            <Field label="Público objetivo">
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

            <Field label="Convenios / Seguros">
              <div className="flex flex-wrap gap-2">
                {convenioOptions.map(s => (
                  <CheckPill key={s.label} name="convenios" value={s.label} checked={convenios.includes(s.label)} onChange={(v, c) => setConvenios(toggleArray(convenios, v, c))}>
                    {s.emoji} {s.label}
                  </CheckPill>
                ))}
              </div>
            </Field>

            <Field label="Horario de atención">
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                {horarios.map(h => (
                  <label key={h.id} className={`block p-3 rounded-xl border-2 cursor-pointer transition-all min-h-[44px] active:scale-[0.98] ${horario === h.value ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="horario" value={h.value} checked={horario === h.value} onChange={() => setHorario(h.value)} className="sr-only" />
                    <div className="text-xs font-bold text-text-primary mb-1.5">{h.name}</div>
                    {h.rows.map(([day, time]) => (
                      <div key={day} className="flex justify-between text-xs py-0.5">
                        <span className="font-medium text-text-primary">{day}</span>
                        <span className={time === "Cerrado" ? "text-red-500 font-semibold" : "text-text-muted tabular-nums"}>{time}</span>
                      </div>
                    ))}
                  </label>
                ))}
              </div>
              <label className={`block p-3 rounded-xl border-2 cursor-pointer transition-all min-h-[44px] active:scale-[0.98] ${horario === "custom" ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                <input type="radio" name="horario" value="custom" checked={horario === "custom"} onChange={() => setHorario("custom")} className="sr-only" />
                <div className="text-xs font-bold text-text-primary">Mi horario es diferente</div>
              </label>
              {horario === "custom" && (
                <input type="text" value={horarioCustom} onChange={e => setHorarioCustom(e.target.value)} placeholder="Ej: L-V 8:30-17:30 / Sáb 10:00-14:00" className="input-field mt-2.5" />
              )}
            </Field>

            <Field label="Método de contacto preferido">
              <div className="flex flex-wrap gap-2">
                {contactoOptions.map(c => (
                  <RadioPill key={c.label} name="contacto" value={c.label} checked={contacto === c.label} onChange={setContacto}>
                    {c.emoji} {c.label}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="CTA principal de tu web" hint="El botón principal que verán tus pacientes">
              <div className="flex flex-wrap gap-2">
                {ctaOptions.map(c => (
                  <RadioPill key={c.label} name="cta" value={c.label} checked={ctaPreferido === c.label} onChange={setCtaPreferido}>
                    {c.emoji} {c.label}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <NavBtns errors={errors} onBack={() => goTo(1)} onNext={() => tryNext(3)} />
          </div>
        )}

        {/* ════ PASO 3: Perfil profesional ════ */}
        {step === 3 && (
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Lo que te hace único</h2>
            <p className="text-text-muted text-sm mb-5">Tu experiencia genera confianza en nuevos pacientes. ¡Ya casi terminamos!</p>

            <Field label="Años de experiencia">
              <div className="flex flex-wrap gap-2">
                {["1-5 años", "5-10 años", "10-20 años", "+20 años"].map(v => (
                  <RadioPill key={v} name="experiencia" value={v} checked={experiencia === v} onChange={setExperiencia}>
                    {v}
                  </RadioPill>
                ))}
              </div>
            </Field>

            <Field label="Bio del doctor" hint="Si no la tienes, la generamos nosotros">
              <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3} placeholder="Breve biografía profesional..." className="input-field" />
            </Field>

            <Field label="¿Tienes fotos propias?">
              <div className="flex flex-wrap gap-2">
                {[{ e: "📸", l: "Sí, envío todo" }, { e: "🤳", l: "Solo del doctor" }, { e: "🖼️", l: "Usar stock" }].map(o => (
                  <RadioPill key={o.l} name="fotos" value={o.l} checked={fotos === o.l} onChange={setFotos}>
                    {o.e} {o.l}
                  </RadioPill>
                ))}
              </div>
            </Field>

            {fotos && fotos !== "Usar stock" && (
              <Field label="Link a tus fotos" hint="Sube tus fotos a Google Drive, Dropbox o WeTransfer y pega el link. También puedes enviarlas por WhatsApp después.">
                <input type="url" value={fotosLink} onChange={e => setFotosLink(e.target.value)} placeholder="https://drive.google.com/..." className="input-field" />
              </Field>
            )}

            {/* Antes/después — plan >= Crecimiento */}
            {planLevel >= 2 ? (
              <Field label="¿Fotos de antes y después?">
                <div className="flex flex-wrap gap-2">
                  {[{ e: "✅", l: "Sí" }, { e: "❌", l: "No tengo" }, { e: "🔜", l: "Pronto" }].map(o => (
                    <RadioPill key={o.l} name="antes_despues" value={o.l} checked={antesDespues === o.l} onChange={setAntesDespues}>
                      {o.e} {o.l}
                    </RadioPill>
                  ))}
                </div>
              </Field>
            ) : (
              <PlanGate label="Fotos antes/después" requiredPlan="Crecimiento" />
            )}

            {/* Testimonios — plan >= Crecimiento */}
            {planLevel >= 2 ? (
              <Field label="Testimonios de pacientes" hint="Escribe 2-3 testimonios reales. Si no tienes, déjalo vacío.">
                <textarea value={testimonios} onChange={e => setTestimonios(e.target.value)} rows={3} placeholder="Escribe testimonios reales de pacientes..." className="input-field" />
              </Field>
            ) : (
              <PlanGate label="Testimonios de pacientes" requiredPlan="Crecimiento" />
            )}

            {/* Diplomas — plan >= Crecimiento */}
            {planLevel >= 2 ? (
              <Field label="Diplomas / Certificaciones">
                <div className="space-y-2.5">
                  {diplomas.map((d, i) => (
                    <div key={i} className="p-3 bg-bg-alt rounded-xl border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-text-muted">Diploma {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeDiploma(i)}
                          className="shrink-0 w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center text-sm font-bold transition-colors min-h-[44px] min-w-[44px]"
                          aria-label="Eliminar diploma"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={d.nombre}
                          onChange={e => updateDiploma(i, "nombre", e.target.value)}
                          placeholder="Nombre del diploma"
                          className="input-field"
                        />
                        <input
                          type="text"
                          value={d.institucion}
                          onChange={e => updateDiploma(i, "institucion", e.target.value)}
                          placeholder="Universidad / Institución"
                          className="input-field"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addDiploma}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-[1.5px] border-dashed border-accent/40 text-accent text-sm font-medium hover:bg-accent/5 transition-all min-h-[44px] active:scale-95"
                  >
                    + Agregar diploma
                  </button>
                </div>
              </Field>
            ) : (
              <PlanGate label="Diplomas / Certificaciones" requiredPlan="Crecimiento" />
            )}

            {/* Equipo médico — solo Autopilot */}
            {planLevel >= 3 ? (
              <Field label="Equipo médico" hint="Agrega los doctores de tu equipo">
                <div className="space-y-3">
                  {equipo.map((m, i) => (
                    <div key={i} className="p-3 bg-bg-alt rounded-xl border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-text-muted">Doctor {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeMiembro(i)}
                          className="w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100 flex items-center justify-center text-sm font-bold transition-colors min-h-[44px] min-w-[44px]"
                          aria-label="Eliminar doctor"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="space-y-2 mb-2">
                        <input
                          type="text"
                          value={m.nombre}
                          onChange={e => updateMiembro(i, "nombre", e.target.value)}
                          placeholder="Nombre completo"
                          className="input-field"
                        />
                        <input
                          type="text"
                          value={m.especialidad}
                          onChange={e => updateMiembro(i, "especialidad", e.target.value)}
                          placeholder="Especialidad"
                          className="input-field"
                        />
                      </div>
                      <textarea
                        value={m.bio}
                        onChange={e => updateMiembro(i, "bio", e.target.value)}
                        rows={2}
                        placeholder="Breve bio (opcional)"
                        className="input-field"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addMiembro}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-[1.5px] border-dashed border-accent/40 text-accent text-sm font-medium hover:bg-accent/5 transition-all min-h-[44px] active:scale-95"
                  >
                    + Agregar doctor
                  </button>
                </div>
              </Field>
            ) : (
              <PlanGate label="Equipo médico" requiredPlan="Autopilot" />
            )}

            {/* Convenios visibles en web — solo Autopilot */}
            {planLevel >= 3 ? (
              <Field label="Convenios en la web">
                <label className="inline-flex items-center gap-3 cursor-pointer text-sm text-text-secondary min-h-[44px] py-2">
                  <input
                    type="checkbox"
                    checked={mostrarConveniosWeb}
                    onChange={e => setMostrarConveniosWeb(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-accent focus:ring-accent shrink-0"
                  />
                  Mostrar sección de convenios Fonasa/Isapre en la web
                </label>
              </Field>
            ) : (
              <PlanGate label="Sección de convenios en la web" requiredPlan="Autopilot" />
            )}

            <NavBtns onBack={() => goTo(2)} onNext={() => tryNext(4)} />
          </div>
        )}

        {/* ════ PASO 4: Diseño visual ════ */}
        {step === 4 && (
          <div className="bg-bg-card border border-border rounded-2xl p-4 sm:p-7 animate-fadeIn">
            <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">Dale personalidad a tu web</h2>
            <p className="text-text-muted text-sm mb-5">Esta es la parte divertida — elige el estilo que te representa.</p>

            <Field label="Estilo visual">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {estilos.map(s => (
                  <label key={s.label} className={`flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl border-2 cursor-pointer transition-all min-h-[80px] justify-center active:scale-95 ${estilo === s.label ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="estilo" value={s.label} checked={estilo === s.label} onChange={() => setEstilo(s.label)} className="sr-only" />
                    <span className="text-2xl mb-0.5">{s.emoji}</span>
                    <span className="text-xs font-bold text-text-primary leading-tight">{s.label}</span>
                    <span className="text-[11px] text-text-muted leading-tight">{s.desc}</span>
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Paleta de colores">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {paletas.map(p => (
                  <label key={p.name} className={`block p-3 sm:p-3.5 rounded-xl border-2 cursor-pointer transition-all min-h-[44px] active:scale-[0.98] ${paleta === p.value ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/40"}`}>
                    <input type="radio" name="paleta" value={p.value} checked={paleta === p.value} onChange={() => setPaleta(p.value)} className="sr-only" />
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {p.colors.map((c, i) => (
                        <div key={i} className={`rounded-full ${i < 3 ? "w-7 h-7 sm:w-8 sm:h-8" : "w-5 h-5"}`} style={{ background: c, border: lightColors.includes(c) ? "1px solid #e2e8f0" : "none" }} />
                      ))}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-text-primary">{p.name}</div>
                    <div className="text-xs text-text-muted">{p.desc}</div>
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

            <Field label="Referencia visual">
              <input type="url" value={referencia} onChange={e => setReferencia(e.target.value)} placeholder="https://ejemplo.com — una web que te guste" className="input-field" />
            </Field>

            <Field label="Notas extra">
              <textarea value={notas} onChange={e => setNotas(e.target.value)} rows={2} placeholder="Algo más que debamos saber..." className="input-field" />
            </Field>

            <NavBtns errors={errors} onBack={() => goTo(3)} onNext={() => tryNext(5)} />
          </div>
        )}

        {/* ════ PASO 5: Resumen y envío ════ */}
        {step === 5 && (
          <div className="animate-fadeIn space-y-4">
            <div className="bg-bg-card border border-border rounded-2xl p-5 sm:p-7">
              <h2 className="text-lg sm:text-xl font-extrabold text-accent mb-0.5">¡Todo listo!</h2>
              <p className="text-text-muted text-sm mb-5">Revisa tu resumen y envíalo. En 24 hrs recibirás tu preview gratis.</p>

              {/* Plan badge */}
              <div className="flex items-center gap-3 p-3 bg-accent/5 border border-accent/20 rounded-xl mb-5">
                <span className="text-2xl shrink-0">{planData.emoji}</span>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-accent">Plan {planData.name}</div>
                  <div className="text-xs text-text-muted truncate">{planData.price}/mes — {planData.tagline}</div>
                </div>
              </div>

              {/* Sección: Consulta */}
              <SummarySection
                title="Consulta"

                expanded={expandedSections.consulta}
                onToggle={() => toggleSection("consulta")}
                onEdit={() => goTo(1)}
              >
                <SummaryRow label="Consultorio" value={consultorio} />
                <SummaryRow label="Doctor/a" value={doctor} />
                <SummaryRow label="Especialidad" value={especialidad} />
                <SummaryRow label="WhatsApp" value={whatsapp} />
                <SummaryRow label="Email" value={email} />
                <SummaryRow label="Dirección" value={direccion} />
                <SummaryRow label="Dominio" value={dominio} />
                <SummaryRow label="Redes" value={redes} />
              </SummarySection>

              {/* Sección: Servicios */}
              <SummarySection
                title="Servicios y atención"

                expanded={expandedSections.servicios}
                onToggle={() => toggleSection("servicios")}
                onEdit={() => goTo(2)}
              >
                <SummaryRow label="Servicios" value={servicios.join(", ")} />
                <SummaryRow label="Servicio estrella" value={estrella} />
                <SummaryRow label="Público" value={publico.join(", ")} />
                <SummaryRow label="Formas de pago" value={pagos.join(", ")} />
                <SummaryRow label="Convenios" value={convenios.join(", ")} />
                <SummaryRow label="Horario" value={horario === "custom" ? horarioCustom : horario} />
                <SummaryRow label="Contacto" value={contacto} />
                <SummaryRow label="CTA principal" value={ctaPreferido} />
              </SummarySection>

              {/* Sección: Perfil */}
              <SummarySection
                title="Perfil profesional"

                expanded={expandedSections.perfil}
                onToggle={() => toggleSection("perfil")}
                onEdit={() => goTo(3)}
              >
                <SummaryRow label="Experiencia" value={experiencia} />
                <SummaryRow label="Bio" value={bio} />
                <SummaryRow label="Fotos propias" value={fotos} />
                <SummaryRow label="Link fotos" value={fotosLink} />
                {planLevel >= 2 && <SummaryRow label="Antes/después" value={antesDespues} />}
                {planLevel >= 2 && <SummaryRow label="Testimonios" value={testimonios} />}
                {planLevel >= 2 && diplomas.length > 0 && (
                  <SummaryRow label="Diplomas" value={diplomas.filter(d => d.nombre).map(d => `${d.nombre} (${d.institucion})`).join("; ")} />
                )}
                {planLevel >= 3 && equipo.length > 0 && (
                  <SummaryRow label="Equipo médico" value={equipo.filter(m => m.nombre).map(m => `${m.nombre} — ${m.especialidad}`).join("; ")} />
                )}
                {planLevel >= 3 && <SummaryRow label="Convenios en web" value={mostrarConveniosWeb ? "Sí" : "No"} />}
              </SummarySection>

              {/* Sección: Diseño */}
              <SummarySection
                title="Diseño visual"

                expanded={expandedSections.diseno}
                onToggle={() => toggleSection("diseno")}
                onEdit={() => goTo(4)}
              >
                <SummaryRow label="Estilo" value={estilo} />
                <SummaryRow label="Paleta" value={paleta ? paleta.split(" — ")[0] : ""} />
                <SummaryRow label="Logo" value={logo} />
                <SummaryRow label="Slogan" value={sloganCustom || slogan} />
                <SummaryRow label="Referencia" value={referencia} />
                <SummaryRow label="Notas" value={notas} />
              </SummarySection>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <div>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:brightness-105 min-h-[52px] active:scale-[0.98] transition-all"
                >
                  Enviar y recibir mi preview gratis
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="text-xs text-text-muted text-center mt-2">Recibirás tu preview personalizada por WhatsApp en 24 hrs</p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(4)}
                  className="flex-1 px-5 py-3 rounded-full text-sm font-semibold bg-border text-text-primary hover:bg-gray-300 min-h-[48px] active:scale-95 transition-all"
                >
                  ← Atrás
                </button>
                <button
                  type="button"
                  onClick={copyResumen}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-border text-text-primary hover:bg-gray-300 min-h-[48px] active:scale-95 transition-all"
                >
                  {copied ? "✓ Copiado" : "📋 Copiar resumen"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast */}
      <div className={`fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 text-center px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold shadow-xl transition-all duration-300 pointer-events-none z-50 ${copied ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
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

function NavBtns({ onBack, onNext, errors = [] }: { onBack?: () => void; onNext?: () => void; errors?: string[] }) {
  return (
    <div className="border-t border-border pt-4 mt-5">
      {errors.length > 0 && (
        <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-xl animate-fadeIn">
          <p className="text-sm font-semibold text-red-600 mb-1">Completa los campos obligatorios:</p>
          <ul className="text-sm text-red-500 space-y-0.5">
            {errors.map(e => <li key={e}>• {e}</li>)}
          </ul>
        </div>
      )}
      <div className={`flex gap-3 ${onBack ? "justify-between" : "justify-end"}`}>
        {onBack && (
          <button type="button" onClick={onBack} className="flex-1 sm:flex-none px-5 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold bg-border text-text-primary hover:bg-gray-300 min-h-[48px] active:scale-95 transition-all">← Atrás</button>
        )}
        {onNext && (
          <button type="button" onClick={onNext} className="flex-1 sm:flex-none px-5 sm:px-6 py-3.5 sm:py-3 rounded-full text-sm font-semibold bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 min-h-[48px] active:scale-95 transition-all">Siguiente →</button>
        )}
      </div>
    </div>
  );
}

function PlanGate({ label, requiredPlan }: { label: string; requiredPlan: string }) {
  return (
    <div className="mb-4 p-3 bg-bg-alt rounded-xl border border-dashed border-border">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-text-muted text-sm">{label}</span>
        <span className="text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full leading-none">
          Plan {requiredPlan} ↑
        </span>
      </div>
    </div>
  );
}

function SummarySection({ title, expanded, onToggle, onEdit, children }: {
  title: string; expanded: boolean;
  onToggle: () => void; onEdit: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border last:border-b-0 py-3">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent transition-colors min-h-[44px] flex-1 text-left"
        >
          <span className={`text-xs transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}>▶</span>
          {title}
        </button>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-semibold text-accent hover:text-accent-light transition-colors px-3 py-2 min-h-[44px] flex items-center shrink-0"
        >
          Editar
        </button>
      </div>
      {expanded && (
        <div className="mt-1 space-y-1 pl-5 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="py-1 text-sm">
      <span className="font-medium text-text-muted">{label}: </span>
      <span className="text-text-primary break-words">{value}</span>
    </div>
  );
}
