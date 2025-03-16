'use client';

import { useEffect } from "react";
import { setupScrollAnimation } from "../utils/animation";

export default function Experience() {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead the frontend development team in creating modern web applications using React and Next.js. Implemented responsive design principles and improved performance by 40%."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Creatives",
      period: "2020 - 2022",
      description: "Developed and maintained client websites. Created custom themes and plugins. Collaborated with designers to implement responsive, user-friendly interfaces."
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Startup Hub",
      period: "2018 - 2020",
      description: "Assisted in developing web applications. Learned modern web technologies and best practices. Participated in code reviews and team projects."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Web Technologies and User Interface Design."
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2012 - 2016",
      description: "Studied programming fundamentals, data structures, and web development."
    }
  ];

  return (
    <section className="experience-section py-5">
      <div className="container">
        <h2 className="section-title">My Experience 💼</h2>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h3 className="mb-4">
              <i className="fas fa-briefcase me-2"></i> Work Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className={`card mb-4 border-start border-primary border-3 shadow slide-in-left`} key={exp.id} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="card-body">
                    <h4 className="card-title mb-1">{exp.title}</h4>
                    <h6 className="text-primary mb-2">{exp.company}</h6>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-calendar-alt me-2"></i>
                      <small>{exp.period}</small>
                    </div>
                    <p className="card-text">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6">
            <h3 className="mb-4">
              <i className="fas fa-graduation-cap me-2"></i> Education
            </h3>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div className={`card mb-4 border-start border-primary border-3 shadow slide-in-right`} key={edu.id} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="card-body">
                    <h4 className="card-title mb-1">{edu.degree}</h4>
                    <h6 className="text-primary mb-2">{edu.school}</h6>
                    <div className="d-flex align-items-center mb-3">
                      <i className="fas fa-calendar-alt me-2"></i>
                      <small>{edu.period}</small>
                    </div>
                    <p className="card-text">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card border-0 shadow-sm rotate-in">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">
                  <i className="fas fa-certificate me-2"></i> Certifications
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex align-items-center px-0">
                    <i className="fas fa-award text-primary me-3"></i>
                    <div>
                      <h6 className="mb-0">Frontend Web Development</h6>
                      <small className="text-muted">Udemy, 2022</small>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center px-0">
                    <i className="fas fa-award text-primary me-3"></i>
                    <div>
                      <h6 className="mb-0">React.js Advanced Patterns</h6>
                      <small className="text-muted">Coursera, 2021</small>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center px-0">
                    <i className="fas fa-award text-primary me-3"></i>
                    <div>
                      <h6 className="mb-0">UI/UX Design Fundamentals</h6>
                      <small className="text-muted">Google, 2020</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}