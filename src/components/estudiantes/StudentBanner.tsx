"use client";

import { useState, useEffect } from "react";

function getTimeLeft() {
  // Cycles every 72 hours from a fixed anchor date
  const anchor = new Date("2026-03-01T00:00:00").getTime();
  const cycle = 72 * 60 * 60 * 1000;
  const elapsed = (Date.now() - anchor) % cycle;
  const remaining = cycle - elapsed;
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return { h, m, s };
}

export default function StudentBanner() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTime(getTimeLeft());
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      {/* Push the Navbar (fixed top-0) down so it sits below this banner */}
      <style>{`nav.fixed { top: 40px !important; }`}</style>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-600 via-purple-600 to-accent text-white text-center py-2.5 px-4 text-sm font-semibold">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span>🎓 <strong>30% OFF por 6 meses</strong> — Cupos limitados</span>
          {mounted && (
            <span className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-0.5 rounded-full text-xs font-mono tabular-nums tracking-wider">
              ⏳ {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
            </span>
          )}
          <a
            href="#precio"
            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-0.5 rounded-full text-xs font-bold transition-colors"
          >
            Ver planes
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the fixed banner */}
      <div className="h-[40px]" />
    </>
  );
}
