"use client"
import React from "react";
import "../Disclaimer/Disclaimer.css";
import Link from "next/link";


const PrivacyPolicy = () => {
  return (
    
    <div className="privacy-page">
      
       <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            Important legal information and terms of use for our FastVidl downloading service
          </p>
        </div>
      </div>

      {/* Main Content */}
    <div className="privacy-main">
  <div className="container">
    <div className="privacy-section">
      <div className="section-header">
        
      </div>
     <div className="section-content">
  <p className="privacy-text">
    This Privacy Policy explains how FastVidl (we, us, or our) handles information when you use our Instagram Reels downloading service at fastvidl.com (the "Service"). We are committed to protecting your privacy and being transparent about our data practices.
  </p>

  <p className="privacy-text">
    By accessing or using FastVidl to download Instagram Reels, you acknowledge that you have read, understood, and agree to the terms outlined in this Privacy Policy.
  </p>

  <h3>1. Information We Collect</h3>
  <p className="privacy-text">
    When you use FastVidl, we may automatically collect certain technical information, including device information such as IP address, browser type and version, operating system, and device identifiers; usage information including pages visited, time and date of visits, download activity, referring URLs; and technical data such as screen resolution, language preferences, and time zone settings. This information helps us maintain and improve our Instagram Reels downloading service.
  </p>
  <p className="privacy-text">
    FastVidl does not require account creation or login. However, if you choose to contact us via email at fastvidlofficial@gmail.com, we may collect your email address and any information you choose to include in your message.
  </p>
  <p className="privacy-text">
    We use cookies and tracking technologies including essential cookies required for the Service to function properly, functional cookies to remember your preferences, analytics cookies to understand user interaction, and advertising cookies delivered by third-party partners. Disabling some cookies may limit the functionality of the Instagram Reel downloader.
  </p>

  <h3>2. How We Use Information</h3>
  <p className="privacy-text">
    We use collected information for service delivery to process your Instagram Reel download requests and ensure smooth performance, for service improvement to analyze usage and enhance reliability, for communication to respond to inquiries sent to fastvidlofficial@gmail.com, and for security to detect and prevent fraudulent or abusive activities.
  </p>

  <h3>3. Information Sharing and Third Parties</h3>
  <p className="privacy-text">
    FastVidl does not sell, rent, or trade your personal information to third parties for monetary gain.
  </p>
  <p className="privacy-text">
    We work with trusted third-party providers who assist us in operating our Instagram Reel downloader, including analytics services such as Google Analytics, advertising networks like Google AdSense to support our free Service, and security tools such as reCAPTCHA by Google to protect against spam and abuse. These providers only access information necessary to perform their functions and are required to maintain confidentiality.
  </p>
  <p className="privacy-text">
    We may disclose information when required by law, such as in response to valid legal requests from authorities, to protect our rights or safety, or to prevent illegal activity or enforce our terms.
  </p>

  <h3>4. Important Clarifications</h3>
  <p className="privacy-text">
    FastVidl does not store, host, or retain any Instagram Reels or media files that you download. All content remains hosted on Instagram’s servers. Our Service only facilitates direct downloading by the user.
  </p>
  <p className="privacy-text">
    FastVidl does not require registration or account creation. We do not maintain user profiles or databases of downloaded Instagram Reels.
  </p>
  <p className="privacy-text">
    We are not affiliated with, endorsed by, or connected to Instagram or Meta Platforms, Inc. FastVidl operates as an independent third-party tool for personal use.
  </p>

  <h3>5. Data Retention</h3>
  <p className="privacy-text">
    Technical logs are retained for up to 90 days for security and performance analysis. Aggregated and anonymized analytics data may be stored longer to identify trends. Email correspondence is retained only as long as necessary to respond to your inquiries. We do not retain personal information longer than required for the purposes described in this policy.
  </p>

  <h3>6. Your Rights and Choices</h3>
  <p className="privacy-text">
    You can clear cookies and browsing data, set your browser to reject cookies, or use private/incognito browsing mode.
  </p>
  <p className="privacy-text">
    You can opt out of personalized advertising by visiting Google Ads Settings at https://www.google.com/settings/ads, using tools such as the Network Advertising Initiative at http://www.networkadvertising.org/choices/, or enabling “Limit Ad Tracking” on your device.
  </p>
  <p className="privacy-text">
    FastVidl currently does not respond to "Do Not Track" browser signals, as there is no standard method for compliance. However, you can use the privacy controls mentioned above.
  </p>

  <h3>7. Rights Under Privacy Laws</h3>
  <p className="privacy-text">
    If you are in the European Economic Area, you have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at fastvidlofficial@gmail.com.
  </p>
  <p className="privacy-text">
    California residents have similar rights under the CCPA, including the right to know what personal information is collected and to opt out of its sale. FastVidl does not sell personal information. However, certain advertising technologies may be interpreted as “sales” under California law. You may opt out as described above.
  </p>
  <p className="privacy-text">
    Users in other jurisdictions may have additional privacy rights under local laws. Contact us to learn more about your specific rights.
  </p>

  <h3>8. Children's Privacy</h3>
  <p className="privacy-text">
    FastVidl is not intended for children under 13 years of age. We do not knowingly collect information from children. If you believe a child has provided us with personal data, please contact us immediately at fastvidlofficial@gmail.com, and we will remove such information.
    
  </p>
   <p>  Read our  {" "}  
      <Link
        href="/TermsAndConditions" rel="nofollow"
        className="terms-link"
        style={{
          color: "#1877f2",          // visible blue color
          textDecoration: "none",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Terms and conditions
      </Link> 
       
    </p>
</div>

    </div>
  </div>
</div>
    </div>
  );
};

export default PrivacyPolicy;