import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
}

const EMOJI_MAP: Record<string, string> = {
  "cuanto-cuesta": "💰",
  "google": "🔍",
  "checklist": "✅",
  "necesita": "🌐",
  "diferenciarte": "🏆",
};

function getEmoji(slug: string): string {
  for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
    if (slug.includes(key)) return emoji;
  }
  return "🦷";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ slug, title, description, date, readTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-bg-card rounded-2xl border-2 border-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 hover:border-accent/30 h-full flex flex-col">
        {/* Image placeholder */}
        <div className="h-40 sm:h-48 bg-gradient-to-br from-accent/10 via-accent/5 to-navy/5 flex items-center justify-center text-5xl sm:text-6xl select-none">
          {getEmoji(slug)}
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug">
            {title}
          </h2>

          <p className="mt-2 text-text-secondary text-sm leading-relaxed line-clamp-3 flex-1">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{readTime} min de lectura</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
