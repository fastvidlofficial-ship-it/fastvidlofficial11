import ThemeButton from "../theme/ThemeButton";
import styles from "./Header.module.css";
// import { a } from "react-router-dom";
//   import a from "next/a";
// import { BrowserRouter } from "react-router-dom";
import React from "react";
import logo from "../../../public/assets/weblogo.png";
import Image from "next/image";


const Header = (props) => {
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
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
          <li><a href="/Disclaimer">Disclaimer</a></li>
          <li><a href="/PrivacyPolicy">Privacy  Policy</a></li>
          <li><a href="/Blogs">Blog</a></li>
          <li><a href="/TermsAndConditions">Terms & Conditions</a></li>
        </ul>
      </nav>

      {/* <ThemeButton /> */}
    </header>
  );
};

export default Header;
