import React, { useState } from "react";
import "./propertydetails.css";
import ContactModal from "./contactmodal"; // Import the ContactModal component

const AgentDetails = ({ name, photo, role, location, email, phone, socialLinks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true); // Open the modal when the "Contact Agent" button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="agent-details">
      <img className="agent-photo" src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href}><i className={link.icon}></i></a>
        ))}
      </div>
      <hr />
      <div className="contact-info">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
      <button className="contact-agent-btn" onClick={handleContactClick}>
        Contact Agent
      </button>

      {/* Show the Contact Modal if isModalOpen is true */}
      {isModalOpen && <ContactModal agentName={name} onClose={handleCloseModal} />}
    </div>
  );
};

export default AgentDetails;
