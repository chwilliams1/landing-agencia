import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/db";
import { createToken, tokenCookieOptions } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const sql = getDb();
    if (!sql) {
      return NextResponse.json({ error: "DB not configured" }, { status: 503 });
    }

    const rows = await sql`
      SELECT * FROM admin_users WHERE email = ${email} LIMIT 1
    `;

    if (rows.length === 0 || !(await bcrypt.compare(password, rows[0].password_hash))) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const token = await createToken(email);
    const opts = tokenCookieOptions();
    const response = NextResponse.json({ success: true });
    response.cookies.set(opts.name, token, opts);
    return response;
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
