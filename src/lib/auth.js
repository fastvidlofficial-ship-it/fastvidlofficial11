import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "fv_admin_session";
const ALG = "HS256";
const TOKEN_LIFETIME = "7d";

function getSecret() {
  const raw = process.env.JWT_SECRET;
  if (!raw) {
    throw new Error("JWT_SECRET is not set. Add it to .env.local.");
  }
  return new TextEncoder().encode(raw);
}

export async function signSession(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(TOKEN_LIFETIME)
    .sign(getSecret());
}

export async function verifySession(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}

/**
 * Pulls the admin session from the incoming request cookies.
 * Returns the decoded payload, or null when missing/invalid.
 */
export async function getAdminSession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return await verifySession(token);
}

export function getCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export const SESSION_COOKIE = COOKIE_NAME;
