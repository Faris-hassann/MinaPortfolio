import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import CaseStudySection from './components/CaseStudySection';
import ProjectGallerySection from './components/ProjectGallerySection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudySection />
        <ProjectGallerySection />
        <ExperienceEducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
