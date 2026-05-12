import { NextResponse } from "next/server";
import { signSession, getCookieOptions, SESSION_COOKIE } from "@/lib/auth";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = String(body?.email || "").trim().toLowerCase();
  const password = String(body?.password || "");

  const adminEmail = (process.env.ADMIN_EMAIL || "admin@fastvidl.com").toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "admin@fastvidl";

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json(
      { ok: false, error: "Invalid email or password" },
      { status: 401 }
    );
  }

  const token = await signSession({ sub: email, role: "admin" });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, getCookieOptions());
  return res;
}
