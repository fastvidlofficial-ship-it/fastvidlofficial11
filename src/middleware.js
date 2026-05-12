import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "fv_admin_session";

function getSecret() {
  const raw = process.env.JWT_SECRET || "";
  return new TextEncoder().encode(raw);
}

async function isAuthed(req) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req) {
  const { pathname, search } = req.nextUrl;

  // Allow the login page itself and its API route through.
  const isLoginPage = pathname === "/admin-dashboard/login";

  if (isLoginPage) {
    // If already logged in, bounce away from the login screen.
    if (await isAuthed(req)) {
      return NextResponse.redirect(
        new URL("/admin-dashboard/blogs-management", req.url)
      );
    }
    return NextResponse.next();
  }

  // Everything else under /admin-dashboard requires a valid session.
  if (!(await isAuthed(req))) {
    const url = new URL("/admin-dashboard/login", req.url);
    url.searchParams.set("from", pathname + (search || ""));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run only on admin routes. API routes do their own check.
  matcher: ["/admin-dashboard/:path*"],
};
