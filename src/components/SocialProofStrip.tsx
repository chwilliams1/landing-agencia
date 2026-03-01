"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

const STATS = [
  { value: 50, suffix: "+", label: "Webs Creadas" },
  { value: 48, suffix: "h", label: "Entrega" },
  { value: 4.9, suffix: "★", label: "Satisfacción", decimals: 1 },
  { value: 150, suffix: "k", prefix: "$", label: "Desde" },
];

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, decimals]);

  return count;
}

function StatItem({
  value,
  suffix,
  prefix,
  label,
  decimals = 0,
  active,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
  active: boolean;
}) {
  const count = useCountUp(value, active, decimals);

  return (
    <div className="text-center px-2">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm text-text-secondary font-medium">
        {label}
      </div>
    </div>
  );
}

export default function SocialProofStrip() {
  const fadeRef = useInView();
  const stripRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  // IntersectionObserver for count-up trigger
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={stripRef}
      className="py-8 sm:py-12 bg-bg-alt border-y border-border"
    >
      <div ref={fadeRef} className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`fade-up fade-up-delay-${i + 1}`}>
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                decimals={stat.decimals}
                active={triggered}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
