import { notFound } from "next/navigation";
import { getSiteBySlug, parsePalette, getStylePreset } from "@/lib/sites";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }>; children: React.ReactNode };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = await getSiteBySlug(slug);
  if (!site) return {};
  const d = site.site_data;
  return {
    title: `${d.consultorio} | ${d.especialidad || "Dentista"}`,
    description: `${d.consultorio} — ${d.especialidad || "Clínica dental"} en ${d.direccion}. ${d.slogan || "Agenda tu cita hoy."}`,
    openGraph: {
      title: d.consultorio,
      description: d.slogan || `${d.especialidad} en ${d.direccion}`,
      type: "website",
    },
  };
}

export default async function TenantLayout({ params, children }: Props) {
  const { slug } = await params;
  const site = await getSiteBySlug(slug);
  if (!site || site.status !== "published") notFound();

  const palette = parsePalette(site.site_data.paleta);
  const style = getStylePreset(site.site_data.estilo);
  const fontFamilies = [style.headingFont, style.bodyFont]
    .filter((f, i, a) => a.indexOf(f) === i)
    .map((f) => f.replace(/ /g, "+"))
    .join("&family=");

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontFamilies}:wght@400;500;600;700;800&display=swap`}
      />
      <div
        style={{
          "--t-primary": palette.primary,
          "--t-secondary": palette.secondary,
          "--t-accent": palette.accent,
          "--t-bg": palette.background,
          "--t-text": palette.text,
          "--t-heading-font": `'${style.headingFont}', sans-serif`,
          "--t-body-font": `'${style.bodyFont}', sans-serif`,
          "--t-radius": style.borderRadius,
        } as React.CSSProperties}
        className="min-h-screen"
        data-tenant={slug}
      >
        {children}
      </div>
    </>
  );
}
