import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import propertiesData from "./propertiesdata";
import Navbar from "./navbar";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("favourites");


  // Dummy User Data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: "https://via.placeholder.com/150",
  };

  // Property Lists (replace with real fetched data)
  const favourites = propertiesData.sale.slice(0, 2); // Example properties for favourites
  const viewed = propertiesData.rent.slice(0, 2); // Example properties for viewed
  const contacted = propertiesData.sale.slice(2, 4); // Example properties for contacted

  // Logout Functionality
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="profile-container" style={{ marginTop: "100px" }}>
        {/* User Info Section */}
        <div className="profile-header">
          <img
            src={user.profilePic}
            alt="Profile"
            className="profile-pic"
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <div className="profile-actions">
            <button onClick={() => navigate("/editprofile")} >
              Edit Profile
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs">
          <button
            className={activeTab === "favourites" ? "active" : ""}
            onClick={() => setActiveTab("favourites")}
          >
            Favourites
          </button>
          <button
            className={activeTab === "viewed" ? "active" : ""}
            onClick={() => setActiveTab("viewed")}
          >
            Viewed
          </button>
          <button
            className={activeTab === "contacted" ? "active" : ""}
            onClick={() => setActiveTab("contacted")}
          >
            Contacted
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "favourites" && (
            <PropertyList title="Favourite Properties" properties={favourites} />
          )}
          {activeTab === "viewed" && (
            <PropertyList title="Recently Viewed Properties" properties={viewed} />
          )}
          {activeTab === "contacted" && (
            <PropertyList title="Contacted Properties" properties={contacted} />
          )}
        </div>
      </div>
    </>
  );
};

// Component to Display Properties in List
const PropertyList = ({ title, properties }) => (
  <div className="property-list">
    <h3>{title}</h3>
    <div className="property-grid">
      {properties.map((property) => (
        <Link
          to={`/property/${property.id}`}
          key={property.id}
          className="property-card"
        >
          <img src={property.image} alt={property.title} />
          <div className="property-details">
            <h4>{property.title}</h4>
            <p>{property.location}</p>
            <p className="property-price">${property.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Profile;
