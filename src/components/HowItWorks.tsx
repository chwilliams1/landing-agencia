"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "1",
    title: "Conversemos",
    description:
      "Nos escribes por WhatsApp, nos cuentas sobre tu consulta y especialidad. Sin compromiso.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Diseñamos tu web",
    description:
      "Creamos un diseño profesional adaptado a tu especialidad, con tu marca y colores.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Revisas y apruebas",
    description:
      "Te mostramos un preview. Pides ajustes hasta que quedes 100% conforme.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "¡Tu web está online!",
    description:
      "Publicamos tu web con dominio .cl propio y tus pacientes te escriben directo por WhatsApp.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useInView();

  return (
    <section id="proceso" className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Proceso</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            De cero a web publicada{" "}
            <span className="gradient-text">en 4 pasos</span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

            {steps.map((step, i) => (
              <div key={step.number} className={`fade-up fade-up-delay-${i + 1} relative text-center`}>
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] mx-auto bg-bg-card border-2 border-accent/30 rounded-full flex items-center justify-center text-accent shadow-lg shadow-accent/5">
                  {step.icon}
                </div>
                <div className="mt-6 bg-bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div key={step.number} className={`fade-up fade-up-delay-${i + 1} flex gap-3 sm:gap-4`}>
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-bg-card border-2 border-accent/30 rounded-full flex items-center justify-center text-accent shadow-md shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-accent/30 to-accent/10" />
                )}
              </div>
              <div className="pb-4 sm:pb-6 flex-1 min-w-0">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent font-bold text-xs">
                  {step.number}
                </span>
                <h3 className="mt-1.5 text-base font-bold text-text-primary">{step.title}</h3>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
