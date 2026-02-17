import styles from "./Footer.module.css";
// import gitLogo from "../../assets/icons8-github-logo-48.png";
//   import a from "next/a";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
        <ul className={styles["Ul-d"]}>
          <li className={styles["Styles-li"]}><a href="/"> </a></li>
          <li><a href="/AboutUs">| About Us |</a></li>
          <li><a href="/ContactUs">| Contact Us |</a></li>
          <li><a href="/Disclaimer">| Disclaimer |</a></li>
          <li><a href="/PrivacyPolicy">| Privacy Policy |</a></li>
          <li><a href="/CookiePolicy">| Cookie Policy |</a></li>
          <li><a href="/Blogs">| Blog |</a></li>
          <li><a href="/TermsAndConditions">| Terms & Conditions |</a></li>
         </ul>
        <p className={styles["styles-p"]}> © {new Date().getFullYear()} - FastVidl - All Rights Reserved.
     </p>
      
    </footer>
  );
};

export default Footer;
