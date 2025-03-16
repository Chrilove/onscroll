'use client';

import { useEffect } from "react";
import { setupScrollAnimation } from "../utils/animation";

export default function Skills() {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  const technicalSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Bootstrap", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX Design", level: 75 }
  ];

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Creativity", level: 80 },
    { name: "Team Work", level: 85 }
  ];

  return (
    <section className="skills-section py-5">
      <div className="container">
        <h2 className="section-title">My Skills 🛠️</h2>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow fade-in">
              <div className="card-body p-4">
                <h3 className="mb-4">Technical Skills</h3>
                
                {technicalSkills.map((skill, index) => (
                  <div className="mb-4" key={index}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-bold">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow fade-in">
              <div className="card-body p-4">
                <h3 className="mb-4">Soft Skills</h3>
                
                {softSkills.map((skill, index) => (
                  <div className="mb-4" key={index}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-bold">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar progress-bar-striped progress-bar-animated" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card border-0 shadow mt-4 slide-in-right">
              <div className="card-body p-4">
                <h3 className="mb-4">Tools I Use</h3>
                
                <div className="row g-3">
                  {["VS Code", "Git", "Figma", "Adobe XD", "Postman", "Docker"].map((tool, index) => (
                    <div className="col-6" key={index}>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>{tool}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}