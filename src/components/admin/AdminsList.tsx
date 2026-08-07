"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Admin } from "@/lib/admins";

export default function AdminsList({
  admins,
  currentAdminId,
}: {
  admins: Admin[];
  currentAdminId: number;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function onCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch("/api/admin/admins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erro ao criar administrador.");
        return;
      }
      setName("");
      setEmail("");
      setPassword("");
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id: number, adminName: string) {
    if (!confirm(`Remover o acesso de "${adminName}"?`)) return;
    const res = await fetch(`/api/admin/admins/${id}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      alert(data.error ?? "Erro ao remover administrador.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="admin-card overflow-hidden h-fit">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-(--theme-secondary)/10 opacity-50 text-xs uppercase tracking-wide">
              <th className="p-4 font-semibold">Nome</th>
              <th className="p-4 font-semibold">E-mail</th>
              <th className="p-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id} className="border-b border-(--theme-secondary)/5 last:border-0">
                <td className="p-4 font-semibold">
                  {a.name} {a.id === currentAdminId && <span className="opacity-40 font-normal">(você)</span>}
                </td>
                <td className="p-4 opacity-70">{a.email}</td>
                <td className="p-4 text-right">
                  {a.id !== currentAdminId && (
                    <button
                      onClick={() => onDelete(a.id, a.name)}
                      className="text-red-500 text-xs font-semibold hover:opacity-70"
                    >
                      Remover
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-card p-6">
        <p className="font-bold mb-4">Adicionar administrador</p>
        <form onSubmit={onCreate} className="flex flex-col gap-4">
          <div>
            <label className="admin-label" htmlFor="new-name">Nome</label>
            <input id="new-name" className="admin-input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="admin-label" htmlFor="new-email">E-mail</label>
            <input id="new-email" type="email" className="admin-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="admin-label" htmlFor="new-password">Senha (mín. 8 caracteres)</label>
            <input id="new-password" type="password" className="admin-input" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button type="submit" className="admin-btn" disabled={saving}>
            {saving ? "Criando..." : "Criar administrador"}
          </button>
        </form>
      </div>
    </div>
  );
}
