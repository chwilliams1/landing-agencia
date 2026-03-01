"use client";

import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Dra. Carolina Muñoz",
    initials: "CM",
    color: "bg-teal-500",
    role: "Odontóloga General — La Serena",
    stars: 5,
    quote:
      "En menos de 48 horas tenía mi web funcionando. Mis pacientes ahora me encuentran en Google y me escriben directo por WhatsApp. Mejor inversión del año.",
  },
  {
    name: "Dr. Felipe Araya",
    initials: "FA",
    color: "bg-blue-500",
    role: "Ortodoncista — Coquimbo",
    stars: 5,
    quote:
      "Me sorprendió lo rápido y profesional que quedó todo. Antes dependía solo de Instagram, ahora tengo presencia real en Google y los pacientes llegan solos.",
  },
  {
    name: "Dra. Valentina Rojas",
    initials: "VR",
    color: "bg-violet-500",
    role: "Endodoncista — La Serena",
    stars: 5,
    quote:
      "El diseño es elegante y mis pacientes me dicen que la web les da confianza. El soporte por WhatsApp es rapidísimo, cualquier cambio lo resuelven al toque.",
  },
  {
    name: "Dr. Andrés Gutiérrez",
    initials: "AG",
    color: "bg-amber-500",
    role: "Implantólogo — Ovalle",
    stars: 5,
    quote:
      "Probé con una agencia antes y me cobraron 5 veces más por algo peor. Con DentalWeb el precio es justo, la web carga rapidísimo y se ve increíble en el celular.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useInView();

  return (
    <section id="testimonios" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-up fade-up-delay-${i + 1} bg-bg-card border border-border rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300`}
            >
              <Stars count={t.stars} />
              <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
