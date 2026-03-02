import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Páginas Web para Dentistas - DentalWeb",
  description:
    "Guías, consejos y estrategias de marketing digital para dentistas en Chile. Aprende a atraer más pacientes con tu presencia online.",
  keywords:
    "blog dentistas, marketing digital dentistas, SEO dentistas, página web dentista Chile",
  openGraph: {
    title: "Blog | Páginas Web para Dentistas - DentalWeb",
    description:
      "Guías, consejos y estrategias de marketing digital para dentistas en Chile.",
    type: "website",
    locale: "es_CL",
  },
};

function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog DentalWeb",
    description:
      "Guías y estrategias de marketing digital para dentistas en Chile.",
    url: "https://dentalweb.cl/blog",
    publisher: {
      "@type": "Organization",
      name: "DentalWeb",
      url: "https://dentalweb.cl",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BlogSchema />

      {/* Navbar spacer */}
      <div className="h-16 sm:h-20" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">
            Blog DentalWeb
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            Guías prácticas para dentistas que quieren atraer más pacientes con su presencia digital.
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            ¿Prefieres que nos encarguemos de todo?
          </p>
          <Link
            href="/intake"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
          >
            Solicitar mi web dental
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
    </>
  );
}
