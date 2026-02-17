"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieConsent.module.css";

const CONSENT_KEY = "fastvidl_cookie_consent";

export default function CookieConsent() {
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
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <p className={styles.text}>
          We use cookies to run the downloader, analyze usage anonymously, and show ads so the service stays free.{" "}
          <Link href="/CookiePolicy" className={styles.link}>
            Cookie Policy
          </Link>
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={handleReject} className={styles.reject}>
            Reject All
          </button>
          <button type="button" onClick={handleAccept} className={styles.accept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
