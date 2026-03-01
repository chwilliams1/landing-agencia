"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Demo", href: "#demo" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precio" },
  { label: "FAQ", href: "#faq" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection + clear active when at top
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveSection("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 sm:h-20">
        {/* Logo — fixed width to balance CTA on the right */}
        <a href="#" className="md:w-40 shrink-0">
          <img src="/logo.png" alt="DentalWeb" className="h-14 sm:h-16 w-auto" />
        </a>

        {/* Desktop links — centered */}
        <div className="hidden md:flex items-center justify-center gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent bg-accent/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-alt"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger (mobile) — right side balances logo */}
        <div className="flex items-center justify-end md:w-40 ml-auto md:ml-0">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-bg-alt transition-colors"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-primary mt-1 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        } ${scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"}`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-accent bg-accent/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-alt"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
