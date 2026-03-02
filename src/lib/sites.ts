import { getDb } from "./db";
import type { Site, ParsedPalette, StylePreset } from "@/types/site";

export async function getSiteBySlug(slug: string): Promise<Site | null> {
  const sql = getDb();
  if (!sql) return null;

  const rows = await sql`
    SELECT * FROM sites WHERE slug = ${slug} LIMIT 1
  `;

  if (rows.length === 0) return null;
  return rows[0] as unknown as Site;
}

export function parsePalette(raw: string): ParsedPalette {
  const match = raw?.match(
    /^(.+?)\s*—\s*Principal\s+(#[0-9a-fA-F]{6}),\s*Secundario\s+(#[0-9a-fA-F]{6}),\s*Acento\s+(#[0-9a-fA-F]{6}),\s*Fondo\s+(#[0-9a-fA-F]{6}),\s*Texto\s+(#[0-9a-fA-F]{6})/
  );

  if (!match) {
    return {
      name: "Default",
      primary: "#0E7490",
      secondary: "#e0f2fe",
      accent: "#f59e0b",
      background: "#ffffff",
      text: "#1e293b",
    };
  }

  return {
    name: match[1].trim(),
    primary: match[2],
    secondary: match[3],
    accent: match[4],
    background: match[5],
    text: match[6],
  };
}

const stylePresets: Record<string, StylePreset> = {
  Minimalista: { headingFont: "Inter", bodyFont: "Inter", borderRadius: "4px" },
  Premium: { headingFont: "Playfair Display", bodyFont: "Inter", borderRadius: "8px" },
  "Cálido": { headingFont: "Merriweather", bodyFont: "Source Sans 3", borderRadius: "12px" },
  Profesional: { headingFont: "Inter", bodyFont: "Inter", borderRadius: "6px" },
  Juvenil: { headingFont: "Poppins", bodyFont: "Poppins", borderRadius: "16px" },
  Infantil: { headingFont: "Baloo 2", bodyFont: "Nunito", borderRadius: "20px" },
};

export function getStylePreset(estilo: string): StylePreset {
  return stylePresets[estilo] || stylePresets.Profesional;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 63);
}
