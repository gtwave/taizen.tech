import { redirect } from "next/navigation";
import { countAdmins } from "@/lib/admins";
import SetupForm from "./SetupForm";

export default function SetupPage() {
  if (countAdmins() > 0) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--theme-primary) text-(--theme-secondary) px-6">
      <div className="w-full max-w-sm">
        <p className="text-(--brand-roxo) text-sm uppercase tracking-wide font-semibold mb-2">
          Primeiro acesso
        </p>
        <h1 className="text-2xl font-extrabold mb-2">Criar conta de administrador</h1>
        <p className="text-sm opacity-60 mb-8">
          Nenhum administrador foi encontrado. Crie a primeira conta para gerenciar os artigos.
        </p>
        <SetupForm />
      </div>
    </div>
  );
}
