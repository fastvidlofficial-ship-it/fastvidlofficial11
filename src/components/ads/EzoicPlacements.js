"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
} from "@/lib/cookie-consent";

/**
 * Renders Ezoic placeholder divs and triggers showAds once after mount.
 * Do not add className or inline styles to the placeholder divs (Ezoic guidance).
 *
 * @param {number[]} placementIds - Ezoic placement IDs for this page
 */
export default function EzoicPlacements({ placementIds }) {
  const [adsAllowed, setAdsAllowed] = useState(false);
  const ids = Array.isArray(placementIds)
    ? placementIds.filter((n) => Number.isFinite(n) && n > 0)
    : [];

  useEffect(() => {
    const sync = () => setAdsAllowed(hasCookieConsent());
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!adsAllowed || ids.length === 0) return;
    if (typeof window === "undefined") return;
    if (!window.ezstandalone?.cmd) return;

    window.ezstandalone.cmd.push(function () {
      window.ezstandalone.showAds(...ids);
    });
  }, [adsAllowed, ids.join(",")]);

  if (!adsAllowed || ids.length === 0) return null;

  return (
    <>
      {ids.map((id) => (
        <div key={id} id={`ezoic-pub-ad-placeholder-${id}`} />
      ))}
    </>
  );
}
