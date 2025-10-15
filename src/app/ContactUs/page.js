"use client"
import React, { useRef, useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form =useRef ();
  const sendEmail = (e) =>{
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm("service_1vul7hz","template_r1dw8ud",form.current, "Vnk3CIFXlieIcJczL").then(
      () =>{
        alert("Message sent sucessfully!");
        // form.current.reset();
      },
      (error)=>{
        alert("Failed to sent message ,please try again",error.text);
      }
    )
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Side - Design */}
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
                  <p>support@fastvidl.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-right">
          <div className="form-container">
            <h2 className="form-title">Contact FastVidl</h2>
            <p className="form-subtitle">
              Have questions or need support? We'd love to hear from you!
            </p>

            <form   ref= {form}  onSubmit= {sendEmail}className="contact-form" >
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
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;