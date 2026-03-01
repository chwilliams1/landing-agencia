"use client";

import { useInView } from "@/hooks/useInView";

export default function AboutUs() {
  const ref = useInView();

  return (
    <section id="nosotros" className="py-16 sm:py-24 lg:py-32 bg-bg-alt relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="fade-up text-accent font-semibold text-sm uppercase tracking-widest">Nuestra historia</span>
          <h2 className="fade-up fade-up-delay-1 mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Cómo nació{" "}
            <span className="gradient-text">DentalWeb</span>
          </h2>
        </div>

        <div className="fade-up fade-up-delay-2 space-y-10 sm:space-y-14">
          {/* La historia */}
          <div className="relative pl-8 sm:pl-10 border-l-2 border-accent/20 space-y-6">
            {/* Punto 1 */}
            <div className="relative">
              <div className="absolute -left-[25px] sm:-left-[29px] top-1 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">El problema que nadie estaba resolviendo</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Todo partió buscando dentista en Google. La mayoría de los profesionales que conocíamos — buenos dentistas, con años de experiencia — simplemente <strong className="text-text-primary">no aparecían en internet</strong>. No tenían web, o tenían una página desactualizada de hace años que les daba vergüenza compartir. Mientras tanto, sus pacientes estaban eligiendo a la competencia que sí se mostraba online.
              </p>
            </div>

            {/* Punto 2 */}
            <div className="relative">
              <div className="absolute -left-[25px] sm:-left-[29px] top-1 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">¿Por qué no tenían web?</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Hablamos con dentistas de La Serena y la respuesta siempre era la misma: <strong className="text-text-primary">&quot;Es muy caro, se demoran semanas y al final no me trae pacientes&quot;</strong>. Las agencias tradicionales cobraban $800.000 a $2.000.000 por webs genéricas que no estaban pensadas para convertir visitas en consultas. Y los dentistas, que son profesionales de la salud — no del marketing —, quedaban solos intentando hacerla funcionar.
              </p>
            </div>

            {/* Punto 3 */}
            <div className="relative">
              <div className="absolute -left-[25px] sm:-left-[29px] top-1 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Nuestra solución</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Creamos DentalWeb con una idea clara: usar inteligencia artificial y diseño enfocado en conversión para entregarle a cada dentista una <strong className="text-text-primary">web profesional en 48 horas, a un precio justo</strong>. Cada sitio que hacemos tiene un solo objetivo — que cuando un paciente busque dentista, te encuentre a ti, vea que eres de confianza y te escriba por WhatsApp.
              </p>
            </div>
          </div>

          {/* Cierre + stats */}
          <div className="bg-bg-card border border-accent/15 rounded-2xl p-6 sm:p-8">
            <p className="text-center text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              No somos una agencia genérica que hace webs para cualquier rubro. <strong className="text-text-primary">Hacemos una sola cosa y la hacemos bien</strong>: páginas web para dentistas que realmente generan pacientes.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-accent">100%</p>
                <p className="text-xs sm:text-sm text-text-muted mt-1">Foco en dentistas</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-accent">48h</p>
                <p className="text-xs sm:text-sm text-text-muted mt-1">Entrega promedio</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-accent">La Serena</p>
                <p className="text-xs sm:text-sm text-text-muted mt-1">Equipo local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
