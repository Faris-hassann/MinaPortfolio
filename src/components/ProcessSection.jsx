import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Understanding the Brief",
      desc: "Collect the client brief, understand the business, audience, goal, and communication problem."
    },
    {
      num: "02",
      title: "Research & Insights",
      desc: "Study the audience, competitors, trends, tone of voice, and brand position."
    },
    {
      num: "03",
      title: "Writing the First Draft / Concept",
      desc: "Generate ideas, write copy, build concepts, and shape the creative direction."
    },
    {
      num: "04",
      title: "Final Delivery & Optimization",
      desc: "Deliver the final content, review performance, and optimize the message for better results."
    }
  ];

  return (
    <section id="process" className="process-section section-padding">
      <div className="container">
        <h2 className="section-title">Creative <span className="accent-text">Process</span></h2>
        <p className="section-subtitle">A structured approach to ensure creative ideas turn into measurable results.</p>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-marker">
                <span className="step-num">{step.num}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
