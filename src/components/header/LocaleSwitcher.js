"use client";

import { useEffect, useRef, useState } from "react";
import { useLocaleCatalog } from "@/contexts/LocaleContext";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocaleCatalog();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const select = (code) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <span className={styles.triggerLabel}>{t("header.language")}</span>
        <span className={styles.triggerValue}>
          {locale === "ar" ? t("header.langArabic") : t("header.langEnglish")}
        </span>
        <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open ? (
        <ul className={styles.menu} role="listbox">
          <li role="option" aria-selected={locale === "en"}>
            <button type="button" className={styles.option} onClick={() => select("en")}>
              {t("header.langEnglish")}
            </button>
          </li>
          <li role="option" aria-selected={locale === "ar"}>
            <button type="button" className={styles.option} onClick={() => select("ar")}>
              {t("header.langArabic")}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
