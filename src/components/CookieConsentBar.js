"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookieConsentBar.module.css";

const STORAGE_KEY = "fastvidl_cookie_ack";

export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
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
