import React, { useState } from 'react';
import logoImg from '../assets/images/Logo.jpeg';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (category: string) => void;
}

const treatmentCategories = [
  { id: 'general', name: 'General Dentistry', sub: 'Consultation, Cleaning, Fillings, Extraction' },
  { id: 'cosmetic', name: 'Cosmetic Dentistry', sub: 'Smile Makeover, Veneers, Bonding' },
  { id: 'restorative', name: 'Restorative Dentistry', sub: 'Crowns, Bridges, Dentures' },
  { id: 'rootcanal', name: 'Root Canal', sub: 'Single-Sitting RCT, Re-RCT' },
  { id: 'implants', name: 'Dental Implants', sub: 'Single/Full-Mouth Implants' },
  { id: 'orthodontics', name: 'Orthodontics', sub: 'Braces, Clear Aligners' },
  { id: 'whitening', name: 'Teeth Whitening', sub: 'In-Clinic & Home Kits' },
  { id: 'children', name: 'Children\'s Dentistry', sub: 'Sealants, Cavities, Habit Care' },
  { id: 'gum', name: 'Gum Treatment', sub: 'Scaling, Gum Contouring, Surgery' },
  { id: 'surgery', name: 'Oral Surgery', sub: 'Wisdom Teeth, Bone Grafting' },
  { id: 'emergency', name: 'Emergency', sub: 'Severe Pain, Broken Tooth, Trauma' },
  { id: 'preventive', name: 'Preventive', sub: 'Screening, Guards, Cleanings' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, setSelectedCategory }) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTreatmentNav = (catId: string) => {
    if (setSelectedCategory) {
      setSelectedCategory(catId);
    }
    handleNav('treatments');
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'treatments', label: 'Treatments', hasSub: true },
    { id: 'gallery', label: 'Smile Gallery' },
    { id: 'patient-info', label: 'Patient Info' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky-header">
      <div className="header-container">
        {/* Logo / Brand */}
        <div className="header-logo" onClick={() => handleNav('home')}>
          <img src={logoImg} alt="Oceanview Dental Studio Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item-wrapper ${item.hasSub ? 'has-mega-menu' : ''}`}
              onMouseEnter={() => item.hasSub && setMegaMenuOpen(true)}
              onMouseLeave={() => item.hasSub && setMegaMenuOpen(false)}
            >
              <button
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => !item.hasSub && handleNav(item.id)}
              >
                {item.label}
                {item.hasSub && <span className="chevron-down">▼</span>}
              </button>

              {item.hasSub && megaMenuOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-grid">
                    {treatmentCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="mega-menu-card"
                        onClick={() => handleTreatmentNav(cat.id)}
                      >
                        <h4>{cat.name}</h4>
                        <p>{cat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Header CTAs */}
        <div className="header-ctas">
          <button className="cta-button primary-cta" onClick={() => handleNav('enquiry')}>
            Book Appointment
          </button>
          <a href="tel:+18005550199" className="cta-icon-link phone-call" title="Call Us">
            📞 <span className="cta-label">+1 800 555 0199</span>
          </a>
          <a
            href="https://wa.me/919510212154"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-icon-link whatsapp-chat-only"
            title="Chat on WhatsApp"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="#25d366">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-links">
            {menuItems.map((item) => (
              <div key={item.id} className="mobile-nav-item">
                <button
                  className={`mobile-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
                {item.hasSub && (
                  <div className="mobile-sub-menu">
                    {treatmentCategories.map((cat) => (
                      <button
                        key={cat.id}
                        className="mobile-sub-link"
                        onClick={() => handleTreatmentNav(cat.id)}
                      >
                        • {cat.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mobile-drawer-ctas">
              <button
                className="cta-button primary-cta w-full"
                onClick={() => handleNav('enquiry')}
              >
                Book Appointment
              </button>
              <a href="tel:+18005550199" className="mobile-cta-link">
                📞 Call: +1 800 555 0199
              </a>
              <a
                href="https://wa.me/919510212154"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-cta-link"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
