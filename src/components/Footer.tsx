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
          {/* 1. Clinic Information & Social Media Links */}
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

          {/* 2. Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('about')}>About Doctor & Team</button></li>
              <li><button onClick={() => handleNav('gallery')}>Smile Gallery</button></li>
              <li><button onClick={() => handleNav('testimonials')}>Patient Stories</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact Us</button></li>
              <li><button onClick={() => handleNav('enquiry')}>General Enquiry</button></li>
            </ul>
          </div>

          {/* 3. Treatment Categories */}
          <div className="footer-col">
            <h3>Treatments</h3>
            <ul>
              <li><button onClick={() => handleTreatmentNav('general')}>General Dentistry</button></li>
              <li><button onClick={() => handleTreatmentNav('cosmetic')}>Cosmetic Makeovers</button></li>
              <li><button onClick={() => handleTreatmentNav('implants')}>Dental Implants</button></li>
              <li><button onClick={() => handleTreatmentNav('rootcanal')}>Root Canal Therapy</button></li>
              <li><button onClick={() => handleTreatmentNav('orthodontics')}>Clear Aligners</button></li>
              <li><button onClick={() => handleTreatmentNav('whitening')}>Teeth Whitening</button></li>
            </ul>
          </div>

          {/* 4. Patient Links */}
          <div className="footer-col">
            <h3>Patient Links</h3>
            <ul>
              <li><button onClick={() => handleNav('patient-info')}>First Visit Process</button></li>
              <li><button onClick={() => handleNav('patient-info')}>Payment & Finance Options</button></li>
              <li><button onClick={() => handleNav('patient-info')}>Patient Comfort Care</button></li>
              <li><button onClick={() => handleNav('patient-info')}>Emergency Dental Info</button></li>
              <li><button onClick={() => handleNav('testimonials')}>Leave a Patient Review</button></li>
            </ul>
          </div>

          {/* 5. International Patient Links */}
          <div className="footer-col">
            <h3>International</h3>
            <ul>
              <li><button onClick={() => handleNav('contact')}>Dental Tourism Guide</button></li>
              <li><button onClick={() => handleNav('enquiry')}>Pre-visit CBCT Evaluation</button></li>
              <li><button onClick={() => handleNav('contact')}>Airport Pickup Coordinator</button></li>
              <li><button onClick={() => handleNav('contact')}>Nearby Luxury Lodging</button></li>
            </ul>
          </div>

          {/* 6. Contact Details, Timings & Google Map Link */}
          <div className="footer-col contact-col">
            <h3>Contact & Timings</h3>
            <p className="contact-item">
              📍 <strong>Location:</strong><br />
              102 Blue Ocean Plaza, Marine Boulevard, Suite B
            </p>
            <p className="contact-item">
              ⏰ <strong>Clinic Timings:</strong><br />
              Mon - Sat: 9:00 AM - 8:00 PM<br />
              Sunday: By Appointment Only
            </p>
            <p className="contact-item">
              📞 <strong>Phone:</strong> <a href="tel:+18005550199">+1 800 555 0199</a><br />
              📧 <strong>Email:</strong> <a href="mailto:info@oceanviewdental.com">info@oceanviewdental.com</a>
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
          {/* 14. Copyright */}
          <p className="copyright-text">
            © {new Date().getFullYear()} Oceanview Dental Studio. All rights reserved.
          </p>
          {/* 10, 11, 12. Policies */}
          <div className="policy-links">
            <button onClick={() => handleNav('home')}>Privacy Policy</button>
            <button onClick={() => handleNav('home')}>Terms and Conditions</button>
            <button onClick={() => handleNav('home')}>Warranty Policy</button>
          </div>
        </div>
        {/* 13. Medical Disclaimer */}
        <div className="medical-disclaimer">
          <p>
            <strong>Medical Disclaimer:</strong> The dental and medical information on this site is provided for educational and informational purposes only. It is not intended as a substitute for professional dental diagnosis, treatment, advice, or services.
          </p>
        </div>
      </div>
    </footer>
  );
};
