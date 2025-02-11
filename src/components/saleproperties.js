import React from "react";
import { Link } from "react-router-dom";
import propertiesData from "./propertiesdata"; // Ensure your sale data is in propertiesdata
import Navbar from "./navbar";

const SaleProperties = () => {
  return (
    <>
      <Navbar />
      <div className="detailed-properties-section" data-aos="fade-up">
        <h1 className="properties-title" style={{ marginTop: "5rem" }}>
          Properties for Sale
        </h1>
        <div className="properties-grid">
          {propertiesData.sale.map((property) => (
            <Link
              to={`/property/${property.id}`}
              key={property.id}
              className="property-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="property-card">
                {/* Favorite Icon */}
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SaleProperties;
