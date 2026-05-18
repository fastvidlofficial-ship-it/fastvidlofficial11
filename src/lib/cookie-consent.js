/** Shared cookie-consent helpers (safe for client + server import of constants). */

export const COOKIE_CONSENT_STORAGE_KEY = "fastvidl_cookie_ack";
export const COOKIE_CONSENT_LEGACY_KEY = "fastvidl_cookie_consent";
export const COOKIE_CONSENT_EVENT = "fastvidl-cookie-accepted";

export function hasCookieConsent() {
  if (typeof window === "undefined") return false;
  try {
    return (
      Boolean(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)) ||
      localStorage.getItem(COOKIE_CONSENT_LEGACY_KEY) === "accepted"
    );
  } catch {
    return false;
  }
}
