import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Content Strategy",
      description: "Planning content that supports brand goals, audience needs, and campaign direction."
    },
    {
      title: "Scriptwriting",
      description: "Writing scripts for reels, ads, YouTube concepts, campaigns, and educational videos."
    },
    {
      title: "Creative Concepts Development",
      description: "Turning simple briefs into strong campaign ideas and brand stories."
    },
    {
      title: "Brand Positioning",
      description: "Helping brands find a clear voice, identity, and message."
    },
    {
      title: "Social Media Planning",
      description: "Creating post ideas, calendars, captions, content directions, and publishing plans."
    },
    {
      title: "Character-Based Branding",
      description: "Developing mascots and brand characters such as Limo for Racing Line."
    },
    {
      title: "Educational & Awareness Campaigns",
      description: "Building campaigns that inform, engage, and create brand recall."
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <h2 className="section-title">What I Can <span className="accent-text">Do</span></h2>
        <p className="section-subtitle">Delivering full-scale creative and content solutions tailored for brand impact.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{(index + 1).toString().padStart(2, '0')}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
