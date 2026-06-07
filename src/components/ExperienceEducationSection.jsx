import React from 'react';
import './ExperienceEducationSection.css';

const ExperienceEducationSection = () => {
  return (
    <section className="exp-edu-section section-padding">
      <div className="container exp-edu-container">
        
        <div className="experience-col">
          <h2 className="section-title">Work <span className="accent-text">Experience</span></h2>
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Social Media Specialist | Copywriter | Content Creator</h3>
              <div className="timeline-meta">Cremedia • July 2025 — Present</div>
              <p className="timeline-desc">
                Generating creative content ideas tailored to each client’s goals and brand voice. Brainstorming, concept development, writing, social media execution, and creating ideas that increase engagement and strengthen brand presence.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Creative Director & Content Creator / Copywriter</h3>
              <div className="timeline-meta">Graduation Project (GANUBI)</div>
              <p className="timeline-desc">
                Led content creation from ideation to execution for the GANUBI graduation project, guiding the creative direction and contributing to a project that earned excellent recognition (3rd place).
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Marketing Intern</h3>
              <div className="timeline-meta">A One • 2024</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Vice President</h3>
              <div className="timeline-meta">Rally AAST</div>
            </div>

          </div>
        </div>

        <div className="education-col">
          <h2 className="section-title"><span className="accent-text">Education</span></h2>
          <div className="timeline">
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">Bachelor of Marketing</h3>
              <div className="timeline-meta">Egyptian Chinese University • 2021 — 2025</div>
              <p className="timeline-desc">
                Overall Grade: Good — 70.39%<br/>
                Graduation Project: “Working as Marketing Team for GANUBI”<br/>
                Project Grade: Excellent
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">School Education</h3>
              <div className="timeline-meta">Collège De La Salle — Les Frères</div>
              <p className="timeline-desc">
                Completed school education with strong academic discipline and commitment.
              </p>
            </div>

          </div>
          <div className="image-placeholder edu-image-placeholder mt-4">
             <span>[ Education/Experience Visual Placeholder ]</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceEducationSection;
