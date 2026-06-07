import React, { useState } from 'react';
import './ProjectGallerySection.css';

const ProjectGallerySection = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All', 'Copywriting', 'Campaign Ideas', 'YouTube Concepts', 'Scripts', 'Brand Characters', 'Social Media Posts'
  ];

  const projects = [
    {
      id: 1,
      title: "GANUBI Graduation Project",
      category: "Campaign Ideas",
      type: "Nubian fashion store",
      desc: "Each person has a different personality, yet everyone can wear the same brand because it is beautiful, flexible, and suits every taste.",
      arabic: null
    },
    {
      id: 2,
      title: "Zenouki Cookware: Product as History",
      category: "Campaign Ideas",
      type: "Cookware campaign concept",
      desc: "A time journey from pottery to copper to stainless steel, then the new cookware appears as the beginning of a “new era.”",
      arabic: null
    },
    {
      id: 3,
      title: "Zenouki Cookware: Oreo Bottom",
      category: "Copywriting",
      type: "Funny awareness concept",
      desc: "Street activation asking funny questions until reaching the cookware-bottom question, then revealing the product.",
      arabic: "عمرك بصيت على قعر الحلة من تحت؟ لو بصيت هتلاقي شكلها شبه بسكوت الأوريو."
    },
    {
      id: 4,
      title: "Zenouki Cookware: Technology Change",
      category: "Copywriting",
      type: "Awareness concept",
      desc: "Highlighting that while mobile tech hasn't changed much recently, this new cookware brings new Egyptian-made technology.",
      arabic: "مبقاش في تقدم في التكنولوجيا زي زمان، بس إحنا نزلنا بتكنولوجيا جديدة أول مرة تنزل مصر."
    },
    {
      id: 5,
      title: "ABC Defender",
      category: "Campaign Ideas",
      type: "Recall campaign",
      desc: "Use the brand name inside funny everyday examples to connect it to pest control services.",
      arabic: null
    },
    {
      id: 6,
      title: "Mandarine Koueider",
      category: "Copywriting",
      type: "Branded storytelling",
      desc: "Mandarine Koueider becomes the reward after success, tied to a nostalgic childhood story.",
      arabic: null
    },
    {
      id: 7,
      title: "Debate / YouTube Game",
      category: "YouTube Concepts",
      type: "Creative Series",
      desc: "Interactive talk-show format where participants try to convince someone with different viewpoints.",
      arabic: null
    },
    {
      id: 8,
      title: "Santa Goes Corporate",
      category: "YouTube Concepts",
      type: "Entertainment Series",
      desc: "Modern reinterpretation of Santa Claus inside a corporate environment exploring company culture.",
      arabic: null
    },
    {
      id: 9,
      title: "Marketing Podcast",
      category: "YouTube Concepts",
      type: "Podcast",
      desc: "Discussing real industry chaos, client situations, and behind-the-scenes decision-making.",
      arabic: null
    },
    {
      id: 10,
      title: "Racing Line Ramadan Decor Ad",
      category: "Scripts",
      type: "Video Script",
      desc: "Promote Ramadan decoration services with an emotional seasonal connection.",
      arabic: null
    },
    {
      id: 11,
      title: "SEO Mistakes Reel",
      category: "Scripts",
      type: "Video Script",
      desc: "Educate business owners on common SEO mistakes in a fast-paced relatable format.",
      arabic: null
    },
    {
      id: 12,
      title: "360° Marketing Agency Reel",
      category: "Scripts",
      type: "Video Script",
      desc: "Comedic scenario introducing the agency as a full-service marketing solution.",
      arabic: null
    },
    {
      id: 13,
      title: "Limo Mascot",
      category: "Brand Characters",
      type: "Character Design",
      desc: "Custom mascot for Racing Line to capture attention and increase brand awareness.",
      arabic: null
    },
    {
      id: 14,
      title: "Mandarine Kouidar Mascot",
      category: "Brand Characters",
      type: "Character Design",
      desc: "Designed and developed a custom mascot for Kouidar for brand-focused execution.",
      arabic: null
    },
    {
      id: 15,
      title: "Creative Content Grid",
      category: "Social Media Posts",
      type: "Social Content",
      desc: "Original thinking and brand-focused creative work from idea generation to visual direction.",
      arabic: null
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="gallery-section section-padding">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Selected <span className="accent-text">Projects</span></h2>
          <p className="section-subtitle" style={{margin: '0 auto 3rem'}}>A collection of creative campaigns, scripts, and content strategies.</p>
        </div>

        <div className="filter-container">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">
                <span>[ {project.title} Image ]</span>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-type">{project.type}</p>
                {project.arabic && (
                  <p className="project-arabic" dir="rtl">{project.arabic}</p>
                )}
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;
