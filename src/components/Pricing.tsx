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
    name: "Esencial",
    tagline: "Que los pacientes te encuentren y te escriban",
    monthly: 19990,
    annual: 15990,
    annualSaving: 48000,
    cta: "Comenzar ahora",
    ctaStyle: "outline",
    featuresTitle: "Qué incluye",
    features: [
      { text: "Web de una sola página (todo en un scroll)", included: true },
      { text: "WhatsApp integrado y llamada directa", included: true },
      { text: "Tus tratamientos con descripción", included: true },
      { text: "Perfil del doctor con foto y especialidad", included: true },
      { text: "Horarios y mapa de ubicación", included: true },
      { text: "Optimizada para Google", included: true },
      { text: "Responsive (celular y computador)", included: true },
      { text: "1 cambio de contenido al mes", included: true },
      { text: "Soporte en 72h", included: true },
      { text: "Google Analytics y Meta Pixel", included: false },
      { text: "Galería de casos", included: false },
      { text: "Antes/después de tratamientos", included: false },
    ],
    featured: false,
  },
  {
    emoji: "😁",
    name: "Profesional",
    tagline: "Muestra tus casos y genera confianza real",
    monthly: 34990,
    annual: 27990,
    annualSaving: 84000,
    cta: "Comenzar ahora",
    ctaStyle: "filled",
    featuresTitle: "Todo lo Esencial más",
    features: [
      { text: "1 página con todas las secciones incluidas", included: true, highlight: true },
      { text: "Slider antes/después de tratamientos", included: true, highlight: true },
      { text: "Galería de casos reales", included: true, highlight: true },
      { text: "Testimonios de pacientes", included: true },
      { text: "Página por cada tratamiento", included: true },
      { text: "Diplomas y certificaciones", included: true },
      { text: "Formas de pago visibles", included: true },
      { text: "Preguntas frecuentes", included: true },
      { text: "Google Analytics y Meta Pixel", included: true },
      { text: "2 cambios de contenido al mes", included: true },
      { text: "Soporte en 48h", included: true },
      { text: "Blog con tips dentales (IA)", included: false },
    ],
    featured: true,
  },
  {
    emoji: "💎",
    name: "Premium",
    tagline: "La clínica dental más completa de tu ciudad",
    monthly: 49990,
    annual: 39990,
    annualSaving: 120000,
    cta: "Comenzar ahora",
    ctaStyle: "premium",
    featuresTitle: "Todo lo Profesional más",
    features: [
      { text: "Soporte prioritario (24h)", included: true, highlight: true, star: true },
      { text: "Blog con tips dentales generados por IA", included: true, highlight: true, star: true },
      { text: "4 cambios de contenido al mes", included: true, highlight: true, star: true },
      { text: "Páginas ilimitadas", included: true },
      { text: "Convenios, Fonasa e isapres", included: true },
      { text: "Perfil de cada doctor del equipo", included: true },
      { text: "Pop-up de captación de pacientes", included: true },
      { text: "Sección de tecnología de la clínica", included: true },
      { text: "Contadores de experiencia", included: true },
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
    text: "Sin contratos largos",
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
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Planes simples</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Todo incluido,{" "}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-lg mx-auto">
            Hosting, dominio, mantenimiento y soporte. Elige tu plan y empieza hoy.
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
            const whatsappMsg = encodeURIComponent(`Hola, me interesa el plan ${plan.name} de DentalWeb`);
            const whatsappUrl = `https://wa.me/56984494128?text=${whatsappMsg}`;

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
                    ⭐ Más elegido por dentistas
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
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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

        {/* Trust footer */}
        <div className="fade-up fade-up-delay-4 mt-12 sm:mt-14 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            <span className="text-text-muted text-xs sm:text-sm font-medium">🔒 Pago seguro</span>
            <span className="text-text-muted text-xs sm:text-sm font-medium">❌ Sin contratos de permanencia</span>
            <span className="text-text-muted text-xs sm:text-sm font-medium">🔄 Cancela cuando quieras</span>
            <span className="text-text-muted text-xs sm:text-sm font-medium">🚀 Web lista en 48 horas</span>
          </div>
          <p className="text-text-muted text-xs max-w-md mx-auto">
            Todos los planes incluyen hosting, dominio .cl, certificado SSL y soporte técnico. Precios en CLP, facturación mensual o anual.
          </p>
        </div>
      </div>
    </section>
  );
}
