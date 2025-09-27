import React from "react";
import heroImg from "../assets/pahim.png";


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-blob"></div> 
      <div className="hero-text">
        <p className="intro">Hi I am</p>
        <p className="name">Muhammad Umair</p>

        <h1 className="title">
          <span className="title-line">UI &amp; UX</span>
          <span className="title-line designer">Designer</span>
        </h1>

        <p className="lead">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hire-btn">Hire Me</a>
        </div>
      </div>
       <div className="img-badge" aria-hidden="true"></div>

      <div className="hero-img">
        <div className="img-frame">
          <div className="img-inner">
            <img src={heroImg} alt="Muhammad Umair" />
          </div>
        </div>

       

        <div className="social-icons" aria-hidden="true">
          <a href="#" aria-label="Facebook" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="social"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="social"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;