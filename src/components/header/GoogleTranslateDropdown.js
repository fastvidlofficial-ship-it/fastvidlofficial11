"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./GoogleTranslateDropdown.module.css";

const MOUNT_ID = "google_translate_element";
const SCRIPT_ID = "google-translate-script";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ar", label: "العربية" },
  { code: "cs", label: "čeština" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिन्दी" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "ro", label: "Română" },
  { code: "ru", label: "Русский" },
  { code: "th", label: "ภาษาไทย" },
  { code: "tr", label: "Türkçe" },
  { code: "uk", label: "Українська" },
  { code: "ur", label: "اردو" },
  { code: "zh-CN", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文" },
];

const INCLUDED_CODES = LANGUAGES.filter((l) => l.code !== "en")
  .map((l) => l.code)
  .join(",");

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getCurrentFromCookie() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/en\/([^;/]+)/);
  return match ? match[1] : "en";
}

/** Clear all googtrans cookies Google may set (path + host + parent domain). */
function clearGoogtransCookies() {
  const past = "Thu, 01 Jan 1970 00:00:00 GMT";
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  document.cookie = `googtrans=; path=/; expires=${past}`;
  document.cookie = `googtrans=; path=/; max-age=0`;
  if (host) {
    document.cookie = `googtrans=; path=/; domain=${host}; expires=${past}`;
    document.cookie = `googtrans=; path=/; domain=.${host}; expires=${past}`;
  }
}

/**
 * Apply target language using Google's googtrans cookie and reload.
 * Relying on .goog-te-combo is unreliable (widget often not ready or hidden).
 * @see https://translate.google.com/manager/website/ — cookie format /source/target
 */
function applyLanguageAndReload(targetCode) {
  if (targetCode === "en") {
    clearGoogtransCookies();
    window.location.reload();
    return;
  }

  const pair = `/en/${targetCode}`;
  document.cookie = `googtrans=${pair}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;

  const host = window.location.hostname;
  if (host && host !== "localhost" && !host.startsWith("127.")) {
    document.cookie = `googtrans=${pair}; path=/; domain=.${host}; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  }

  window.location.reload();
}

export default function GoogleTranslateDropdown() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const wrapRef = useRef(null);

  useEffect(() => {
    setCurrent(getCurrentFromCookie());
  }, []);

  useEffect(() => {
    const runInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const el = document.getElementById(MOUNT_ID);
      if (!el) return;
      el.innerHTML = "";
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: INCLUDED_CODES,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          MOUNT_ID
        );
      } catch {
        /* already init */
      }
    };

    window.googleTranslateElementInit = runInit;

    if (document.getElementById(SCRIPT_ID)) {
      const t = setTimeout(runInit, 0);
      return () => clearTimeout(t);
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const selectLang = (code) => {
    setOpen(false);

    const fromCookie = getCurrentFromCookie();
    if (code === fromCookie) {
      setCurrent(code);
      return;
    }

    setCurrent(code);
    applyLanguageAndReload(code);
  };

  const currentLang = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.triggerLabel}>{currentLang.label}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === current}
              className={`${styles.option} ${lang.code === current ? styles.optionActive : ""}`}
              onClick={() => selectLang(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}

      <div id={MOUNT_ID} className={styles.hiddenWidget} aria-hidden="true" />
    </div>
  );
}
