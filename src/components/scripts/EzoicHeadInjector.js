"use client";

const INJECT_FLAG = "__fastvidl_ezoic_head_injected";

function appendExternalScript(head, src, attrs = {}) {
  if (head.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  head.appendChild(el);
}

function appendInlineScript(head, code) {
  const el = document.createElement("script");
  el.textContent = code;
  head.appendChild(el);
}

/**
 * Injects Ezoic + CMP scripts into document.head on the client only (during render).
 * Avoids React hydration mismatches when Ezoic mutates/replaces head scripts
 * before hydration completes. Runs before sibling client components/effects.
 */
export default function EzoicHeadInjector() {
  if (typeof window !== "undefined" && !window[INJECT_FLAG]) {
    window[INJECT_FLAG] = true;
    const head = document.head;
    if (head) {
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
    }
  }

  return null;
}
