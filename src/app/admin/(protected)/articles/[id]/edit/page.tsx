import { notFound } from "next/navigation";
import { getArticleById } from "@/lib/articles";
import ArticleForm from "@/components/admin/ArticleForm";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticleById(Number(id));
  if (!article) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8">Editar artigo</h1>
      <ArticleForm article={article} />
    </div>
  );
}
