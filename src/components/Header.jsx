import React, { useState } from "react";

import logo from "../assets/logo.png";

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Mumair Logo" />
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      <nav className={isOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <a href="/cv.pdf" className="cv-btn" download onClick={() => setIsOpen(false)}>
          Download CV
        </a>
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;