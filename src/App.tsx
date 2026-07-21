import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Page Imports
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Treatments, treatmentData } from './pages/Treatments';
import type { TreatmentSub } from './pages/Treatments';
import { TreatmentDetail } from './pages/TreatmentDetail';
import { SmileGallery } from './pages/SmileGallery';
import { PatientInfo } from './pages/PatientInfo';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { Enquiry } from './pages/Enquiry';

import './App.css';

function App() {
  const getInitialPage = (): string => {
    const path = window.location.pathname.replace(/^\//, '');
    const validPages = ['home', 'about', 'treatments', 'treatment-detail', 'gallery', 'patient-info', 'testimonials', 'contact', 'enquiry'];
    const page = (path === '' || path === 'index.html') ? 'home' : path;
    return validPages.includes(page) ? page : 'home';
  };

  const [currentPage, _setCurrentPage] = useState<string>(getInitialPage);
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [selectedSubcategory, setSelectedSubcategory] = useState<TreatmentSub | null>(null);
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  const setCurrentPage = (page: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    _setCurrentPage(page);
  };

  // Sync scroll and hash on page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  // Global scroll listener for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync state with URL path updates (e.g. browser navigation, page reload)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      const validPages = ['home', 'about', 'treatments', 'treatment-detail', 'gallery', 'patient-info', 'testimonials', 'contact', 'enquiry'];
      const page = (path === '' || path === 'index.html') ? 'home' : path;
      if (validPages.includes(page)) {
        _setCurrentPage(page);
      } else {
        _setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Read cookie preference from localStorage
  useEffect(() => {
    const consent = localStorage.getItem('oceanview-cookie-consent');
    if (consent === 'true' || consent === 'ignored') {
      setCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('oceanview-cookie-consent', 'true');
    setCookieConsent(true);
  };

  const ignoreCookies = () => {
    localStorage.setItem('oceanview-cookie-consent', 'ignored');
    setCookieConsent(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} setSelectedCategory={setSelectedCategory} />;
      case 'about':
        return <About />;
      case 'treatments':
        return (
          <Treatments
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
            setCurrentSubcategory={setSelectedSubcategory}
          />
        );
      case 'treatment-detail':
        return <TreatmentDetail subcategory={selectedSubcategory} setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <SmileGallery />;
      case 'patient-info':
        return <PatientInfo setCurrentPage={setCurrentPage} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      case 'enquiry':
        return <Enquiry />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Top Banner Accent */}
      {/* <div className="top-accent-bar">
        <span>⭐ ISO 9001:2015 Premium Certified Dental Studio</span>
        <span>📞 Emergency Hotline: +1 800 555 0199</span>
      </div> */}

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Render Dynamic Routing Area */}
      <main className="page-content-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating cinematic background shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        {renderPage()}
      </main>

      {/* Main Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Floating CTAs Widget */}
      <FloatingButtons setCurrentPage={setCurrentPage} />

      {/* Cookie Consent Glass Banner */}
      {!cookieConsent && (
        <div className="cookie-consent-banner glass-card fade-in">
          <p>
            We use diagnostic cookies to ensure you get the best browsing experience on our dental clinic site. By continuing, you agree to our privacy conditions.
          </p>
          <div className="cookie-buttons">
            <button className="cta-button primary-cta" onClick={acceptCookies}>
              Accept
            </button>
            <button className="cta-button secondary-cta" onClick={ignoreCookies}>
              Ignore
            </button>
          </div>
        </div>
      )}

      {/* Procedure Details Popup Modal (Root Viewport Overlay) */}
      {currentPage !== 'treatment-detail' && selectedSubcategory && (() => {
        const parentCategory = treatmentData.find(cat => cat.subs.some(sub => sub.name === selectedSubcategory.name)) || treatmentData[0];
        return (
          <div className="treatment-modal-overlay" onClick={() => setSelectedSubcategory(null)}>
            <div className="treatment-modal-card-premium" onClick={(e) => e.stopPropagation()}>

              {/* Sticky Close Button */}
              <button className="modal-close-btn-premium" onClick={() => setSelectedSubcategory(null)} aria-label="Close modal">
                ✕
              </button>

              <div className="modal-two-columns">

                {/* Left Panel: Dark Teal (#1F5F63) */}
                <div className="modal-left-panel">
                  <div className="left-panel-content">
                    <div className="category-badge-glass">
                      <span className="badge-icon">{parentCategory.icon}</span>
                      <span className="badge-label">{parentCategory.name.toUpperCase()}</span>
                    </div>

                    <div className="treatment-hero-brand">
                      <span className="treatment-large-icon">{parentCategory.icon}</span>
                      <h2>{selectedSubcategory.name}</h2>
                      <p className="treatment-subtitle">{selectedSubcategory.desc.slice(0, 80)}...</p>
                    </div>

                    <div className="premium-spec-cards">
                      <div className="spec-card">
                        <span className="spec-icon">⏱️</span>
                        <div className="spec-info">
                          <label>DURATION</label>
                          <strong>{selectedSubcategory.duration}</strong>
                        </div>
                      </div>

                      <div className="spec-card">
                        <span className="spec-icon">🏥</span>
                        <div className="spec-info">
                          <label>RECOVERY TIME</label>
                          <strong>{selectedSubcategory.recovery}</strong>
                        </div>
                      </div>

                      <div className="spec-card">
                        <span className="spec-icon">🛡️</span>
                        <div className="spec-info">
                          <label>ANESTHESIA</label>
                          <strong>Local / Comfort Gel</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: White Content */}
                <div className="modal-right-panel">
                  <div className="right-panel-scrollable">

                    {/* Description Section */}
                    <div className="modal-content-section">
                      <h3>Overview & Indications</h3>
                      <p className="modal-section-desc">{selectedSubcategory.desc}</p>
                    </div>

                    {/* Symptoms / Target Conditions (Chips) */}
                    <div className="modal-content-section">
                      <h3>Common Indications</h3>
                      <p className="section-intro">This treatment is typically recommended for patients experiencing:</p>
                      <div className="symptoms-chips">
                        {selectedSubcategory.symptoms.map((s, i) => (
                          <span key={i} className="symptom-chip">
                            <span className="chip-indicator">⚠️</span>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="modal-content-section">
                      <h3>Clinical Highlights & Benefits</h3>
                      <div className="benefits-cards-grid">
                        {selectedSubcategory.benefits.map((b, i) => (
                          <div key={i} className="benefit-card-item">
                            <span className="benefit-check">✅</span>
                            <p>{b}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standard Procedure Steps */}
                    <div className="modal-content-section">
                      <h3>Standard Procedure Steps</h3>
                      <div className="modal-steps-timeline">
                        <div className="timeline-step">
                          <div className="step-number">1</div>
                          <div className="step-content">
                            <h4>Diagnostics & 3D Imaging</h4>
                            <p>Dr. Shah reviews oral structures using digital scans to outline precision root or bone anatomy maps.</p>
                          </div>
                        </div>
                        <div className="timeline-step">
                          <div className="step-number">2</div>
                          <div className="step-content">
                            <h4>Comfort & Numbing</h4>
                            <p>We administer local anesthesia or comfort gel to ensure the therapy zone is fully numb.</p>
                          </div>
                        </div>
                        <div className="timeline-step">
                          <div className="step-number">3</div>
                          <div className="step-content">
                            <h4>Clinical Restoration</h4>
                            <p>Operating under magnification, we perform precise sculpting, cleaning, or bonding treatments.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Post-Care & Recovery Advice */}
                    <div className="modal-content-section">
                      <h3>Recovery & Aftercare</h3>
                      <div className="aftercare-box-glass">
                        <span className="aftercare-icon">💡</span>
                        <div className="aftercare-text">
                          <h4>Quick Tip</h4>
                          <p>Avoid extremely hot, cold, or hard foods for 2 hours post-treatment. Maintain regular flossing and brushing cycles to maximize longevity.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Panel Sticky Footer CTA */}
                  <div className="modal-right-footer">
                    <button
                      className="cta-button primary-cta ripple-button"
                      onClick={() => {
                        setSelectedSubcategory(null);
                        setCurrentPage('enquiry');
                      }}
                    >
                      📅 Book Appointment
                    </button>

                    <a
                      href="https://wa.me/919510212154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-modal-btn"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="#25d366">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

export default App;
