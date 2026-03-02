"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, active: boolean, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    let start: number | null = null;
    let raf: number;
    let delay: ReturnType<typeof setTimeout>;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    // Wait for fade-up animation to reveal elements before counting
    delay = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, 500);

    return () => {
      clearTimeout(delay);
      cancelAnimationFrame(raf);
    };
  }, [active, target, decimals]);

  return count;
}
