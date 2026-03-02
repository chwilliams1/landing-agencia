import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyToken } from "@/lib/admin-auth";
import { generateSlug } from "@/lib/sites";

export async function GET() {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  const sites = await sql`
    SELECT id, slug, plan, status, site_data->>'consultorio' as consultorio,
           site_data->>'doctor' as doctor, created_at, published_at
    FROM sites ORDER BY created_at DESC
  `;

  const leads = await sql`
    SELECT id, consultorio, doctor, whatsapp, email, plan, status, created_at
    FROM leads ORDER BY created_at DESC LIMIT 50
  `;

  return NextResponse.json({ sites, leads });
}

export async function POST(request: Request) {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  const { lead_id } = await request.json();

  // Get lead data
  const leads = await sql`SELECT * FROM leads WHERE id = ${lead_id} LIMIT 1`;
  if (leads.length === 0) {
    return NextResponse.json({ error: "Lead no encontrado" }, { status: 404 });
  }

  const lead = leads[0];
  const siteData = lead.form_data;
  let slug = generateSlug(siteData.consultorio || "clinica");

  // Check slug uniqueness
  const existing = await sql`SELECT id FROM sites WHERE slug = ${slug}`;
  if (existing.length > 0) {
    slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
  }

  const result = await sql`
    INSERT INTO sites (lead_id, slug, plan, site_data)
    VALUES (${lead_id}, ${slug}, ${siteData.planId || "presencia"}, ${JSON.stringify(siteData)})
    RETURNING id, slug
  `;

  return NextResponse.json({ success: true, site: result[0] });
}
