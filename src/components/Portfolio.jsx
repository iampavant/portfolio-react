import React, { useState } from "react";
import foodWeb from "../assets/html page pic.png";
import dashWeb from "../assets/java web.png";
import shopWeb from "../assets/react.png";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, category: "web", link: "https://iampavant.github.io/fullwebpage/", img: foodWeb },
    { id: 2, category: "web", link: "https://iampavant.github.io/javaworks/", img: dashWeb },
    { id: 3, category: "web", link: "https://iampavant.github.io/react9306/", img: shopWeb },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="section__container portfolio__container">
        <p className="section__subheader">My Portfolio</p>
        <h2 className="section__header">Recent Works</h2>
        <div className="portfolio__nav">
          <button className={`btn ${filter === 'all' ? 'mixitup-control-active' : ''}`} onClick={() => setFilter("all")}>All</button>
          <button className={`btn ${filter === 'web' ? 'mixitup-control-active' : ''}`} onClick={() => setFilter("web")}>Web Apps</button>
          <button className={`btn ${filter === 'design' ? 'mixitup-control-active' : ''}`} onClick={() => setFilter("design")}>Designs</button>
        </div>
        <div className="portfolio__grid">
          {filteredProjects.map((project) => (
            <div className="portfolio__card" key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;