"use client";

import Link from "next/link";
import "../disclaimer/Disclaimer.css";

const COPYRIGHT_EMAIL = "copyright@fastvidl.com";

export default function DmcaTakedownPage() {
  return (
    <div className="disclaimer-page">
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">DMCA &amp; Copyright Takedown</h1>
          <p className="page-subtitle">
            For rights holders and authorized agents. FastVidl does not host user uploads; we
            provide access tools for public URLs you identify.
          </p>
        </div>
      </div>

      <div className="disclaimer-main disclaimer-main-legal">
        <div className="global-container">
          <div className="disclaimer-legal-content">
            <div className="section-content global-container__contents">
              <div className="cardsGrid">
                <div className="card3d">
                  <p className="disclaimer-text" style={{ fontStyle: "italic", color: "#666", marginBottom: "1.5rem" }}>
                    Last updated: 20 April 2026
                  </p>
                  <p className="disclaimer-text">
                    This page explains how to send a <strong>copyright-related notice</strong> about
                    material accessed through <strong>fastvidl.com</strong>. It is general information
                    only and <strong>not legal advice</strong>. If you need legal guidance, consult a
                    qualified attorney.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Who may submit</h2>
                  <p className="disclaimer-text">
                    Notices should come from the <strong>copyright owner</strong> or a person{" "}
                    <strong>authorized to act on their behalf</strong> (for example a representative with
                    a written agency agreement).
                  </p>
                </div>

                <div className="card3d">
                  <h2>Where to send your notice</h2>
                  <p className="disclaimer-text">
                    Email:{" "}
                    <a href={`mailto:${COPYRIGHT_EMAIL}`} className="terms-link">
                      {COPYRIGHT_EMAIL}
                    </a>
                  </p>
                  <p className="disclaimer-text">
                    Use the subject line: <strong>Copyright / DMCA Notice — fastvidl.com</strong>. We
                    aim to acknowledge receipt within <strong>five business days</strong> and to review
                    complete, good-faith notices promptly. Complex cases may take longer.
                  </p>
                </div>

                <div className="card3d">
                  <h2>What to include (checklist)</h2>
                  <p className="disclaimer-text">
                    To help us evaluate your request quickly, your notice should include:
                  </p>
                  <ul className="disclaimer-list-simple">
                    <li>
                      <strong>Identification of the copyrighted work</strong> (title, registration
                      number if applicable, or a clear description of the work).
                    </li>
                    <li>
                      <strong>Location of the material you believe is infringing</strong> — for
                      example the <strong>full fastvidl.com page URL</strong> you used, and the{" "}
                      <strong>original public URL</strong> on Instagram, Facebook, or Pinterest (if
                      known).
                    </li>
                    <li>
                      <strong>Your contact details</strong>: name, mailing address, telephone number,
                      and email.
                    </li>
                    <li>
                      A statement that you <strong>have a good faith belief</strong> that use of the
                      material in the manner complained of is not authorized by the copyright owner, its
                      agent, or the law.
                    </li>
                    <li>
                      A statement that the information in the notification is{" "}
                      <strong>accurate</strong>, and under penalty of perjury, that you are authorized
                      to act on behalf of the owner of an exclusive right that is allegedly infringed.
                    </li>
                    <li>
                      <strong>Your physical or electronic signature</strong> (typing your full legal name
                      in an email may constitute an electronic signature where permitted).
                    </li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Counter-notices and mistakes</h2>
                  <p className="disclaimer-text">
                    If you believe material was removed or disabled by mistake, you may contact us at the
                    same address with a clear explanation and, where applicable, the same identifying
                    information. We may restore content where appropriate and permitted by law.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Repeat policy</h2>
                  <p className="disclaimer-text">
                    We may restrict access for users who repeatedly misuse the service or are the
                    subject of valid notices, consistent with our{" "}
                    <Link href="/terms-and-conditions" className="terms-link">
                      Terms &amp; Conditions
                    </Link>
                    .
                  </p>
                </div>

                <div className="card3d">
                  <h2>Related pages</h2>
                  <ul className="disclaimer-list-simple">
                    <li>
                      <Link href="/disclaimer" className="terms-link">
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="terms-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="terms-link">
                        Contact (general inquiries)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
