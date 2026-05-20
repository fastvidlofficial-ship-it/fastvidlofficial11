"use client";

import { useEffect } from "react";

const INJECT_FLAG = "__fastvidl_ezoic_head_injected";

function appendExternalScript(head, src, attrs = {}) {
  if (head.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  head.appendChild(el);
}

function appendInlineScript(head, code) {
  const id = `fastvidl-inline-${code.slice(0, 24).replace(/\W/g, "")}`;
  if (head.querySelector(`script[data-fastvidl="${id}"]`)) return;
  const el = document.createElement("script");
  el.setAttribute("data-fastvidl", id);
  el.textContent = code;
  head.appendChild(el);
}

/** Ezoic + CMP scripts load only after cookie consent (pairs with ConsentGatedScripts). */
export default function EzoicConsentLoader() {
  useEffect(() => {
    if (typeof window === "undefined" || window[INJECT_FLAG]) return;
    window[INJECT_FLAG] = true;

    const head = document.head;
    if (!head) return;

    appendExternalScript(head, "https://cmp.gatekeeperconsent.com/min.js", {
      "data-cfasync": "false",
    });
    appendExternalScript(head, "https://the.gatekeeperconsent.com/cmp.min.js", {
      "data-cfasync": "false",
    });

    if (!head.querySelector('script[src="https://www.ezojs.com/ezoic/sa.min.js"]')) {
      const sa = document.createElement("script");
      sa.src = "https://www.ezojs.com/ezoic/sa.min.js";
      sa.async = true;
      head.appendChild(sa);
    }

    appendInlineScript(
      head,
      "window.ezstandalone = window.ezstandalone || {};\nwindow.ezstandalone.cmd = window.ezstandalone.cmd || [];"
    );

    appendExternalScript(head, "https://ezoicanalytics.com/analytics.js");
  }, []);

  return null;
}
