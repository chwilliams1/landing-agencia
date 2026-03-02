import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "@/lib/db";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "";

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

    // Enviar email de notificación (fire-and-forget)
    if (resend && NOTIFICATION_EMAIL) {
      resend.emails.send({
        from: "DentalWeb <onboarding@resend.dev>",
        to: NOTIFICATION_EMAIL,
        subject: `Nuevo lead: ${body.consultorio || "Sin nombre"}`,
        html: `
          <h2>Nuevo lead en DentalWeb</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Consultorio</td><td>${body.consultorio || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Doctor/a</td><td>${body.doctor || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">WhatsApp</td><td>${body.whatsapp || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td>${body.email || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Plan</td><td>${body.plan || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Especialidad</td><td>${body.especialidad || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Dirección</td><td>${body.direccion || "-"}</td></tr>
          </table>
          <p style="margin-top:16px;color:#666;font-size:13px;">Ver todos los datos en el dashboard de Neon.</p>
        `,
      }).catch((err) => console.error("Resend error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /leads error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
