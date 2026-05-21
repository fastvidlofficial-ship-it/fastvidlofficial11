"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  hasCookieBannerDismissed,
  setCookieConsentAccepted,
  setCookieConsentDeclined,
} from "@/lib/cookie-consent";
import styles from "./CookieConsentBar.module.css";

export {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from "@/lib/cookie-consent";

export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = hasCookieBannerDismissed();
    setVisible(!dismissed);
    if (!dismissed) {
      document.body.classList.add("fastvidl-cookie-pending");
    } else {
      document.body.classList.remove("fastvidl-cookie-pending");
    }
    return () => {
      document.body.classList.remove("fastvidl-cookie-pending");
    };
  }, []);

  const dismiss = () => {
    document.body.classList.remove("fastvidl-cookie-pending");
    setVisible(false);
  };

  const accept = () => {
    setCookieConsentAccepted();
    dismiss();
  };

  const decline = () => {
    setCookieConsentDeclined();
    dismiss();
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
        We use cookies for essential site features, and, if you allow, advertising
        and analytics through partners such as Google. You can accept or
        decline optional cookies. See our{" "}
        <Link href="/cookie-policy" className={styles.link}>
          Cookie Policy
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className={styles.link}>
          Privacy Policy
        </Link>
        .
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={decline}>
          Decline optional cookies
        </button>
        <button type="button" className={styles.accept} onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
