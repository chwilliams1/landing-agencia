import { notFound } from "next/navigation";
import { getSiteBySlug } from "@/lib/sites";
import PresenciaHome from "@/templates/presencia/HomePage";

export default async function TenantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = await getSiteBySlug(slug);
  if (!site || site.status !== "published") notFound();

  return <PresenciaHome data={site.site_data} />;
}
