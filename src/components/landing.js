import React, { useEffect } from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();


  const handleCTAButtonClick = () => {
     const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }


  return (
    <div className="landing-page">
      {/* Main Hero Section */}
      <div className="hero-section">
        {/* Left Side (Text and Button) */}
        <div className="hero-text">
          <h1>
            Find Your Dream <span className="highlight">Home</span>
          </h1>
          <p>
            Whether you're looking for a house to rent or buy, we have the perfect listings to meet your needs. Explore our extensive database of homes for sale and rent today!
          </p>
          <button className="cta-button" onClick={handleCTAButtonClick}>
            Explore Listings
          </button>
          <div className="social-media">
            <span>Follow us</span>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        {/* Right Side (Image & Floating Elements) */}
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-photo/house-for-sale-or-rent_1150-13224.jpg"
            alt="Real Estate"
            className="main-image"
          />
          <div className="floating-elements">
            <p
              className="floating-text"
              style={{
                color: "#ff6b6b",
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginTop: "1rem",
                marginBottom: "0.5rem",
                textAlign: "center",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.2",
                paddingLeft: "4rem",
                paddingRight: "1rem",
              }}
            >
              RENT OR SALE PROPERTY
            </p>
            <div className="circle green-circle">🏡</div>
            <div className="circle orange-circle">🔑</div>
            <div className="circle blue-circle">📍</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
