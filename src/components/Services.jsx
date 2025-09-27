import React from "react";
import "./Services.css";

// import your svg icons
import uiuxIcon from "../assets/icons/logo.svg";
import webIcon from "../assets/icons/web.svg";
import appIcon from "../assets/icons/app.svg";
import graphicIcon from "../assets/icons/graphic.svg";

const Services = () => {
  const services = [
    { icon: uiuxIcon, title: "UI/UX Design", desc: "Crafting intuitive and user-friendly digital experiences." },
    { icon: webIcon, title: "Web Design", desc: "Modern, responsive, and optimized websites tailored for you." },
    { icon: appIcon, title: "App Design", desc: "Beautiful mobile app designs that engage and delight users." },
    { icon: graphicIcon, title: "Graphic Design", desc: "Creative visuals and branding to make your business stand out." },
  ];

  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <p className="services-subtitle">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in.
      </p>

      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">
              <img src={s.icon} alt={`${s.title} icon`} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
