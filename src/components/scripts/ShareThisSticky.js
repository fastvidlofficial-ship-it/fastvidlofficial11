"use client";

import { useEffect } from "react";

const SHARETHIS_SRC =
  "https://platform-api.sharethis.com/js/sharethis.js#property=69bb24ca41ac796e3aa505c1&product=sticky-share-buttons";

/**
 * ShareThis sticky share bar — loads after mount so the #fragment config is preserved.
 */
export default function ShareThisSticky() {
  useEffect(() => {
    if (document.querySelector("script[data-sharethis-fastvidl]")) return;
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = SHARETHIS_SRC;
    s.setAttribute("data-sharethis-fastvidl", "1");
    document.body.appendChild(s);
  }, []);
  return null;
}
