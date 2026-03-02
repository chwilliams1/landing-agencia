"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "¿Realmente la web queda lista en 48 horas?",
    answer:
      "Sí. Una vez que nos envías la información de tu consulta (textos, fotos y logo), diseñamos y publicamos tu web en un máximo de 2 días hábiles. Si necesitas algo más complejo, te avisamos antes de comenzar.",
  },
  {
    question: "¿Qué incluye la mensualidad?",
    answer:
      "Hosting, dominio .cl, certificado SSL, mantenimiento técnico automático, actualizaciones de seguridad y soporte por WhatsApp. Tu web se mantiene funcionando sin que hagas nada. Los planes Crecimiento y Autopilot agregan informes de rendimiento y contenido generado por IA.",
  },
  {
    question: "¿Tengo que hacer algo después de que mi web esté lista?",
    answer:
      "No. Tu web funciona en modo automático: hosting, seguridad, velocidad y mantenimiento corren por nuestra cuenta. Si en algún momento quieres actualizar textos, fotos o agregar contenido, nos escribes y lo hacemos. Con el plan Autopilot, además se publican artículos automáticamente cada mes.",
  },
  {
    question: "¿Qué diferencia hay entre los planes?",
    answer:
      "Presencia te da lo esencial: web profesional con dominio .cl y WhatsApp. Crecimiento agrega galería de casos, antes/después, diplomas e informes mensuales de rendimiento automáticos. Autopilot suma un blog con artículos generados por IA que crece cada mes y fortalece tu presencia digital. Puedes subir de plan cuando quieras.",
  },
  {
    question: "¿Qué pasa si cancelo mi plan?",
    answer:
      "Sin contratos ni penalizaciones. Tu web se desactiva al final del periodo pagado. Eso sí, perderás el hosting, dominio y — en Autopilot — la biblioteca de artículos acumulados. Muchos clientes prefieren mantener el plan porque el valor crece con el tiempo.",
  },
  {
    question: "¿Mi web se puede compartir fácilmente?",
    answer:
      "Sí. Tu web tiene dominio .cl propio que puedes compartir por WhatsApp, redes sociales, tarjeta de visita o cualquier medio. Además, está optimizada para verse perfecta en celulares, tablets y computadores.",
  },
  {
    question: "¿Qué es el informe mensual de rendimiento?",
    answer:
      "Es un reporte automático que recibes cada mes con las métricas de tu web: visitas, clics en WhatsApp, páginas más vistas y tendencias. Disponible en los planes Crecimiento y Autopilot. No tienes que hacer nada, llega solo.",
  },
];

export default function FAQ() {
  const ref = useInView();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Preguntas{" "}
            <span className="gradient-text">frecuentes</span>
          </h2>
        </div>

        <div className="fade-up fade-up-delay-2 space-y-2.5 sm:space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:border-accent/30 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full min-h-12 flex items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-text-primary">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
