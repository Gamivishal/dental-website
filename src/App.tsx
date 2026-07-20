import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Page Imports
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Treatments } from './pages/Treatments';
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
    const hash = window.location.hash.replace('#/', '');
    const validPages = ['home', 'about', 'treatments', 'treatment-detail', 'gallery', 'patient-info', 'testimonials', 'contact', 'enquiry'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, _setCurrentPage] = useState<string>(getInitialPage);
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [selectedSubcategory, setSelectedSubcategory] = useState<TreatmentSub | null>(null);
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  const setCurrentPage = (page: string) => {
    window.location.hash = `#/${page}`;
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

  // Sync state with URL hash updates (e.g. browser navigation, page reload)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const validPages = ['home', 'about', 'treatments', 'treatment-detail', 'gallery', 'patient-info', 'testimonials', 'contact', 'enquiry'];
      if (validPages.includes(hash)) {
        _setCurrentPage(hash);
      } else {
        _setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set default hash if not present
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Read cookie preference from localStorage
  useEffect(() => {
    const consent = localStorage.getItem('oceanview-cookie-consent');
    if (consent === 'true') {
      setCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('oceanview-cookie-consent', 'true');
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
      <div className="top-accent-bar">
        <span>⭐ ISO 9001:2015 Premium Certified Dental Studio</span>
        <span>📞 Emergency Hotline: +1 800 555 0199</span>
      </div>

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
          <button className="cta-button primary-cta" onClick={acceptCookies}>
            Accept & Proceed
          </button>
        </div>
      )}

      {/* Procedure Details Popup Modal (Root Viewport Overlay) */}
      {selectedSubcategory && (
        <div className="treatment-modal-overlay" onClick={() => setSelectedSubcategory(null)}>
          <div className="treatment-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedSubcategory(null)} aria-label="Close modal">
              ✕
            </button>
            <div className="modal-header">
              <span className="modal-tag">PROCEDURE DETAILS</span>
              <h2>{selectedSubcategory.name}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{selectedSubcategory.desc}</p>
              
              <div className="modal-section-grid">
                <div className="modal-info-block">
                  <h4>💡 Common Symptoms</h4>
                  <ul>
                    {selectedSubcategory.symptoms.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-info-block">
                  <h4>✨ Treatment Benefits</h4>
                  <ul>
                    {selectedSubcategory.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-meta-box">
                <div className="meta-item">
                  <strong>⏱️ Expected Duration</strong>
                  <span>{selectedSubcategory.duration}</span>
                </div>
                <div className="meta-item">
                  <strong>🏥 Recovery Time</strong>
                  <span>{selectedSubcategory.recovery}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="cta-button primary" 
                onClick={() => {
                  setSelectedSubcategory(null);
                  setCurrentPage('enquiry');
                }}
              >
                Book Appointment
              </button>
              <button className="cta-button outline" onClick={() => setSelectedSubcategory(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
