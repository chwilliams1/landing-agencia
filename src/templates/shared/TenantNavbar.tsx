"use client";

import { useState } from "react";
import type { SiteData } from "@/types/site";

export default function TenantNavbar({ data }: { data: SiteData }) {
  const [open, setOpen] = useState(false);
  const phone = data.whatsapp.replace(/[\s\-+]/g, "");

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: "var(--t-bg)", borderColor: "color-mix(in srgb, var(--t-text) 10%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-lg" style={{ fontFamily: "var(--t-heading-font)", color: "var(--t-primary)" }}>
          {data.consultorio}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ fontFamily: "var(--t-body-font)", color: "var(--t-text)" }}>
          <a href="#servicios" className="hover:opacity-70 transition">Servicios</a>
          <a href="#doctor" className="hover:opacity-70 transition">Doctor</a>
          <a href="#horario" className="hover:opacity-70 transition">Horario</a>
          <a href="#contacto" className="hover:opacity-70 transition">Contacto</a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-white font-medium text-sm transition hover:opacity-90"
            style={{ backgroundColor: "var(--t-primary)", borderRadius: "var(--t-radius)" }}
          >
            {data.ctaPreferido || "Agendar cita"}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--t-text)" }}>
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-4 space-y-3" style={{ backgroundColor: "var(--t-bg)", borderColor: "color-mix(in srgb, var(--t-text) 10%, transparent)" }}>
          <a href="#servicios" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--t-text)" }}>Servicios</a>
          <a href="#doctor" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--t-text)" }}>Doctor</a>
          <a href="#horario" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--t-text)" }}>Horario</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block text-sm" style={{ color: "var(--t-text)" }}>Contacto</a>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-2 text-white font-medium text-sm"
            style={{ backgroundColor: "var(--t-primary)", borderRadius: "var(--t-radius)" }}
          >
            {data.ctaPreferido || "Agendar cita"}
          </a>
        </div>
      )}
    </nav>
  );
}
