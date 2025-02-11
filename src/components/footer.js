import React from 'react';
import './footer.css';
import { Link } from'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer" data-aos="zoom-in">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              We connect buyers, renters, and sellers to find the perfect properties effortlessly.
            </p>
          </div>
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/listings">Explore Listings</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@realestate.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="footer-social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Real Estate Co. | All rights reserved.</p>
        </div>
      </footer>
    )
}
export default Footer