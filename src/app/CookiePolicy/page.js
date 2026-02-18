"use client";
import React from "react";
import "./CookiePolicy.css";
import "../Disclaimer/Disclaimer.css";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <div className="cookie-page">
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">🍪</span>
          </div>
          <h1 className="page-title">Cookie Policy</h1>
          <p className="page-subtitle">
            How we use cookies and similar technologies on FastVidl
          </p>
        </div>
      </div>

      <div className="cookie-main">
        <div className="global-container">
          <div className="cookie-section">
            <div className="section-content global-container__contents">
              <div className="cardsGrid">
                <div className="card3d">
                  <p className="cookie-text" style={{ fontStyle: "italic", color: "#666", marginBottom: "1.5rem" }}>
                    Last Updated: 19th February 2026
                  </p>
                  <p className="cookie-text">
                    Welcome to fastvidl.com. We use cookies and similar technologies to make our Instagram/Facebook/Pinterest downloader work smoothly, analyze usage anonymously, and display relevant ads (to keep service free). This policy covers everything transparently.
                  </p>
                </div>

                <div className="card3d">
                  <h2>What Are Cookies?</h2>
                  <p className="cookie-text">
                    Small text files stored on your device that remember preferences, track usage (anonymized), and enhance experience. We also use pixels/beacons from social platforms.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Types of Cookies We Use</h2>
                  <div style={{ overflowX: "auto" }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Cookie Type</th>
                          <th>Purpose</th>
                          <th>Examples</th>
                          <th>Duration</th>
                          <th>Required?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Essential</td>
                          <td>Core functionality, security, sessions</td>
                          <td>session_id, csrf_token, cookie_consent</td>
                          <td>Session/1 year</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>Analytics</td>
                          <td>Anonymous usage stats</td>
                          <td>_ga, _gid (Google Analytics)</td>
                          <td>26 months</td>
                          <td>Opt-out</td>
                        </tr>
                        <tr>
                          <td>Advertising</td>
                          <td>Relevant ads</td>
                          <td>Google AdSense IDs, DSID</td>
                          <td>Varies</td>
                          <td>Opt-out</td>
                        </tr>
                        <tr>
                          <td>Social Media</td>
                          <td>Share/embed functionality</td>
                          <td>fbp (Facebook), ig (Instagram), Pinterest pins</td>
                          <td>90 days</td>
                          <td>Opt-out</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card3d">
                  <h2>Your Full Control Options</h2>
                  <h3>1. On-Site Cookie Banner</h3>
                  <p className="cookie-text">
                    Granular consent with equal-sized Accept/Reject All buttons – no dark patterns, pre-checked boxes, or nudging.
                  </p>
                  <h3>2. Global Privacy Control (GPC)</h3>
                  <p className="cookie-text">
                    We automatically honor browser GPC signals for instant opt-out across all non-essential cookies (CCPA/CPRA compliant).
                  </p>
                  <h3>3. Browser Controls</h3>
                  <ul>
                    <li>Chrome: Settings → Privacy → Cookies</li>
                    <li>Firefox: Settings → Privacy → Cookies</li>
                    <li>Safari: Preferences → Privacy → Cookies</li>
                    <li>Edge: Settings → Cookies</li>
                  </ul>
                  <h3>4. Third-Party Opt-Outs</h3>
                  <ul>
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                    <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                    <li><a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">AboutAds.info (US)</a></li>
                    <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">YourOnlineChoices (EU)</a></li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Advertising (Google AdSense)</h2>
                  <p className="cookie-text">
                    To keep FastVidl free for everyone, we show advertisements. We use third-party vendors, including Google, which use cookies to serve ads based on your prior visits to our website or other websites.
                  </p>
                  <ul>
                    <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to FastVidl and/or other sites on the Internet.</li>
                    <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
                    <li>Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Your Rights (GDPR/CCPA/ePrivacy/Pakistan PDPB)</h2>
                  <h3>Withdraw Consent Anytime</h3>
                  <ul>
                    <li>Click "Cookie Settings" (footer)</li>
                    <li>Changes apply immediately and persist across visits</li>
                    <li>No penalty for rejecting cookies</li>
                  </ul>
                  <h3>Proof Logging</h3>
                  <p className="cookie-text">
                    Consent preferences timestamp logged for 12 months (GDPR audit-ready).
                  </p>
                  <h3>Pakistan Users</h3>
                  <p className="cookie-text">
                    We comply with PDPB guidelines and PTA regulations for local hosting.
                  </p>
                  <h3>EU Users</h3>
                  <p className="cookie-text">
                    Full ePrivacy Directive compliance with granular consent.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Cookie Retention & Deletion</h2>
                  <div style={{ overflowX: "auto" }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Data Type</th>
                          <th>Retention</th>
                          <th>Deletion Trigger</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Consent Records</td>
                          <td>12 months</td>
                          <td>Manual withdrawal</td>
                        </tr>
                        <tr>
                          <td>Analytics</td>
                          <td>26 months</td>
                          <td>Opt-out/GPC</td>
                        </tr>
                        <tr>
                          <td>Advertising</td>
                          <td>Provider-defined</td>
                          <td>Opt-out links above</td>
                        </tr>
                        <tr>
                          <td>Essential</td>
                          <td>Session/1 year</td>
                          <td>Browser clear</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card3d">
                  <h2>Third-Party & Social Media Specifics</h2>
                  <p className="cookie-text">
                    <strong>Google Services:</strong> Analytics/AdSense – full disclosure in Privacy Policy.
                  </p>
                  <p className="cookie-text">
                    <strong>Social Platforms:</strong> Facebook Pixel (fbp), Instagram tracking, Pinterest share cookies used for embeds/sharing only.
                  </p>
                  <p className="cookie-text">
                    <strong>Cookie Scanner:</strong> Scan your cookies instantly (third-party tool).
                  </p>
                </div>

                <div className="card3d">
                  <h2>Frequently Asked Questions</h2>
                  <p className="cookie-text"><strong>Q: Will rejecting cookies break downloads?</strong></p>
                  <p className="cookie-text">A: No, essential cookies handle downloads; only analytics/ads affected.</p>
                  <p className="cookie-text"><strong>Q: Do you track across Instagram/Facebook?</strong></p>
                  <p className="cookie-text">A: No, we process URLs temporarily, never track social accounts.</p>
                  <p className="cookie-text"><strong>Q: What's Pakistan PDPB compliance?</strong></p>
                  <p className="cookie-text">A: Local data protection following PTA/PEMRA guidelines.</p>
                </div>

                <div className="card3d">
                  <h2>International Compliance</h2>
                  <ul>
                    <li><strong>GDPR:</strong> Granular consent, withdrawal, records</li>
                    <li><strong>CCPA/CPRA:</strong> GPC auto-opt-out, no data sales</li>
                    <li><strong>ePrivacy Directive:</strong> Equal consent buttons</li>
                    <li><strong>Pakistan PDPB/PTA:</strong> Local hosting compliance</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Changes to Policy</h2>
                  <p className="cookie-text">
                    Posted here with a new date. Major updates trigger fresh consent banners.
                  </p>
                  <p className="cookie-text">
                    <strong>Contact:</strong> <a href="mailto:fastvidlofficial@gmail.com">fastvidlofficial@gmail.com</a>
                  </p>
                  <p className="cookie-text">
                    <strong>Related:</strong> <Link href="/PrivacyPolicy">Privacy Policy</Link>, <Link href="/TermsAndConditions">Terms</Link>
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

export default CookiePolicy;
