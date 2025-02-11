import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./mainproperties.css";
import { useNavigate } from "react-router-dom";

const propertiesData = {
  rent: [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Modern Apartment",
      location: "New York City",
      price: "$2,500 / month",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "Cozy Studio",
      location: "Los Angeles",
      price: "$1,800 / month",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Beachfront Villa",
      location: "Miami Beach",
      price: "$3,000 / month",
    },
  ],
  sale: [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Luxury Villa",
      location: "Miami",
      price: "$1,200,000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "Family Home",
      location: "San Francisco",
      price: "$850,000",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Vintage Apartments",
      location: "Boston",
      price: "$450,000",
    },
  ],
};

const PropertiesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="properties-section">
      <h1 className="properties-title" data-aos="fade-up">
        Our Properties
      </h1>

      {/* Properties for Rent */}
      <div className="properties-category" data-aos="fade-up">
        <h2 className="category-title">Properties for Rent</h2>
        <div className="properties-grid">
          {propertiesData.rent.map((property) => (
            <div
              key={property.id}
              className="property-card"
              data-aos="zoom-in"
              data-aos-delay={property.id * 200}
            >
              <div className="favorite-icon">
                <i className="fas fa-heart"></i>
              </div>
              <img
                src={property.image}
                alt={property.title}
                className="property-image"
              />
              <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <p className="property-price">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-button-container" data-aos="fade-up">
          <button
            className="view-all-button"
            onClick={() => navigate("/rent-properties")}
          >
            View All Rent Properties
          </button>
        </div>
      </div>

      {/* Properties for Sale */}
      <div className="properties-category" data-aos="fade-up">
        <h2 className="category-title">Properties for Sale</h2>
        <div className="properties-grid">
          {propertiesData.sale.map((property) => (
            <div
              key={property.id}
              className="property-card"
              data-aos="zoom-in"
              data-aos-delay={property.id * 200}
            >
              <div className="favorite-icon">
                <i className="fas fa-heart"></i>
              </div>
              <img
                src={property.image}
                alt={property.title}
                className="property-image"
              />
              <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <p className="property-price">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-button-container" data-aos="fade-up">
          <button
            className="view-all-button"
            onClick={() => navigate("/sale-properties")}
          >
            View All Sale Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;
