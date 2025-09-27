import React from "react";

import logo from "../assets/logo.png"; // your logo image

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      {/* Upper Footer */}
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="Mumair Logo" />
        </div>

        <ul className="footer-links">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social" aria-hidden="true">
          <a href="hi" aria-label="Facebook" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="hi" aria-label="Twitter" className="social"><i className="fab fa-twitter"></i></a>
          <a href="hi" aria-label="Instagram" className="social"><i className="fab fa-instagram"></i></a>
          <a href="hi" aria-label="LinkedIn" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>© 2023 Mumair. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
