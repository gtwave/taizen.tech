import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { countAdmins, deleteAdmin } from "@/lib/admins";

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const { id: idParam } = await params;
  const id = Number(idParam);

  if (id === session.adminId) {
    return NextResponse.json({ error: "Você não pode remover a própria conta." }, { status: 400 });
  }
  if (countAdmins() <= 1) {
    return NextResponse.json({ error: "É preciso manter ao menos um administrador." }, { status: 400 });
  }

  deleteAdmin(id);
  return NextResponse.json({ ok: true });
}
