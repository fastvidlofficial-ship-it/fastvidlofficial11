"use client";
import React, { useRef, useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useLocaleCatalog } from "@/contexts/LocaleContext";
import { usePageDocumentTitle } from "@/components/usePageDocumentTitle";

export default function Contact() {
  const form = useRef();
  const { locale, catalog } = useLocaleCatalog();
  const c = locale === "ar" && catalog.staticPages?.contact ? catalog.staticPages.contact : null;
  usePageDocumentTitle("contact");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1vul7hz",
        "template_r1dw8ud",
        form.current,
        "Vnk3CIFXlieIcJczL"
      )
      .then(
        () => {
          alert(c?.alertSuccess ?? "Message sent sucessfully!");
        },
        () => {
          alert(c?.alertFail ?? "Failed to sent message ,please try again");
        }
      );
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-visual">
            <h1 className="visual-title">
              {c?.visualTitle ?? "Get in Touch"}
            </h1>
            <p className="visual-subtitle">
              {c?.visualSubtitle ??
                "We're here to help you with all your video downloading needs"}
            </p>

            <div className="download-illustration">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="video-thumbnail">
                    <div className="play-button">▶️</div>
                  </div>
                  <div className="download-progress">
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <span className="progress-text">
                      {c?.progressText ?? "Downloading... 85%"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h3>{c?.emailHeading ?? "Email Us"}</h3>
                  <p>support@fastvidl.com</p>
                </div>
              </div>
              <p>
                {c?.disclaimerBefore ?? " Before going further,please visit our "}
                <Link
                  href="/Disclaimer"
                  rel="nofollow"
                  className="terms-link"
                  style={{
                    color: "#1877f2",
                    textDecoration: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {c?.disclaimerLink ?? "Disclaimer"}
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-container">
            <h2 className="form-title">
              {c?.formTitle ?? "Contact FastVidl"}
            </h2>
            <p className="form-subtitle">
              {c?.formSubtitle ??
                "Have questions or need support? We'd love to hear from you!"}
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    {c?.firstName ?? "First Name *"}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder={c?.placeholderFirst ?? "Enter your first name"}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    {c?.lastName ?? "Last Name *"}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder={c?.placeholderLast ?? "Enter your last name"}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {c?.email ?? "Email Address *"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={
                    c?.placeholderEmail ?? "Enter your email address"
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {c?.phone ?? "Phone Number"}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={
                    c?.placeholderPhone ?? "Enter your phone number"
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {c?.message ?? "Message *"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder={
                    c?.placeholderMessage ?? "How can we help you?"
                  }
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                {c?.submit ?? "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
