"use client";
import React from "react";
import Link from "next/link";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-page">
      <div className="disclaimer-header">
        <div className="header-content">
          <div className="header-icon">
            <span className="legal-icon">⚖️</span>
          </div>
          <h1 className="page-title">Disclaimer</h1>
          <p className="page-subtitle">
            Important legal information and limitations for our FastVidl downloading service
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
                    Last Updated: 19th February 2026
                  </p>
                  <p className="disclaimer-text">
                    FastVidl.com is a free tool for downloading public Instagram, Facebook, and Pinterest content. We provide NO GUARANTEES – use entirely at your own risk. Here's what you need to know:
                  </p>
                </div>

                <div className="card3d">
                  <h2>No Platform Affiliation</h2>
                  <p className="disclaimer-text">
                    FastVidl operates independently. We are not affiliated with, endorsed by, or connected to:
                  </p>
                  <ul className="disclaimer-list-simple">
                    <li>Instagram / Meta Platforms, Inc.</li>
                    <li>Facebook / Meta Platforms, Inc.</li>
                    <li>Pinterest</li>
                    <li>Any social media platform</li>
                  </ul>
                  <p className="disclaimer-text">
                    Always review their Terms of Service when using our tool.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Content Ownership & Copyright</h2>
                  <p className="disclaimer-text">
                    All downloaded content belongs to its original creators.
                  </p>
                  <p className="disclaimer-text"><strong>You MAY (personal use only):</strong></p>
                  <ul className="disclaimer-list-simple">
                    <li>Save public posts for offline viewing</li>
                    <li>Archive content you created yourself</li>
                    <li>Use for personal inspiration/education</li>
                  </ul>
                  <p className="disclaimer-text"><strong>You MAY NOT:</strong></p>
                  <ul className="disclaimer-list-simple">
                    <li>Use commercially (ads, products, resale)</li>
                    <li>Redistribute or sell content</li>
                    <li>Remove watermarks/copyright notices</li>
                    <li>Claim others' work as your own</li>
                  </ul>
                  <p className="disclaimer-text">
                    Your responsibility: Verify you have rights to download/use content. We don't host/store files – content streams directly from source platforms.
                  </p>
                </div>

                <div className="card3d">
                  <h2>DMCA & Takedown Process</h2>
                  <p className="disclaimer-text">
                    Content owners: Report violations to <a href="mailto:fastvidlofficial@gmail.com">fastvidlofficial@gmail.com</a> with:
                  </p>
                  <ul className="disclaimer-list-simple">
                    <li>Description of copyrighted work</li>
                    <li>URL(s) of infringing content</li>
                    <li>Your contact information</li>
                    <li>Good faith infringement statement</li>
                  </ul>
                  <p className="disclaimer-text">
                    We respond promptly to valid DMCA notices.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Service "AS IS" – No Guarantees</h2>
                  <ul className="disclaimer-list-simple">
                    <li>No uptime warranty – platforms change APIs daily</li>
                    <li>No quality guarantee – depends on source content</li>
                    <li>No error-free promise – technical issues happen</li>
                    <li>No legal advice – consult an attorney for copyright questions</li>
                  </ul>
                  <p className="disclaimer-text">
                    Liability capped at $0 (service is free).
                  </p>
                </div>

                <div className="card3d">
                  <h2>User Responsibilities</h2>
                  <p className="disclaimer-text">You agree to:</p>
                  <ul className="disclaimer-list-simple">
                    <li>Comply with Instagram/Facebook/Pinterest Terms of Service</li>
                    <li>Follow copyright laws in your country (DMCA, local regs, Pakistan PTA)</li>
                    <li>Use antivirus software (we can't scan downloads)</li>
                    <li>Indemnify FastVidl against claims from your use</li>
                  </ul>
                  <p className="disclaimer-text">
                    Fair use? We can't determine this – consult legal counsel.
                  </p>
                </div>

                <div className="card3d">
                  <h2>What We Don't Control</h2>
                  <ul className="disclaimer-list-simple">
                    <li>Instagram/Facebook/Pinterest content availability</li>
                    <li>Platform policy changes or blocks</li>
                    <li>Your account suspension/bans</li>
                    <li>Downloaded file safety/quality</li>
                    <li>Internet connectivity issues</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Prohibited Activities</h2>
                  <ul className="disclaimer-list-simple">
                    <li>No bulk scraping or automated downloads</li>
                    <li>No AI training data collection</li>
                    <li>No commercial redistribution</li>
                    <li>No malware distribution</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Security Disclaimer</h2>
                  <p className="disclaimer-text">
                    We use HTTPS + security best practices, but:
                  </p>
                  <ul className="disclaimer-list-simple">
                    <li>No system is 100% secure</li>
                    <li>Scan all downloads with antivirus</li>
                    <li>Keep software updated</li>
                  </ul>
                </div>

                <div className="card3d">
                  <h2>Availability & Changes</h2>
                  <p className="disclaimer-text">
                    Service may be modified, suspended, or discontinued anytime without notice. We adapt to platform changes when possible.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Governing Law</h2>
                  <p className="disclaimer-text">
                    Pakistan law applies. Disputes resolved in Rawalpindi courts. See full <Link href="/TermsAndConditions" className="terms-link">Terms and Conditions</Link>.
                  </p>
                </div>

                <div className="card3d">
                  <h2>Important Reminders</h2>
                  <ul className="disclaimer-list-simple">
                    <li>Respect creators – get permission for anything beyond personal use</li>
                    <li>Check local laws – downloading rules vary by country</li>
                    <li>Read platform TOS – violations risk account bans</li>
                    <li>Use responsibly – we're a tool, not legal cover</li>
                  </ul>
                  <p className="disclaimer-text">
                    Full legal protection: <Link href="/PrivacyPolicy" className="terms-link">Privacy Policy</Link>.
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

export default Disclaimer;
