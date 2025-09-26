import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "UI/UX", desc: "Lorem ipsum dolor sit amet consectetur." },
    { title: "Web Design", desc: "Lorem ipsum dolor sit amet consectetur." },
    { title: "App Design", desc: "Lorem ipsum dolor sit amet consectetur." },
    { title: "Graphic Design", desc: "Lorem ipsum dolor sit amet consectetur." },
  ];

  return (
    <section className="services">
      <h2>Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in.
      </p>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
