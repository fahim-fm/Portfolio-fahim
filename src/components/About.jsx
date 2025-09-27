import React, { useEffect, useState } from "react";
import aboutImg from "../assets/pahim.png"; // replace with your image
import "./About.css";


const About = () => {
  const [visible, setVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section  id="about" className="about">
      {/* Left Image */}
      <div className="about-img">
        <div className="img-frame">
          <div className="img-inner">
            <img src={aboutImg} alt="About" />
          </div>
        </div>
      </div>
      {/* badge on image */}
  <div className="about-badge" aria-hidden="true"></div>


      {/* Right Content */}
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium turpis tempus.
        </p>

        <div className="skills">
          <div className="skill">
            <p>UX</p>
            <div className="bar">
              <div
                className={`fill ${visible ? "animate" : ""}`}
                style={{ "--target": "90%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p>Website Design</p>
            <div className="bar">
              <div
                className={`fill ${visible ? "animate" : ""}`}
                style={{ "--target": "85%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p>App Design</p>
            <div className="bar">
              <div
                className={`fill ${visible ? "animate" : ""}`}
                style={{ "--target": "75%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <p>Graphic Design</p>
            <div className="bar">
              <div
                className={`fill ${visible ? "animate" : ""}`}
                style={{ "--target": "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
