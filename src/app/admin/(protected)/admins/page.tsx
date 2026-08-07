import { getSession } from "@/lib/auth";
import { listAdmins } from "@/lib/admins";
import AdminsList from "@/components/admin/AdminsList";

export default async function AdminsPage() {
  const session = await getSession();
  const admins = listAdmins();

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8">Administradores</h1>
      <AdminsList admins={admins} currentAdminId={session!.adminId} />
    </div>
  );
}
