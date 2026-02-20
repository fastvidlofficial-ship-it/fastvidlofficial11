"use client"
import styles from "./Header.module.css";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/assets/weblogo.png";
import Image from "next/image";
import ThemeButton from "../theme/ThemeButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && !e.target.closest(`.${styles["hamburger"]}`)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles["header"]}>
      <div>
        <a className={styles["Anchar"]} href="/">
          <Image
            className="img-logo"
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div className={styles["tittle-a"]}>
            <h2>FastVidl</h2>
          </div>
        </a>
      </div>
      <div className={styles["header-actions"]}>
        <ThemeButton />
      </div>
      <button
        type="button"
        className={styles["hamburger"]}
        onClick={(e) => { e.stopPropagation(); setIsMenuOpen((prev) => !prev); }}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={isMenuOpen ? styles["hamburgerOpen1"] : ""} />
        <span className={isMenuOpen ? styles["hamburgerOpen2"] : ""} />
        <span className={isMenuOpen ? styles["hamburgerOpen3"] : ""} />
      </button>
      <nav ref={navRef} className={`${styles["navstyle"]} ${isMenuOpen ? styles["navOpen"] : ""}`} aria-hidden={!isMenuOpen}>
        <ul>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/AboutUs" onClick={closeMenu}>About Us</a></li>
          <li><a href="/ContactUs" onClick={closeMenu}>Contact Us</a></li>
          <li><a href="/instagram-reel-downloader-free" onClick={closeMenu}>Instagram Reel Downloader Free</a></li>
          <li><a href="/free-facebook-video-downloader" onClick={closeMenu}>Free Facebook Video Downloader</a></li>
          <li><a href="/pinterest-video-downloader-free" onClick={closeMenu}>Pinterest Video Downloader Free</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
