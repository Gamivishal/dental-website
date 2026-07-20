import React from 'react';
import logoImg from '../assets/images/Logo.jpeg';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, setSelectedCategory }) => {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTreatmentNav = (catId: string) => {
    if (setSelectedCategory) {
      setSelectedCategory(catId);
    }
    handleNav('treatments');
  };

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* Clinic Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logoImg} alt="Oceanview Dental Studio Logo" className="footer-logo-img" />
              <div>
                <h3 className="brand-name">OCEANVIEW</h3>
                <p className="brand-sub">DENTAL STUDIO</p>
              </div>
            </div>
            <p className="clinic-bio">
              ISO 9001:2015 Certified Premium Dental Care Facility. We provide state-of-the-art dental treatments with lifetime warranties and micro-dentistry technology.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">X.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('about')}>About Dr. Shah & Team</button></li>
              <li><button onClick={() => handleNav('gallery')}>Smile Gallery</button></li>
              <li><button onClick={() => handleNav('testimonials')}>Patient Stories</button></li>
              <li><button onClick={() => handleNav('patient-info')}>Patient Guide</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact & Hours</button></li>
            </ul>
          </div>

          {/* Treatment Column */}
          <div className="footer-col">
            <h3>Treatments</h3>
            <ul>
              <li><button onClick={() => handleTreatmentNav('general')}>General Dentistry</button></li>
              <li><button onClick={() => handleTreatmentNav('cosmetic')}>Cosmetic Makeovers</button></li>
              <li><button onClick={() => handleTreatmentNav('implants')}>Dental Implants</button></li>
              <li><button onClick={() => handleTreatmentNav('rootcanal')}>Root Canal Therapy</button></li>
              <li><button onClick={() => handleTreatmentNav('orthodontics')}>Clear Aligners & Braces</button></li>
              <li><button onClick={() => handleTreatmentNav('whitening')}>Teeth Whitening</button></li>
            </ul>
          </div>

          {/* Contact Details & Map Column */}
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <p className="contact-item">
              📍 <strong>Location:</strong><br />
              102 Blue Ocean Plaza, Marine Boulevard, Suite B
            </p>
            <p className="contact-item">
              📞 <strong>Call Us:</strong><br />
              <a href="tel:+18005550199">+1 800 555 0199</a>
            </p>
            <p className="contact-item">
              📧 <strong>Email Support:</strong><br />
              <a href="mailto:info@oceanviewdental.com">info@oceanviewdental.com</a>
            </p>
            <p className="contact-item">
              ⏰ <strong>Clinic Timings:</strong><br />
              Mon - Sat: 9:00 AM - 8:00 PM<br />
              Sunday: By Appointment Only
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-link-btn"
            >
              🗺️ Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Oceanview Dental Studio. All rights reserved.
          </p>
          <div className="policy-links">
            <button onClick={() => handleNav('home')}>Privacy Policy</button>
            <button onClick={() => handleNav('home')}>Terms of Service</button>
            <button onClick={() => handleNav('home')}>Warranty Policy</button>
          </div>
        </div>
        <div className="medical-disclaimer">
          <p>
            <strong>Medical Disclaimer:</strong> The dental and medical information on this site is provided for educational and informational purposes only. It is not intended as a substitute for professional dental diagnosis, treatment, advice, or services.
          </p>
        </div>
      </div>
    </footer>
  );
};
