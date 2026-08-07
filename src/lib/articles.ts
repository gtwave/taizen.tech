import { getDb, toPlain } from "./db";
import { slugify } from "./slug";

export { slugify };

export type ArticleStatus = "draft" | "published";

export type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  status: ArticleStatus;
  author_id: number | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ArticleInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  status: ArticleStatus;
};

export function uniqueSlug(base: string, excludeId?: number): string {
  const db = getDb();
  let slug = slugify(base) || "artigo";
  let n = 1;
  for (;;) {
    const row = excludeId
      ? db.prepare("SELECT id FROM articles WHERE slug = ? AND id != ?").get(slug, excludeId)
      : db.prepare("SELECT id FROM articles WHERE slug = ?").get(slug);
    if (!row) return slug;
    n += 1;
    slug = `${slugify(base)}-${n}`;
  }
}

export function listArticles(opts?: { status?: ArticleStatus }): Article[] {
  const db = getDb();
  const rows = opts?.status
    ? (db
        .prepare("SELECT * FROM articles WHERE status = ? ORDER BY COALESCE(published_at, created_at) DESC")
        .all(opts.status) as Article[])
    : (db.prepare("SELECT * FROM articles ORDER BY created_at DESC").all() as Article[]);
  return toPlain(rows);
}

export function getArticleBySlug(slug: string): Article | undefined {
  const db = getDb();
  const row = db.prepare("SELECT * FROM articles WHERE slug = ?").get(slug) as Article | undefined;
  return row ? toPlain(row) : undefined;
}

export function getArticleById(id: number): Article | undefined {
  const db = getDb();
  const row = db.prepare("SELECT * FROM articles WHERE id = ?").get(id) as Article | undefined;
  return row ? toPlain(row) : undefined;
}

export function createArticle(input: ArticleInput, authorId: number | null): Article {
  const db = getDb();
  const publishedAt = input.status === "published" ? new Date().toISOString() : null;
  const stmt = db.prepare(`
    INSERT INTO articles
      (slug, title, excerpt, content, cover_image, seo_title, seo_description, status, author_id, published_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `);
  const info = stmt.run(
    input.slug,
    input.title,
    input.excerpt,
    input.content,
    input.cover_image ?? null,
    input.seo_title ?? null,
    input.seo_description ?? null,
    input.status,
    authorId,
    publishedAt
  );
  return getArticleById(Number(info.lastInsertRowid))!;
}

export function updateArticle(id: number, input: ArticleInput): Article {
  const db = getDb();
  const existing = getArticleById(id);
  const publishedAt =
    input.status === "published"
      ? existing?.published_at ?? new Date().toISOString()
      : null;

  const stmt = db.prepare(`
    UPDATE articles SET
      slug = ?, title = ?, excerpt = ?, content = ?, cover_image = ?,
      seo_title = ?, seo_description = ?, status = ?, published_at = ?,
      updated_at = datetime('now')
    WHERE id = ?
  `);
  stmt.run(
    input.slug,
    input.title,
    input.excerpt,
    input.content,
    input.cover_image ?? null,
    input.seo_title ?? null,
    input.seo_description ?? null,
    input.status,
    publishedAt ?? null,
    id
  );
  return getArticleById(id)!;
}

export function deleteArticle(id: number): void {
  const db = getDb();
  db.prepare("DELETE FROM articles WHERE id = ?").run(id);
}
