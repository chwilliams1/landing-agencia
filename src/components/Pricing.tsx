"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

interface Feature {
  text: string;
  included: boolean;
  highlight?: boolean;
  star?: boolean;
}

interface Plan {
  emoji: string;
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  annualSaving: number;
  cta: string;
  ctaStyle: "outline" | "filled" | "premium";
  featuresTitle: string;
  features: Feature[];
  featured: boolean;
}

const formatCLP = (n: number) => n.toLocaleString("es-CL");

const plans: Plan[] = [
  {
    emoji: "🦷",
    name: "Presencia",
    tagline: "Tu consulta con presencia digital profesional",
    monthly: 19990,
    annual: 15990,
    annualSaving: 48000,
    cta: "Comenzar ahora",
    ctaStyle: "outline",
    featuresTitle: "Qué incluye",
    features: [
      { text: "Web profesional de una página", included: true },
      { text: "WhatsApp integrado y llamada directa", included: true },
      { text: "Perfil del doctor con foto y especialidad", included: true },
      { text: "Tratamientos con descripción", included: true },
      { text: "Horarios y mapa de ubicación", included: true },
      { text: "Diseño profesional optimizado para celular", included: true },
      { text: "Responsive (celular y computador)", included: true },
      { text: "Hosting, dominio .cl y SSL incluidos", included: true },
      { text: "Mantenimiento técnico y seguridad continua", included: true },
      { text: "Galería de casos y antes/después", included: false },
      { text: "Blog de contenido automático con IA", included: false },
    ],
    featured: false,
  },
  {
    emoji: "📈",
    name: "Crecimiento",
    tagline: "Tu web trabaja por ti mientras atiendes pacientes",
    monthly: 34990,
    annual: 27990,
    annualSaving: 84000,
    cta: "Comenzar ahora",
    ctaStyle: "filled",
    featuresTitle: "Todo lo de Presencia más",
    features: [
      { text: "Slider antes/después de tratamientos", included: true, highlight: true },
      { text: "Galería de casos reales", included: true, highlight: true },
      { text: "Diplomas y certificaciones", included: true },
      { text: "Testimonios de pacientes", included: true },
      { text: "Formas de pago visibles", included: true },
      { text: "Preguntas frecuentes", included: true },
      { text: "Google Analytics y Meta Pixel", included: true },
      { text: "2 cambios de contenido bajo demanda", included: true },
      { text: "Blog de contenido automático con IA", included: false },
      { text: "Soporte prioritario", included: false },
    ],
    featured: true,
  },
  {
    emoji: "🤖",
    name: "Autopilot",
    tagline: "Marketing dental automatizado con IA",
    monthly: 49990,
    annual: 39990,
    annualSaving: 120000,
    cta: "Comenzar ahora",
    ctaStyle: "outline",
    featuresTitle: "Todo lo de Crecimiento más",
    features: [
      { text: "Blog automático (2 artículos/mes con IA)", included: true, highlight: true, star: true },
      { text: "Biblioteca de contenido que crece cada mes", included: true, highlight: true, star: true },
      { text: "Hasta 10 páginas", included: true },
      { text: "Perfil de cada doctor del equipo", included: true },
      { text: "Convenios, Fonasa e isapres", included: true },
      { text: "Pop-up de captación de pacientes", included: true },
      { text: "Soporte prioritario (respuesta en el día)", included: true },
      { text: "4 cambios de contenido bajo demanda", included: true },
    ],
    featured: false,
  },
];

const includes = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    text: "Hosting incluido",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    text: "Dominio .cl incluido",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385-5.385a1.061 1.061 0 010-1.5l.708-.708a1.06 1.06 0 011.5 0L12 11.334l3.757-3.757a1.06 1.06 0 011.5 0l.708.708a1.061 1.061 0 010 1.5L12.58 15.17a.82.82 0 01-1.16 0z" />
      </svg>
    ),
    text: "Soporte técnico",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    text: "Mantenimiento automático",
  },
];

