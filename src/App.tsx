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
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [selectedSubcategory, setSelectedSubcategory] = useState<TreatmentSub | null>(null);
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  // Sync scroll on page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

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
      <main className="page-content-wrapper">
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
    </>
  );
}

export default App;
