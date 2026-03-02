import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getAllPosts, getPostBySlug } from "@/lib/blog";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogCta from "@/components/blog/BlogCta";
import BlogCard from "@/components/blog/BlogCard";
import "../blog.css";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | DentalWeb Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "es_CL",
      publishedTime: post.date,
      authors: ["DentalWeb"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://dentalweb.cl/blog/${slug}`,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function addHeadingIds(html: string): string {
  return html.replace(
    /<h([23])>(.*?)<\/h[23]>/gi,
    (_match, level, text) => {
      const plain = text.replace(/<[^>]*>/g, "");
      const id = plain
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );
}

function ArticleSchema({ post }: { post: { title: string; description: string; date: string; slug: string; readTime: number } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "DentalWeb",
      url: "https://dentalweb.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "DentalWeb",
      url: "https://dentalweb.cl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dentalweb.cl/blog/${post.slug}`,
    },
    wordCount: post.readTime * 200,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ post }: { post: { title: string; slug: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://dentalweb.cl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://dentalweb.cl/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://dentalweb.cl/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const contentWithIds = addHeadingIds(post.content);

  // Related posts (exclude current, pick up to 2)
  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />

      {/* Navbar spacer */}
      <div className="h-16 sm:h-20" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li className="text-text-secondary truncate max-w-[200px] sm:max-w-none">{post.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <header className="max-w-3xl mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{post.readTime} min de lectura</span>
          </div>
        </header>

        {/* Content layout: article + sidebar */}
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
          <div>
            {/* Mobile TOC */}
            <TableOfContents html={contentWithIds} />

            {/* Article body */}
            <article
              className="blog-prose max-w-3xl"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />

            {/* CTA */}
            <BlogCta />
          </div>

          {/* Desktop TOC sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents html={contentWithIds} />
          </aside>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">
              Sigue leyendo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  description={p.description}
                  date={p.date}
                  readTime={p.readTime}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
