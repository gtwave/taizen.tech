import { NextRequest, NextResponse } from "next/server";
import { countAdmins, createAdmin } from "@/lib/admins";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  if (countAdmins() > 0) {
    return NextResponse.json(
      { error: "Já existe um administrador. Use a tela de login." },
      { status: 409 }
    );
  }

  const body = await req.json().catch(() => null);
  const name = (body?.name ?? "").trim();
  const email = (body?.email ?? "").trim();
  const password = (body?.password ?? "").trim();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Preencha nome, e-mail e senha." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "A senha precisa ter ao menos 8 caracteres." }, { status: 400 });
  }

  const admin = createAdmin(name, email, password);
  const token = createSessionToken(admin);
  await setSessionCookie(token);

  return NextResponse.json({ ok: true });
}
