import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-text">PORTFOLIO</div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="accent-text">Mina Ibrahim</span><br />
            Creative Marketer, Copywriter & Content Creator
          </h1>
          <p className="hero-subtitle">
            Content isn’t just about posting. It’s about influence, storytelling, and results. I help brands communicate clearly and creatively through copywriting, content strategy, social media planning, creative concepts, and storytelling that turns ideas into impact.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View Portfolio</a>
            <a href="#contact" className="btn btn-outline">Let’s Work Together</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} alt="Mina Ibrahim" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
