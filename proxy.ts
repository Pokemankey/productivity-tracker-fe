import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const refreshToken = req.cookies.get("refresh_token")?.value;
  const accessToken = req.cookies.get("access_token")?.value;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  const isProtectedPage =
    pathname.startsWith("/dashboard") || pathname.startsWith("/goals");

  if (isProtectedPage && !refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (accessToken) {
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  if (refreshToken) {
    const refreshRes = await fetch("http://localhost:3000/auth/refresh", {
      method: "POST",
      headers: {
        Cookie: `refresh_token=${refreshToken}`,
      },
    });

    if (!refreshRes.ok) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const response = NextResponse.next();

    refreshRes.headers.getSetCookie().forEach((cookie) => {
      response.headers.append("Set-Cookie", cookie);
    });

    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    const redirectURL = req.nextUrl.clone();

    const redirectResponse = NextResponse.redirect(redirectURL);

    refreshRes.headers.getSetCookie().forEach((cookie) => {
      redirectResponse.headers.append("Set-Cookie", cookie);
    });

    return redirectResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
