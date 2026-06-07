import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-logo">MINA IBRAHIM.</h2>
            <p className="footer-tagline">Content isn’t just about posting. It’s about influence, storytelling, and results.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:minaibrahimtotti@gmail.com">minaibrahimtotti@gmail.com</a>
            <a href="tel:01281398839">01281398839</a>
            <a href="http://www.linkedin.com/in/mina-ibrahim-363873274" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.tiktok.com/@batout_totti" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mina Ibrahim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
