import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const db = getDb();

  db.prepare(
    "INSERT INTO contactsite (nome, email, telefone, empresa, cnpj, cargo, preferencia_contato, motivo_contato, descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).run(
    body.nome ?? "",
    body.email ?? "",
    body.telefone ?? "",
    body.empresa ?? "",
    body.cnpj ?? "",
    body.cargo ?? "",
    body.preferencia_contato ?? "",
    body.motivo_contato ?? "",
    body.descricao ?? ""
  );

  return NextResponse.json({ ok: true });
}