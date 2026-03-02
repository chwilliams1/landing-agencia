"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ html }: { html: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
    const found: TocItem[] = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      found.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3].replace(/<[^>]*>/g, ""),
      });
    }

    // Fallback: extract from headings without id — we'll use text-based slugs
    if (found.length === 0) {
      const fallbackRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
      while ((match = fallbackRegex.exec(html)) !== null) {
        const text = match[2].replace(/<[^>]*>/g, "");
        const id = text
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        found.push({ level: parseInt(match[1]), id, text });
      }
    }

    setItems(found);
  }, [html]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${open ? "rotate-90" : ""}`}>
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Tabla de contenidos
        </button>
        {open && (
          <nav className="blog-toc mt-3 pl-4 border-l-2 border-border">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={item.level === 3 ? "pl-4" : ""}
                onClick={() => setOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <nav className="blog-toc hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          En este artículo
        </p>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={item.level === 3 ? "pl-4" : ""}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </>
  );
}
