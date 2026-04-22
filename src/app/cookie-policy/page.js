"use client";
import React from "react";
import "./CookiePolicy.css";
import "../disclaimer/Disclaimer.css";
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
                    Welcome to fastvidl.com. We use cookies and similar technologies to run the downloader, remember basic preferences, measure traffic and conversions, and support advertising that keeps the service free. Partners such as <strong>Ezoic</strong> (including consent management), <strong>Google</strong> (tags used with Google Ads), and <strong>ShareThis</strong> (optional sharing) may set their own cookies or read storage as described in our{" "}
                    <Link href="/privacy-policy" className="terms-link">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="card3d">
                  <h2>What Are Cookies?</h2>
                  <p className="cookie-text">
                    Cookies are small files on your device that help sites work, remember settings, and let partners measure or personalize content and ads where allowed. Similar technologies include pixels or local storage. Third parties we integrate may use their own cookies under their policies.
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
                          <td>Measurement</td>
                          <td>Site usage and conversion-related signals</td>
                          <td>Google tag (gtag) cookies / storage as set by Google</td>
                          <td>Varies</td>
                          <td>Browser + Google Ads settings</td>
                        </tr>
                        <tr>
                          <td>Advertising</td>
                          <td>Ads, frequency capping, personalization where permitted</td>
                          <td>Ezoic and partner ad cookies (examples vary by region)</td>
                          <td>Varies</td>
                          <td>Consent tools + partner opt-outs</td>
                        </tr>
                        <tr>
                          <td>Consent (CMP)</td>
                          <td>Store advertising / analytics consent choices</td>
                          <td>Gatekeeper / Ezoic-related CMP storage</td>
                          <td>Varies</td>
                          <td>Re-open consent in partner UI; clear cookies</td>
                        </tr>
                        <tr>
                          <td>Functional</td>
                          <td>Optional page translation</td>
                          <td>googtrans (Google Translate)</td>
                          <td>Session / persistent</td>
                          <td>Clear cookies / choose original language</td>
                        </tr>
                        <tr>
                          <td>Share widgets</td>
                          <td>Optional sharing buttons</td>
                          <td>ShareThis and related vendor cookies</td>
                          <td>Varies</td>
                          <td>Do not use widgets; clear cookies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card3d">
                  <h2>Your Full Control Options</h2>
                  <h3>1. Consent and preference tools</h3>
                  <p className="cookie-text">
                    Our advertising stack may present consent or preference controls (for example through Ezoic / CMP). You can also manage cookies in your browser. Blocking some third-party cookies may affect ads or measurement but should not block core pasting of a public URL in the downloader.
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
                    <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
                    <li><a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Ezoic Privacy Policy</a></li>
                    <li><a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">AboutAds.info (US)</a></li>
                    <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">YourOnlineChoices (EU)</a></li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Advertising and measurement</h2>
                  <p className="cookie-text">
                    We use <strong>Ezoic</strong> and related partners to show ads and to operate analytics and consent features. We also load the <strong>Google tag (gtag.js)</strong> for measurement tied to Google Ads. We do <strong>not</strong> currently load standalone Google AdSense on pages; if that changes, we will update this policy.
                  </p>
                  <ul>
                    <li>Partners may use cookies or similar storage for ad delivery, personalization where allowed, fraud prevention, and reporting.</li>
                    <li>Manage Google-related ad settings at{" "}
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>{" "}
                      and read{" "}
                      <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Ezoic&apos;s privacy policy</a>.
                    </li>
                    <li>Industry opt-outs:{" "}
                      <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>{" "}
                      (US) and{" "}
                      <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>{" "}
                      (EU).
                    </li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Page translation (Google Translate)</h2>
                  <p className="cookie-text">
                    The language selector in the header uses Google&apos;s Website Translator. Google may set cookies to remember your selected language. These are controlled by Google; see{" "}
                    <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Google&apos;s cookie policy</a>.
                  </p>
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
                          <td>Measurement (Google / partners)</td>
                          <td>Provider-defined</td>
                          <td>Browser clear / partner controls</td>
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
                    <strong>Google:</strong> Optional Translate cookies when you use the header translator; Google tag cookies/storage for measurement as described in the Privacy Policy.
                  </p>
                  <p className="cookie-text">
                    <strong>Ezoic:</strong> Advertising, analytics, and consent-related cookies as described in Ezoic&apos;s documentation.
                  </p>
                  <p className="cookie-text">
                    <strong>ShareThis:</strong> Cookies for optional sharing UI when that feature loads.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Frequently Asked Questions</h2>
                  <p className="cookie-text"><strong>Q: Will rejecting cookies break downloads?</strong></p>
                  <p className="cookie-text">A: No, essential cookies handle downloads; only analytics/ads affected.</p>
                  <p className="cookie-text"><strong>Q: Do you track across Instagram/Facebook?</strong></p>
                  <p className="cookie-text">
                    A: We do not require you to log in to Instagram, Facebook, or Pinterest to use FastVidl. URLs you paste are processed to fetch public media; third-party analytics or ad partners on our site may collect their own technical data as described in our Privacy Policy.
                  </p>
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
                    Posted here with a new date. Material changes to cookies or partners will be reflected here and may be surfaced through your consent or CMP interface where applicable.
                  </p>
                  <p className="cookie-text">
                    <strong>Contact:</strong> <a href="mailto:fastvidlofficial@gmail.com">fastvidlofficial@gmail.com</a>
                  </p>
                  <p className="cookie-text">
                    <strong>Related:</strong> <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/terms-and-conditions">Terms</Link>
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
