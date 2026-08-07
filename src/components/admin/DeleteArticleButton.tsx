"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteArticleButton({ id, title }: { id: number; title: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    if (!confirm(`Excluir o artigo "${title}"? Essa ação não pode ser desfeita.`)) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={onDelete}
      disabled={loading}
      className="text-red-500 text-xs font-semibold hover:opacity-70 disabled:opacity-40"
    >
      {loading ? "Excluindo..." : "Excluir"}
    </button>
  );
}
