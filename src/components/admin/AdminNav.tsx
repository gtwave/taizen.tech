"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Artigos" },
  { href: "/admin/admins", label: "Administradores" },
];

export default function AdminNav({ name }: { name: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-(--theme-secondary)/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-extrabold">
            Taizen <span className="opacity-50 font-normal">/ admin</span>
          </Link>
          <nav className="flex items-center gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm px-3 py-1.5 rounded-md transition-colors"
                  style={{
                    background: active ? "var(--brand-laranja)" : "transparent",
                    color: active ? "#fff" : "inherit",
                    opacity: active ? 1 : 0.7,
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/artigos" target="_blank" className="opacity-60 hover:opacity-100">
            Ver site ↗
          </Link>
          <span className="opacity-50">{name}</span>
          <button onClick={logout} className="admin-btn-outline text-xs! py-1.5! px-3!">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
