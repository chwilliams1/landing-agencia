import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const sql = getDb();
    if (!sql) {
      console.warn("DATABASE_URL not configured — lead not saved");
      return NextResponse.json(
        { success: false, error: "Database not configured" },
        { status: 503 },
      );
    }

    const body = await request.json();

    await sql`
      INSERT INTO leads (consultorio, doctor, whatsapp, email, plan, form_data)
      VALUES (
        ${body.consultorio || null},
        ${body.doctor || null},
        ${body.whatsapp || null},
        ${body.email || null},
        ${body.plan || null},
        ${JSON.stringify(body)}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /leads error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
