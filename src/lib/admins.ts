import { getDb, toPlain } from "./db";
import { hashPassword } from "./auth";

export type Admin = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

type AdminRow = Admin & { password_hash: string };

export function countAdmins(): number {
  const db = getDb();
  const row = db.prepare("SELECT COUNT(*) as n FROM admins").get() as { n: number };
  return row.n;
}

export function createAdmin(name: string, email: string, password: string): Admin {
  const db = getDb();
  const password_hash = hashPassword(password);
  const stmt = db.prepare(
    "INSERT INTO admins (name, email, password_hash) VALUES (?, ?, ?)"
  );
  const info = stmt.run(name, email.toLowerCase().trim(), password_hash);
  return getAdminById(Number(info.lastInsertRowid))!;
}

export function getAdminByEmail(email: string): AdminRow | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT * FROM admins WHERE email = ?")
    .get(email.toLowerCase().trim()) as AdminRow | undefined;
  return row ? toPlain(row) : undefined;
}

export function getAdminById(id: number): Admin | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT id, name, email, created_at FROM admins WHERE id = ?")
    .get(id) as Admin | undefined;
  return row ? toPlain(row) : undefined;
}

export function listAdmins(): Admin[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT id, name, email, created_at FROM admins ORDER BY created_at ASC")
    .all() as Admin[];
  return toPlain(rows);
}

export function deleteAdmin(id: number): void {
  const db = getDb();
  db.prepare("DELETE FROM admins WHERE id = ?").run(id);
}
