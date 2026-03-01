import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Páginas Web para Dentistas en La Serena | Tu Web Dental en 48 Horas",
  description:
    "Creamos páginas web profesionales para dentistas en La Serena y todo Chile. Diseño premium con IA, SEO optimizado, WhatsApp integrado. Lista en 48 horas desde $150.000 CLP.",
  keywords:
    "web dentista la serena, página web dentista, web clínica dental, diseño web odontología, web para dentistas chile",
  openGraph: {
    title: "Páginas Web para Dentistas | Tu Web Dental en 48 Horas",
    description:
      "Diseño web profesional para dentistas con IA. SEO, WhatsApp y dominio incluido. Lista en 48 horas desde $150.000.",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginas Web para Dentistas | Tu Web Dental en 48 Horas",
    description:
      "Diseño web profesional para dentistas con IA. SEO, WhatsApp y dominio incluido. Lista en 48 horas.",
  },
  robots: { index: true, follow: true },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WebDental",
    description:
      "Agencia de diseño web especializada en páginas para dentistas en La Serena y Chile.",
    url: "https://webdental.cl",
    telephone: "+56912345678",
    email: "hola@webdental.cl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Serena",
      addressRegion: "Coquimbo",
      addressCountry: "CL",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: "Web Design",
    priceRange: "$150.000 - $250.000 CLP",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
