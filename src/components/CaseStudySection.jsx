import React, { useState } from 'react';
import './CaseStudySection.css';
import caseStudyImg from '../assets/Section 2 case study_.png';

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState('challenge');

  const tabs = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'execution', label: 'Execution' },
    { id: 'results', label: 'Results' }
  ];

  const content = {
    challenge: "Low brand awareness in a competitive automotive market. The brand needed to stand out and become recognizable.",
    strategy: "Shift from traditional promotional posts to attention-driven branding. Create a unique visual identity and introduce a brand character called Limo to build memorability and engagement.",
    execution: "Developed the character “Limo” as the brand voice. Designed bold, scroll-stopping visuals. Focused on high-impact layouts and strong messaging.",
    results: "Increased brand awareness. Significant rise in engagement and inquiries. High order volume. Paid ads were paused due to demand overflow."
  };

  return (
    <section id="case-studies" className="case-study-section section-padding">
      <div className="container">
        <div className="case-study-header">
          <h2 className="section-title">Featured Case Study</h2>
          <h3 className="cs-brand-name accent-text">Racing Line</h3>
          <p className="cs-role"><strong>Role:</strong> Creative direction, character development, and content strategy execution.</p>
        </div>

        <div className="cs-container">
          <div className="cs-content-box">
            <div className="cs-tabs">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  className={`cs-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="cs-tab-content">
              <h4 className="cs-tab-title">{tabs.find(t => t.id === activeTab).label}</h4>
              <p className="cs-tab-text">{content[activeTab]}</p>
            </div>
          </div>
          <div className="cs-image-box">
             <img src={caseStudyImg} alt="Racing Line Case Study" className="cs-image-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
