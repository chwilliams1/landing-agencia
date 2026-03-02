import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { Resend } from "resend";

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

    // Notificación por email (fire-and-forget)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails.send({
        from: "DentalWeb <onboarding@resend.dev>",
        to: "charlesduarte@gmail.com",
        subject: `Nuevo lead: ${body.consultorio || "Sin nombre"} — Plan ${body.plan || "?"}`,
        html: `
          <h2>Nuevo lead desde dentalweb.cl</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:6px 12px;font-weight:bold;">Consultorio</td><td style="padding:6px 12px;">${body.consultorio || "—"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Doctor/a</td><td style="padding:6px 12px;">${body.doctor || "—"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">WhatsApp</td><td style="padding:6px 12px;">${body.whatsapp || "—"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${body.email || "—"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Plan</td><td style="padding:6px 12px;">${body.plan || "—"} (${body.planPrice || ""})</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Especialidad</td><td style="padding:6px 12px;">${body.especialidad || "—"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Dirección</td><td style="padding:6px 12px;">${body.direccion || "—"}</td></tr>
          </table>
          <p style="margin-top:16px;color:#666;font-size:13px;">Ve todos los datos completos en <a href="https://console.neon.tech">Neon Dashboard</a></p>
        `,
      }).catch((err) => {
        console.error("Resend email error:", err);
      });
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
