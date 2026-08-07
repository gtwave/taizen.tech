import Link from "next/link";
import { listArticles } from "@/lib/articles";
import DeleteArticleButton from "@/components/admin/DeleteArticleButton";

export default function AdminDashboard() {
  const articles = listArticles();

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-extrabold">Artigos</h1>
          <p className="text-sm opacity-60 mt-1">{articles.length} artigo(s) no total</p>
        </div>
        <Link href="/admin/articles/new" className="admin-btn">
          + Novo artigo
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="admin-card p-10 text-center opacity-60">
          Nenhum artigo ainda. Crie o primeiro clicando em &ldquo;Novo artigo&rdquo;.
        </div>
      ) : (
        <div className="admin-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-(--theme-secondary)/10 opacity-50 text-xs uppercase tracking-wide">
                <th className="p-4 font-semibold">Título</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Atualizado</th>
                <th className="p-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id} className="border-b border-(--theme-secondary)/5 last:border-0">
                  <td className="p-4">
                    <p className="font-semibold">{a.title}</p>
                    <p className="opacity-50 text-xs">/artigos/{a.slug}</p>
                  </td>
                  <td className="p-4">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: a.status === "published" ? "#7ed32122" : "#ffb80022",
                        color: a.status === "published" ? "#4a9a00" : "#a06a00",
                      }}
                    >
                      {a.status === "published" ? "Publicado" : "Rascunho"}
                    </span>
                  </td>
                  <td className="p-4 opacity-60">
                    {new Date(a.updated_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-3">
                      {a.status === "published" && (
                        <Link
                          href={`/artigos/${a.slug}`}
                          target="_blank"
                          className="opacity-60 hover:opacity-100 text-xs"
                        >
                          Ver ↗
                        </Link>
                      )}
                      <Link
                        href={`/admin/articles/${a.id}/edit`}
                        className="text-(--brand-laranja) text-xs font-semibold"
                      >
                        Editar
                      </Link>
                      <DeleteArticleButton id={a.id} title={a.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
