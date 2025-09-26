import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { title: "AirCalling Landing Page Design", type: "Web Design" },
    { title: "Business Landing Page Design", type: "Web Design" },
    { title: "Ecom Web Page Design", type: "Web Design" },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="filters">
        <button>All</button>
        <button>UI/UX</button>
        <button>Web Design</button>
        <button>App Design</button>
        <button>Graphic Design</button>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-img"></div>
            <h4>{p.type}</h4>
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
