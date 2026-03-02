"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

/* ─────────────────────────── DATA ─────────────────────────── */

const specialties = [
  "Odontología General",
  "Implantología",
  "Ortodoncia",
  "Odontopediatría",
  "Endodoncia",
  "Estética Dental",
  "Periodoncia",
  "Cirugía Maxilofacial",
  "Estética Facial",
  "Rehabilitación Oral",
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
  "Estética Facial": { primary: "#9D174D", light: "#F472B6", bg: "#FFF1F2" },
  "Rehabilitación Oral": { primary: "#0369A1", light: "#38BDF8", bg: "#F0F9FF" },
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
  "Estética Facial": ["Botox Dental", "Ácido Hialurónico", "Armonización Facial", "Diseño de Sonrisa"],
  "Rehabilitación Oral": ["Prótesis Fija", "Prótesis Removible", "Coronas y Puentes", "Implantes + Prótesis"],
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
  "Estética Facial": [
    { year: "2014", text: "Cirujano Dentista — U. de Chile" },
    { year: "2018", text: "Diplomado Estética Facial — U. de los Andes" },
    { year: "2022", text: "Certificación Botox y Ácido Hialurónico — SBCP" },
  ],
  "Rehabilitación Oral": [
    { year: "2012", text: "Cirujano Dentista — U. de Valparaíso" },
    { year: "2016", text: "Especialista en Rehabilitación Oral — U. de Chile" },
    { year: "2021", text: "Diplomado Prótesis sobre Implantes — U. de los Andes" },
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
  "Estética Facial": "La armonización facial complementa la sonrisa. Busco resultados naturales que realcen tu belleza.",
  "Rehabilitación Oral": "Devolver la función y estética a cada paciente es mi misión. Cada caso es único y merece un plan personalizado.",
};

const galleryBySpecialty: Record<string, { title: string; tag: string }[]> = {
  "Odontología General": [
    { title: "Restauración Estética", tag: "Composite" },
    { title: "Blanqueamiento Completo", tag: "Estética" },
    { title: "Tratamiento Integral", tag: "General" },
  ],
  "Implantología": [
    { title: "Implante Unitario", tag: "Titanio" },
    { title: "All-on-4 Completo", tag: "Rehabilitación" },
    { title: "Injerto + Implante", tag: "Avanzado" },
  ],
  "Ortodoncia": [
    { title: "Alineación Completa", tag: "Brackets" },
    { title: "Caso Invisalign", tag: "Transparente" },
    { title: "Ortopedia Funcional", tag: "Interceptiva" },
  ],
  "Odontopediatría": [
    { title: "Primera Visita Feliz", tag: "Prevención" },
    { title: "Sellantes Preventivos", tag: "Protección" },
    { title: "Tratamiento Sin Miedo", tag: "Cuidado" },
  ],
  "Endodoncia": [
    { title: "Conducto Molar", tag: "Complejo" },
    { title: "Retratamiento Exitoso", tag: "Recuperación" },
    { title: "Microcirugía Apical", tag: "Precisión" },
  ],
  "Estética Dental": [
    { title: "Carillas Porcelana", tag: "Sonrisa" },
    { title: "Diseño Digital", tag: "DSD" },
    { title: "Coronas Cerámicas", tag: "Natural" },
  ],
  "Periodoncia": [
    { title: "Tratamiento Encías", tag: "Salud" },
    { title: "Injerto Gingival", tag: "Regeneración" },
    { title: "Mantenimiento", tag: "Prevención" },
  ],
  "Cirugía Maxilofacial": [
    { title: "Extracción Compleja", tag: "Cirugía" },
    { title: "Cirugía Ortognática", tag: "Corrección" },
    { title: "Implante Zigomático", tag: "Avanzado" },
  ],
  "Estética Facial": [
    { title: "Armonización Completa", tag: "Facial" },
    { title: "Labios Naturales", tag: "Hialurónico" },
    { title: "Sonrisa + Rostro", tag: "Integral" },
  ],
  "Rehabilitación Oral": [
    { title: "Rehabilitación Completa", tag: "Full Mouth" },
    { title: "Coronas Cerámicas", tag: "Estética" },
    { title: "Prótesis sobre Implantes", tag: "Fija" },
  ],
};

/* ─────────────────────── SCALE SYSTEM ──────────────────────── */

type Scale = "mini" | "full";

const sizes = {
  mini: {
    navPy: "py-2.5", navPx: "px-4 sm:px-6", navName: "text-xs sm:text-sm", navLinks: "text-[10px]", navBtn: "text-[10px] px-2.5 py-1",
    sectionPx: "px-4 sm:px-8", sectionPy: "py-5",
    heroTitle: "text-base sm:text-lg", heroSub: "text-[11px]", heroBadge: "text-[10px]", heroBtn: "text-[10px]", heroBtnPy: "py-1.5",
    statsNum: "text-sm", statsLabel: "text-[7px]",
    sectionTitle: "text-[10px]",
    serviceCard: "p-2", serviceIcon: "w-5 h-5", serviceIconInner: "w-3.5 h-3.5", serviceName: "text-[10px]",
    quoteText: "text-[11px]", quoteIcon: "w-4 h-4", avatarSize: "w-6 h-6", avatarText: "text-[8px]", quoteName: "text-[10px]", quoteSub: "text-[8px]",
    credYear: "text-[8px]", credText: "text-[10px]", credDot: "w-2 h-2",
    galleryTitle: "text-[10px]", galleryTag: "text-[7px]", galleryLabel: "text-[7px]",
    testimonialText: "text-[9px]", testimonialName: "text-[9px]", testimonialStar: "w-2 h-2", testimonialAvatar: "w-4 h-4", testimonialAvatarText: "text-[7px]", testimonialTime: "text-[7px]", testimonialBadge: "text-[6px]",
    locationTitle: "text-[8px]", locationText: "text-[7px]", locationLabel: "text-[8px]",
    ctaTitle: "text-[11px]", ctaSub: "text-[9px]", ctaBtn: "text-[9px]",
    footerName: "text-[10px]", footerSub: "text-[8px]", footerCopy: "text-[7px]", footerLinks: "text-[7px]", footerSocial: "w-4 h-4", footerSocialIcon: "w-2.5 h-2.5",
    mapMin: "min-h-[100px]", mapCity: "text-[6px]",
    scheduleTitle: "text-[8px]", scheduleText: "text-[7px]",
    starRating: "w-2.5 h-2.5", ratingText: "text-[8px]", yearsNum: "text-sm", yearsLabel: "text-[7px]",
  },
  full: {
    navPy: "py-3.5", navPx: "px-6 sm:px-10", navName: "text-base sm:text-lg", navLinks: "text-sm", navBtn: "text-sm px-5 py-2",
    sectionPx: "px-6 sm:px-10", sectionPy: "py-8 sm:py-10",
    heroTitle: "text-2xl sm:text-3xl", heroSub: "text-sm sm:text-base", heroBadge: "text-xs sm:text-sm", heroBtn: "text-xs sm:text-sm", heroBtnPy: "py-2.5",
    statsNum: "text-xl sm:text-2xl", statsLabel: "text-xs",
    sectionTitle: "text-xs sm:text-sm",
    serviceCard: "p-3 sm:p-4", serviceIcon: "w-8 h-8 sm:w-10 sm:h-10", serviceIconInner: "w-5 h-5 sm:w-6 sm:h-6", serviceName: "text-sm sm:text-base",
    quoteText: "text-sm sm:text-base", quoteIcon: "w-6 h-6 sm:w-8 sm:h-8", avatarSize: "w-10 h-10 sm:w-12 sm:h-12", avatarText: "text-sm", quoteName: "text-sm sm:text-base", quoteSub: "text-xs sm:text-sm",
    credYear: "text-xs", credText: "text-sm", credDot: "w-3 h-3",
    galleryTitle: "text-sm sm:text-base", galleryTag: "text-xs", galleryLabel: "text-xs",
    testimonialText: "text-sm", testimonialName: "text-sm", testimonialStar: "w-3.5 h-3.5", testimonialAvatar: "w-7 h-7", testimonialAvatarText: "text-xs", testimonialTime: "text-xs", testimonialBadge: "text-[10px]",
    locationTitle: "text-sm", locationText: "text-xs sm:text-sm", locationLabel: "text-sm",
    ctaTitle: "text-base sm:text-lg", ctaSub: "text-sm", ctaBtn: "text-sm",
    footerName: "text-sm sm:text-base", footerSub: "text-xs sm:text-sm", footerCopy: "text-xs", footerLinks: "text-xs sm:text-sm", footerSocial: "w-7 h-7", footerSocialIcon: "w-4 h-4",
    mapMin: "min-h-[180px]", mapCity: "text-xs",
    scheduleTitle: "text-sm", scheduleText: "text-xs sm:text-sm",
    starRating: "w-3.5 h-3.5", ratingText: "text-sm", yearsNum: "text-xl sm:text-2xl", yearsLabel: "text-xs",
  },
};

/* ─────────────────── DENTAL SVG ICONS ──────────────────────── */

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 7 3.5 6 6c-1.5 3.5-.5 5.5 0 8 .5 2.5 1 5 2 6s2 1 3-1c.5-1 1-1 1-1s.5 0 1 1c1 2 2 2 3 1s1.5-3.5 2-6c.5-2.5 1.5-4.5 0-8-1-2.5-3.5-4-6-4z" />
    </svg>
  );
}

function ImplantIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-2 0-3.5 1.5-3.5 3.5S10 9 12 9s3.5-1.5 3.5-3.5S14 2 12 2z" />
      <path d="M10 9h4l-.5 2h-3L10 9z" />
      <path d="M10.5 11h3l-.3 2h-2.4l-.3-2z" />
      <path d="M11 13h2l-.2 2h-1.6L11 13z" />
      <path d="M11.2 15h1.6l-.3 3h-1l-.3-3z" />
      <path d="M11.5 18h1v4h-1v-4z" />
    </svg>
  );
}

function BracketsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="4" height="4" rx="0.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <rect x="16" y="10" width="4" height="4" rx="0.5" />
      <line x1="8" y1="12" x2="10" y2="12" />
      <line x1="14" y1="12" x2="16" y2="12" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function ChildToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 7 3.5 6 6c-1.5 3.5-.5 5.5 0 8 .5 2.5 1 5 2 6s2 1 3-1c.5-1 1-1 1-1s.5 0 1 1c1 2 2 2 3 1s1.5-3.5 2-6c.5-2.5 1.5-4.5 0-8-1-2.5-3.5-4-6-4z" />
      <circle cx="10" cy="7" r="0.8" fill="currentColor" />
      <circle cx="14" cy="7" r="0.8" fill="currentColor" />
      <path d="M10 10c.5.8 1.2 1 2 1s1.5-.2 2-1" />
    </svg>
  );
}

function EndodonciaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C9.5 2 7 3.5 6 6c-1.5 3.5-.5 5.5 0 8 .5 2.5 1 5 2 6s2 1 3-1c.5-1 1-1 1-1s.5 0 1 1c1 2 2 2 3 1s1.5-3.5 2-6c.5-2.5 1.5-4.5 0-8-1-2.5-3.5-4-6-4z" />
      <path d="M12 6v5" />
      <path d="M10.5 8.5L12 11l1.5-2.5" />
    </svg>
  );
}

function SparkleToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3C10.5 3 8.5 4.5 7.5 6.5c-1.2 3-.5 4.5 0 7 .5 2 1 4.5 1.8 5.2.8.8 1.5.8 2.2-.5.4-.7.7-1 1-1.2.3.2.6.5 1 1.2.7 1.3 1.4 1.3 2.2.5.8-.7 1.3-3.2 1.8-5.2.5-2.5 1.2-4 0-7C16.5 4.5 15.5 3 13 3z" />
      <path d="M4 7l.8 1.6L6.4 9.4l-1.6.8L4 11.8l-.8-1.6L1.6 9.4l1.6-.8L4 7z" />
      <path d="M20 3l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5L20 3z" />
    </svg>
  );
}

function GumIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14c1-3 4-5 9-5s8 2 9 5" />
      <path d="M8 9c0-2.5 1-5 4-5s4 2.5 4 5" />
      <path d="M10 14v4c0 1 .5 2 1 2.5" />
      <path d="M14 14v4c0 1-.5 2-1 2.5" />
      <path d="M6 14v3" />
      <path d="M18 14v3" />
    </svg>
  );
}

function ScalpelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4L8 16" />
      <path d="M8 16l-4.5 2.5c-.5.3-.7.9-.3 1.3.4.4 1 .2 1.3-.3L7 15" />
      <path d="M20 4l-2 6-4-4 6-2z" />
    </svg>
  );
}

function ShieldToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 3v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
      <path d="M12 8c-1 0-2 .8-2 2 0 1.5.5 2.5.8 3.5.2.5.4 1.5.6 2 .1.3.3.5.6.5s.5-.2.6-.5c.2-.5.4-1.5.6-2C13.5 12.5 14 11.5 14 10c0-1.2-1-2-2-2z" />
    </svg>
  );
}

function SearchToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="6" />
      <path d="M10 6c-1 0-2 .8-2 1.8 0 1 .3 1.8.6 2.5.2.5.3 1.2.5 1.5.1.2.2.3.4.3s.3-.1.4-.3c.2-.3.3-1 .5-1.5.3-.7.6-1.5.6-2.5 0-1-1-1.8-2-1.8z" />
      <path d="M15 15l5 5" />
    </svg>
  );
}

const serviceIconComponents: Record<string, React.FC<{ className?: string }>> = {
  "Odontología General": ToothIcon,
  "Implantología": ImplantIcon,
  "Ortodoncia": BracketsIcon,
  "Odontopediatría": ChildToothIcon,
  "Endodoncia": EndodonciaIcon,
  "Estética Dental": SparkleToothIcon,
  "Periodoncia": GumIcon,
  "Cirugía Maxilofacial": ScalpelIcon,
  "Estética Facial": SparkleToothIcon,
  "Rehabilitación Oral": ToothIcon,
};

const serviceIconMap: Record<string, React.FC<{ className?: string }>[]> = {
  "Odontología General": [ToothIcon, ShieldToothIcon, EndodonciaIcon, SparkleToothIcon],
  "Implantología": [ImplantIcon, ImplantIcon, ShieldToothIcon, ToothIcon],
  "Ortodoncia": [BracketsIcon, BracketsIcon, BracketsIcon, SearchToothIcon],
  "Odontopediatría": [ChildToothIcon, ShieldToothIcon, ToothIcon, BracketsIcon],
  "Endodoncia": [EndodonciaIcon, EndodonciaIcon, SearchToothIcon, ToothIcon],
  "Estética Dental": [SparkleToothIcon, SparkleToothIcon, SparkleToothIcon, ToothIcon],
  "Periodoncia": [GumIcon, GumIcon, GumIcon, ShieldToothIcon],
  "Cirugía Maxilofacial": [ScalpelIcon, ScalpelIcon, SearchToothIcon, ImplantIcon],
  "Estética Facial": [SparkleToothIcon, SparkleToothIcon, ToothIcon, ShieldToothIcon],
  "Rehabilitación Oral": [ToothIcon, ImplantIcon, ToothIcon, ShieldToothIcon],
};

/* ──────────────── PREVIEW SUB-COMPONENTS ───────────────────── */

interface PreviewProps {
  scale: Scale;
  colors: { primary: string; light: string; bg: string };
  specialty: string;
  doctorTitle: string;
  displayName: string;
  initials: string;
  phone: string;
  domain: string;
}

function PreviewNavbar({ scale, colors, doctorTitle, displayName }: PreviewProps) {
  const s = sizes[scale];
  return (
    <div className={`preview-reveal sticky top-0 z-10 ${s.navPx} ${s.navPy} flex items-center justify-between bg-white/90 backdrop-blur-sm border-b`} style={{ borderColor: `${colors.primary}10`, animationDelay: "0s" }}>
      <span className={`font-bold ${s.navName}`} style={{ color: colors.primary }}>
        {doctorTitle} {displayName}
      </span>
      <div className={`hidden sm:flex gap-3 ${s.navLinks} font-medium`} style={{ color: "#94a3b8" }}>
        <span>Servicios</span>
        <span>Trayectoria</span>
        <span>Testimonios</span>
        <span>Ubicación</span>
      </div>
      <div className={`${s.navBtn} font-semibold text-white rounded-full`} style={{ background: colors.primary }}>
        Agendar
      </div>
    </div>
  );
}

