import React from 'react';
import './AboutSection.css';
import aboutImg from '../assets/IMG_20260302_130752_405.webp';

const AboutSection = () => {
  const keywords = [
    "Copywriting", "Storytelling", "Content Strategy", 
    "Social Media", "Creative Direction", "Brand Voice"
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About Me" className="about-image-photo" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About <span className="accent-text">Me</span></h2>
          <p className="about-text">
            I am a marketing graduate, content creator, copywriter, and Social Media Specialist. I’ve worked as both a content creator and a creative within marketing teams, writing and developing copy that helps brands communicate clearly and creatively.
          </p>
          <p className="about-text">
            From social media captions to brand messaging, I create copy that connects ideas with audiences and turns strategy into impact.
          </p>
          <div className="about-keywords">
            {keywords.map(keyword => (
              <span key={keyword} className="chip">{keyword}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
