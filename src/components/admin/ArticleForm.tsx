"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "@/lib/slug";
import type { Article } from "@/lib/articles";

export default function ArticleForm({ article }: { article?: Article }) {
  const router = useRouter();
  const isEdit = !!article;

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [content, setContent] = useState(article?.content ?? "");
  const [coverImage, setCoverImage] = useState<string | null>(article?.cover_image ?? null);
  const [seoTitle, setSeoTitle] = useState(article?.seo_title ?? "");
  const [seoDescription, setSeoDescription] = useState(article?.seo_description ?? "");
  const [status, setStatus] = useState<"draft" | "published">(article?.status ?? "draft");

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function onCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erro ao enviar imagem.");
        return;
      }
      setCoverImage(data.url);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function onSubmit(e: React.FormEvent, publishOverride?: "draft" | "published") {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !content.trim()) {
      setError("Título e conteúdo são obrigatórios.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        title,
        slug,
        excerpt,
        content,
        cover_image: coverImage,
        seo_title: seoTitle || null,
        seo_description: seoDescription || null,
        status: publishOverride ?? status,
      };
      const res = await fetch(
        isEdit ? `/api/admin/articles/${article!.id}` : "/api/admin/articles",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erro ao salvar artigo.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  const effectiveSeoTitle = seoTitle || title;
  const effectiveSeoDescription = seoDescription || excerpt;

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 flex flex-col gap-5">
          <div>
            <label className="admin-label" htmlFor="title">Título</label>
            <input
              id="title"
              className="admin-input text-lg font-bold"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="admin-label" htmlFor="slug">URL (slug)</label>
            <div className="flex items-center gap-1 text-sm">
              <span className="opacity-40">/artigos/</span>
              <input
                id="slug"
                className="admin-input"
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setSlug(slugify(e.target.value));
                }}
                required
              />
            </div>
          </div>

          <div>
            <label className="admin-label" htmlFor="excerpt">
              Resumo curto (usado na listagem e como descrição padrão para SEO)
            </label>
            <textarea
              id="excerpt"
              className="admin-input"
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="admin-label mb-0" htmlFor="content">
                Conteúdo (Markdown)
              </label>
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="text-xs font-semibold text-(--brand-laranja)"
              >
                {showPreview ? "Ver editor" : "Ver preview"}
              </button>
            </div>
            {showPreview ? (
              <div className="admin-input min-h-[24rem] prose prose-sm max-w-none overflow-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content || "*Nada para exibir ainda.*"}
                </ReactMarkdown>
              </div>
            ) : (
              <textarea
                id="content"
                className="admin-input font-mono text-sm"
                rows={20}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={"## Título da seção\n\nEscreva o artigo em Markdown — **negrito**, *itálico*, listas, links, etc."}
                required
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="admin-card p-5">
            <label className="admin-label">Imagem de capa</label>
            {coverImage ? (
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-(--brand-laranja-light)">
                <Image src={coverImage} alt="" fill className="object-cover" />
              </div>
            ) : (
              <div className="aspect-video rounded-lg mb-3 bg-(--brand-laranja-light) flex items-center justify-center text-4xl opacity-50">
                🖼️
              </div>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={onCoverUpload}
              disabled={uploading}
              className="text-xs"
            />
            {uploading && <p className="text-xs opacity-60 mt-1">Enviando...</p>}
            <p className="text-xs opacity-50 mt-2">
              Usada como imagem de compartilhamento (Open Graph) no Facebook, LinkedIn e demais redes.
            </p>
          </div>

          <div className="admin-card p-5">
            <label className="admin-label">Status</label>
            <select
              className="admin-input"
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            >
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
            </select>
          </div>

          <div className="admin-card p-5 flex flex-col gap-4">
            <p className="admin-label mb-0">SEO & compartilhamento</p>
            <div>
              <label className="admin-label" htmlFor="seoTitle">
                Título para SEO <span className="opacity-40">(opcional)</span>
              </label>
              <input
                id="seoTitle"
                className="admin-input"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder={title || "Usa o título do artigo"}
              />
            </div>
            <div>
              <label className="admin-label" htmlFor="seoDescription">
                Descrição para SEO <span className="opacity-40">(opcional)</span>
              </label>
              <textarea
                id="seoDescription"
                className="admin-input"
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder={excerpt || "Usa o resumo curto"}
              />
            </div>
            <div className="text-xs opacity-50 border-t border-(--theme-secondary)/10 pt-3">
              <p className="font-semibold mb-1">Preview do link:</p>
              <p className="font-semibold" style={{ color: "var(--brand-laranja)" }}>
                {effectiveSeoTitle || "Título do artigo"}
              </p>
              <p className="mt-0.5">{effectiveSeoDescription || "Descrição do artigo aparecerá aqui."}</p>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex items-center gap-3 border-t border-(--theme-secondary)/10 pt-6">
        <button type="submit" className="admin-btn" disabled={saving}>
          {saving ? "Salvando..." : isEdit ? "Salvar alterações" : "Salvar rascunho"}
        </button>
        <button
          type="button"
          onClick={(e) => onSubmit(e, "published")}
          className="admin-btn-outline"
          disabled={saving}
        >
          {status === "published" && isEdit ? "Salvar e manter publicado" : "Publicar agora"}
        </button>
      </div>
    </form>
  );
}
