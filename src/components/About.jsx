import React from "react";
import aboutImg from "../assets/about.jpg"; // replace with your image
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src={aboutImg} alt="About" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium turpis tempus.
        </p>
        <div className="skills">
          <p>UX</p>
          <div className="bar"><div className="fill" style={{width: "90%"}}></div></div>
          <p>Website Design</p>
          <div className="bar"><div className="fill" style={{width: "85%"}}></div></div>
          <p>App Design</p>
          <div className="bar"><div className="fill" style={{width: "75%"}}></div></div>
          <p>Graphic Design</p>
          <div className="bar"><div className="fill" style={{width: "80%"}}></div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
