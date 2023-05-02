import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/, /_auth/, /_root/ (special pages for OG tags proxying, password protection, and placeholder _root pages)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_proxy/|_auth/|_root/|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  if (!session?.email && path.startsWith("/app")) {
    // redirect to login, if not logged in and visiting dashboard pages
    return NextResponse.redirect(new URL("/auth/login", req.url));
  } else if (session?.email && (path === "/auth/login" || path === "/auth/register")) {
    // redirect to dashboard, if already logged in and on login page|register page
    return NextResponse.redirect(new URL("/app", req.url));
  }
  return NextResponse.next();
}