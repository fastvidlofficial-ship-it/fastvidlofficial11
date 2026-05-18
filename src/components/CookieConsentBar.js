"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  hasCookieConsent,
} from "@/lib/cookie-consent";
import styles from "./CookieConsentBar.module.css";

export { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";

export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const needsBanner = !hasCookieConsent();
    setVisible(needsBanner);
    if (needsBanner) {
      document.body.classList.add("fastvidl-cookie-pending");
    } else {
      document.body.classList.remove("fastvidl-cookie-pending");
    }
    return () => {
      document.body.classList.remove("fastvidl-cookie-pending");
    };
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    document.body.classList.remove("fastvidl-cookie-pending");
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={styles.bar}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <p className={styles.text}>
        We use cookies and similar technologies for ads, analytics, and site
        functionality (including Ezoic consent management). See our{" "}
        <Link href="/cookie-policy" className={styles.link}>
          Cookie Policy
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className={styles.link}>
          Privacy Policy
        </Link>
        .
      </p>
      <button type="button" className={styles.accept} onClick={accept}>
        Accept
      </button>
    </div>
  );
}
