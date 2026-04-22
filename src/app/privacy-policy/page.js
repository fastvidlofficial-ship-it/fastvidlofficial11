"use client";

import React from "react";
import Link from "next/link";
import "./PrivacyPolicy.css";
import "../disclaimer/Disclaimer.css";

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
                    Last updated: 2 April 2026
                  </p>

                  <p className="privacy-text">
                    Welcome to fastvidl.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your privacy matters to us. This Privacy Policy explains in clear, straightforward language how we handle information when you use our content downloader service for Instagram, Facebook, and Pinterest at fastvidl.com (the &quot;Website&quot; or &quot;Service&quot;).
                  </p>
                </div>

                <div className="card3d">
                  <h2>Our Commitment to You</h2>
                  <p className="privacy-text">
                    We believe in transparency. This policy tells you exactly what information we collect, why we collect it, and what choices you have. We&apos;ve written this in plain English because privacy policies shouldn&apos;t require a law degree to understand.
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
                  <p className="privacy-text">When you visit our Website, certain technical information is automatically collected:</p>
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
                  <p className="privacy-text">We want to be crystal clear about what we don&apos;t do:</p>
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
                  <p className="privacy-text">We use collected information only for legitimate purposes:</p>
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
                  <p className="privacy-text">We use cookies to make our Website work properly and provide you with a better experience.</p>

                  <h3>Essential Cookies (Required)</h3>
                  <p className="privacy-text">These cookies are necessary for the Website to function and cannot be disabled:</p>
                  <ul className="privacy-list">
                    <li>Session management and security</li>
                    <li>Basic website functionality</li>
                    <li>Form submission processing</li>
                  </ul>

                  <h3>Measurement cookies (Google tag)</h3>
                  <p className="privacy-text">
                    We load <strong>Google tag (gtag.js)</strong> on the site for measurement and advertising-related signals tied to our Google Ads account. Depending on your browser settings and Google&apos;s policies, this may involve cookies or similar storage to attribute visits and conversions. Google&apos;s documentation describes how those technologies work:{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link">
                      Google Privacy Policy
                    </a>
                    ,{" "}
                    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="terms-link">
                      How Google uses information from sites that use their services
                    </a>
                    .
                  </p>
                  <p className="privacy-text">
                    <strong>Your choices:</strong> You can manage ad personalization and related Google settings at{" "}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="terms-link">
                      Google Ads Settings
                    </a>
                    , and use industry tools such as{" "}
                    <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="terms-link">
                      aboutads.info/choices
                    </a>{" "}
                    (US) or{" "}
                    <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="terms-link">
                      youronlinechoices.com
                    </a>{" "}
                    (EU).
                  </p>

                  <h3>Advertising &amp; consent (Ezoic)</h3>
                  <p className="privacy-text">
                    We use <strong>Ezoic</strong> to help deliver and optimize advertising, analytics, and consent management on fastvidl.com. Ezoic and its partners may set cookies or use similar technologies. Ezoic&apos;s privacy policy is here:{" "}
                    <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="terms-link">
                      https://www.ezoic.com/privacy-policy/
                    </a>
                    . Consent-related scripts (for example Gatekeeper CMP) may load as part of that stack.
                  </p>

                  <h3>Social sharing (ShareThis)</h3>
                  <p className="privacy-text">
                    We may load <strong>ShareThis</strong> scripts for optional sharing features. ShareThis sets its own cookies and processes data under its policies—see ShareThis documentation for details.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Third-party advertising, measurement, and partners</h2>

                  <h3>How this fits together</h3>
                  <p className="privacy-text">
                    FastVidl is supported by advertising. In the current build of the site we integrate <strong>Ezoic</strong> (ads, analytics, optimization, and consent tooling), the <strong>Google tag</strong> for measurement tied to Google Ads, and <strong>ShareThis</strong> for sharing UI. We do <strong>not</strong> currently load standalone <strong>Google AdSense</strong> script on pages; if that changes, we will update this policy.
                  </p>

                  <h3>Personalized vs. non-personalized ads</h3>
                  <ul className="privacy-list">
                    <li><strong>Personalized ads:</strong> May use interests, prior visits, or similar signals as allowed by your consent settings and partner policies.</li>
                    <li><strong>Non-personalized ads:</strong> May be shown based more on page context when personalization is off or unavailable.</li>
                  </ul>

                  <h3>What can influence the ads you see</h3>
                  <p className="privacy-text">Depending on partners and your settings, ads may be influenced by factors such as:</p>
                  <ul className="privacy-list">
                    <li>The page you are viewing on fastvidl.com</li>
                    <li>General geography (such as country/region)</li>
                    <li>Device and browser type</li>
                    <li>Partner-specific profiles or cohorts where permitted</li>
                  </ul>

                  <h3>Your advertising choices</h3>
                  <p className="privacy-text">
                    Use the consent tools shown on the site where available, adjust browser cookie settings, and review partner opt-outs (Google, Ezoic, ShareThis, and industry programs linked above). Blocking all cookies can break parts of the downloader experience.
                  </p>

                  <h3>Learn more</h3>
                  <ul className="privacy-list">
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link">
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="terms-link">
                        Ezoic Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Website translation (Google Translate)</h2>
                  <p className="privacy-text">
                    FastVidl offers optional page translation via <strong>Google Website Translator</strong> (Google LLC). When you choose a language from the header menu, Google loads scripts from <strong>translate.google.com</strong> to translate visible text in your browser. Google may use cookies (such as <code>googtrans</code>) to remember your language choice. Translation happens on your device through Google&apos;s service; we do not send your content to our servers for translation.
                  </p>
                  <p className="privacy-text">
                    See{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link">
                      Google&apos;s Privacy Policy
                    </a>{" "}
                    for how Google handles data. You can clear translation cookies in your browser or select the original language in the menu to stop using the feature.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Data Retention — How Long We Keep Information</h2>
                  <p className="privacy-text">We believe in keeping data only as long as necessary:</p>
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
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Real-time processing only — immediately discarded</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Not stored after download</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Measurement data (Google tags)</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>As set by Google / your browser</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Ads measurement and site analytics</td>
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
                    We aim to follow major privacy principles (such as GDPR and CCPA) where applicable, and will update this policy as laws evolve. We share limited technical information with Ezoic for the purposes of advertising management, site optimization, and traffic analytics.
                  </p>
                  <p className="privacy-text">We share limited information only with:</p>

                  <h3>Service Providers We Trust</h3>
                  <ul className="privacy-list">
                    <li><strong>Google (tags):</strong> Measurement and advertising-related signals as described above</li>
                    <li><strong>Ezoic:</strong> Advertising, consent, personalization, and analytics as described above and in Ezoic&apos;s privacy policy</li>
                    <li><strong>ShareThis:</strong> Optional sharing features and related cookies</li>
                    <li><strong>Hosting Providers:</strong> To keep our website online and fast</li>
                    <li><strong>CDN Services:</strong> To deliver content quickly worldwide</li>
                  </ul>
                  <p className="privacy-text">All service providers are contractually required to protect your information and use it only for specified purposes.</p>

                  <h3>Legal Requirements</h3>
                  <p className="privacy-text">We may disclose information when required by:</p>
                  <ul className="privacy-list">
                    <li>Law, regulation, or legal process</li>
                    <li>Court orders or government requests</li>
                    <li>Protection of our rights, property, or safety</li>
                    <li>Protection of our users&apos; rights and safety</li>
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
                  <p className="privacy-text">Your rights depend on where you live, but we respect privacy rights for all users.</p>

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
                    <li><strong>Right to Know:</strong> Whether we sell or disclose your information (we don&apos;t)</li>
                    <li><strong>Right to Opt-Out:</strong> Say no to sale of personal information</li>
                    <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
                    <li><strong>Right to Deletion:</strong> Request deletion of your information</li>
                    <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Children&apos;s Privacy</h2>
                  <p className="privacy-text">FastVidl is not intended for children.</p>
                  <ul className="privacy-list">
                    <li><strong>Age Requirement:</strong> Users must be at least 13 years old (16 in the European Economic Area)</li>
                    <li><strong>No Knowing Collection:</strong> We do not knowingly collect information from children</li>
                    <li><strong>Parental Action:</strong> If you believe a child has provided us information, contact us immediately and we will delete it</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Data Security Measures</h2>
                  <p className="privacy-text">
                    We use <strong>Cloudflare</strong> for content delivery, security, and DNS management. Cloudflare may collect certain technical information (like IP addresses) to protect our website from cyber threats and ensure fast performance.
                  </p>
                  <p className="privacy-text">We take security seriously and implement multiple layers of protection:</p>
                  <h3>Technical Safeguards</h3>
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
                  <p className="privacy-text">Some web browsers have a &quot;Do Not Track&quot; feature that signals websites you don&apos;t want to be tracked.</p>
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
                  <p className="privacy-text">We may update this Privacy Policy to reflect:</p>
                  <ul className="privacy-list">
                    <li>Changes in our practices</li>
                    <li>New features or services</li>
                    <li>Legal or regulatory requirements</li>
                    <li>Technological developments</li>
                  </ul>
                  <h3>How We&apos;ll Notify You</h3>
                  <ul className="privacy-list">
                    <li>Posting the updated policy on this page with a new &quot;Last Updated&quot; date</li>
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
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Website functionality &amp; security</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Session</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>No (required for site to work)</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Measurement (Google tag)</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Usage and conversion-related signals</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Varies</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (browser / partner controls)</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Advertising (Ezoic and partners)</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Ad serving &amp; personalization</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Varies</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (consent / browser / partner tools)</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>ShareThis</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Optional sharing widgets</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Varies</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (do not use widgets; clear cookies)</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Translation (Google Translate)</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Optional page language</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Session / varies</td>
                          <td style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>Yes (do not use selector; clear cookies)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3>How to Manage Cookies in Your Browser</h3>
                  <ul className="privacy-list">
                    <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
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
                  <p className="privacy-text">We&apos;re here to help with any privacy questions or concerns.</p>
                  <ul className="privacy-list">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:fastvidlofficial@gmail.com" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        fastvidlofficial@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong>Contact Form:</strong>{" "}
                      <Link href="/contact-us" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        https://fastvidl.com/contact-us
                      </Link>
                    </li>
                    <li><strong>Response Time:</strong> Typically 24-48 hours</li>
                  </ul>
                  <p className="privacy-text">
                    <strong>For Privacy Requests:</strong> Please include &quot;Privacy Request&quot; in your subject line and specify:
                  </p>
                  <ul className="privacy-list">
                    <li>What right you&apos;re exercising</li>
                    <li>What information you&apos;re requesting</li>
                    <li>Any relevant details to help us process your request</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Additional Resources</h2>
                  <p className="privacy-text">
                    <strong>Our Other Policy:</strong>
                  </p>
                  <ul className="privacy-list">
                    <li>
                      <Link href="/terms-and-conditions" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                  <p className="privacy-text">
                    <strong>External Resources:</strong>
                  </p>
                  <ul className="privacy-list">
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        Google Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        Your Online Choices (EU)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="terms-link privacy-clickable-link" style={{ position: "relative", zIndex: 10, pointerEvents: "auto", cursor: "pointer" }}>
                        About Ads Info (US)
                      </a>
                    </li>
                  </ul>

                  <p className="privacy-text" style={{ marginTop: "2rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    Thank you for trusting FastVidl with your privacy. We&apos;re committed to protecting your information and providing a transparent, safe experience.
                  </p>

                  <p style={{ color: "#333", fontSize: "15px", marginTop: "2rem" }}>
                    Read our{" "}
                    <Link
                      href="/terms-and-conditions"
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