function PreviewHero({ scale, colors, specialty, doctorTitle, displayName, initials }: PreviewProps) {
  const s = sizes[scale];
  const SpecialtyIcon = serviceIconComponents[specialty] || ToothIcon;
  return (
    <div className={`preview-reveal relative ${s.sectionPx} ${scale === "mini" ? "py-8 sm:py-10" : "py-12 sm:py-16"}`} style={{ background: `linear-gradient(135deg, ${colors.bg}, white)`, animationDelay: "0.05s" }}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className={`${s.heroBadge} font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1 mb-3`} style={{ background: `${colors.primary}12`, color: colors.primary }}>
            <SpecialtyIcon className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} />
            {specialty}
          </div>
          <h3 className={`${s.heroTitle} font-extrabold leading-tight`} style={{ color: "#0f172a" }}>
            Tu dentista de confianza en La Serena
          </h3>
          <p className={`${s.heroSub} mt-2 leading-relaxed`} style={{ color: "#64748b" }}>
            Especialista en {specialty.toLowerCase()} con atención personalizada. Primera evaluación sin costo.
          </p>
          <div className="flex gap-2 mt-3">
            <span className={`${s.heroBtn} font-semibold text-white px-3 ${s.heroBtnPy} rounded-full inline-flex items-center gap-1 shadow-sm`} style={{ background: "#25D366" }}>
              <svg className={scale === "mini" ? "w-3 h-3" : "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
              Agendar por WhatsApp
            </span>
            <span className={`${s.heroBtn} font-medium px-3 ${s.heroBtnPy} rounded-full border`} style={{ borderColor: `${colors.primary}25`, color: colors.primary }}>
              Ver servicios
            </span>
          </div>
        </div>
        <div className="hidden sm:flex flex-col gap-2 shrink-0 items-center">
          {/* Professional avatar */}
          <div className={`${scale === "mini" ? "w-14 h-14" : "w-20 h-20"} rounded-full flex items-center justify-center relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})` }}>
            <svg className={`${scale === "mini" ? "w-10 h-10" : "w-14 h-14"} text-white/30 absolute bottom-0`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            <span className={`${scale === "mini" ? "text-xs" : "text-lg"} font-bold text-white relative z-10`}>{initials}</span>
          </div>
          <p className={`${scale === "mini" ? "text-[8px]" : "text-xs"} font-medium text-center`} style={{ color: colors.primary }}>{doctorTitle} {displayName.split(" ")[0]}</p>
        </div>
      </div>
    </div>
  );
}

