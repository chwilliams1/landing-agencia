"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { value: 48, suffix: "h", prefix: "", label: "Tu web lista", decimals: 0 },
  { value: 100, suffix: "%", prefix: "", label: "Foco en dentistas", decimals: 0 },
  { value: 0, suffix: "", prefix: "$", label: "Costo de setup", decimals: 0 },
  { value: 24, suffix: "/7", prefix: "", label: "Soporte WhatsApp", decimals: 0 },
];

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
