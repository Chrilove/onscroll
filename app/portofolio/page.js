'use client';

import { useEffect, useState, useRef } from "react";
import { setupScrollAnimation } from "../utils/animation";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const animationInitialized = useRef(false); // Prevent multiple init

  useEffect(() => {
    let cleanup;
    
    if (!animationInitialized.current) {
      cleanup = setupScrollAnimation();
      animationInitialized.current = true;
    }
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cleanup) cleanup(); // ✅ Prevent error if cleanup is undefined
    };
  }, []);

  // Project data
  const projects = [
    { id: 1, title: "E-commerce Website", description: "A fully responsive e-commerce platform built with Next.js and Bootstrap", image: "/project.jpg", category: "Web Development" },
    { id: 2, title: "Portfolio Design", description: "Creative portfolio website for a photographer with gallery features", image: "/project.jpg", category: "UI/UX Design" },
    { id: 3, title: "Mobile App", description: "Food delivery app with real-time tracking and payment integration", image: "/project.jpg", category: "Mobile Development" },
    { id: 4, title: "Dashboard System", description: "Admin dashboard with analytics and user management features", image: "/project.jpg", category: "Web Development" }
  ];

  // Filter projects based on category
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio-section py-5">
      <div className="container">
        <h2 className="section-title">My Projects 🚀</h2>
        
        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="btn-group" role="group">
              {["All", "Web Development", "Mobile Development", "UI/UX Design"].map((category) => (
                <button 
                  key={category} 
                  className={`btn ${filter === category ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="row">
          {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className={`card h-100 ${visible ? 'zoom-in visible' : 'zoom-in'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="img-hover-zoom">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                </div>
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{project.category}</span>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn-primary btn-sm me-2">
                    <i className="fas fa-eye me-1"></i> View
                  </button>
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-code me-1"></i> Code
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-12 text-center">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">View More Projects</button>
        </div>
      </div>
    </section>
  );
}