function PreviewStats({ scale, colors }: Pick<PreviewProps, "scale" | "colors">) {
  const s = sizes[scale];
  const stats = [
    { num: "500+", label: "Pacientes" },
    { num: "10+", label: "Años Exp." },
    { num: "4.9★", label: "Google" },
    { num: "98%", label: "Satisfechos" },
  ];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${scale === "mini" ? "py-3" : "py-5"}`} style={{ background: `${colors.primary}06`, animationDelay: "0.1s" }}>
      <div className="grid grid-cols-4 divide-x" style={{ borderColor: `${colors.primary}15` }}>
        {stats.map((st, i) => (
          <div key={i} className="text-center px-1">
            <p className={`${s.statsNum} font-extrabold`} style={{ color: colors.primary }}>{st.num}</p>
            <p className={`${s.statsLabel} font-medium`} style={{ color: "#94a3b8" }}>{st.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewServices({ scale, colors, specialty }: Pick<PreviewProps, "scale" | "colors" | "specialty">) {
  const s = sizes[scale];
  const services = servicesBySpecialty[specialty] || servicesBySpecialty["Odontología General"];
  const icons = serviceIconMap[specialty] || serviceIconMap["Odontología General"];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy} bg-white`} style={{ animationDelay: "0.15s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Servicios
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {services.map((service, i) => {
          const IconComp = icons[i] || ToothIcon;
          return (
            <div key={i} className={`${s.serviceCard} rounded-lg border`} style={{ borderColor: `${colors.primary}12`, background: `${colors.primary}04` }}>
              <div className={`${s.serviceIcon} rounded-md mb-1 flex items-center justify-center`} style={{ background: `${colors.primary}12` }}>
                <IconComp className={s.serviceIconInner} />
              </div>
              <span className={`${s.serviceName} font-semibold block leading-tight`} style={{ color: "#0f172a" }}>{service}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PreviewAboutQuote({ scale, colors, specialty, doctorTitle, displayName, initials }: PreviewProps) {
  const s = sizes[scale];
  const quote = quotesBySpecialty[specialty] || quotesBySpecialty["Odontología General"];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy}`} style={{ background: "#f8fafc", animationDelay: "0.2s" }}>
      <div className={`rounded-xl ${scale === "mini" ? "p-4" : "p-6"} border`} style={{ background: `linear-gradient(135deg, ${colors.bg}, white)`, borderColor: `${colors.primary}10` }}>
        <svg className={`${s.quoteIcon} mb-2`} style={{ color: `${colors.primary}30` }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
        </svg>
        <p className={`${s.quoteText} italic leading-relaxed`} style={{ color: "#334155" }}>
          &ldquo;{quote}&rdquo;
        </p>
        <div className={`flex items-center gap-2 ${scale === "mini" ? "mt-3" : "mt-4"}`}>
          <div className={`${s.avatarSize} rounded-full flex items-center justify-center relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})` }}>
            <svg className={`${scale === "mini" ? "w-4 h-4" : "w-7 h-7"} text-white/30 absolute bottom-0`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            <span className={`${s.avatarText} font-bold text-white relative z-10`}>{initials}</span>
          </div>
          <div>
            <p className={`${s.quoteName} font-bold`} style={{ color: "#0f172a" }}>{doctorTitle} {displayName}</p>
            <p className={s.quoteSub} style={{ color: "#94a3b8" }}>Cirujano Dentista</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCredentials({ scale, colors, specialty }: Pick<PreviewProps, "scale" | "colors" | "specialty">) {
  const s = sizes[scale];
  const credentials = credentialsBySpecialty[specialty] || credentialsBySpecialty["Odontología General"];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy} bg-white`} style={{ animationDelay: "0.25s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Formación y Trayectoria
      </p>
      <div className="relative pl-4">
        <div className="absolute left-[5px] top-1 bottom-1 w-px" style={{ background: `${colors.primary}20` }} />
        <div className="space-y-2.5">
          {credentials.map((cred, i) => (
            <div key={i} className="relative flex items-start gap-3">
              <div className={`absolute -left-[13px] top-1 ${s.credDot} rounded-full ring-2 ring-white`} style={{ background: colors.primary }} />
              <div className={`flex-1 rounded-lg ${scale === "mini" ? "p-2" : "p-3"} border`} style={{ borderColor: `${colors.primary}10`, background: `${colors.primary}03` }}>
                <span className={`${s.credYear} font-bold px-1.5 py-0.5 rounded-full`} style={{ background: `${colors.primary}12`, color: colors.primary }}>
                  {cred.year}
                </span>
                <p className={`${s.credText} font-medium mt-1 leading-snug`} style={{ color: "#0f172a" }}>{cred.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewBeforeAfterCases({ scale, colors, specialty }: Pick<PreviewProps, "scale" | "colors" | "specialty">) {
  const s = sizes[scale];
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const gallery = galleryBySpecialty[specialty] || galleryBySpecialty["Odontología General"];

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (dragging.current) updatePos(e.clientX);
  }, [updatePos]);

  const onPointerUp = useCallback(() => { dragging.current = false; }, []);

  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy}`} style={{ background: "#f8fafc", animationDelay: "0.3s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Casos Clínicos — Antes y Después
      </p>

      {/* Interactive Before/After Slider */}
      <div
        ref={containerRef}
        className={`relative ${scale === "mini" ? "h-28" : "h-44 sm:h-52"} rounded-xl overflow-hidden cursor-col-resize select-none border`}
        style={{ borderColor: `${colors.primary}20` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* BEFORE side (full background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`${scale === "mini" ? "w-10 h-10" : "w-14 h-14"} mx-auto rounded-full bg-amber-100/60 flex items-center justify-center mb-1`}>
                <ToothIcon className={`${scale === "mini" ? "w-5 h-5" : "w-7 h-7"} text-amber-400/70`} />
              </div>
              <p className={`${scale === "mini" ? "text-[8px]" : "text-xs"} font-bold text-amber-700`}>Caso Inicial</p>
            </div>
          </div>
          <span className={`absolute top-2 left-2 ${scale === "mini" ? "text-[6px]" : "text-[9px]"} font-bold text-amber-800 bg-amber-200/80 px-1.5 py-0.5 rounded-full`}>ANTES</span>
        </div>

        {/* AFTER side (on top, revealed from right) */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`${scale === "mini" ? "w-10 h-10" : "w-14 h-14"} mx-auto rounded-full flex items-center justify-center mb-1`} style={{ background: `${colors.primary}12`, color: colors.primary }}>
                <ToothIcon className={`${scale === "mini" ? "w-5 h-5" : "w-7 h-7"}`} />
              </div>
              <p className={`${scale === "mini" ? "text-[8px]" : "text-xs"} font-bold`} style={{ color: colors.primary }}>Resultado</p>
            </div>
          </div>
          <span className={`absolute top-2 right-2 ${scale === "mini" ? "text-[6px]" : "text-[9px]"} font-bold text-white px-1.5 py-0.5 rounded-full`} style={{ background: colors.primary }}>DESPUÉS</span>
        </div>

        {/* Slider divider + handle */}
        <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="w-0.5 h-full bg-white shadow-sm" />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${scale === "mini" ? "w-5 h-5" : "w-7 h-7"} rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center`}>
            <svg className={`${scale === "mini" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Case cards below slider */}
      <div className="grid grid-cols-2 gap-1.5 mt-2">
        {gallery.slice(0, 2).map((item, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
            <div className={`${scale === "mini" ? "h-10" : "h-16"} relative`} style={{ background: `linear-gradient(135deg, ${colors.bg}, ${colors.light}30)` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <ToothIcon className={`${scale === "mini" ? "w-4 h-4" : "w-6 h-6"} opacity-15`} />
              </div>
            </div>
            <div className={`${scale === "mini" ? "p-1.5" : "p-2"} bg-white`}>
              <p className={`${s.galleryTitle} font-semibold leading-tight`} style={{ color: "#0f172a" }}>{item.title}</p>
              <span className={`${s.galleryTag} font-medium px-1.5 py-0.5 rounded-full inline-block mt-0.5`} style={{ background: `${colors.primary}10`, color: colors.primary }}>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <p className={`${scale === "mini" ? "text-[7px]" : "text-[10px]"} text-center text-gray-400 mt-1.5 italic`}>
        Arrastra el slider para comparar
      </p>
    </div>
  );
}

const testimonialColors = ["#1E40AF", "#059669", "#DB2777", "#B45309"];

function PreviewTestimonials({ scale, colors }: Pick<PreviewProps, "scale" | "colors">) {
  const s = sizes[scale];
  const testimonials = [
    { name: "Claudia A.", text: "Excelente profesional. Me devolvió la confianza para sonreír. Recomendado 100%.", time: "hace 2 meses" },
    { name: "Patricio M.", text: "El mejor dentista de La Serena. Atención de primera y sin dolor.", time: "hace 1 mes" },
    { name: "Andrea S.", text: "Muy contenta con el resultado. Profesional, puntual y con excelente trato humano.", time: "hace 3 semanas" },
  ];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy}`} style={{ background: "#f8fafc", animationDelay: "0.35s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Testimonios
      </p>
      <div className={`grid ${scale === "mini" ? "grid-cols-3" : "grid-cols-3"} gap-2`}>
        {testimonials.map((t, i) => {
          const avatarColor = testimonialColors[i % testimonialColors.length];
          const avatarInitials = t.name.split(" ").map(n => n[0]).join("");
          return (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className={`${s.testimonialAvatar} rounded-full flex items-center justify-center shrink-0`} style={{ background: avatarColor }}>
                  <span className={`${s.testimonialAvatarText} font-bold text-white`}>{avatarInitials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className={`${s.testimonialName} font-semibold truncate`} style={{ color: "#0f172a" }}>{t.name}</span>
                    <svg className={`${scale === "mini" ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} shrink-0`} style={{ color: "#3B82F6" }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className={`${s.testimonialTime}`} style={{ color: "#94a3b8" }}>{t.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className={`${s.testimonialStar} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className={`${s.testimonialText} leading-snug`} style={{ color: "#64748b" }}>&ldquo;{t.text}&rdquo;</p>
              {/* Mini Google logo */}
              <div className="flex items-center gap-1 mt-1.5">
                <svg className={scale === "mini" ? "w-2 h-2" : "w-3 h-3"} viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className={`${s.testimonialBadge} font-medium`} style={{ color: "#94a3b8" }}>Google</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PreviewConvenios({ scale, colors }: Pick<PreviewProps, "scale" | "colors">) {
  const s = sizes[scale];
  const convenios = ["Fonasa", "Colmena", "Cruz Blanca", "Banmédica", "Consalud", "Vida Tres"];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy} bg-white`} style={{ animationDelay: "0.37s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Convenios
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {convenios.map((name) => (
          <div key={name} className="flex items-center gap-1.5 p-1.5 rounded-lg border border-gray-100 bg-gray-50/50">
            <div className={`${scale === "mini" ? "w-5 h-5" : "w-7 h-7"} rounded-md flex items-center justify-center shrink-0`} style={{ background: `${colors.primary}08`, color: colors.primary }}>
              <ShieldToothIcon className={`${scale === "mini" ? "w-3 h-3" : "w-4 h-4"}`} />
            </div>
            <span className={`${scale === "mini" ? "text-[7px]" : "text-[11px]"} font-medium leading-tight`} style={{ color: "#334155" }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewBooking({ scale, colors }: Pick<PreviewProps, "scale" | "colors">) {
  const s = sizes[scale];
  const slots = [
    { day: "Lun", time: "10:00" },
    { day: "Mar", time: "15:30" },
    { day: "Mié", time: "09:00" },
  ];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy}`} style={{ background: "#f8fafc", animationDelay: "0.39s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Reserva tu Hora Online
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map((slot) => (
          <div key={slot.day + slot.time} className="rounded-lg border border-gray-100 bg-white p-2 text-center">
            <p className={`${scale === "mini" ? "text-[8px]" : "text-xs"} font-bold`} style={{ color: colors.primary }}>{slot.day}</p>
            <p className={`${scale === "mini" ? "text-[10px]" : "text-sm"} font-extrabold mt-0.5`} style={{ color: "#0f172a" }}>{slot.time}</p>
            <div className={`mt-1.5 ${scale === "mini" ? "text-[7px] py-0.5" : "text-[10px] py-1"} font-semibold text-white rounded-full`} style={{ background: colors.primary }}>
              Agendar
            </div>
          </div>
        ))}
      </div>
      <p className={`${scale === "mini" ? "text-[7px]" : "text-[10px]"} text-center mt-2`} style={{ color: "#94a3b8" }}>
        Selecciona un horario y confirma por WhatsApp
      </p>
    </div>
  );
}

function PreviewLocation({ scale, colors, phone }: Pick<PreviewProps, "scale" | "colors" | "phone">) {
  const s = sizes[scale];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy} bg-white`} style={{ animationDelay: "0.4s" }}>
      <p className={`${s.sectionTitle} font-bold uppercase tracking-widest mb-3`} style={{ color: colors.primary }}>
        Ubicación
      </p>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-2 space-y-1.5">
          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <div className="flex items-center gap-1 mb-0.5">
              <svg className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              <span className={`${s.locationLabel} font-semibold`} style={{ color: "#0f172a" }}>Dirección</span>
            </div>
            <p className={`${s.locationText} leading-snug`} style={{ color: "#94a3b8" }}>Balmaceda 461, Of. 204, La Serena</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <div className="flex items-center gap-1 mb-0.5">
              <svg className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <span className={`${s.locationLabel} font-semibold`} style={{ color: "#0f172a" }}>Teléfono</span>
            </div>
            <p className={s.locationText} style={{ color: colors.primary }}>{phone}</p>
          </div>
          {/* Schedule card */}
          <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
            <div className="flex items-center gap-1 mb-0.5">
              <svg className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} style={{ color: colors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className={`${s.scheduleTitle} font-semibold`} style={{ color: "#0f172a" }}>Horario</span>
            </div>
            <p className={`${s.scheduleText} leading-snug`} style={{ color: "#94a3b8" }}>Lun-Vie: 9:00-18:00</p>
            <p className={`${s.scheduleText} leading-snug`} style={{ color: "#94a3b8" }}>Sab: 9:00-13:00</p>
          </div>
          <div className="rounded-lg p-2 text-white text-center" style={{ background: "#25D366" }}>
            <p className={`${scale === "mini" ? "text-[8px]" : "text-sm"} font-bold`}>WhatsApp</p>
          </div>
        </div>
        <div className={`col-span-3 rounded-lg overflow-hidden border border-gray-100 bg-gray-100 relative ${s.mapMin}`}>
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, #e2e8f0 100%)` }}>
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 120">
              <line x1="30" y1="0" x2="30" y2="120" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="80" y1="0" x2="80" y2="120" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="130" y1="0" x2="130" y2="120" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="170" y1="0" x2="170" y2="120" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="0" y1="30" x2="200" y2="30" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="0" y1="65" x2="200" y2="65" stroke={colors.primary} strokeWidth="0.5" />
              <line x1="0" y1="95" x2="200" y2="95" stroke={colors.primary} strokeWidth="0.5" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shadow-md" style={{ background: colors.primary }}>
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                <div className="w-1.5 h-1.5 rounded-full mt-[-2px] opacity-30" style={{ background: colors.primary }} />
              </div>
            </div>
            <p className={`absolute bottom-1 right-2 ${s.mapCity} font-medium`} style={{ color: colors.primary }}>La Serena, Chile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewCta({ scale, colors }: Pick<PreviewProps, "scale" | "colors">) {
  const s = sizes[scale];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${s.sectionPy}`} style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})`, animationDelay: "0.45s" }}>
      <div className="text-center">
        <p className={`${s.ctaTitle} font-extrabold text-white`}>Agenda tu evaluación sin costo</p>
        <p className={`${s.ctaSub} text-white/80 mt-1`}>Primer consulta de diagnóstico gratuita</p>
        <div className={`flex justify-center gap-2 ${scale === "mini" ? "mt-2" : "mt-4"}`}>
          <span className={`${s.ctaBtn} font-bold text-green-800 bg-white px-3 ${scale === "mini" ? "py-1" : "py-2"} rounded-full inline-flex items-center gap-1 shadow-sm`}>
            <svg className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
            WhatsApp
          </span>
          <span className={`${s.ctaBtn} font-bold text-white border border-white/40 px-3 ${scale === "mini" ? "py-1" : "py-2"} rounded-full inline-flex items-center gap-1`}>
            <svg className={scale === "mini" ? "w-2.5 h-2.5" : "w-4 h-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            Llamar
          </span>
        </div>
      </div>
    </div>
  );
}

function PreviewFooter({ scale, colors, doctorTitle, displayName, specialty, phone }: PreviewProps) {
  const s = sizes[scale];
  return (
    <div className={`preview-reveal ${s.sectionPx} ${scale === "mini" ? "py-4" : "py-6"}`} style={{ background: "#0f172a", animationDelay: "0.5s" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${s.footerName} font-bold text-white`}>{doctorTitle} {displayName}</p>
          <p className={`${s.footerSub} text-gray-500 mt-0.5`}>{specialty} &middot; La Serena</p>
        </div>
        <div className={`hidden sm:flex gap-3 ${s.footerLinks}`} style={{ color: "#94a3b8" }}>
          <span>Inicio</span>
          <span>Servicios</span>
          <span>Trayectoria</span>
          <span>Contacto</span>
        </div>
      </div>
      <div className={`mt-3 pt-3 border-t border-white/5 flex items-center justify-between`}>
        <div className="flex items-center gap-1.5">
          {/* Instagram */}
          <div className={`${s.footerSocial} rounded-full bg-white/10 flex items-center justify-center`}>
            <svg className={`${s.footerSocialIcon} text-gray-400`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
          </div>
          {/* Facebook */}
          <div className={`${s.footerSocial} rounded-full bg-white/10 flex items-center justify-center`}>
            <svg className={`${s.footerSocialIcon} text-gray-400`} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </div>
          {/* Email */}
          <div className={`${s.footerSocial} rounded-full bg-white/10 flex items-center justify-center`}>
            <svg className={`${s.footerSocialIcon} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
          </div>
        </div>
        <p className={`${s.footerCopy} text-gray-600`}>{phone}</p>
      </div>
      <div className={`mt-2 flex items-center justify-between`}>
        <p className={`${s.footerCopy} text-gray-600`}>&copy; 2026 {doctorTitle} {displayName}</p>
        <p className={`${s.footerCopy} flex items-center gap-1`} style={{ color: "#64748b" }}>
          <svg className={scale === "mini" ? "w-2 h-2" : "w-3 h-3"} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          Creado por DentalWeb
        </p>
      </div>
    </div>
  );
}

/* ─────────────── BEFORE STATE (Google Search) ────────────────── */

function BeforeState({ specialty, doctorTitle, displayName, initials, colors }: {
  specialty: string; doctorTitle: string; displayName: string; initials: string;
  colors: { primary: string; light: string; bg: string };
}) {
  const starIcon = (filled: boolean) => (
    <svg className={`w-2 h-2 ${filled ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="animate-fadeIn bg-white p-4 sm:p-5 space-y-3">
      {/* Google search bar */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 shadow-sm">
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span className="text-[10px] sm:text-xs text-gray-600 truncate flex-1">{specialty.toLowerCase()} la serena</span>
        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>

      <p className="text-[9px] text-gray-400">Aproximadamente 24.500 resultados (0,42 s)</p>

      {/* Competitor 1 — with website */}
      <div className="p-2.5 rounded-lg border border-gray-100">
        <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-0.5">
          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-[7px] font-bold text-blue-600">C</span>
          </div>
          www.clinica-dental-serena.cl
        </div>
        <p className="text-[11px] sm:text-xs text-[#1a0dab] font-medium leading-snug">
          Clínica Dental Premium — {specialty} | La Serena
        </p>
        <p className="text-[9px] text-gray-600 mt-0.5 leading-relaxed">
          Más de 15 años de experiencia. Agenda online, equipos de última generación. Primera consulta sin costo.
        </p>
        <div className="flex items-center gap-0.5 mt-1">
          {[1,2,3,4,5].map(i => <span key={i}>{starIcon(true)}</span>)}
          <span className="text-[8px] text-gray-500 ml-1">4.8 (127 reseñas)</span>
        </div>
      </div>

      {/* Competitor 2 */}
      <div className="p-2.5 rounded-lg border border-gray-100">
        <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-0.5">
          <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-[7px] font-bold text-green-600">S</span>
          </div>
          www.sonrisas-serena.cl
        </div>
        <p className="text-[11px] sm:text-xs text-[#1a0dab] font-medium leading-snug">
          Sonrisas La Serena — Tu Dentista de Confianza
        </p>
        <p className="text-[9px] text-gray-600 mt-0.5">
          Atención integral para toda la familia. Tecnología de punta, ambiente acogedor...
        </p>
      </div>

      {/* Maps / Places section */}
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border-b border-gray-100">
          <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="text-[10px] font-medium text-gray-700">Lugares</span>
        </div>
        <div className="p-2 space-y-1.5">
          {/* The dentist — no web */}
          <div className="flex items-center gap-2 p-2 rounded-lg bg-red-50/60 border border-red-100/60">
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.light})` }}>
              <span className="text-[8px] font-bold text-white">{initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold truncate">{doctorTitle} {displayName}</p>
              <p className="text-[8px] text-gray-400">La Serena · Sin sitio web</p>
              <p className="text-[8px] text-gray-400">Sin reseñas</p>
            </div>
            <div className="flex flex-col gap-1 items-end shrink-0">
              <span className="text-[7px] font-semibold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">Sin web</span>
              <span className="text-[7px] text-gray-400">0 fotos</span>
            </div>
          </div>

          {/* Competitor with web */}
          <div className="flex items-center gap-2 p-2 rounded-lg">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold text-blue-600">CD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold truncate">Clínica Dental Premium</p>
              <p className="text-[8px] text-green-600">clinica-dental-serena.cl</p>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[1,2,3,4,5].map(i => <span key={i}>{starIcon(true)}</span>)}
                <span className="text-[8px] text-gray-500 ml-0.5">4.8 (127)</span>
              </div>
            </div>
          </div>

          {/* Another competitor */}
          <div className="flex items-center gap-2 p-2 rounded-lg">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold text-green-600">SS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold truncate">Sonrisas La Serena</p>
              <p className="text-[8px] text-green-600">sonrisas-serena.cl</p>
              <div className="flex items-center gap-0.5 mt-0.5">
                {[1,2,3,4].map(i => <span key={i}>{starIcon(true)}</span>)}
                {starIcon(false)}
                <span className="text-[8px] text-gray-500 ml-0.5">4.5 (89)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom callout */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100/80 text-center">
        <p className="text-[11px] sm:text-xs font-bold text-red-800">Tu competencia ya tiene web profesional</p>
        <p className="text-[9px] sm:text-[10px] text-red-600/80 mt-0.5">...y tú no tienes nada que mostrar cuando un paciente te pide tu web</p>
      </div>
    </div>
  );
}

/* ───────────────────── MAIN COMPONENT ──────────────────────── */

export default function DemoMagica() {
  const ref = useInView();
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phone, setPhone] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [viewMode, setViewMode] = useState<"before" | "after">("after");

  const closeModal = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (!showModal) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [showModal, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && specialty && phone) setShowPreview(true);
  };

  const colors = colorsBySpecialty[specialty] || colorsBySpecialty["Odontología General"];
  const doctorTitle = specialty === "Odontopediatría" || specialty === "Estética Dental" ? "Dra." : "Dr.";
  const displayName = name || "Tu Nombre";
  const initials = displayName.split(" ").map(n => n[0]?.toUpperCase() || "").join("").slice(0, 2);
  const domain = name ? `${name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}.cl` : "tunombre.cl";

  const previewProps: PreviewProps = { scale: "mini", colors, specialty, doctorTitle, displayName, initials, phone, domain };

  function renderPreview(scale: Scale) {
    const props: PreviewProps = { ...previewProps, scale };
    return (
      <div className="transition-all duration-500">
        <PreviewNavbar {...props} />
        <PreviewHero {...props} />
        <PreviewStats scale={scale} colors={colors} />
        <PreviewServices scale={scale} colors={colors} specialty={specialty} />
        <PreviewAboutQuote {...props} />
        <PreviewCredentials scale={scale} colors={colors} specialty={specialty} />
        <PreviewBeforeAfterCases scale={scale} colors={colors} specialty={specialty} />
        <PreviewTestimonials scale={scale} colors={colors} />
        <PreviewConvenios scale={scale} colors={colors} />
        <PreviewLocation scale={scale} colors={colors} phone={phone} />
        <PreviewCta scale={scale} colors={colors} />
        <PreviewFooter {...props} />
      </div>
    );
  }

  return (
    <section id="demo" className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Demo Interactiva</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Mira cómo se vería{" "}
            <span className="gradient-text">tu web</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Ingresa tus datos y en segundos verás un preview real de tu página web dental personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="fade-up lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 shadow-sm">
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

              {/* Toggle bar — only when preview is generated */}
              {showPreview && (
                <div className="flex border-b border-border bg-[#F1F5F9]">
                  <button
                    onClick={() => setViewMode("before")}
                    className={`flex-1 px-3 py-2 text-[10px] sm:text-xs font-semibold transition-all ${
                      viewMode === "before"
                        ? "text-red-600 border-b-2 border-red-500 bg-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Sin Web
                    </span>
                  </button>
                  <button
                    onClick={() => setViewMode("after")}
                    className={`flex-1 px-3 py-2 text-[10px] sm:text-xs font-semibold transition-all ${
                      viewMode === "after"
                        ? "text-green-600 border-b-2 border-green-500 bg-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Con DentalWeb
                    </span>
                  </button>
                </div>
              )}

              {/* Mini website preview — scrollable + clickable */}
              <div
                className={`relative overflow-y-auto max-h-[280px] sm:max-h-[400px] ${showPreview && viewMode === "after" ? "cursor-pointer group" : ""}`}
                style={{ background: showPreview ? "#fff" : "#F8FAFB" }}
                onClick={() => { if (showPreview && viewMode === "after") setShowModal(true); }}
              >
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
                ) : viewMode === "before" ? (
                  <BeforeState
                    specialty={specialty}
                    doctorTitle={doctorTitle}
                    displayName={displayName}
                    initials={initials}
                    colors={colors}
                  />
                ) : (
                  <>
                    {renderPreview("mini")}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 backdrop-blur-sm text-gray-800 font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        Ver sitio completo
                      </span>
                    </div>
                  </>
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

      {/* ─── MODAL ─── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative flex flex-col w-full h-full max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F1F5F9] border-b border-border shrink-0">
              <div className="hidden sm:flex gap-1.5">
                <button onClick={closeModal} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" aria-label="Cerrar" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-gray-400 text-center truncate flex items-center justify-center gap-1.5">
                  <svg className="w-3 h-3 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  {domain}
                </div>
              </div>
              <button onClick={closeModal} className="hidden sm:flex w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors items-center justify-center" aria-label="Cerrar">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto bg-white">
              {renderPreview("full")}
            </div>

            {/* Mobile bottom bar */}
            <div className="sm:hidden shrink-0 px-4 py-3 bg-white border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-500 truncate">{domain}</span>
              <button onClick={closeModal} className="text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" style={{ color: colors.primary }}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
