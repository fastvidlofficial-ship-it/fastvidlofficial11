"use client"
import React from "react";
import Link from "next/link";
import "./PrivacyPolicy.css";
import "../Disclaimer/Disclaimer.css";

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
            Your privacy matters to us. This Privacy Policy explains how we handle information when you use our content downloader service.
          </p>
        </div>
      </div>

      <div className="privacy-main">
        <div className="global-container">
          <div className="privacy-section">
            <div className="section-content global-container__content">
              <div className="cardsGrid">
                <div className="card3d">
              <p className="privacy-text" style={{ fontStyle: "italic", color: "#666", marginBottom: "2rem" }}>
                Last updated: 19th February 2026
              </p>

              <p className="privacy-text">
                Welcome to fastvidl.com ("we," "our," or "us"). Your privacy matters to us. This Privacy Policy explains in clear, straightforward language how we handle information when you use our content downloader service for Instagram, Facebook, and Pinterest at fastvidl.com (the "Website" or "Service").
              </p>
                </div>

                <div className="card3d">
              <h2>Our Commitment to You</h2>
              <p className="privacy-text">
                We believe in transparency. This policy tells you exactly what information we collect, why we collect it, and what choices you have. We've written this in plain English because privacy policies shouldn't require a law degree to understand.
              </p>
                </div>

                <div className="card3d">
              <h2>What Information We Collect</h2>
              
              <h3>Information You Provide to Us</h3>
              <p className="privacy-text">
                <strong>Content URLs:</strong> When you paste a URL from Instagram (reels, videos, photos, stories, IGTV), Facebook (reels, videos), or Pinterest (images, videos) to download content, we temporarily process this URL to provide our service. <strong>Important:</strong> We do NOT permanently store these URLs or the downloaded content.
              </p>
              <p className="privacy-text">
                <strong>Contact Information:</strong> If you reach out through our contact form, we collect only your name and email address to respond to your inquiry.
              </p>

              <h3>Information Collected Automatically</h3>
              <p className="privacy-text">
                When you visit our Website, certain technical information is automatically collected:
              </p>
              <ul className="privacy-list">
                <li><strong>Browser Information:</strong> Type, version, and language settings</li>
                <li><strong>Device Information:</strong> Device type, operating system, and screen resolution</li>
                <li><strong>Usage Data:</strong> Pages you visit, time spent on our site, where you came from (referring URLs), and what you click on</li>
                <li><strong>Location Data:</strong> Your approximate geographic location (country or region level only, based on IP address)</li>
                <li><strong>Cookies:</strong> Small text files stored on your device to improve functionality and user experience</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>What We DO NOT Collect</h2>
              <p className="privacy-text">
                We want to be crystal clear about what we don't do:
              </p>
              <ul className="privacy-list">
                <li>We do NOT require you to create an account or log in</li>
                <li>We do NOT store your downloaded videos, images, or any content</li>
                <li>We do NOT track your Instagram, Facebook, or Pinterest accounts</li>
                <li>We do NOT access your social media credentials or passwords</li>
                <li>We do NOT collect personal identification documents</li>
                <li>We do NOT permanently store the URLs you submit</li>
                <li>We do NOT collect payment information (our service is free)</li>
                <li>We do NOT monitor what content you download</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>How We Use Your Information</h2>
              <p className="privacy-text">
                We use collected information only for legitimate purposes:
              </p>
              <ul className="privacy-list">
                <li><strong>Service Delivery:</strong> Processing URLs from Instagram, Facebook, and Pinterest to provide download functionality</li>
                <li><strong>Website Improvement:</strong> Analyzing how visitors use our site to make it better and faster</li>
                <li><strong>Technical Operations:</strong> Maintaining security, preventing abuse, and optimizing performance</li>
                <li><strong>Customer Support:</strong> Responding to your questions and helping resolve issues</li>
                <li><strong>Analytics:</strong> Understanding visitor behavior to improve user experience</li>
                <li><strong>Advertising:</strong> Displaying relevant ads through third-party advertising networks (explained in detail below)</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Cookies and Tracking Technologies</h2>
              <p className="privacy-text">
                We use cookies to make our Website work properly and provide you with a better experience.
              </p>

              <h3>Essential Cookies (Required)</h3>
              <p className="privacy-text">
                These cookies are necessary for the Website to function and cannot be disabled:
              </p>
              <ul className="privacy-list">
                <li>Session management and security</li>
                <li>Basic website functionality</li>
                <li>Form submission processing</li>
              </ul>

              <h3>Analytics Cookies (Optional)</h3>
              <p className="privacy-text">
                <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors interact with our Website:
              </p>
              <ul className="privacy-list">
                <li>Which pages are most popular</li>
                <li>How long people stay on our site</li>
                <li>What devices and browsers are used</li>
                <li>General geographic location (country/region)</li>
              </ul>
              <p className="privacy-text">
                <strong>Your Choice:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="terms-link">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h3>Advertising Cookies (Optional)</h3>
              <p className="privacy-text">
                We display advertisements to keep our service free. Learn more in the advertising section below.
              </p>
                </div>

                <div className="card3d">
              <h2>Third-Party Advertising - Google AdSense</h2>
              
              <h3>How Advertising Works on Our Site</h3>
              <p className="privacy-text">
                FastVidl uses <strong>Google AdSense</strong>, a third-party advertising service by Google LLC, to display ads on our Website. Here's what you need to know:
              </p>
              <p className="privacy-text">
                <strong>Cookie-Based Advertising:</strong> Google AdSense uses cookies and web beacons to serve ads based on your browsing activity across the internet, not just on our site.
              </p>
              
              <h3>Personalized vs. Non-Personalized Ads:</h3>
              <ul className="privacy-list">
                <li><strong>Personalized Ads:</strong> Based on your interests, browsing history, and previous visits to fastvidl.com and other websites</li>
                <li><strong>Non-Personalized Ads:</strong> Based only on the content of the page you're currently viewing</li>
              </ul>

              <h3>What Influences the Ads You See</h3>
              <p className="privacy-text">
                Ads displayed through Google AdSense may be based on:
              </p>
              <ul className="privacy-list">
                <li>Your previous visits to fastvidl.com</li>
                <li>Your browsing history on other websites</li>
                <li>Your interests and online behavior patterns</li>
                <li>Your approximate geographic location</li>
                <li>The content of the page you're viewing</li>
              </ul>

              <h3>The DoubleClick Cookie</h3>
              <p className="privacy-text">
                Google uses the DoubleClick cookie to help serve relevant ads. This cookie does NOT contain personally identifiable information like your name or email address.
              </p>

              <h3>Your Advertising Choices - Take Control</h3>
              <p className="privacy-text">
                You have several options to control the ads you see:
              </p>
              <ol style={{ paddingLeft: "2rem", marginBottom: "1.5rem" }}>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Opt Out of Personalized Ads:</strong>
                  <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
                    <li>Visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="terms-link">Google Ads Settings</a> to turn off personalized advertising</li>
                  </ul>
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Industry Opt-Out Tools:</strong>
                  <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
                    <li>North American users: Visit <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="terms-link">aboutads.info/choices</a></li>
                    <li>European users: Visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="terms-link">youronlinechoices.com</a></li>
                  </ul>
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Browser Settings:</strong>
                  <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
                    <li>Block or delete cookies through your browser's privacy settings</li>
                    <li><em>Note: This may affect website functionality</em></li>
                  </ul>
                </li>
              </ol>

              <h3>Learn More About Google's Practices</h3>
              <ul className="privacy-list">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link">Google Privacy Policy</a></li>
                <li><a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="terms-link">How Google Uses Information</a></li>
                <li><a href="https://support.google.com/adsense/answer/48182" target="_blank" rel="noopener noreferrer" className="terms-link">Google Advertising Overview</a></li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Data Retention - How Long We Keep Information</h2>
              <p className="privacy-text">
                We believe in keeping data only as long as necessary:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Data Type</th>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Retention Period</th>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Content URLs (Instagram, Facebook, Pinterest)</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Real-time processing only - immediately discarded</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Not stored after download</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Analytics Data (Google Analytics)</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>26 months</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Industry standard for analysis</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Contact Form Inquiries</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>1 year or until resolved</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Customer support</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Session Cookies</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Until browser is closed</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Basic functionality</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Persistent Cookies</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>As specified by provider</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Analytics and advertising</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                </div>

                <div className="card3d">
              <h2>Data Sharing and Disclosure</h2>
              <p className="privacy-text">
                We aim to follow major privacy principles (such as GDPR and CCPA) where applicable, and will update this policy as laws evolve.
              </p>
              <p className="privacy-text">
                We share limited information only with:
              </p>
              
              <h3>Service Providers We Trust:</h3>
              <ul className="privacy-list">
                <li><strong>Google Analytics & AdSense:</strong> As described in the sections above</li>
                <li><strong>Hosting Providers:</strong> To keep our website online and fast</li>
                <li><strong>CDN Services:</strong> To deliver content quickly worldwide</li>
              </ul>
              <p className="privacy-text">
                All service providers are contractually required to protect your information and use it only for specified purposes.
              </p>

              <h3>Legal Requirements:</h3>
              <p className="privacy-text">
                We may disclose information when required by:
              </p>
              <ul className="privacy-list">
                <li>Law, regulation, or legal process</li>
                <li>Court orders or government requests</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Protection of our users' rights and safety</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>International Data Transfers</h2>
              <p className="privacy-text">
                FastVidl operates globally and serves users worldwide. Your information may be transferred to and processed in countries other than your country of residence, including:
              </p>
              <ul className="privacy-list">
                <li>United States (where many of our service providers are located)</li>
                <li>European Union countries</li>
                <li>Other countries where our infrastructure partners operate</li>
              </ul>
              <p className="privacy-text">
                <strong>Your Protection:</strong> We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws, including:
              </p>
              <ul className="privacy-list">
                <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                <li>Adequate protection measures as required by law</li>
                <li>Compliance with GDPR, CCPA, and other privacy regulations</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Your Privacy Rights</h2>
              <p className="privacy-text">
                Your rights depend on where you live, but we respect privacy rights for all users.
              </p>

              <h3>Rights for All Users</h3>
              <ul className="privacy-list">
                <li><strong>Access:</strong> Request information about data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Cookie Control:</strong> Manage cookies through browser settings</li>
              </ul>

              <h3>Additional Rights for EU/EEA/UK Users (GDPR)</h3>
              <ul className="privacy-list">
                <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Restrict Processing:</strong> Limit how we process your data</li>
                <li><strong>Object to Processing:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                <li><strong>Lodge Complaints:</strong> File complaints with supervisory authorities</li>
              </ul>

              <h3>Additional Rights for California Residents (CCPA/CPRA)</h3>
              <ul className="privacy-list">
                <li><strong>Right to Know:</strong> What personal information we collect about you</li>
                <li><strong>Right to Know:</strong> Whether we sell or disclose your information (we don't)</li>
                <li><strong>Right to Opt-Out:</strong> Say no to sale of personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your information</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Children's Privacy</h2>
              <p className="privacy-text">
                FastVidl is not intended for children.
              </p>
              <ul className="privacy-list">
                <li><strong>Age Requirement:</strong> Users must be at least 13 years old (16 in the European Economic Area)</li>
                <li><strong>No Knowing Collection:</strong> We do not knowingly collect information from children</li>
                <li><strong>Parental Action:</strong> If you believe a child has provided us information, contact us immediately and we will delete it</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Data Security Measures</h2>
              <p className="privacy-text">
                We take security seriously and implement multiple layers of protection:
              </p>
              <h3>Technical Safeguards:</h3>
              <ul className="privacy-list">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure server infrastructure with firewalls</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure data storage practices</li>
              </ul>
              <p className="privacy-text">
                <strong>Important Disclaimer:</strong> No internet transmission method is 100% secure. While we strive to protect your information using industry-standard measures, we cannot guarantee absolute security.
              </p>
                </div>

                <div className="card3d">
              <h2>Do Not Track (DNT) Signals</h2>
              <p className="privacy-text">
                Some web browsers have a "Do Not Track" feature that signals websites you don't want to be tracked.
              </p>
              <p className="privacy-text">
                <strong>Current Status:</strong> Our Website does not currently respond to DNT signals or similar mechanisms because there is no industry-wide standard for interpreting DNT signals.
              </p>
              <p className="privacy-text">
                <strong>Your Alternative Options:</strong> Use the opt-out tools mentioned in the advertising section above to control tracking.
              </p>
                </div>

                <div className="card3d">
              <h2>Third-Party Links and Services</h2>
              <p className="privacy-text">
                <strong>External Links:</strong> Our Website may contain links to Instagram, Facebook, Pinterest, and other third-party websites.
              </p>
              <p className="privacy-text">
                <strong>Not Our Responsibility:</strong> We are not responsible for the privacy practices or content of external sites.
              </p>
              <p className="privacy-text">
                <strong>Your Action:</strong> Please review their privacy policies before providing any information to third-party websites.
              </p>
              <p className="privacy-text">
                <strong>Important Note:</strong> FastVidl is an independent service and is not affiliated with, endorsed by, or officially connected to Instagram, Facebook, Pinterest, or Meta Platforms, Inc.
              </p>
                </div>

                <div className="card3d">
              <h2>Changes to This Privacy Policy</h2>
              <p className="privacy-text">
                We may update this Privacy Policy to reflect:
              </p>
              <ul className="privacy-list">
                <li>Changes in our practices</li>
                <li>New features or services</li>
                <li>Legal or regulatory requirements</li>
                <li>Technological developments</li>
              </ul>
              <h3>How We'll Notify You:</h3>
              <ul className="privacy-list">
                <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                <li>Material changes may be announced via email or website notice</li>
              </ul>
              <p className="privacy-text">
                <strong>Your Continued Use:</strong> Using FastVidl after changes are posted means you accept the updated Privacy Policy.
              </p>
              <p className="privacy-text">
                <strong>Recommendation:</strong> Review this Privacy Policy periodically to stay informed.
              </p>
                </div>

                <div className="card3d">
              <h2>Cookie Management Guide</h2>
              
              <h3>Quick Reference Table</h3>
              <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Cookie Type</th>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Purpose</th>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Duration</th>
                      <th style={{ padding: "0.75rem", border: "1px solid #dee2e6", textAlign: "left" }}>Can You Disable It?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Essential</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Website functionality & security</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Session</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>No (required for site to work)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Analytics (Google Analytics)</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Usage statistics & improvements</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>26 months</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (opt-out available)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Advertising (Google AdSense)</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Ad serving & personalization</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Varies</td>
                      <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (opt-out available)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>How to Manage Cookies in Your Browser</h3>
              <ul className="privacy-list">
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
              <p className="privacy-text">
                <strong>Note:</strong> Blocking all cookies may affect website functionality and your user experience.
              </p>
                </div>

                <div className="card3d">
              <h2>Compliance and Legal Framework</h2>
              <p className="privacy-text">
                FastVidl aims to follow major privacy laws such as GDPR, CCPA/CPRA, COPPA, and the ePrivacy Directive, and will update this policy and our practices as requirements evolve.
              </p>
                </div>

                <div className="card3d">
              <h2>Contact Us</h2>
              <p className="privacy-text">
                We're here to help with any privacy questions or concerns.
              </p>
              <ul className="privacy-list">
                <li><strong>Email:</strong>{" "}
                  <a href="mailto:fastvidlofficial@gmail.com" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>fastvidlofficial@gmail.com</a>
                </li>
                <li><strong>Contact Form:</strong>{" "}
                  <Link href="/ContactUs" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>https://fastvidl.com/ContactUs</Link>
                </li>
                <li><strong>Response Time:</strong> Typically 24-48 hours</li>
              </ul>
              <p className="privacy-text">
                <strong>For Privacy Requests:</strong> Please include "Privacy Request" in your subject line and specify:
              </p>
              <ul className="privacy-list">
                <li>What right you're exercising</li>
                <li>What information you're requesting</li>
                <li>Any relevant details to help us process your request</li>
              </ul>
                </div>

                <div className="card3d">
              <h2>Additional Resources</h2>
              <p className="privacy-text">
                <strong>Our Other Policy:</strong>
              </p>
              <ul className="privacy-list">
                <li><Link href="/TermsAndConditions" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>Terms and Conditions</Link></li>
              </ul>
              <p className="privacy-text">
                <strong>External Resources:</strong>
              </p>
              <ul className="privacy-list">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>Google Privacy Policy</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>Your Online Choices (EU)</a></li>
                <li><a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>About Ads Info (US)</a></li>
              </ul>

              <p className="privacy-text" style={{ marginTop: "2rem", fontSize: "1.1rem", fontWeight: "600" }}>
                Thank you for trusting FastVidl with your privacy. We're committed to protecting your information and providing a transparent, safe experience.
              </p>

              <p style={{ color: "#333", fontSize: "15px", marginTop: "2rem" }}>
                Read our{" "}
                <Link
                  href="/TermsAndConditions"
                  className="terms-link privacy-clickable-link"
                  style={{
                    color: "#1877f2",
                    textDecoration: "underline",
                    fontWeight: "600",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 10,
                    pointerEvents: "auto",
                  }}
                >
                  Terms and conditions
                </Link>
                .
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
