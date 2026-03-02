import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      console.warn("Supabase not configured — lead not saved");
      return NextResponse.json(
        { success: false, error: "Database not configured" },
        { status: 503 },
      );
    }

    const body = await request.json();

    const { error } = await supabase.from("leads").insert({
      consultorio: body.consultorio || null,
      doctor: body.doctor || null,
      whatsapp: body.whatsapp || null,
      email: body.email || null,
      plan: body.plan || null,
      form_data: body,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
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
