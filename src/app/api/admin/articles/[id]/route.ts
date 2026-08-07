import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { deleteArticle, getArticleById, updateArticle, uniqueSlug, type ArticleStatus } from "@/lib/articles";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const { id: idParam } = await params;
  const id = Number(idParam);
  const existing = getArticleById(id);
  if (!existing) return NextResponse.json({ error: "Artigo não encontrado." }, { status: 404 });

  const body = await req.json().catch(() => null);
  const title = (body?.title ?? "").trim();
  const excerpt = (body?.excerpt ?? "").trim();
  const content = (body?.content ?? "").trim();
  const cover_image = body?.cover_image ?? existing.cover_image;
  const seo_title = body?.seo_title ?? null;
  const seo_description = body?.seo_description ?? null;
  const status: ArticleStatus = body?.status === "published" ? "published" : "draft";
  const slugInput = (body?.slug ?? "").trim() || title;

  if (!title || !content) {
    return NextResponse.json({ error: "Título e conteúdo são obrigatórios." }, { status: 400 });
  }

  const slug = slugInput === existing.slug ? existing.slug : uniqueSlug(slugInput, id);
  const article = updateArticle(id, {
    title,
    slug,
    excerpt,
    content,
    cover_image,
    seo_title,
    seo_description,
    status,
  });

  return NextResponse.json({ ok: true, article });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Não autenticado." }, { status: 401 });

  const { id: idParam } = await params;
  deleteArticle(Number(idParam));
  return NextResponse.json({ ok: true });
}
