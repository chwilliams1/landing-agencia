import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dentalweb.cl"),
  title: "Páginas Web para Dentistas en La Serena | Tu Web Dental en 48 Horas",
  description:
    "Creamos páginas web profesionales para dentistas en La Serena y todo Chile. Diseño premium con IA, SEO optimizado, WhatsApp integrado. Lista en 48 horas desde $19.990/mes.",
  keywords:
    "web dentista la serena, página web dentista, web clínica dental, diseño web odontología, web para dentistas chile",
  openGraph: {
    title: "Páginas Web para Dentistas | Tu Web Dental en 48 Horas",
    description:
      "Diseño web profesional para dentistas con IA. SEO, WhatsApp y dominio .cl incluido. Lista en 48 horas desde $19.990/mes.",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginas Web para Dentistas | Tu Web Dental en 48 Horas",
    description:
      "Diseño web profesional para dentistas con IA. SEO, WhatsApp y dominio .cl incluido. Lista en 48 horas desde $19.990/mes.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DentalWeb",
    description:
      "Agencia de diseño web especializada en páginas para dentistas en La Serena y Chile.",
    url: "https://dentalweb.cl",
    telephone: "+56984494128",
    email: "hola@dentalweb.cl",
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
    priceRange: "$19.990 - $49.990 CLP/mes",
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

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '531419260644774');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=531419260644774&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N61NMW62Y1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N61NMW62Y1');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
