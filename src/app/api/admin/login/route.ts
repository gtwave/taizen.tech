import { NextRequest, NextResponse } from "next/server";
import { getAdminByEmail } from "@/lib/admins";
import { verifyPassword, createSessionToken, setSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = (body?.email ?? "").trim();
  const password = (body?.password ?? "").trim();

  if (!email || !password) {
    return NextResponse.json({ error: "Informe e-mail e senha." }, { status: 400 });
  }

  const admin = getAdminByEmail(email);
  if (!admin || !verifyPassword(password, admin.password_hash)) {
    return NextResponse.json({ error: "E-mail ou senha inválidos." }, { status: 401 });
  }

  const token = createSessionToken(admin);
  await setSessionCookie(token);

  return NextResponse.json({ ok: true });
}
