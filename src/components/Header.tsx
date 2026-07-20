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
          <div className="logo-text">
            <span className="brand-name">OCEANVIEW</span>
            <span className="brand-sub">DENTAL STUDIO</span>
          </div>
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
            href="https://wa.me/15550199"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-icon-link whatsapp-chat"
            title="Chat on WhatsApp"
          >
            💬 <span className="cta-label">WhatsApp</span>
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
                href="https://wa.me/15550199"
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
