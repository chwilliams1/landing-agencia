"use client";

import { useInView } from "@/hooks/useInView";

const plans = [
  { name: "Presencia", price: 19990, emoji: "🦷" },
  { name: "Crecimiento", price: 34990, emoji: "📈" },
  { name: "Autopilot", price: 49990, emoji: "🤖" },
];

const AVG_CONSULTA = 40000;

const formatCLP = (n: number) => n.toLocaleString("es-CL");

export default function RoiCalculator() {
  const ref = useInView();

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">
            Tu inversión
          </span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Con solo <span className="gradient-text">1 paciente nuevo al mes</span> ya se paga sola
          </h2>
          <p className="fade-up fade-up-delay-2 mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg max-w-lg mx-auto">
            Basado en una consulta promedio de ${formatCLP(AVG_CONSULTA)}.
          </p>
        </div>

        <div className="fade-up fade-up-delay-2 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {plans.map((plan) => {
            const pacientes = Math.ceil(plan.price / AVG_CONSULTA);
            return (
              <div
                key={plan.name}
                className="bg-bg-card border border-border rounded-2xl p-6 sm:p-7 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="text-2xl">{plan.emoji}</span>
                <h3 className="text-sm font-bold text-text-primary mt-2">{plan.name}</h3>
                <p className="text-text-muted text-xs mt-0.5">${formatCLP(plan.price)}/mes</p>
                <div className="mt-4 text-5xl font-extrabold text-accent leading-none">
                  {pacientes}
                </div>
                <p className="mt-1.5 text-text-secondary text-sm font-medium">
                  {pacientes === 1 ? "paciente nuevo" : "pacientes nuevos"}
                </p>
                <p className="text-text-muted text-xs">al mes para cubrirlo</p>
              </div>
            );
          })}
        </div>

        <div className="fade-up fade-up-delay-3 text-center mt-8">
          <a
            href="/intake"
            className="inline-block bg-accent hover:bg-accent-light text-white font-bold text-sm py-2.5 px-6 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-accent/20"
          >
            Quiero mi web ahora
          </a>
        </div>
      </div>
    </section>
  );
}
