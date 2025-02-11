import React from "react";
import "./contactus.css";
import Navbar from "./navbar";
import Footer from "./footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Form Section */}
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
