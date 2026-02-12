"use client"
import React from "react";
import styles from "./TermsAndConditions.module.css";
import "../Disclaimer/Disclaimer.css";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">
            Important legal information and terms of use for our FastVidl downloading service
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <p style={{ fontStyle: "italic", color: "#666", marginBottom: "2rem" }}>
          Last updated: 21 January 2026
        </p>

        <p>
          Please read these Terms carefully before using FastVidl.
        </p>
        <p>
          By accessing or using fastvidl.com ("FastVidl", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our service.
        </p>

        <h2>Quick summary (not a substitute for the full terms)</h2>
        <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>FastVidl is a free tool for downloading public content from Instagram, Facebook, and Pinterest for personal use.</li>
          <li style={{ marginBottom: "0.5rem" }}>No commercial use of downloaded content is allowed without permission from the rights holder.</li>
          <li style={{ marginBottom: "0.5rem" }}>You are responsible for complying with copyright laws and platform rules in your country.</li>
          <li style={{ marginBottom: "0.5rem" }}>We are not responsible for how you use any downloaded content.</li>
          <li style={{ marginBottom: "0.5rem" }}>You use FastVidl entirely at your own risk.</li>
        </ul>

        <h2>1. Acceptance of terms</h2>
        <p>
          By visiting fastvidl.com or using any of our download features, you confirm that you have read, understood, and agree to these Terms and any updates we may publish. Continued use of the site after changes are posted means you accept the updated Terms.
        </p>

        <h2>2. Who can use FastVidl</h2>
        <p>
          You may use FastVidl only if:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>You are at least 13 years old (or 16 if required by laws in your region, such as parts of the EU/EEA).</li>
          <li style={{ marginBottom: "0.5rem" }}>You have the legal capacity to enter into a binding agreement.</li>
          <li style={{ marginBottom: "0.5rem" }}>Your use of FastVidl complies with all applicable laws and the terms of service of Instagram, Facebook, and Pinterest.</li>
        </ul>
        <p>
          If you do not meet these requirements, you must not use our service.
        </p>

        <h2>3. What FastVidl does</h2>
        <p>
          <strong>FastVidl provides:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            An online tool that lets you download publicly available content from:
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
              <li>Instagram (for example Reels, videos, photos, stories, and highlights)</li>
              <li>Facebook (for example reels, public videos, public posts)</li>
              <li>Pinterest (for example images, videos, and pins)</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>FastVidl does not:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Host or permanently store the content you download.</li>
          <li style={{ marginBottom: "0.5rem" }}>Provide access to private, restricted, or paywalled content.</li>
          <li style={{ marginBottom: "0.5rem" }}>Grant you any license or ownership over downloaded content.</li>
          <li style={{ marginBottom: "0.5rem" }}>Guarantee that the service will always be available, error‑free, or unchanged.</li>
        </ul>

        <h2>4. Acceptable use – personal use only</h2>
        <p>
          <strong>You may:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Download content for your own personal, offline viewing.</li>
          <li style={{ marginBottom: "0.5rem" }}>Save content for personal inspiration, education, or reference.</li>
          <li style={{ marginBottom: "0.5rem" }}>Archive public content that you created yourself.</li>
        </ul>
        <p>
          <strong>You may not:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Use downloaded content for commercial purposes (for example ads, products, or paid projects) without permission from the rights holder.</li>
          <li style={{ marginBottom: "0.5rem" }}>Sell, license, or redistribute downloaded content to others.</li>
          <li style={{ marginBottom: "0.5rem" }}>Remove copyright notices, trademarks, or watermarks where they appear.</li>
          <li style={{ marginBottom: "0.5rem" }}>Claim that someone else's content is your own.</li>
          <li style={{ marginBottom: "0.5rem" }}>Use downloaded content in ways that violate copyright or other rights.</li>
        </ul>

        <h2>5. Strictly prohibited activities</h2>
        <p>
          You must not:
        </p>
        
        <h3>Bulk or automated use</h3>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Download large quantities of content in an automated or systematic way.</li>
          <li style={{ marginBottom: "0.5rem" }}>Use bots, scripts, or any automated system to access or use FastVidl.</li>
        </ul>

        <h3>Commercial exploitation</h3>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Sell or license content obtained via FastVidl.</li>
          <li style={{ marginBottom: "0.5rem" }}>Use downloaded content in marketing, advertising, or any paid campaign without permission.</li>
          <li style={{ marginBottom: "0.5rem" }}>Include third‑party content in products or services for profit without authorization.</li>
        </ul>

        <h3>Copyright and rights violations</h3>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Download or share content that you are not legally allowed to use.</li>
          <li style={{ marginBottom: "0.5rem" }}>Infringe copyright, trademarks, privacy, or any other rights.</li>
          <li style={{ marginBottom: "0.5rem" }}>Violate the terms of Instagram, Facebook, Pinterest, or any other platform.</li>
        </ul>

        <h3>Abuse of the service</h3>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Attempt to bypass security or technical protections.</li>
          <li style={{ marginBottom: "0.5rem" }}>Interfere with FastVidl's operation or performance.</li>
          <li style={{ marginBottom: "0.5rem" }}>Upload or transmit malware, viruses, or harmful code.</li>
          <li style={{ marginBottom: "0.5rem" }}>Impersonate any person or entity while using the service.</li>
        </ul>

        <h2>6. Copyright and intellectual property</h2>
        <p>
          All content you can download via FastVidl belongs to its original creators or rights holders. Downloading content:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Does not transfer ownership to you.</li>
          <li style={{ marginBottom: "0.5rem" }}>Does not grant you any license beyond personal viewing, unless the content owner clearly allows it.</li>
        </ul>
        <p>
          You are fully responsible for checking that your use of any content complies with applicable laws.
        </p>

        <h3>Copyright concerns / takedown</h3>
        <p>
          If you are a rights holder and believe FastVidl is being used to infringe your rights, please contact us at <a href="mailto:fastvidlofficial@gmail.com" className="terms-link">fastvidlofficial@gmail.com</a> with:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>A description of the copyrighted work.</li>
          <li style={{ marginBottom: "0.5rem" }}>The URL(s) or enough information to locate the material.</li>
          <li style={{ marginBottom: "0.5rem" }}>Your contact details.</li>
          <li style={{ marginBottom: "0.5rem" }}>A statement that you believe in good faith that your rights are being infringed.</li>
          <li style={{ marginBottom: "0.5rem" }}>A statement that the information in your notice is accurate and that you are the rights holder or authorized to act on their behalf.</li>
        </ul>
        <p>
          We will review and, where appropriate, remove or block access to the reported material.
        </p>

        <h2>7. Platform disclaimers</h2>
        <p>
          FastVidl is an independent service. It is not affiliated with, endorsed by, or connected to Instagram, Facebook, Pinterest, Meta Platforms, Inc., or any other social media platform.
        </p>
        <p>
          When using FastVidl, you must also follow:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}><a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer" className="terms-link">Instagram's Terms of Use</a></li>
          <li style={{ marginBottom: "0.5rem" }}><a href="https://www.facebook.com/terms.php" target="_blank" rel="noopener noreferrer" className="terms-link">Facebook's Terms of Service</a></li>
          <li style={{ marginBottom: "0.5rem" }}><a href="https://policy.pinterest.com/en/terms-of-service" target="_blank" rel="noopener noreferrer" className="terms-link">Pinterest's Terms of Service</a></li>
        </ul>
        <p>
          Any action these platforms may take against your accounts (including suspension or removal) is outside our control and responsibility.
        </p>

        <h2>8. Disclaimers and limitation of liability</h2>
        <p>
          FastVidl is provided on an "AS IS" and "AS AVAILABLE" basis.
        </p>
        <p>
          <strong>We do not guarantee:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>That the site or service will always be available or uninterrupted.</li>
          <li style={{ marginBottom: "0.5rem" }}>That FastVidl will be error‑free or compatible with every device or browser.</li>
          <li style={{ marginBottom: "0.5rem" }}>That content downloaded through FastVidl will always be available in the same quality or format.</li>
        </ul>
        <p>
          To the maximum extent permitted by law, FastVidl and its team are not liable for:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>How you use downloaded content.</li>
          <li style={{ marginBottom: "0.5rem" }}>Any copyright or legal violations committed by users.</li>
          <li style={{ marginBottom: "0.5rem" }}>Any loss of data, damage to devices, or security issues arising from your use of the service.</li>
          <li style={{ marginBottom: "0.5rem" }}>Any direct, indirect, incidental, special, or consequential damages.</li>
        </ul>
        <p>
          If a court finds that we are liable for any claim related to your use of FastVidl, our total liability will be limited to the greater of USD 100 or the total amount you have paid us, if any (FastVidl is currently free). The following disclaimers apply to all use of FastVidl and its tools.
        </p>
        <p style={{ fontWeight: "600", color: "#dc3545" }}>
          You use FastVidl entirely at your own risk.
        </p>

        <h2>9. Your responsibilities and indemnification</h2>
        <p>
          <strong>You agree to:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Use FastVidl only in accordance with these Terms and applicable laws.</li>
          <li style={{ marginBottom: "0.5rem" }}>Obtain any necessary permissions from rights holders before re‑using content beyond personal viewing.</li>
          <li style={{ marginBottom: "0.5rem" }}>Accept full responsibility for any content you download, share, or use.</li>
        </ul>
        <p>
          You agree to indemnify and hold harmless FastVidl and its team from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Your misuse of the service.</li>
          <li style={{ marginBottom: "0.5rem" }}>Your violation of these Terms.</li>
          <li style={{ marginBottom: "0.5rem" }}>Your infringement of any third‑party rights.</li>
        </ul>

        <h2>10. Service changes and termination</h2>
        <p>
          <strong>We may, at any time:</strong>
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Modify, suspend, or discontinue any part of FastVidl.</li>
          <li style={{ marginBottom: "0.5rem" }}>Update these Terms (with the new date shown at the top).</li>
          <li style={{ marginBottom: "0.5rem" }}>Restrict or block access to the service for any user who violates these Terms or abuses the service.</li>
        </ul>
        <p>
          You may stop using FastVidl at any time. As the service is free, there are no refunds.
        </p>

        <h2>11. Privacy</h2>
        <p>
          Your use of FastVidl is also governed by our Privacy Policy, which explains what information we collect (if any), how we use it, and your rights.
        </p>
        <p>
          Please read our Privacy Policy at: <Link href="/PrivacyPolicy" className="terms-link">https://fastvidl.com/PrivacyPolicy</Link>
        </p>

        <h2>12. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of <strong>Pakistan</strong>, without regard to conflict of law principles. If you have concerns, please contact us first at <a href="mailto:fastvidlofficial@gmail.com" className="terms-link">fastvidlofficial@gmail.com</a> so we can try to resolve the issue informally.
        </p>
        <p>
          If a dispute cannot be resolved informally, it must be brought before the courts located in <strong>Rawalpindi, Pakistan</strong>, within one (1) year from when the claim arose, unless a longer period is required by law.
        </p>

        <h2>13. General provisions</h2>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Entire agreement:</strong> These Terms, together with our Privacy Policy and any other notices on our site, form the entire agreement between you and FastVidl regarding your use of the service.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Severability:</strong> If any part of these Terms is found invalid or unenforceable, the remaining parts will continue in full force and effect.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>No waiver:</strong> If we do not enforce a particular right or provision, it does not mean we waive that right.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Assignment:</strong> You may not transfer your rights or obligations under these Terms to anyone else. We may assign our rights and obligations to another entity as part of a business transfer or similar event.
          </li>
        </ul>

        <h2>Important reminders</h2>
        <p>
          By using FastVidl, you confirm that:
        </p>
        <ul style={{ marginBottom: "1rem", paddingLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>You understand the service is for personal use only.</li>
          <li style={{ marginBottom: "0.5rem" }}>You will respect copyright and creators' rights.</li>
          <li style={{ marginBottom: "0.5rem" }}>You are responsible for how you use any downloaded content.</li>
          <li style={{ marginBottom: "0.5rem" }}>You accept the risks of using this service.</li>
        </ul>
        <p style={{ fontWeight: "600", color: "#dc3545" }}>
          If you do not agree with these Terms, please do not use FastVidl.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these Terms, you can contact us at: <a href="mailto:fastvidlofficial@gmail.com" className="terms-link">fastvidlofficial@gmail.com</a>
        </p>

        <p style={{ marginTop: "2rem" }}>
          For more information, please visit our{" "}
          <Link
            href="/Blogs"
            rel="nofollow"
            className="terms-link"
            style={{
              color: "#1877f2",
              textDecoration: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Blog
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
