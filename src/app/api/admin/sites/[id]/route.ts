import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyToken } from "@/lib/admin-auth";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  const rows = await sql`SELECT * FROM sites WHERE id = ${id} LIMIT 1`;
  if (rows.length === 0) {
    return NextResponse.json({ error: "Sitio no encontrado" }, { status: 404 });
  }

  return NextResponse.json({ site: rows[0] });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  const body = await request.json();

  if (body.site_data) {
    await sql`
      UPDATE sites SET site_data = ${JSON.stringify(body.site_data)}, updated_at = now()
      WHERE id = ${id}
    `;
  }

  if (body.slug) {
    await sql`UPDATE sites SET slug = ${body.slug}, updated_at = now() WHERE id = ${id}`;
  }

  return NextResponse.json({ success: true });
}
