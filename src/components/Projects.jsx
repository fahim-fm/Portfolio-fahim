import React, { useState } from "react";

// Example project thumbnails (replace with your images)
import proj1 from "../assets/p1.jpg";
import proj2 from "../assets/p1.jpg";
import proj3 from "../assets/p1.jpg";

const Projects = () => {
  const [active, setActive] = useState("All");

  const projects = [
    { title: "AirCalling Landing Page Design", type: "Web Design", img: proj1 },
    { title: "Business Landing Page Design", type: "Web Design", img: proj2 },
    { title: "Ecom Web Page Design", type: "UI/UX", img: proj3 },
  ];

  const filters = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p className="projects-subtitle">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in.
      </p>

      {/* Filter buttons */}
      <div className="filters">
        {filters.map((f, i) => (
          <button
            key={i}
            className={active === f ? "active" : ""}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="project-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-img">
              <img src={p.img} alt={p.title} />
              <div className="overlay">
                
                <a href="hi" className="view-btn">
                  
                </a>
              </div>
            </div>
            <h4>{p.type}</h4>
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;