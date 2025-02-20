import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the ID from URL
import "./propertydetails.css";
import PropertyImage from "./propertyimage";
import axios from "axios";

const PropertyDetails = ({ propertyId }) => {
  const { id } = useParams(); // Get the property ID from URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/fetch_trending_property");

        console.log("Full API Response:", response.data); // ✅ Log API response
        console.log("Extracted Property ID:", propertyId);
        console.log("Available Property IDs:", response.data.data.map((p) => p.tp_id)); 


        if (response.data && response.data.data) {
          const selectedProperty = response.data.data.find((p) => p.tp_id === Number(propertyId));
          
          if (selectedProperty) {
            console.log("Selected Property:", selectedProperty);
            setProperty(selectedProperty);
          } else {
            console.error("Property ID not found in API response!");
            setError("Property not found.");
          }
        } else {
          console.error("Invalid API Response");
          setError("No property details available.");
        }
      } catch (error) {
        console.error("Failed to load property details:", error);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="card-section" data-aos="fade-right">
      <div className="property-photo">
        <PropertyImage imageUrl={property.tp_image} altText="Property Image" />
      </div>
      <div className="property-details">
        <h1>{property.tp_title}</h1>
        <p className="price">Price: {property.price}</p>
        {property.estPayment && <p className="est-payment">Est. Payment: {property.estPayment}</p>}
        <p className="address">📍 {property.address}</p>
        <div className="summary-details">
          {property.summary ? (
            <p>{property.summary}</p> 
          ) : (
            <p>No summary available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
