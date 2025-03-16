'use client';

import { useEffect, useRef } from "react";
import { setupScrollAnimation, createBubbles } from "../utils/animation";

export default function Home() {
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    if (bubbleContainerRef.current) {
      createBubbles(bubbleContainerRef.current);
    }
    
    return cleanup;
  }, []);

  return (
    <section className="home-section position-relative min-vh-100 d-flex align-items-center">
      <div className="bubble-container" ref={bubbleContainerRef}></div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="slide-in-left">
              <h1 className="display-4 fw-bold mb-4">Welcome to My Portfolio 🚀</h1>
              <p className="lead mb-4">
                I design and build beautiful websites that help businesses grow and thrive online.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg">
                  <i className="fas fa-briefcase me-2"></i> View Projects
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-envelope me-2"></i> Contact Me
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="text-center slide-in-right">
              <img 
                src="/profile.png" 
                alt="Hero Image" 
                className="img-fluid rounded-circle shadow-lg" 
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}