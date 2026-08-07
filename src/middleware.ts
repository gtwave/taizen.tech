import { NextRequest, NextResponse } from "next/server";

// Middleware runs on the Edge runtime, which can't use node:crypto/node:sqlite
// the way src/lib/auth.ts does — so this only does a cheap "is there a session
// cookie at all" check to bounce obviously-unauthenticated requests early.
// The real signature/expiry check happens server-side in src/app/admin/layout.tsx
// (Node.js runtime), which is the actual security boundary.
const SESSION_COOKIE = "taizen_admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login" || pathname === "/admin/setup") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const hasSession = req.cookies.has(SESSION_COOKIE);
    if (!hasSession) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
