"use client";

import { useEffect } from "react";

/**
 * Renders Ezoic placeholder divs and triggers showAds once after mount.
 * Do not add className or inline styles to the placeholder divs (Ezoic guidance).
 *
 * @param {number[]} placementIds - Ezoic placement IDs for this page
 */
export default function EzoicPlacements({ placementIds }) {
  const ids = Array.isArray(placementIds)
    ? placementIds.filter((n) => Number.isFinite(n) && n > 0)
    : [];

  useEffect(() => {
    if (ids.length === 0) return;
    if (typeof window === "undefined") return;
    if (!window.ezstandalone?.cmd) return;

    window.ezstandalone.cmd.push(function () {
      window.ezstandalone.showAds(...ids);
    });
  }, [ids.join(",")]);

  if (ids.length === 0) return null;

  return (
    <>
      {ids.map((id) => (
        <div key={id} id={`ezoic-pub-ad-placeholder-${id}`} />
      ))}
    </>
  );
}
