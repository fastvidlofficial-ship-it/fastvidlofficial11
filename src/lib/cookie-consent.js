/** Shared cookie-consent helpers (safe for client + server import of constants). */

export const COOKIE_CONSENT_STORAGE_KEY = "fastvidl_cookie_ack";
export const COOKIE_CONSENT_LEGACY_KEY = "fastvidl_cookie_consent";
export const COOKIE_CONSENT_EVENT = "fastvidl-cookie-accepted";
export const COOKIE_CONSENT_DECLINED = "declined";
export const COOKIE_CONSENT_ACCEPTED = "accepted";

export function getCookieConsentChoice() {
  if (typeof window === "undefined") return null;
  try {
    if (localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === "1") {
      return COOKIE_CONSENT_ACCEPTED;
    }
    const legacy = localStorage.getItem(COOKIE_CONSENT_LEGACY_KEY);
    if (legacy === COOKIE_CONSENT_ACCEPTED || legacy === "accepted") {
      return COOKIE_CONSENT_ACCEPTED;
    }
    if (legacy === COOKIE_CONSENT_DECLINED) {
      return COOKIE_CONSENT_DECLINED;
    }
    return null;
  } catch {
    return null;
  }
}

/** User accepted optional cookies (ads, analytics, ShareThis). */
export function hasCookieConsent() {
  return getCookieConsentChoice() === COOKIE_CONSENT_ACCEPTED;
}

/** User dismissed the banner (accept or decline). */
export function hasCookieBannerDismissed() {
  return getCookieConsentChoice() !== null;
}

export function setCookieConsentAccepted() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "1");
    localStorage.setItem(COOKIE_CONSENT_LEGACY_KEY, COOKIE_CONSENT_ACCEPTED);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function setCookieConsentDeclined() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    localStorage.setItem(COOKIE_CONSENT_LEGACY_KEY, COOKIE_CONSENT_DECLINED);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}
