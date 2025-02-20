import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import Footer from "./footer";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchTrendyProperties = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/fetch_trending_property"
        );

        console.log("Full API Response:", response.data);

        if (
          !response.data ||
          !response.data.data ||
          !Array.isArray(response.data.data)
        ) {
          console.warn("Invalid API Response:", response.data);
          return;
        }

        // Remove duplicate properties based on tp_id
        const uniqueProperties = response.data.data.reduce((acc, current) => {
          if (!acc.find((item) => item.tp_id === current.tp_id)) {
            acc.push(current);
          }
          return acc;
        }, []);

        console.log("Setting properties:", uniqueProperties);
        setProperties(uniqueProperties);
      } catch (error) {
        console.error(
          "Error fetching properties:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTrendyProperties();
  }, []);

  return (
    <>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section" data-aos="zoom-in">
          <div className="hero-content">
            <h1>Find Your Dream Home Today!</h1>
            <p>
              Browse a wide selection of rental and sale homes. We make it easy
              to find your next property.
            </p>
            <div className="cta-buttons">
              <Link
                to="/listing"
                className="cta-btn"
                style={{ marginRight: "10px", backgroundColor: "#ff6b6b" }}
              >
                Explore Listings
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://img.freepik.com/premium-photo/house-with-lot-windows-tree-front_1086760-66711.jpg?ga=GA1.1.1726865468.1725101172&semt=ais_hybrid"
              alt="Hero"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section" data-aos="fade-up">
          <h2>Why Choose Us?</h2>
          <div className="features" data-aos="fade-up">
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <h3>Verified Listings</h3>
              <p>All properties are vetted for authenticity and accuracy.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Our team is available to assist you anytime, anywhere.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Flexible Pricing</h3>
              <p>We offer competitive pricing to meet your needs.</p>
            </div>
          </div>
        </section>

        {/* Trending Properties Section */}
        <section className="properties-section" data-aos="zoom-in">
          <h2>Trending Properties</h2>
          {loading ? (
            <p>Loading properties...</p>
          ) : properties.length > 0 ? (
            <div className="property-cards">
              {properties.map((property) => {
               

                return (
                  <div className="property-card" key={property.tp_id}>
                    <div className="favorite-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    <img src={property.tp_image} />
                    <div className="property-info">
                      <h3>{property.tp_title}</h3>
                      <p>Price: {property.price}</p>
                      <p>Estimated Payment: {property.estPayment}</p>
                      <p>Location: {property.address}</p>
                      <Link
                        to={`/property/${property.tp_id}`}
                        className="view-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No trending properties available.</p>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="cta-section" data-aos="fade-up">
          <h2>Ready to find your next property?</h2>
          <Link to="/listing" className="cta-btn primary">
            Browse Listings
          </Link>
        </section>

        {/* Our Agents Section */}
        <section className="our-agents" data-aos="zoom-in">
          <div className="container">
            <div className="section-header">
              <h2>Our Agents</h2>
              <p>
                Meet our dedicated and experienced team of agents, committed to
                helping you find your dream home.
              </p>
            </div>
            <div className="agents-grid">
              <div className="agent-card">
                <img src="https://via.placeholder.com/150" alt="Agent 1" />
                <div className="agent-info">
                  <h3>John Doe</h3>
                  <p>Real Estate Specialist</p>
                </div>
              </div>
              <div className="agent-card">
                <img src="https://via.placeholder.com/150" alt="Agent 2" />
                <div className="agent-info">
                  <h3>Jane Smith</h3>
                  <p>Luxury Home Expert</p>
                </div>
              </div>
              <div className="agent-card">
                <img src="https://via.placeholder.com/150" alt="Agent 3" />
                <div className="agent-info">
                  <h3>Emily Johnson</h3>
                  <p>Rental Property Manager</p>
                </div>
              </div>
              <div className="agent-card">
                <img src="https://via.placeholder.com/150" alt="Agent 4" />
                <div className="agent-info">
                  <h3>Michael Brown</h3>
                  <p>Commercial Realtor</p>
                </div>
              </div>
            </div>
            <div className="cta">
              <Link to="/entire-agents" className="meet-team-btn">
                Meet Entire Team
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
