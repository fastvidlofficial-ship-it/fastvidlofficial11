"use client"
import ThemeButton from "../theme/ThemeButton";
import styles from "./Header.module.css";
// import { a } from "react-router-dom";
//   import a from "next/a";
// import { BrowserRouter } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import logo from "../../../public/assets/weblogo.png";
import Image from "next/image";


const Header = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles["header"]}>
      <div><a className={styles["Anchar"]} href="/">
        <Image
          className="img-logo"
          src={logo}
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />

        <div className={styles["tittle-a"]}> <h2>
          FastVidl
        </h2></div>
      </a></div>
      <nav className={styles["navstyle"]}>

        <ul>
          <li><a href="/">Home</a></li>
          <li className={styles["dropdown-container"]} ref={dropdownRef}>
            <a 
              href="#" 
              className={styles["dropdown-trigger"]}
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              Services
              <span 
                className={styles["dropdown-arrow"]}
                style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >▼</span>
            </a>
            {isDropdownOpen && (
              <ul className={styles["dropdown-menu"]}>
                <li>
                  <a href="/services/instagram-reel-downloader" onClick={() => setIsDropdownOpen(false)}>
                    Instagram Reel Downloader
                  </a>
                </li>
                <li>
                  <a href="/services/facebook-reel-downloader" onClick={() => setIsDropdownOpen(false)}>
                    Facebook Reel Downloader
                  </a>
                </li>
                <li>
                  <a href="/services/pinterest-reel-downloader" onClick={() => setIsDropdownOpen(false)}>
                    Pinterest Reel Downloader
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
          {/* <li><a href="/Disclaimer">Disclaimer</a></li> */}
          <li><a href="/PrivacyPolicy">Privacy  Policy</a></li>
          {/* <li><a href="/Blogs">Blog</a></li> */}
          <li><a href="/TermsAndConditions">Terms & Conditions</a></li>
        </ul>
      </nav>

      {/* <ThemeButton /> */}
    </header>
  );
};

export default Header;
