'use client';

import { useEffect, useRef } from "react";
import { setupScrollAnimation, createBubbles } from "../utils/animation";

export default function About() {
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    if (bubbleContainerRef.current) {
      createBubbles(bubbleContainerRef.current);
    }
    
    return cleanup;
  }, []);

  return (
    <section className="about-section position-relative py-5">
      <div className="bubble-container" ref={bubbleContainerRef}></div>
      
      <div className="container">
        <h2 className="section-title">About Me 🌟</h2>
        
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="scale-in">
              <div className="img-hover-zoom rounded-circle overflow-hidden mx-auto" style={{ maxWidth: '350px' }}>
                <img src="/profile.png" alt="Profile" className="img-fluid" />
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="fade-in">
              <h3 className="mb-3">Hi there! 👋</h3>
              <p className="lead mb-4">
                I'm a passionate web developer who loves creating interactive, fun, and engaging user experiences.
              </p>
              
              <p className="mb-4">
                With over 5 years of experience in web development, I've worked on a variety of projects from simple landing pages to complex web applications. I specialize in front-end development with React and Next.js, but I'm also comfortable working with back-end technologies.
              </p>
              
              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-envelope fs-4 me-3 text-primary"></i>
                    <div>
                      <h5 className="mb-0">Email</h5>
                      <p className="mb-0">contact@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-map-marker-alt fs-4 me-3 text-primary"></i>
                    <div>
                      <h5 className="mb-0">Location</h5>
                      <p className="mb-0">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-code-branch fs-4 me-3 text-primary"></i>
                    <div>
                      <h5 className="mb-0">Projects</h5>
                      <p className="mb-0">30+ Completed</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-graduation-cap fs-4 me-3 text-primary"></i>
                    <div>
                      <h5 className="mb-0">Degree</h5>
                      <p className="mb-0">Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="btn btn-primary me-3">
                  <i className="fas fa-download me-2"></i> Download CV
                </button>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-envelope me-2"></i> Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}