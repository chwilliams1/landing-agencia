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
    question: "¿Puedo elegir el diseño de mi web?",
    answer:
      "Por supuesto. Te mostramos un preview personalizado basado en tu especialidad y marca. Puedes pedir ajustes de colores, fotos, textos y estructura hasta que quedes 100% conforme.",
  },
  {
    question: "¿Qué incluye la mensualidad de $25.000?",
    answer:
      "Hosting ultrarrápido, dominio .cl, certificado SSL (candado verde), soporte técnico por WhatsApp y correcciones menores de contenido. Todo lo que necesitas para mantener tu web funcionando sin preocuparte de nada.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, sin contratos de permanencia. Si decides cancelar, tu web se desactiva al final del periodo pagado. Sin penalizaciones ni letra chica.",
  },
  {
    question: "¿Mi web va a aparecer en Google?",
    answer:
      "Todas nuestras webs están optimizadas para SEO básico: velocidad de carga, etiquetas correctas, diseño responsive y contenido estructurado. Esto ayuda a que Google te indexe y te muestre cuando buscan dentistas en tu zona.",
  },
  {
    question: "¿Qué son los extras y necesito alguno?",
    answer:
      "Los extras son funcionalidades adicionales como galería antes/después, blog dental, sistema de reservas online, entre otros. No son obligatorios — tu web funciona perfectamente sin ellos. Pero si quieres potenciar tu presencia online, son una gran inversión.",
  },
  {
    question: "¿Qué pasa si necesito cambios después de los 30 días?",
    answer:
      "Los cambios menores de texto, fotos o información de contacto están siempre incluidos en la mensualidad. Para cambios mayores de estructura o nuevas funcionalidades, te cotizamos aparte con precio preferencial por ser cliente.",
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
