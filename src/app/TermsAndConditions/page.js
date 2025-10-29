export const metadata = {
  metadataBase: new URL('https://fastvidl.com'),
  title: 'Terms & Conditions - FastVidl',
  description:
    'Terms and conditions for use of FastVidl. Read the rules, limitations and user responsibilities for our Instagram downloader.',
  alternates: { canonical: 'https://fastvidl.com/TermsAndConditions' },
  openGraph: {
    title: 'Terms & Conditions - FastVidl',
    description:
      'Terms and conditions for use of FastVidl. Read the rules, limitations and user responsibilities for our Instagram downloader.',
    url: 'https://fastvidl.com/TermsAndConditions',
    images: ['/assets/weblogo.png'],
  },
  robots: { index: true, follow: true },
};

// "use client"
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
        <p>
        </p>

        <h2>1. Definitions and Interpretation</h2>
        <p>
          When used in these Terms and Conditions, the following terms have these specific meanings: "FastVidl," "we," or "us" refers to the Instagram Reel downloading service operated at fastvidl.com; "Service" means the video downloading functionality and related features provided through our website; "Content" refers to videos, images, and other media available for download through our Service; "Third-Party Platform" means Instagram, operated by Meta Platforms, Inc.; and "Device" means any equipment capable of accessing our Service, including computers, smartphones, tablets, and similar technology.
        </p>
        <p>
          These terms apply universally regardless of whether words appear in singular or plural form. Section headings are included for convenience and do not affect interpretation.
        </p>

        <h2>2. Agreement and Acceptance</h2>
        <p>
          By accessing, browsing, or using FastVidl, you enter into a legally binding agreement with us under these Terms and Conditions. This agreement governs your entire relationship with our Instagram Reel downloading Service.
        </p>
        <p>
          You must be at least 18 years of age to use FastVidl. By using our Service, you confirm that you meet this minimum age requirement. We do not knowingly provide services to minors.
        </p>
        <p>
          If you do not accept these Terms and Conditions in their entirety, you must immediately discontinue use of our Service. Continued use constitutes full acceptance of all terms herein.
        </p>
        <p>
          Your use of FastVidl is also governed by our Privacy Policy, which details how we collect, use, and protect your information. We encourage you to review our Privacy Policy at fastvidl.com before using our Service.
        </p>

        <h2>3. Service Description</h2>
        <p>
          FastVidl is a free online tool that enables users to download Instagram Reels, photos, and other publicly available media content from Instagram. Our Service acts as an intermediary, allowing users to save content directly from Instagram for personal use.
        </p>
        <p>
          We do not host, store, or own any downloaded content. We are not affiliated with Instagram or Meta Platforms, Inc. We do not guarantee availability of specific content or offer support for Instagram’s platform features.
        </p>

        <h2>4. User Responsibilities and Acceptable Use</h2>
        <p>
          You agree to use FastVidl only for lawful purposes and in compliance with all applicable local, national, and international laws, including copyright and intellectual property laws, Instagram’s terms of service, and the rights of content creators and copyright holders.
        </p>
        <p>
          You may not use our Service to download copyrighted content without permission, violate any intellectual property rights, redistribute downloaded content for commercial use, access private or restricted Instagram accounts, attempt to bypass Instagram’s technical protections, distribute malware, interfere with our Service’s functionality, impersonate others, collect data without authorization, or use automated tools or bots without consent.
        </p>
        <p>
          You acknowledge that you are solely responsible for ensuring that your downloads comply with applicable laws, that you have the right to download the content, and that FastVidl bears no responsibility for any misuse of our Service.
        </p>

        <h2>5. Intellectual Property Rights</h2>
        <p>
          All content downloaded through FastVidl remains the property of its original Instagram creators and copyright holders. FastVidl claims no ownership of any downloaded material.
        </p>
        <p>
          The FastVidl website, including its design, code, text, graphics, logos, and features, is owned by us and protected by intellectual property laws. You may not copy, modify, or distribute our website content, use our branding without permission, create derivative works, or reverse engineer our technology.
        </p>

        <h2>6. Third-Party Platform and Links</h2>
        <p>
          FastVidl is an independent service and is not endorsed by, affiliated with, or officially connected to Instagram or Meta Platforms, Inc.
        </p>
        <p>
          Our Service may include links to external websites or references. We do not control, endorse, or assume responsibility for content on external sites, third-party privacy practices, or accuracy of third-party information.
        </p>
        <p>
          Your use of Instagram is governed by its own terms of service and privacy policy. You are responsible for understanding and complying with Instagram’s rules and community guidelines.
        </p>

        <h2>7. Service Availability and Modifications</h2>
        <p>
          FastVidl is provided on an "as-is" and "as-available" basis without warranties of any kind. We make no guarantees regarding uninterrupted access, error-free performance, compatibility with all devices, or continued availability of Instagram Reel downloads.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our Service at any time, including functionality related to Instagram Reels, system requirements, or download limits.
        </p>
        <p>
          While we may provide notice of significant updates, we are not obligated to offer advance warnings for technical or operational changes.
        </p>

        <h2>8. Disclaimers and Warranties</h2>
        <p>
          To the fully extent permitted by law, we disclaim all warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, and security. We do not warrant that our Instagram Reel downloader is free of errors, secure from threats, or always available.
        </p>
        <p>
          We do not verify or guarantee the accuracy of Instagram URLs, quality of downloaded Reels, or continued accessibility of Instagram content.
        </p>
        <p>
          Some jurisdictions do not permit specific disclaimers. In such cases, disclaimers apply to the maximum extent permitted by applicable law.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          Our total liability for any claims arising from your use of FastVidl shall not exceed the amount you paid us in the preceding twelve months, or $50 USD if no payment was made (whichever is greater).
        </p>
        <p>
          We are not liable for indirect or consequential damages, loss of profits, data, or business opportunities, or damages resulting from Instagram policy changes, access restrictions, or third-party errors.
        </p>
        <p>
          These limitations apply even if we have been advised of the possibility of such damages. Some jurisdictions may provide additional consumer protections which remain unaffected.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless FastVidl, its affiliates, and partners from any claims, damages, or expenses arising from your use of the Instagram Reel downloader, your violation of these Terms, or infringement of third-party rights.
        </p>

        <h2>11. Termination</h2>
        <p>
          We may suspend or terminate your access to FastVidl at any time without notice if you breach these Terms, engage in prohibited activity, or if legal or technical reasons require us to do so.
        </p>
        <p>
          Upon termination, your right to use the Service ends immediately. All relevant clauses, including Intellectual Property, Disclaimers, Limitation of Liability, and Indemnification, remain in effect.
        </p>

        <h2>12. Dispute Resolution</h2>
        <p>
          Before initiating any legal action, you agree to contact us at fastvidlofficial@gmail.com to attempt an informal resolution. We will make good-faith efforts to resolve any concerns.
        </p>
        <p>
          These Terms are governed by the laws applicable to our jurisdiction, without regard to conflict of law principles.
        </p>
        <p>
          You agree to submit to the exclusive jurisdiction of the courts in our operating location for any unresolved disputes.
        </p>

        <h2>13. Special Provisions for Specific Users</h2>
        <p>
          EU users benefit from mandatory consumer protection laws in their country of residence. Nothing in these Terms limits those rights.
        </p>
        <p>
          U.S. users confirm they are not located in restricted or embargoed countries or on any government prohibited lists.
        </p>
        <p>
          California residents may refer to our Privacy Policy for their specific rights under the CCPA.
        </p>

        <h2>14. General Provisions</h2>
        <p>
          These Terms and Conditions, along with our Privacy Policy, form the entire agreement between you and FastVidl regarding our Instagram Reel downloading Service.
        </p>
        <p>
          If any provision is deemed invalid, it shall be modified to reflect intent within legal limits, and all other provisions shall remain in effect.
        </p>
        <p>
          No waiver of any breach shall constitute a waiver of future breaches.
        </p>
        <p>
          You may not transfer your rights without our written consent. We may assign our rights freely.
        </p>
        <p>
          We are not liable for delays caused by factors beyond our control, such as technical failures, internet outages, or regulatory restrictions.
        </p>
        <p>
          In case of translation discrepancies, the English version of these Terms shall prevail.
        </p>

        <h2>15. Changes to Terms and Conditions</h2>
        <p>
          We reserve the right to update, modify, or replace these Terms and Conditions at any time.
        </p>
        <p>
          When material changes occur, we will update the “Last Updated” date and, when practical, provide reasonable notice through our website.
        </p>
        <p>
          Continued use of FastVidl after updates signifies acceptance of the revised Terms. If you do not agree, you must stop using our Service.
        </p>
        <p>
          You are responsible for reviewing these Terms regularly to stay informed.
        </p>

        <h2>16. Contact Information</h2>
        <p>
          For questions, concerns, or notices regarding these Terms and Conditions, please contact us at:
        </p>
        <p>
          Email: fastvidlofficial@gmail.com
        </p>
        <p>
          Website: fastvidl.com
        </p>
        <p>
          We will make reasonable efforts to respond to all legitimate inquiries within a reasonable timeframe.
        </p>

        <h2>17. Acknowledgment</h2>
        <p>
          By using FastVidl, you acknowledge that you have read and understood these Terms and Conditions, agree to be bound by them, and will use our Instagram Reel downloader responsibly and lawfully.
        </p>
        <p>
          Thank you for using FastVidl. We are dedicated to providing a reliable, efficient, and user-friendly Instagram Reel downloading service.
        </p>

         <p>  For more information, please visit our {" "}
      <Link
        href="/Blogs" rel="nofollow"
        className="terms-link"
        style={{
          color: "#1877f2",          // visible blue color
          textDecoration: "none",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Blog
      </Link>.
    </p>
        
      </section>

    </div>
  );
};

export default TermsAndConditions;
