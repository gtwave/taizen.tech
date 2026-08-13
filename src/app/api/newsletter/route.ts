import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const db = getDb();
    db.prepare("INSERT INTO newsletter (email) VALUES (?)").run(email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter insert error:", error);
    return NextResponse.json({ ok: false, error: "database_error" }, { status: 500 });
  }
}