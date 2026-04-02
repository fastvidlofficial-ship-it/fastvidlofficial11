"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";
import styles from "./ThemeButton.module.css";

const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (next) => {
    setTheme(next);
    setOpen(false);
  };

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Theme: choose light or dark"
      >
        <span className={styles.triggerIcon}>{theme === "dark" ? <MoonIcon /> : <SunIcon />}</span>
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox" aria-label="Theme">
          <li role="option" aria-selected={theme === "light"} className={`${styles.option} ${theme === "light" ? styles.optionActive : ""}`} onClick={() => select("light")}>
            Light
          </li>
          <li role="option" aria-selected={theme === "dark"} className={`${styles.option} ${theme === "dark" ? styles.optionActive : ""}`} onClick={() => select("dark")}>
            Dark
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeButton;
