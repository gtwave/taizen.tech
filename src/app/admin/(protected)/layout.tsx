import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-(--theme-primary) text-(--theme-secondary)">
      <AdminNav name={session.name} />
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
