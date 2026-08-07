import { redirect } from "next/navigation";
import { countAdmins } from "@/lib/admins";
import { getSession } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (countAdmins() === 0) {
    redirect("/admin/setup");
  }
  const session = await getSession();
  if (session) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--theme-primary) text-(--theme-secondary) px-6">
      <div className="w-full max-w-sm">
        <p className="text-(--brand-laranja) text-sm uppercase tracking-wide font-semibold mb-2">
          Taizen Consulting
        </p>
        <h1 className="text-2xl font-extrabold mb-8">Painel administrativo</h1>
        <LoginForm />
      </div>
    </div>
  );
}
