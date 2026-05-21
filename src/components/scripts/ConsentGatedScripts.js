"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
} from "@/lib/cookie-consent";
import ThirdPartyScripts from "./ThirdPartyScripts";

/**
 * Loads optional analytics and sharing scripts only after the user accepts cookies.
 */
export default function ConsentGatedScripts() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasCookieConsent());
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!allowed) return null;

  return <ThirdPartyScripts />;
}
