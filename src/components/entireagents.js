import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const agents = [
  {
    id: 1,
    name: "John Doe",
    role: "Real Estate Specialist",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Luxury Home Expert",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Rental Property Manager",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Commercial Realtor",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "William Turner",
    role: "Property Consultant",
    image: "https://via.placeholder.com/150",
  },
];

const EntireAgentsPage = () => {

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/agentdetails/${id}`);
  };

  return (
    <>
      <Navbar />
      <section className="entire-agents-page" style={{ marginTop: "5rem" }} data-aos="zoom-in">
        <div className="container">
          <div className="section-header">
            <h2>Our Entire Team</h2>
            <p style={{ fontSize: "1.2rem",display: "flex",justifyContent: "center" }}>Meet all our dedicated and professional agents</p>
          </div>
          <div className="agents-grid">
            {agents?.map((agent) => (  
              <div className="agent-card" key={agent.id}>
                <img src={agent.image} alt={agent.name} />
                <div className="agent-info">
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                  <div className="listing-action-btn" onClick={() => handleNavigation(agent.id)}>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EntireAgentsPage;
