export interface SiteData {
  consultorio: string;
  doctor: string;
  especialidad: string;
  whatsapp: string;
  email: string;
  direccion: string;
  redes: string;
  dominio: string;
  plan: string;
  planId: string;
  planPrice: string;
  servicios: string[];
  estrella: string;
  publico: string[];
  pagos: string[];
  convenios: string[];
  horario: string;
  contacto: string;
  ctaPreferido: string;
  experiencia: string;
  bio: string;
  fotos: string;
  fotosLink: string;
  antesDespues: string;
  testimonios: string;
  diplomas: { nombre: string; institucion: string }[];
  equipo: { nombre: string; especialidad: string; bio: string }[];
  mostrarConveniosWeb: boolean;
  estilo: string;
  paleta: string;
  logo: string;
  slogan: string;
  referencia: string;
  notas: string;
}

export interface Site {
  id: string;
  lead_id: string | null;
  slug: string;
  plan: string;
  status: "draft" | "review" | "published" | "suspended";
  site_data: SiteData;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ParsedPalette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface StylePreset {
  headingFont: string;
  bodyFont: string;
  borderRadius: string;
}
