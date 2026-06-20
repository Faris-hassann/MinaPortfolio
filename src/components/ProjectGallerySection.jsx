import React, { useState } from 'react';
import './ProjectGallerySection.css';
import gradVideo from '../assets/copy project 1 grad.mp4';
import project2Img from '../assets/Copy project 2.png';
import project3Img from '../assets/Copy project 3.jpg';
import project4Img from '../assets/Copy project 4.png';
import project5Img from '../assets/Copy project 5.webp';
import project6Img from '../assets/Copy project 6.png';
import youtubeGameImg from '../assets/section 1 youtube game salsagya.png';
import christmasImg from '../assets/section 1 christmas.png';
import podcastImg from '../assets/section 1 podcast_.png';
import ramadanVideo from '../assets/section 3 ramadan.mp4';
import limoVideo from '../assets/section 3 limo projet.mp4';
import mandarineVideo from '../assets/section 3 mandrin keuidar.mp4';
import socialImg1 from '../assets/Section 3 sociale média posts_(1).jpg';
import socialImg2 from '../assets/Section 3 sociale média posts_(2).jpg';
import socialImg3 from '../assets/Section 3 sociale média posts_(3).jpg';
import socialImg4 from '../assets/Section 3 sociale média posts_(4).jpg';
import socialImg5 from '../assets/Section 3 sociale média posts_(5).jpg';
import socialImg6 from '../assets/Section 3 sociale média posts_(6).jpg';

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
      arabic: null,
      video: gradVideo
    },
    {
      id: 2,
      title: "Zenouki Cookware: Product as History",
      category: "Campaign Ideas",
      type: "Cookware campaign concept",
      desc: "A time journey from pottery to copper to stainless steel, then the new cookware appears as the beginning of a “new era.”",
      arabic: null,
      image: project2Img
    },
    {
      id: 3,
      title: "Zenouki Cookware: Oreo Bottom",
      category: "Copywriting",
      type: "Funny awareness concept",
      desc: "Street activation asking funny questions until reaching the cookware-bottom question, then revealing the product.",
      arabic: "عمرك بصيت على قعر الحلة من تحت؟ لو بصيت هتلاقي شكلها شبه بسكوت الأوريو.",
      image: project3Img
    },
    {
      id: 4,
      title: "Zenouki Cookware: Technology Change",
      category: "Copywriting",
      type: "Awareness concept",
      desc: "Highlighting that while mobile tech hasn't changed much recently, this new cookware brings new Egyptian-made technology.",
      arabic: "مبقاش في تقدم في التكنولوجيا زي زمان، بس إحنا نزلنا بتكنولوجيا جديدة أول مرة تنزل مصر.",
      image: project4Img
    },
    {
      id: 5,
      title: "ABC Defender",
      category: "Campaign Ideas",
      type: "Recall campaign",
      desc: "Use the brand name inside funny everyday examples to connect it to pest control services.",
      arabic: null,
      image: project5Img
    },
    {
      id: 6,
      title: "Mandarine Koueider",
      category: "Copywriting",
      type: "Branded storytelling",
      desc: "Mandarine Koueider becomes the reward after success, tied to a nostalgic childhood story.",
      arabic: null,
      image: project6Img
    },
    {
      id: 7,
      title: "Debate / YouTube Game",
      category: "YouTube Concepts",
      type: "Creative Series",
      desc: "Interactive talk-show format where participants try to convince someone with different viewpoints.",
      arabic: null,
      image: youtubeGameImg
    },
    {
      id: 8,
      title: "Santa Goes Corporate",
      category: "YouTube Concepts",
      type: "Entertainment Series",
      desc: "Modern reinterpretation of Santa Claus inside a corporate environment exploring company culture.",
      arabic: null,
      image: christmasImg
    },
    {
      id: 9,
      title: "Marketing Podcast",
      category: "YouTube Concepts",
      type: "Podcast",
      desc: "Discussing real industry chaos, client situations, and behind-the-scenes decision-making.",
      arabic: null,
      image: podcastImg
    },
    {
      id: 10,
      title: "Racing Line Ramadan Decor Ad",
      category: "Scripts",
      type: "Video Script",
      desc: "Promote Ramadan decoration services with an emotional seasonal connection.",
      arabic: null,
      video: ramadanVideo
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
      arabic: null,
      video: limoVideo
    },
    {
      id: 14,
      title: "Mandarine Kouidar Mascot",
      category: "Brand Characters",
      type: "Character Design",
      desc: "Designed and developed a custom mascot for Kouidar for brand-focused execution.",
      arabic: null,
      video: mandarineVideo
    },
    {
      id: 15,
      title: "Creative Content Grid",
      category: "Social Media Posts",
      type: "Social Content",
      desc: "Original thinking and brand-focused creative work from idea generation to visual direction.",
      arabic: null,
      images: [socialImg1, socialImg2, socialImg3, socialImg4, socialImg5, socialImg6]
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
              <div className="project-media">
                {project.video ? (
                  <video src={project.video} className="project-video" controls muted loop />
                ) : project.images ? (
                  <div className="project-image-grid">
                    {project.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="project-img-grid-item" />
                    ))}
                  </div>
                ) : project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-image-placeholder">
                    <span>[ {project.title} Image ]</span>
                  </div>
                )}
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
