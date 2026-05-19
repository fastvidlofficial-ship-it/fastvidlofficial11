"use client";
import React from "react";
import Link from "next/link";
import "./Disclaimer.css";
import "@/content/Blog.css";

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

      <div className="container-blog">
        <section className="home-blog-article">
          <p className="home-blog-article-meta">Last Updated: 19th February 2026</p>

          <p className="home-blog-article-p">
            FastVidl.com is a free tool for downloading public Instagram, Facebook, and Pinterest content. We provide NO GUARANTEES – use entirely at your own risk. Here's what you need to know:
          </p>

          <h2 className="home-blog-article-h2">No Platform Affiliation</h2>
          <p className="home-blog-article-p">
            FastVidl operates independently. We are not affiliated with, endorsed by, or connected to:
          </p>
          <ul className="disclaimer-list-simple">
            <li>Instagram / Meta Platforms, Inc.</li>
            <li>Facebook / Meta Platforms, Inc.</li>
            <li>Pinterest</li>
            <li>Any social media platform</li>
          </ul>
          <p className="home-blog-article-p">Always review their Terms of Service when using our tool.</p>

          <h2 className="home-blog-article-h2">Content Ownership &amp; Copyright</h2>
          <p className="home-blog-article-p">All downloaded content belongs to its original creators.</p>
          <p className="home-blog-article-p"><strong>You MAY (personal use only):</strong></p>
          <ul className="disclaimer-list-simple">
            <li>Save public posts for offline viewing</li>
            <li>Archive content you created yourself</li>
            <li>Use for personal inspiration/education</li>
          </ul>
          <p className="home-blog-article-p"><strong>You MAY NOT:</strong></p>
          <ul className="disclaimer-list-simple">
            <li>Use commercially (ads, products, resale)</li>
            <li>Redistribute or sell content</li>
            <li>Remove watermarks/copyright notices</li>
            <li>Claim others' work as your own</li>
          </ul>
          <p className="home-blog-article-p">
            Your responsibility: Verify you have rights to download/use content. We don't host/store files – content streams directly from source platforms.
          </p>

          <h2 className="home-blog-article-h2">DMCA &amp; Takedown Process</h2>
          <p className="home-blog-article-p">
            Copyright owners and authorized agents: send a complete notice to{" "}
            <a href="mailto:fastvidlofficial@gmail.com" className="home-blog-article-link">
              fastvidlofficial@gmail.com
            </a>
            . For a full checklist, response expectations, and related policies, see our{" "}
            <Link href="/dmca-takedown" className="home-blog-article-link">
              DMCA &amp; Copyright Takedown
            </Link>{" "}
            page. General support remains available at{" "}
            <a href="mailto:fastvidlofficial@gmail.com" className="home-blog-article-link">
              fastvidlofficial@gmail.com
            </a>
            .
          </p>
          <ul className="disclaimer-list-simple">
            <li>Description of copyrighted work</li>
            <li>URL(s) on fastvidl.com and, if known, the source platform URL</li>
            <li>Your contact information</li>
            <li>Good faith and accuracy statements as described on the DMCA page</li>
          </ul>
          <p className="home-blog-article-p">We aim to review complete, good-faith notices promptly.</p>

          <h2 className="home-blog-article-h2">Service "AS IS" – No Guarantees</h2>
          <ul className="disclaimer-list-simple">
            <li>No uptime warranty – platforms change APIs daily</li>
            <li>No quality guarantee – depends on source content</li>
            <li>No error-free promise – technical issues happen</li>
            <li>No legal advice – consult an attorney for copyright questions</li>
          </ul>
          <p className="home-blog-article-p">Liability capped at $0 (service is free).</p>

          <h2 className="home-blog-article-h2">User Responsibilities</h2>
          <p className="home-blog-article-p">You agree to:</p>
          <ul className="disclaimer-list-simple">
            <li>Comply with Instagram/Facebook/Pinterest Terms of Service</li>
            <li>Follow copyright laws in your country (DMCA, local regs, Pakistan PTA)</li>
            <li>Use antivirus software (we can't scan downloads)</li>
            <li>Indemnify FastVidl against claims from your use</li>
          </ul>
          <p className="home-blog-article-p">Fair use? We can't determine this – consult legal counsel.</p>

          <h2 className="home-blog-article-h2">What We Don't Control</h2>
          <ul className="disclaimer-list-simple">
            <li>Instagram/Facebook/Pinterest content availability</li>
            <li>Platform policy changes or blocks</li>
            <li>Your account suspension/bans</li>
            <li>Downloaded file safety/quality</li>
            <li>Internet connectivity issues</li>
          </ul>

          <h2 className="home-blog-article-h2">Prohibited Activities</h2>
          <ul className="disclaimer-list-simple">
            <li>No bulk scraping or automated downloads</li>
            <li>No AI training data collection</li>
            <li>No commercial redistribution</li>
            <li>No malware distribution</li>
          </ul>

          <h2 className="home-blog-article-h2">Security Disclaimer</h2>
          <p className="home-blog-article-p">We use HTTPS + security best practices, but:</p>
          <ul className="disclaimer-list-simple">
            <li>No system is 100% secure</li>
            <li>Scan all downloads with antivirus</li>
            <li>Keep software updated</li>
          </ul>

          <h2 className="home-blog-article-h2">Availability &amp; Changes</h2>
          <p className="home-blog-article-p">
            Service may be modified, suspended, or discontinued anytime without notice. We adapt to platform changes when possible.
          </p>

          <h2 className="home-blog-article-h2">Governing Law</h2>
          <p className="home-blog-article-p">
            Pakistan law applies. Disputes resolved in Rawalpindi courts. See full{" "}
            <Link href="/terms-and-conditions" className="home-blog-article-link">
              Terms and Conditions
            </Link>
            .
          </p>
          <p className="home-blog-article-p">
            For EU/UK users, FastVidl also complies with applicable data protection laws including GDPR. See our{" "}
            <Link href="/privacy-policy" className="home-blog-article-link">
              Privacy Policy
            </Link>{" "}
            for full details on cookies, advertising partners, and your rights.
          </p>

          <h2 className="home-blog-article-h2">Important Reminders</h2>
          <ul className="disclaimer-list-simple">
            <li>Respect creators – get permission for anything beyond personal use</li>
            <li>Check local laws – downloading rules vary by country</li>
            <li>Read platform TOS – violations risk account bans</li>
            <li>Use responsibly – we're a tool, not legal cover</li>
          </ul>
          <p className="home-blog-article-p">
            Full legal protection:{" "}
            <Link href="/privacy-policy" className="home-blog-article-link">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
