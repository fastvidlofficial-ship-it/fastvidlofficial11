"use client"
import styles from "./Header.module.css";
import React from "react";
import logo from "../../../public/assets/weblogo.png";
import Image from "next/image";

const Header = () => {
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
      <nav className={styles["navstyle"]}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
          <li><a href="/services/instagram-reel-downloader">Instagram Reel Downloader</a></li>
          <li><a href="/services/facebook-reel-downloader">Facebook Reel Downloader</a></li>
          <li><a href="/services/pinterest-reel-downloader">Pinterest Reel Downloader</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
