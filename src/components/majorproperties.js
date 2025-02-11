import React from "react";
import { useParams } from "react-router-dom";
import propertiesData from "./propertiesdata";
import Navbar from "./navbar";
import PropertyDetailsCard from "./propertydetails"; // Import your detailed property card component
import './majorproperties.css';

const PropertyDetails = ({ type }) => {
  const { id } = useParams();

  // Dynamically select rent or sale based on the `type` prop
  const property = propertiesData[type]?.find((item) => item.id === parseInt(id));

  const agentDetails = {
    name: "Jane Doe",
    photo: "https://via.placeholder.com/100",
    role: "Property Agent",
    location: "New York, USA",
    email: "jane.doe@example.com",
    phone: "+1234567890",
    socialLinks: [
      { href: "#", icon: "fab fa-facebook" },
      { href: "#", icon: "fab fa-twitter" },
      { href: "#", icon: "fab fa-instagram" },
    ],
  };

  if (!property) {
    return <h2 className="error-message">Property not found</h2>;
  }

  return (
    <>
      <div className="property-page-container" data-aos="fade-up">
        {/* Display Main Property Details */}
        <PropertyDetailsCard
          title={property.title}
          price={property.price}
          estPayment="Calculate with your lender"
          address={property.location}
          summary={[
            "Spacious interiors",
            "Prime location",
            "Modern amenities",
          ]}
        />

        {/* Agent and Inquiry Section */}
        

          {/* Inquiry Form */}
        </div>
    </>
  );
};

export default PropertyDetails;