export default function Pricing() {
  const ref = useInView();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="precio" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Planes</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tu web dental{" "}
            <span className="gradient-text">funcionando en automático</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-lg mx-auto">
            Hosting, dominio .cl, seguridad y mantenimiento incluido en todos los planes. Una agencia tradicional cobra $800.000+ por algo similar.
          </p>
        </div>

        {/* Toggle */}
        <div className="fade-up fade-up-delay-2 flex items-center justify-center gap-3 mb-8">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-text-primary" : "text-text-muted"}`}>
            Mensual
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-[52px] h-7 rounded-full transition-colors duration-300 ${isAnnual ? "bg-accent" : "bg-border"}`}
            aria-label="Toggle anual"
          >
            <div
              className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-md transition-all duration-300 ${isAnnual ? "left-[27px]" : "left-[3px]"}`}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-text-primary" : "text-text-muted"}`}>
            Anual
          </span>
          <span className="bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Ahorra 20%
          </span>
        </div>

        {/* Includes bar */}
        <div className="fade-up fade-up-delay-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 sm:mb-12">
          {includes.map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-text-muted text-xs sm:text-sm">
              <span className="text-accent">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 max-w-[420px] lg:max-w-none mx-auto">
          {plans.map((plan, i) => {
            const price = isAnnual ? plan.annual : plan.monthly;
            const intakeUrl = `/intake?plan=${plan.name.toLowerCase()}`;

            return (
              <div
                key={plan.name}
                className={`fade-up fade-up-delay-${Math.min(i + 2, 4)} flex flex-col bg-bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? "border-2 border-accent shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/15"
                    : "border-2 border-border shadow-sm hover:shadow-lg hover:shadow-black/5 lg:mt-[30px]"
                }`}
              >
                {/* Featured ribbon */}
                {plan.featured && (
                  <div className="bg-accent text-white text-center text-[11px] font-bold uppercase tracking-widest py-1.5">
                    ⭐ Recomendado
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Plan header */}
                  <div className="mb-5">
                    <span className="text-2xl">{plan.emoji}</span>
                    <h3 className="text-xl font-bold text-text-primary mt-2">{plan.name}</h3>
                    <p className="text-text-muted text-xs sm:text-sm mt-1 min-h-[2.5rem]">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl font-extrabold ${plan.featured ? "text-accent" : "text-text-primary"}`}>
                        ${formatCLP(price)}
                      </span>
                      <span className="text-text-muted text-sm">/mes</span>
                    </div>
                    <div className="h-5 mt-1">
                      {isAnnual && (
                        <p className="text-amber-600 text-xs font-medium">
                          Ahorras ${formatCLP(plan.annualSaving)} al año
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={intakeUrl}
                    className={`block w-full text-center font-bold py-3 rounded-full transition-all text-sm sm:text-base ${
                      plan.ctaStyle === "filled"
                        ? "bg-accent hover:bg-accent-light text-white shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
                        : plan.ctaStyle === "premium"
                          ? "bg-gradient-to-br from-amber-500 to-amber-400 text-white shadow-md shadow-amber-500/25 hover:brightness-105 hover:-translate-y-0.5"
                          : "border-2 border-accent text-accent hover:bg-accent/5"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Divider */}
                  <div className="border-t border-border my-5" />

                  {/* Features */}
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-3">
                    {plan.featuresTitle}
                  </p>
                  <ul className="space-y-1.5 flex-1">
                    {plan.features.map((feat) => (
                      <li
                        key={feat.text}
                        className={`flex items-start gap-2 py-1 text-[13px] sm:text-sm ${
                          feat.included ? "text-text-secondary" : "text-border"
                        }`}
                      >
                        <span
                          className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold ${
                            !feat.included
                              ? "bg-gray-100 text-border"
                              : feat.star
                                ? "bg-amber-50 text-amber-500"
                                : "bg-accent/10 text-accent"
                          }`}
                        >
                          {!feat.included ? "–" : feat.star ? "★" : "✓"}
                        </span>
                        <span className={feat.highlight ? "font-semibold text-text-primary" : ""}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="fade-up fade-up-delay-4 mt-12 sm:mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {/* Pago seguro */}
            <div className="flex flex-col items-center text-center bg-bg-card border border-border rounded-xl p-4 sm:p-5">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text-primary">Pago seguro</span>
              <span className="text-[11px] text-text-muted mt-0.5">SSL y cifrado</span>
            </div>

            {/* Sin contratos */}
            <div className="flex flex-col items-center text-center bg-bg-card border border-border rounded-xl p-4 sm:p-5">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text-primary">Sin contratos</span>
              <span className="text-[11px] text-text-muted mt-0.5">Cancela cuando quieras</span>
            </div>

            {/* Web en 48h */}
            <div className="flex flex-col items-center text-center bg-bg-card border border-border rounded-xl p-4 sm:p-5">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-text-primary">Web en 48 horas</span>
              <span className="text-[11px] text-text-muted mt-0.5">Entrega ultra rápida</span>
            </div>

          </div>

          <p className="text-text-muted text-xs max-w-md mx-auto text-center mt-5">
            Todos los planes incluyen hosting, dominio .cl, SSL, mantenimiento automático y soporte. Sin contratos, cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
