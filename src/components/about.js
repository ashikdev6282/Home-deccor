import React from "react";
import "./about.css";
import Footer from "./footer";

const AboutPage = () => {
  return (
    <>
      <div className="about-page" data-aos="fade-up">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Dream Estates</h1>
          <p>Your trusted partner in finding the perfect home</p>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us section" data-aos="fade-up">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="choose-cards" data-aos="zoom-in">
            <div className="choose-card" data-aos="fade-up">
              <i className="fas fa-user-tie choose-icon" style={{ color: "#ff6b6b",fontSize:"40px" }}></i> {/* Expert Agents Icon */}
              <h3>Expert Agents</h3>
              <p>We have a team of highly experienced agents to guide you.</p>
            </div>
            <div className="choose-card" data-aos="fade-up">
              <i className="fas fa-dollar-sign choose-icon" style={{ color: "#ff6b6b",fontSize:"40px" }}></i> {/* Best Prices Icon */}
              <h3>Best Prices</h3>
              <p>Find properties that suit your budget without compromising quality.</p>
            </div>
            <div className="choose-card" data-aos="fade-up">
              <i className="fas fa-handshake choose-icon" style={{ color: "#ff6b6b",fontSize:"40px" }}></i> {/* Trusted Services Icon */}
              <h3>Trusted Services</h3>
              <p>Transparent processes and reliable support at every step.</p>
            </div>
          </div>
        </section>

        {/* Our Achievements Section */}
        <section className="achievements section" data-aos="fade-up">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievement-stats" data-aos="fade-up">
            <div className="achievement">
              <h3 className="achievement-number">500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="achievement">
              <h3 className="achievement-number">1000+</h3>
              <p>Properties Sold</p>
            </div>
            <div className="achievement">
              <h3 className="achievement-number">50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action" data-aos="fade-up">
          <h2 style={{ color: "white" }}>Ready to find your dream home?</h2>
          <p>Contact us today and let us help you make your real estate dreams a reality!</p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
