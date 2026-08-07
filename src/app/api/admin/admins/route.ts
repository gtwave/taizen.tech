import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createAdmin, getAdminByEmail, listAdmins } from "@/lib/admins";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  return NextResponse.json({ admins: listAdmins() });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

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
  if (getAdminByEmail(email)) {
    return NextResponse.json({ error: "Já existe um administrador com esse e-mail." }, { status: 409 });
  }

  const admin = createAdmin(name, email, password);
  return NextResponse.json({ ok: true, admin });
}
