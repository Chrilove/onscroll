'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event for navbar appearance change and section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Navbar appearance
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Section tracking for highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
          // Trigger zoom animation on section title when scrolled into view
          const sectionTitle = section.querySelector('.section-title');
          if (sectionTitle && !sectionTitle.classList.contains('animated')) {
            sectionTitle.classList.add('zoom-in-out', 'animated');
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section function with enhanced animation
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      
      // Apply section entry animation
      section.classList.add('section-enter');
      
      // Apply zoom animation to section title
      const sectionTitle = section.querySelector('.section-title');
      if (sectionTitle) {
        sectionTitle.classList.remove('zoom-in-out');
        // Trigger reflow to restart animation
        void sectionTitle.offsetWidth;
        sectionTitle.classList.add('zoom-in-out');
      }
    }
    setActiveSection(sectionId);
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      data-bs-theme={theme}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          <span className="brand-text">My Portfolio</span> 
          <span className="ms-2">✨</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active active-section-indicator' : ''}`} 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                <i className="fas fa-home me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'about' ? 'active active-section-indicator' : ''}`} 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                <i className="fas fa-user me-1"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'portfolio' ? 'active active-section-indicator' : ''}`} 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
              >
                <i className="fas fa-briefcase me-1"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'skills' ? 'active active-section-indicator' : ''}`} 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                <i className="fas fa-star me-1"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'experience' ? 'active active-section-indicator' : ''}`} 
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experience');
                }}
              >
                <i className="fas fa-laptop-code me-1"></i> Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'contact' ? 'active active-section-indicator' : ''}`} 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <i className="fas fa-envelope me-1"></i> Contact
              </a>
            </li>
          </ul>
          <button 
            className="btn theme-toggle-btn" 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" 
              ? <i className="fas fa-moon"></i> 
              : <i className="fas fa-sun"></i>
            }
          </button>
        </div>
      </div>
    </nav>
  );
}