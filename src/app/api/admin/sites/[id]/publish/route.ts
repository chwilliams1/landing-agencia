import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyToken } from "@/lib/admin-auth";

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  await sql`
    UPDATE sites SET status = 'published', published_at = now(), updated_at = now()
    WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const email = await verifyToken();
  if (!email) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params;
  const sql = getDb();
  if (!sql) return NextResponse.json({ error: "DB not configured" }, { status: 503 });

  await sql`
    UPDATE sites SET status = 'draft', published_at = null, updated_at = now()
    WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}
