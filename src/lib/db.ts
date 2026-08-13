import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "taizen.db");

declare global {
  // eslint-disable-next-line no-var
  var __taizenDb: any | undefined;
}

function createConnection(): any {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL DEFAULT '',
      content TEXT NOT NULL DEFAULT '',
      cover_image TEXT,
      seo_title TEXT,
      seo_description TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      author_id INTEGER REFERENCES admins(id) ON DELETE SET NULL,
      published_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS contactsite (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      telefone TEXT,
      empresa TEXT,
      cnpj TEXT,
      cargo TEXT,
      preferencia_contato TEXT,
      motivo_contato TEXT,
      descricao TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  const contactColumns = db.prepare("PRAGMA table_info(contactsite)").all() as { name: string }[];
  for (const column of ["empresa", "cnpj", "cargo", "preferencia_contato", "motivo_contato"]) {
    if (!contactColumns.some((item) => item.name === column)) {
      db.exec(`ALTER TABLE contactsite ADD COLUMN ${column} TEXT`);
    }
  }
  db.exec(`CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status, published_at DESC);`);
  return db;
}

// Reuse a single connection across Next.js dev hot-reloads and route handler
// invocations — node:sqlite locks the file, so opening a fresh connection per
// request would exhaust handles and trip WAL contention.
export function getDb(): any {
  if (!global.__taizenDb) {
    global.__taizenDb = createConnection();
  }
  return global.__taizenDb;
}

// node:sqlite's .get()/.all() rows aren't plain objects (they carry a
// non-Object prototype from the native binding), which React's "Server
// Components can only pass plain objects to Client Components" check
// rejects outright. Every row that might flow into a "use client" component
// (as a prop, not just rendered inline in server JSX) needs to go through
// this first. All our columns are strings/numbers/null, so a JSON
// round-trip is a cheap, complete way to strip the prototype.
export function toPlain<T>(row: T): T {
  return JSON.parse(JSON.stringify(row));
}
