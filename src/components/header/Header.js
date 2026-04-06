"use client";
import styles from "./Header.module.css";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/assets/weblogo.png";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "../theme/ThemeButton";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocaleCatalog } from "@/contexts/LocaleContext";

const INSTAGRAM_HREFS = [
  "/instagram-photo-downloader",
  "/instagram-story-downloader",
  "/instagram-reel-downloader-free",
];

const Header = () => {
  const { t } = useLocaleCatalog();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [igOpen, setIgOpen] = useState(false);
  const navRef = useRef(null);
  const igWrapRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const closeIg = () => setIgOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !e.target.closest(`.${styles["hamburger"]}`)) {
        closeMenu();
      }
      if (igWrapRef.current && !igWrapRef.current.contains(e.target)) {
        closeIg();
      }
    };
    if (isMenuOpen || igOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, igOpen]);

  return (
    <header className={styles["header"]}>
      <div>
        <a className={styles["Anchar"]} href="/">
          <Image
            className="img-logo"
            src={logo}
            alt={t("header.logoAlt")}
            style={{ width: "50px", height: "50px" }}
          />
          <div className={styles["tittle-a"]}>
            <h2>FastVidl</h2>
          </div>
        </a>
      </div>
      <div className={styles["header-actions"]}>
        <LocaleSwitcher />
        <ThemeButton />
      </div>
      <button
        type="button"
        className={styles["hamburger"]}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen((prev) => !prev);
        }}
        aria-label={t("header.toggleMenu")}
        aria-expanded={isMenuOpen}
      >
        <span className={isMenuOpen ? styles["hamburgerOpen1"] : ""} />
        <span className={isMenuOpen ? styles["hamburgerOpen2"] : ""} />
        <span className={isMenuOpen ? styles["hamburgerOpen3"] : ""} />
      </button>
      <nav
        ref={navRef}
        className={`${styles["navstyle"]} ${isMenuOpen ? styles["navOpen"] : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              {t("header.home")}
            </Link>
          </li>
          <li
            ref={igWrapRef}
            className={`${styles.navDropdown} ${igOpen ? styles.navDropdownOpen : ""}`}
          >
            <button
              type="button"
              className={styles.navDropdownTrigger}
              aria-expanded={igOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setIgOpen((v) => !v);
              }}
            >
              <span>{t("header.instagramDownloader")}</span>
              <svg
                className={styles.navChevron}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className={styles.navDropdownMenu} role="menu">
              {INSTAGRAM_HREFS.map((href) => {
                const labelKey =
                  href === "/instagram-photo-downloader"
                    ? "header.igPhoto"
                    : href === "/instagram-story-downloader"
                      ? "header.igStory"
                      : "header.igReel";
                return (
                  <li key={href} role="none">
                    <Link
                      href={href}
                      role="menuitem"
                      className={styles.navDropdownLink}
                      onClick={() => {
                        closeMenu();
                        closeIg();
                      }}
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link href="/free-facebook-video-downloader" onClick={closeMenu}>
              {t("header.facebook")}
            </Link>
          </li>
          <li>
            <Link href="/pinterest-video-downloader-free" onClick={closeMenu}>
              {t("header.pinterest")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
