import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || ""; 
  const localToken = req.headers.get("authorization") || ""; 

  
  if (req.nextUrl.pathname.startsWith("/dashboard/admin")) {
    if (!token && !localToken) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/admin/:path*"],
};
