import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";

const agents = [
    {
        id: 1,
        name: "John Doe",
        role: "Real Estate Specialist",
        image: "https://via.placeholder.com/150",
        description:
          "John has over 10 years of experience in the real estate industry, helping clients buy and sell homes with exceptional service and care. He is dedicated to understanding his clients' needs and delivering outstanding results.",
        expertise: ["Residential Properties", "Property Valuation", "Negotiation"],
        contact: {
          email: "john.doe@example.com",
          phone: "+1 234 567 890",
        },
        achievements: [
          "Top Realtor of the Year - 2021",
          "Closed 200+ successful deals",
          "Certified Real Estate Negotiator",
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "Luxury Home Expert",
        image: "https://via.placeholder.com/150",
        description:
          "Jane is known for her expertise in luxury homes, providing bespoke service to high-end clients. With a keen eye for detail and strong market knowledge, she has built a reputation for excellence.",
        expertise: ["Luxury Real Estate", "Market Analysis", "High-Value Negotiation"],
        contact: {
          email: "jane.smith@example.com",
          phone: "+1 345 678 901",
        },
        achievements: [
          "Luxury Realtor of the Year - 2022",
          "Featured in Top 100 Realtors",
          "Award-winning Customer Service",
        ],
      },
      {
        id: 3,
        name: "Emily Johnson",
        role: "Rental Property Manager",
        image: "https://via.placeholder.com/150",
        description:
          "Emily is a seasoned rental property manager, specializing in ensuring a smooth transition for tenants. With her expertise, she has helped multiple clients find their perfect rental home.",
        expertise: ["Property Management", "Tenant Selection", "Lease Negotiation"],
        contact: {
            email: "emily.johnson@example.com",
            phone: "+1 456 789 012",
          },
        achievements: [
          "Top Rental Property Manager - 2023",
          "Managed 50+ rental properties",
          "Certified Property Manager",
        ],
      },
];

const Modal = ({ agent, onClose }) => (
  <div
    style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "1000",
    }}
  >
    <div
      style={{
        width: "90%",
        maxWidth: "500px",
        background: "#fff",
        borderRadius: "10px",
        padding: "2rem",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 style={{ marginBottom: "1rem", color: "#333" }}>Contact {agent.name}</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        <strong>Email:</strong> {agent.contact.email}
      </p>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        <strong>Phone:</strong> {agent.contact.phone}
      </p>
      <button
        style={{
          padding: "0.5rem 1rem",
          background: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const AgentDetails = () => {
  const { id } = useParams();
  const agent = agents.find((agent) => agent.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!agent) {
    return (
      <>
        <Navbar />
        <section style={{ marginTop: "5rem", textAlign: "center" }}>
          <h2>Agent not found</h2>
          <p>The agent you are looking for does not exist.</p>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="agent-details-page" style={{ marginTop: "5rem" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }} data-aos="fade-up">
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <img
              src={agent.image}
              alt={agent.name}
              style={{
                borderRadius: "10px",
                width: "300px",
                height: "300px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              data-aos="zoom-in"
            />
            <div style={{ flex: "1", color: "#333" }} data-aos="fade-left">
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{agent.name}</h2>
              <h4 style={{ color: "#555", marginBottom: "1rem" }}>{agent.role}</h4>
              <p style={{ fontSize: "1rem", marginBottom: "1.5rem", lineHeight: "1.6", color: "#666" }}>
                {agent.description}
              </p>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  background: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor: "#ff6b6b",
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Contact Agent
              </button>
            </div>
          </div>
          {/* Expertise and Achievements */}
          <div style={{ marginTop: "2rem" }} data-aos="zoom-in">
            <h3 style={{ marginBottom: "1rem", color: "#666" }}>Expertise</h3>
            <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "0", listStyle: "none" }}>
              {agent.expertise.map((item, index) => (
                <li
                  key={index}
                  style={{
                    flex: "1 1 calc(33.333% - 1rem)",
                    padding: "1rem",
                    background: "#ff6b6b",
                    borderRadius: "5px",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: "2rem" }} data-aos="zoom-in">
            <h3 style={{ marginBottom: "1rem", color: "#666" }}>Achievements</h3>
            <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "0", listStyle: "none" }}>
              {agent.achievements.map((item, index) => (
                <li
                  key={index}
                  style={{
                    flex: "1 1 calc(33.333% - 1rem)",
                    padding: "1rem",
                    background: "#ff6b6b",
                    borderRadius: "5px",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {isModalOpen && <Modal agent={agent} onClose={() => setIsModalOpen(false)} />}
      <Footer />
    </>
  );
};

export default AgentDetails;
