"use client";

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Import Bootstrap JS only on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Create floating bubble elements
    const createFloatingElements = () => {
      const containers = document.querySelectorAll('.floating-elements-container');
      
      containers.forEach(container => {
        for (let i = 0; i < 15; i++) {
          const bubble = document.createElement('div');
          bubble.className = 'floating-element bubble';
          
          // Random properties
          const size = Math.random() * 40 + 10; // Different bubble sizes
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 10 + 10;
          const opacity = Math.random() * 0.5 + 0.1; // Varied transparency
          
          // Apply styles
          bubble.style.width = `${size}px`;
          bubble.style.height = `${size}px`;
          bubble.style.left = `${posX}%`;
          bubble.style.top = `${posY}%`;
          bubble.style.animationDelay = `${delay}s`;
          bubble.style.animationDuration = `${duration}s`;
          bubble.style.opacity = opacity;
          
          container.appendChild(bubble);
        }
      });
    };
    
    // Create bouncing bubble elements
    const createBouncingElements = () => {
      const containers = document.querySelectorAll('.bouncing-elements-container');
      
      containers.forEach(container => {
        for (let i = 0; i < 8; i++) {
          const bubble = document.createElement('div');
          bubble.className = 'bouncing-element bubble';
          
          // Random properties
          const size = Math.random() * 30 + 15;
          const posX = Math.random() * 90 + 5;
          const delay = Math.random() * 2;
          const duration = Math.random() * 2 + 1;
          const opacity = Math.random() * 0.6 + 0.2;
          
          // Apply styles
          bubble.style.width = `${size}px`;
          bubble.style.height = `${size}px`;
          bubble.style.left = `${posX}%`;
          bubble.style.animationDelay = `${delay}s`;
          bubble.style.animationDuration = `${duration}s`;
          bubble.style.opacity = opacity;
          
          container.appendChild(bubble);
        }
      });
    };
    
    // Scroll animation function
    const checkScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
          rect.bottom >= 0
        );
        
        if (isInViewport) {
          // Add animation with delay based on index for cascading effect
          setTimeout(() => {
            element.classList.add('animate');
          }, index * 100);
        } else if (element.classList.contains('reset-animation')) {
          // Optional: remove animation when out of viewport for reuse
          element.classList.remove('animate');
        }
      });
    };
    
    // Initialize elements
    createFloatingElements();
    createBouncingElements();
    
    // Check on initial load
    setTimeout(checkScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Magical App",
      description: "A delightful app that brings joy to users with its playful interface and animations.",
      imageUrl: "/images/01.jpeg",
      emoji: "✨"
    },
    {
      id: 2,
      title: "Dreamy Website",
      description: "A beautiful website with pastel colors and smooth animations that creates a dreamy experience.",
      imageUrl: "/images/02.jpeg",
      emoji: "🌈"
    },
    {
      id: 3,
      title: "Cute Dashboard",
      description: "An adorable dashboard that makes data visualization fun and engaging for users.",
      imageUrl: "/images/03.jpeg",
      emoji: "🦄"
    },
    {
      id: 4,
      title: "Sweet Portfolio",
      description: "A sweet and colorful portfolio that showcases work in a fun and interactive way.",
      imageUrl: "/images/04.jpeg",
      emoji: "🍭"
    },
    {
      id: 5,
      title: "Lovely Blog",
      description: "A charming blog with playful elements and a focus on beautiful typography and imagery.",
      imageUrl: "/images/05.jpeg",
      emoji: "🌸"
    },
    {
      id: 6,
      title: "Whimsical Game",
      description: "A whimsical browser-based game with cute characters and fun interactions.",
      imageUrl: "/images/06.jpeg",
      emoji: "🎮"
    }
  ];

  // Skills data
  const skills = [
    { name: "HTML5", percentage: 90, emoji: "🎨" },
    { name: "CSS3", percentage: 85, emoji: "🎊" },
    { name: "JavaScript", percentage: 80, emoji: "✨" },
    { name: "React", percentage: 85, emoji: "🎪" },
    { name: "Next.js", percentage: 75, emoji: "🎯" },
    { name: "Node.js", percentage: 70, emoji: "🌟" },
    { name: "UI/UX Design", percentage: 65, emoji: "🎭" },
    { name: "Bootstrap", percentage: 90, emoji: "🎡" }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Magical Tech Solutions",
      period: "2021 - Present",
      description: "Lead frontend development team in creating fun and engaging web applications. Implemented playful animations and delightful user experiences.",
      emoji: "✨"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Whimsical Digital Agency",
      period: "2018 - 2021",
      description: "Developed client websites with a focus on beautiful designs and smooth interactions. Created memorable user experiences through thoughtful animations.",
      emoji: "🌈"
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Cute StartUp Labs",
      period: "2016 - 2018",
      description: "Started career creating playful web interfaces. Learned to combine fun designs with solid technical implementations.",
      emoji: "🦄"
    }
  ];

  return (
    <>
      <style jsx global> {`
        body {
          font-family: 'Nunito', sans-serif;
          overflow-x: hidden;
          background-color: #fdf4ff;
          color: #4a2259;
        }
        
        section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          margin-bottom: 50px;
          text-align: center;
          font-weight: 700;
          position: relative;
          z-index: 5;
          color: #9333ea;
        }
        
        .section-title:after {
          content: '';
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #d946ef 0%, #f8a5ff 100%);
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        /* Floating bubble elements */
        .floating-elements-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-element.bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.2);
          animation: float 15s infinite ease-in-out;
          z-index: 1;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-100px) translateX(20px) scale(1.1);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.7;
          }
        }
        
        /* Bouncing bubble elements */
        .bouncing-elements-container {
          position: absolute;
          width: 100%;
          height: 100px;
          bottom: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        
        .bouncing-element.bubble {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.5), 0 0 8px rgba(255, 255, 255, 0.2);
          animation: bounce 2s infinite ease-in-out;
          z-index: 1;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-100px);
          }
        }
        
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Animation variations */
        .fade-in-right {
          transform: translateX(-50px) scale(0.9);
        }
        
        .fade-in-right.animate {
          transform: translateX(0) scale(1);
        }
        
        .fade-in-left {
          transform: translateX(50px) scale(0.9);
        }
        
        .fade-in-left.animate {
          transform: translateX(0) scale(1);
        }
        
        .fade-in-up {
          transform: translateY(50px) scale(0.9);
        }
        
        .fade-in-up.animate {
          transform: translateY(0) scale(1);
        }
        
        .wiggle {
          animation: none;
        }
        
        .wiggle.animate {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        
        .pulse {
          animation: none;
        }
        
        .pulse.animate {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        /* Sections Background */
        .about-section {
          background: linear-gradient(135deg, #fdf4ff 0%, #fbcfe8 100%);
        }
        
        .projects-section {
          background: linear-gradient(135deg, #f5f3ff 0%, #f3e8ff 100%);
        }
        
        .skills-section {
          background: linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%);
        }
        
        .experience-section {
          background: linear-gradient(135deg, #ede9fe 0%, #e9d5ff 100%);
        }
        
        .contact-section {
          background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
        }
        
        /* About Section */
        .profile-img {
          border-radius: 30px;
          box-shadow: 0 10px 30px rgba(194, 120, 243, 0.2);
          width: 60%;
          max-width: 150px;
          transition: all 0.3s ease;
        }
        
        .profile-img:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 35px rgba(194, 120, 243, 0.3);
        }
        
        /* Project cards */
        .project-card {
          margin-bottom: 30px;
        }
        
        .project-card:hover img {
          transform: scale(1.05);
        }
        
        .card {
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.2);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: none;
        }
        
        .card:hover {
          box-shadow: 0 10px 25px rgba(194, 120, 243, 0.3);
          transform: translateY(-10px);
        }
        
        .project-card img {
          transition: transform 0.5s ease;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .project-emoji {
          font-size: 2rem;
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
          transition: all 0.3s ease;
        }
        
        .project-card:hover .project-emoji {
          transform: rotate(15deg) scale(1.2);
        }
        
        .card-body {
          background: linear-gradient(135deg, #fff 0%, #fef6ff 100%);
        }
        
        .card-title {
          color: #9333ea;
          font-weight: 700;
        }
        .progress {
          height: 15px;
          border-radius: 30px;
          margin-bottom: 30px;
          background-color: rgba(255, 255, 255, 0.6);
          overflow: visible;
        }
        
        .progress-bar {
          border-radius: 30px;
          background: linear-gradient(90deg, #9333ea 0%, #d946ef 100%);
          position: relative;
        }
        
        .progress-bar::after {
          content: '';
          position: absolute;
          right: 0;
          top: -5px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%);
          box-shadow: 0 0 10px rgba(217, 70, 239, 0.5);
        }
        
        .skill-emoji {
          font-size: 1.5rem;
          margin-right: 10px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .skill-item:hover .skill-emoji {
          transform: rotate(15deg) scale(1.2);
        }
        
        /* Experience timeline */
        .timeline-item {
          padding: 25px;
          margin-bottom: 25px;
          border-left: 5px solid #d946ef;
          position: relative;
          padding-left: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 0 20px 20px 0;
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.2);
          transition: all 0.3s ease;
        }
        
        .timeline-item:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 20px rgba(194, 120, 243, 0.3);
        }
        
        .timeline-item:before {
          content: '';
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%);
          position: absolute;
          left: -12px;
          top: 25px;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(217, 70, 239, 0.5);
        }
        
        .timeline-period {
          font-size: 14px;
          color: #9333ea;
          font-weight: 600;
        }
        
        .timeline-emoji {
          font-size: 2rem;
          position: absolute;
          right: 20px;
          top: 20px;
          transition: all 0.3s ease;
        }
        
        .timeline-item:hover .timeline-emoji {
          transform: rotate(15deg) scale(1.2);
        }
        
        /* Contact form */
        .contact-form {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 30px;
          border-radius: 30px;
          box-shadow: 0 5px 20px rgba(194, 120, 243, 0.2);
          transition: all 0.3s ease;
        }
        
        .contact-form:hover {
          box-shadow: 0 8px 25px rgba(194, 120, 243, 0.3);
        }
        
        .form-control {
          border-radius: 15px;
          border: 2px solid #fad1fe;
          padding: 12px;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: #d946ef;
          box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.25);
        }
        
        .btn-primary {
          background: linear-gradient(90deg, #9333ea 0%, #d946ef 100%);
          border: none;
          border-radius: 50px;
          padding: 10px 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(194, 120, 243, 0.4);
          background: linear-gradient(90deg, #8822dd 0%, #d034e5 100%);
        }
        
        .btn-outline-primary {
          border: 2px solid #d946ef;
          color: #9333ea;
          border-radius: 50px;
          padding: 10px 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          background: transparent;
        }
        
        .btn-outline-primary:hover {
          background: linear-gradient(90deg, #9333ea 0%, #d946ef 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.3);
        }
        
        /* Custom candy button */
        .btn-candy {
          background: linear-gradient(90deg, #f87dc6 0%, #f9c2ff 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(248, 125, 198, 0.3);
        }
        
        .btn-candy:hover {
          transform: translateY(-3px) rotate(-2deg);
          box-shadow: 0 8px 20px rgba(248, 125, 198, 0.4);
          background: linear-gradient(90deg, #f76bb9 0%, #f8b0ff 100%);
          color: white;
        }
        
        /* Contact info */
        .contact-info {
          padding: 20px;
        }
        
        .contact-item {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateX(5px);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #9333ea 0%, #d946ef 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-size: 25px;
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.3);
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .contact-icon {
          transform: rotate(15deg) scale(1.1);
        }
        
        /* Social buttons */
        .social-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-size: 18px;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #9333ea 0%, #d946ef 100%);
          color: white;
          border: none;
        }
        
        .social-btn:hover {
          transform: translateY(-5px) rotate(10deg);
          box-shadow: 0 5px 15px rgba(194, 120, 243, 0.4);
          background: linear-gradient(135deg, #8822dd 0%, #d034e5 100%);
          color: white;
        }
        
        /* Custom scroll animation */
        .scroll-down {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          text-align: center;
          color: white;
        }
        
        .scroll-down-arrow {
          width: 40px;
          height: 40px;
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px auto;
          animation: bounce-arrow 2s infinite;
        }
        
        @keyframes bounce-arrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        /* Hero special styles */
        .hero-gradient {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
        }
        
        .hero-title {
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .hero-subtitle {
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        }
      `} </style>

       
       {/* Hero Section */}
      <section className="hero-section d-flex align-items-center hero-gradient" style={{minHeight: '100vh'}}>
        <div className="floating-elements-container"></div>
        <div className="container text-center text-white">
          <div className="animate-on-scroll wiggle">
            <h1 className="display-2 fw-bold hero-title">Christianty Nur Fhadilah</h1>
          </div>
          <div className="animate-on-scroll pulse" style={{animationDelay: '0.2s'}}>
            <p className="lead fs-3 hero-subtitle">Creative Web Developer & Design Enthusiast</p>
          </div>
          <div className="mt-5 animate-on-scroll" style={{animationDelay: '0.4s'}}>
            <a href="#contact" className="btn btn-candy btn-lg me-3 px-4 py-3">
              <i className="bi bi-chat-heart me-2"></i>Say Hello!
            </a>
            <a href="#projects" className="btn btn-outline-light btn-lg px-4 py-3">
              <i className="bi bi-stars me-2"></i>See My Magic
            </a>
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="scroll-down-arrow">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="floating-elements-container"></div>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="animate-on-scroll fade-in-right">
                <img src="/images/foto.jpeg" alt="Profile" className="profile-img img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="animate-on-scroll fade-in-left">
                <h3 className="mb-3">Hi, Aku Christianty! 👋 <span className="fs-3">✨</span></h3>
                <p className="lead"> Seorang mahasiswa yang penuh semangat dan tertarik dengan 
                pengembangan web serta desain. Passionate dalam belajar hal baru dan berusaha 
                memberikan yang terbaik dalam setiap proyek yang dikerjakan. "Believe in 
                yourself, and you can achieve anything!" 🌟 </p>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <p><i className="bi bi-person-heart me-2 text-primary"></i><strong>Name:</strong> Christianty Nur Fhadilah</p>
                    <p><i className="bi bi-envelope-heart me-2 text-primary"></i><strong>Email:</strong> chrilove@gmail.com</p>
                  </div>
                  <div className="col-md-6">
                    <p><i className="bi bi-geo-alt-fill me-2 text-primary"></i><strong>Location:</strong> Bandung, indonesia</p>
                    <p><i className="bi bi-calendar-heart me-2 text-primary"></i><strong>Availability:</strong> Ready to sprinkle magic!</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#contact" className="btn btn-primary me-3">
                    <i className="bi bi-envelope-paper-heart me-2"></i>Hire Me
                  </a>
                  <a href="https://christianty-cvonline-cfa6.vercel.app/" className="btn btn-outline-primary">
                    <i className="bi bi-file-earmark-person me-2"></i>Review CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bouncing-elements-container"></div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="floating-elements-container"></div>
        <div className="container">
          <h2 className="section-title">My Magical Projects</h2>
          <div className="row">
            {isClient && projects.map((project, index) => (
              <div className="col-md-4" key={project.id}>
                <div className={`project-card animate-on-scroll reset-animation`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card">
                    <div className="position-relative">
                      <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                      <div className="project-emoji">{project.emoji}</div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href="#" className="btn btn-primary">
                        <i className="bi bi-magic me-2"></i>View Magic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bouncing-elements-container"></div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="floating-elements-container"></div>
        <div className="container">
          <h2 className="section-title">My Magical Skills</h2>
          <div className="row">
             <div className="col-lg-6 mb-4 mb-lg-0">
             <div className="animate-on-scroll fade-in-right">
               <h3 className="mb-4">Sparkly Superpowers <span className="fs-3">✨</span></h3>
               <p>With a wand in one hand and a keyboard in the other, I craft digital experiences that leave users smiling! My technical expertise is complemented by a passion for creating interfaces that are both functional and delightfully fun.</p>
               <p>I believe technology should spark joy, and I'm on a mission to make the internet a more colorful, playful, and magical place - one website at a time!</p>
               <div className="mt-4">
                 <a href="#projects" className="btn btn-candy">
                   <i className="bi bi-stars me-2"></i>See My Enchanted Work
                 </a>
               </div>
             </div>
           </div>
           <div className="col-lg-6">
             <div className="animate-on-scroll fade-in-left">
               {skills.map((skill, index) => (
                 <div className="skill-item" key={index}>
                   <div className="d-flex justify-content-between align-items-center mb-1">
                     <div>
                       <span className="skill-emoji">{skill.emoji}</span>
                       <span className="fw-bold">{skill.name}</span>
                     </div>
                     <p className="mb-0 badge bg-primary rounded-pill px-3">{skill.percentage}%</p>
                   </div>
                   <div className="progress">
                     <div 
                       className="progress-bar" 
                       role="progressbar" 
                       style={{ width: `${skill.percentage}%` }} 
                       aria-valuenow={skill.percentage} 
                       aria-valuemin="0" 
                       aria-valuemax="100"
                     ></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
       <div className="bouncing-elements-container"></div>
     </section>

     {/* Experience Section */}
     <section className="experience-section" id="experience">
       <div className="floating-elements-container"></div>
       <div className="container">
         <h2 className="section-title">My Magical Journey</h2>
         <div className="row">
           <div className="col-lg-8 mx-auto">
             {experiences.map((exp, index) => (
               <div className="animate-on-scroll fade-in-up" key={exp.id} style={{ animationDelay: `${index * 0.2}s` }}>
                 <div className="timeline-item">
                   <div className="timeline-emoji">{exp.emoji}</div>
                   <h4 className="text-primary">{exp.title}</h4>
                   <h5>{exp.company}</h5>
                   <p className="timeline-period">
                     <i className="bi bi-calendar-heart me-2"></i>{exp.period}
                   </p>
                   <p>{exp.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
       <div className="bouncing-elements-container"></div>
     </section>

     {/* Contact Section */}
     <section className="contact-section" id="contact">
       <div className="floating-elements-container"></div>
       <div className="container">
         <h2 className="section-title">Send Me a Magical Message</h2>
         <div className="row">
           <div className="col-lg-6 mb-4 mb-lg-0">
             <div className="animate-on-scroll fade-in-right">
               <div className="contact-form">
                 <h3 className="mb-4 text-primary">Let's Create Magic Together <span className="fs-3">✨</span></h3>
                 <form>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="Your Magical Name" required />
                   </div>
                   <div className="mb-3">
                     <input type="email" className="form-control" placeholder="Your Enchanted Email" required />
                   </div>
                   <div className="mb-3">
                     <input type="text" className="form-control" placeholder="Subject of Your Spell" />
                   </div>
                   <div className="mb-3">
                     <textarea className="form-control" rows="5" placeholder="Cast Your Message Here..." required></textarea>
                   </div>
                   <button type="submit" className="btn btn-candy">
                     <i className="bi bi-send-hearts me-2"></i>Send Sparkly Message
                   </button>
                 </form>
               </div>
             </div>
           </div>
           <div className="col-lg-6">
             <div className="animate-on-scroll fade-in-left">
               <div className="contact-info">
                 <h3 className="mb-4 text-primary">Magical Contact Details <span className="fs-3">🌈</span></h3>
                 <div className="contact-item">
                   <div className="contact-icon">
                     <i className="bi bi-geo-alt-fill"></i>
                   </div>
                   <div>
                     <h5 className="text-primary">My Location</h5>
                     <p>Majalaya, Bandung, indonesia</p>
                   </div>
                 </div>
                 <div className="contact-item">
                   <div className="contact-icon">
                     <i className="bi bi-envelope-paper-heart-fill"></i>
                   </div>
                   <div>
                     <h5 className="text-primary">Email Address</h5>
                     <p>chrilove@sparkleweb.com</p>
                   </div>
                 </div>
                 <div className="contact-item">
                   <div className="contact-icon">
                     <i className="bi bi-telephone-heart-fill"></i>
                   </div>
                   <div>
                     <h5 className="text-primary">Phone Number</h5>
                     <p>+62 (895) SPARKLE</p>
                   </div>
                 </div>
                 <div className="mt-5">
                   <h5 className="text-primary">Follow My Magical Journey</h5>
                   <div className="d-flex mt-3">
                     <a href="#https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" className="social-btn"><i className="bi bi-twitter"></i></a>
                     <a href="https://www.instagram.com/" className="social-btn"><i className="bi bi-instagram"></i></a>
                     <a href="https://id.linkedin.com/" className="social-btn"><i className="bi bi-linkedin"></i></a>
                     <a href="https://github.com/Chrilove" className="social-btn"><i className="bi bi-github"></i></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="bouncing-elements-container"></div>
     </section>

     {/* Footer */}
     <footer className="py-4" style={{ background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)' }}>
       <div className="container text-center text-white">
         <p className="mb-2">✨ Sprinkled with love by Christianty ✨</p>
         <p className="mb-0">© {new Date().getFullYear()} | All rights magically reserved</p>
       </div>
     </footer>

     {/* Add Bootstrap Icons */}
     {isClient && (
       <link 
         rel="stylesheet" 
         href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
       />
     )}
     
     {/* Add Google Font */}
     {isClient && (
       <link
         href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
         rel="stylesheet"
       />
     )}
   </>
 );
}
