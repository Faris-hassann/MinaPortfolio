import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    "Copywriting", "Content Creation", "Digital Marketing", "Creative Thinking", 
    "Analytical Thinking", "Communication", "Leadership", "Negotiation", 
    "Decision-Making", "Problem Solving", "Time Management", "Listening", 
    "Social Media Planning", "Scriptwriting", "Brand Messaging", "Creative Direction"
  ];

  const certifications = [
    { name: "Copywriting", source: "VCN", date: "In Progress" },
    { name: "Copywriting", source: "Coursera", date: "2024" },
    { name: "Content Creation", source: "VCN", date: "2024" },
    { name: "Digital Marketing", source: "VCN", date: "2020" },
    { name: "Digital Marketing", source: "Google", date: "2020" }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container skills-container">
        <div className="skills-col">
          <h2 className="section-title">Professional <span className="accent-text">Skills</span></h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
          
          <h3 className="languages-title">Languages</h3>
          <ul className="languages-list">
            <li><strong>Arabic:</strong> Native</li>
            <li><strong>English:</strong> Full professional proficiency</li>
            <li><strong>French:</strong> Intermediate</li>
          </ul>
        </div>
        
        <div className="cert-col">
          <h2 className="section-title"><span className="accent-text">Certifications</span></h2>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">🏆</div>
                <div className="cert-info">
                  <h4 className="cert-name">{cert.name}</h4>
                  <span className="cert-source">{cert.source}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
