import React from "react";
import Navbar from "./navbar";
import PropertyDetails from "./propertcomptdetails";
import AgentDetails from "./agentdetails";
import PropertyFeatures from "./propertyfeatures";
import PropertyImage from "./propertyimage";
import { useParams } from "react-router-dom";

const ModernHousePage = () => {

  const { propertyId } = useParams();

  const propertyDetails = {
    title: "Modern House in San Francisco",
    price: "$1,800,000",
    estPayment: "Est. Payment: $5,300/month",
    address: "📍 San Francisco, California",
    summary: [
      "Bedrooms: 3",
      "Bathrooms: 2",
      "Size: 2000 sqft",
      "Garden: Yes",
      "Garage: Yes",
      "Energy-Efficient Features: Yes",
    ],
  };

  const propertyFeatures = [
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

  const agentDetails = {
    name: "John Smith",
    photo: "https://via.placeholder.com/100",
    role: "Real Estate Agent",
    location: "California, USA",
    email: "john.smith@example.com",
    phone: "+9876543210",
    socialLinks: [
      { href: "#", icon: "fab fa-linkedin" },
      { href: "#", icon: "fab fa-twitter" },
      { href: "#", icon: "fab fa-facebook" },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="main-section" style={{ marginTop: "100px" }} data-aos="fade-up">
        {/* Left Section */}
        <div className="card-section" data-aos="fade-right">
          {/* Property Photo */}

          {/* Property Details */}
          <PropertyDetails  />
          
          {/* Property Features */}
          <PropertyFeatures features={propertyFeatures} />
        </div>

        {/* Right Section */}
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

export default ModernHousePage;
