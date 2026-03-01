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
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
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
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TU_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Ads / gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-TU_GTAG_ID"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-TU_GTAG_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
