"use client";

import React, { useState } from "react";
import "./ContactUs.css";
import Link from "next/link";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("from_name", fullName);
    payload.append("name", fullName);
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("message", formData.message);
    payload.append("subject", "FastVidl Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-visual">
            <h1 className="visual-title">Get in Touch</h1>
            <p className="visual-subtitle">
              We're here to help you with all your video downloading needs
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
                    <span className="progress-text">Downloading... 85%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:fastvidlofficial@gmail.com">fastvidlofficial@gmail.com</a>
                  </p>
                </div>
              </div>
              <p>
                Before going further,please visit our{" "}
                <Link
                  href="/disclaimer"
                  rel="nofollow"
                  className="terms-link"
                  style={{
                    color: "#1877f2",
                    textDecoration: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Disclaimer
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-container">
            <h2 className="form-title">Contact FastVidl</h2>
            <p className="form-subtitle">
              Have questions or need support? We'd love to hear from you!
            </p>

            <form onSubmit={onSubmit} className="contact-form">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your first name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result ? (
                <p
                  className={`form-result ${
                    result.includes("successfully")
                      ? "form-result--success"
                      : ""
                  } ${result === "Sending..." ? "form-result--pending" : ""}`}
                  role="status"
                  aria-live="polite"
                >
                  {result}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;