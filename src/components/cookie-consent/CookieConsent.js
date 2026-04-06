"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const CONSENT_KEY = "fastvidl_cookie_consent";

export default function CookieConsent() {
  const { t } = useLocaleCatalog();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored !== "accepted" && stored !== "rejected") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label={t("cookieConsent.ariaLabel")}>
      <div className={styles.inner}>
        <p className={styles.text}>
          {t("cookieConsent.text")}{" "}
          <Link href="/CookiePolicy" className={styles.link}>
            {t("cookieConsent.policyLink")}
          </Link>
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={handleReject} className={styles.reject}>
            {t("cookieConsent.rejectAll")}
          </button>
          <button type="button" onClick={handleAccept} className={styles.accept}>
            {t("cookieConsent.acceptAll")}
          </button>
        </div>
      </div>
    </div>
  );
}
