// Pure, client-safe utility — kept separate from articles.ts so client
// components (like the article editor) can import slugify() without pulling
// in node:sqlite through articles.ts's server-only getDb() import. Turbopack
// can't put node:sqlite in a browser chunk, so that import must never be
// reachable from a "use client" file's module graph.
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
