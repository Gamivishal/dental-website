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
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook">
                <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.8 9.9 67.6 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter" aria-label="Twitter">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </a> */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.28 448H7.4V148.9h92.88V448zm-46.4-340.77c-29.7 0-53.8-24.1-53.8-53.8S24.16 0 53.88 0c29.7 0 53.8 24.1 53.8 53.8s-24.1 53.8-53.8 53.8zM448 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
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
          {/* <p>
            <strong>Medical Disclaimer:</strong> The dental and medical information on this site is provided for educational and informational purposes only. It is not intended as a substitute for professional dental diagnosis, treatment, advice, or services.
          </p> */}
        </div>
      </div>
    </footer>
  );
};
