"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const formatCLP = (n: number) => n.toLocaleString("es-CL");

export default function RoiCalculator() {
  const ref = useInView();
  const [precioConsulta, setPrecioConsulta] = useState(40000);

  const pacientes = Math.ceil(19990 / precioConsulta);

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-bg-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">
            Calculadora ROI
          </span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ¿Cuántos pacientes necesitas{" "}
            <span className="gradient-text">para que se pague sola?</span>
          </h2>
        </div>

        <div className="fade-up fade-up-delay-2 grid md:grid-cols-2 gap-8 sm:gap-10 items-center bg-bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Slider */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Precio promedio de tu consulta
            </label>
            <input
              type="range"
              min={15000}
              max={150000}
              step={5000}
              value={precioConsulta}
              onChange={(e) => setPrecioConsulta(Number(e.target.value))}
              className="roi-slider w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-text-muted">
              <span>$15.000</span>
              <span className="text-base font-bold text-accent">
                ${formatCLP(precioConsulta)}
              </span>
              <span>$150.000</span>
            </div>
          </div>

          {/* Result */}
          <div className="text-center md:text-left">
            <div className="text-5xl sm:text-6xl font-extrabold text-accent leading-none">
              {pacientes}
            </div>
            <p className="mt-2 text-text-secondary text-sm sm:text-base font-medium">
              {pacientes === 1 ? "paciente nuevo al mes" : "pacientes nuevos al mes"}
            </p>
            <p className="mt-1 text-text-muted text-xs">
              para cubrir tu plan Presencia ($19.990/mes)
            </p>
            <a
              href="/intake"
              className="inline-block mt-5 bg-accent hover:bg-accent-light text-white font-bold text-sm py-2.5 px-6 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-accent/20"
            >
              Quiero mi web ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
