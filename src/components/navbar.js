import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Assuming the CSS is in a separate file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" style={{ color: "#ff6b6b" }}>
          <i className="fas fa-home" style={{ marginRight: "0.5rem", color: "#ff6b6b" }}></i>
          HOME-FINDER
        </Link>

        {/* Toggle Button for Mobile View */}
        <button className="navbar-toggle" id="navbar-toggle" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`navbar-menu ${isMenuOpen ? "active" : ""}`} id="navbar-menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Profile Icon */}
        <div className="navbar-profile">
          <Link to="/profile" className="profile-link">
            <i className="fas fa-user-circle profile-icon"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
