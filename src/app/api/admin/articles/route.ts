import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createArticle, uniqueSlug, type ArticleStatus } from "@/lib/articles";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const body = await req.json().catch(() => null);
  const title = (body?.title ?? "").trim();
  const excerpt = (body?.excerpt ?? "").trim();
  const content = (body?.content ?? "").trim();
  const cover_image = body?.cover_image || null;
  const seo_title = body?.seo_title || null;
  const seo_description = body?.seo_description || null;
  const status: ArticleStatus = body?.status === "published" ? "published" : "draft";
  const slugInput = (body?.slug ?? "").trim() || title;

  if (!title || !content) {
    return NextResponse.json({ error: "Título e conteúdo são obrigatórios." }, { status: 400 });
  }

  const slug = uniqueSlug(slugInput);
  const article = createArticle(
    { title, slug, excerpt, content, cover_image, seo_title, seo_description, status },
    session.adminId
  );

  return NextResponse.json({ ok: true, article });
}
