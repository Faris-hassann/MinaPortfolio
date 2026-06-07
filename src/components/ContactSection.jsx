import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="contact-headline">Let’s build content that performs, not just posts that exist.</h2>
          <p className="contact-sub">Ready to discuss your next big idea?</p>
          <a href="mailto:minaibrahimtotti@gmail.com" className="btn btn-primary contact-btn">Send an Email</a>
        </div>
        
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:minaibrahimtotti@gmail.com" className="contact-value">minaibrahimtotti@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <div className="contact-value">
              <a href="tel:01281398839">01281398839</a><br/>
              <a href="tel:01272300064">01272300064</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Rock C, Cairo</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Social</span>
            <div className="contact-social-links">
              <a href="http://www.linkedin.com/in/mina-ibrahim-363873274" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.tiktok.com/@batout_totti" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
