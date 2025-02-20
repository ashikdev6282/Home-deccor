import React, { useState } from "react";
import "./propertydetails.css";
import Navbar from "./navbar";
import PropertyFeatures from "./propertyfeatures";
import AgentDetails from "./agentdetails";  
import PropertyDetails from "./propertcomptdetails";
import PropertyImage from "./propertyimage";
import { useParams } from "react-router-dom";

const FullPropertySection = () => {

  const { propertyId } = useParams();

  const [featuresOpen, setFeaturesOpen] = useState({
    propertyDetails: false,
    utilityDetails: false,
    outdoorFeatures: false,
  });

  

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

  const features = [
    {
      key: "propertyDetails",
      title: "Property Details",
      description: "Details about the property go here...",
    },
    {
      key: "utilityDetails",
      title: "Utility Details",
      description: "Details about the utilities go here...",
    },
    {
      key: "outdoorFeatures",
      title: "Outdoor Features",
      description: "Details about outdoor features go here...",
    },
  ];

  const propertyDetails = {
    title: "Cozy Apartment in Manhattan",
    price: "$3,200/month",
    estPayment: null,
    address: "📍 Manhattan, New York",
    summary: [
      "Bedrooms: 2",
      "Bathrooms: 2",
      "Size: 1200 sqft",
      "Balcony: Yes",
      "Pet-Friendly: Yes",
    ],
  };

  const toggleFeature = (feature) => {
    setFeaturesOpen((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  return (
    <>  
    <Navbar />
    <div className="main-section" data-aos="fade-up" style={{marginTop: "100px"}}>
      {/* Left Section: Property Details and Features */}
      <div className="card-section" data-aos="fade-right">
        
        {/* Property Details Card */}
        <PropertyDetails propertyId={propertyId} />

        {/* Property Features Section */}
        <PropertyFeatures features={features} />
      </div>

      {/* Right Section: Agent Details & Inquiry */}
      <div className="agent-inquiry-section" data-aos="fade-left">
        {/* Agent Details */}
        <AgentDetails {...agentDetails} />

        {/* Inquiry Form */}
        <div className="inquiry-form">
          <h2>Inquire Now</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Write your message..." rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};
export default FullPropertySection;
