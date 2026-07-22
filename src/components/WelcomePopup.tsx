import React, { useState, useEffect, useRef } from 'react';
import './WelcomePopup.css';
import logoImg from '../assets/images/Logo2.png';
import ceoImg from '../assets/images/CEO2.png';

interface WelcomePopupProps {
  setCurrentPage: (page: string) => void;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setShouldRender(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1000ms delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);

    // Allow animation to finish before removing from DOM
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`welcome-popup-overlay ${isVisible ? 'show' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div className="welcome-popup-container" ref={popupRef} tabIndex={-1}>
        <button
          ref={closeBtnRef}
          className="welcome-popup-close"
          onClick={handleClose}
          aria-label="Close welcome message"
        >
          ✕
        </button>

        <div className="welcome-popup-inner-scroll">
          <div className="welcome-popup-left-content">
            <div className="welcome-popup-header">
              <img src={logoImg} alt="Dr. Sheekha Shah Dental Studio Logo" />
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0E2F44', letterSpacing: '1px', textTransform: 'uppercase' }}>Dr. Sheekha Shah</div>
                <div style={{ fontSize: '10px', color: '#4B5563', letterSpacing: '1px' }}>DENTAL STUDIO</div>
              </div>
            </div>

            <div className="welcome-popup-badge">
              ✨ Exclusive Patient Welcome Offer
            </div>

            <h2 id="welcome-title">Smile With <span>Complete Confidence</span></h2>
            <p>
              Experience premium, painless dentistry tailored exclusively to your comfort.
              Book your first appointment today and let us craft a treatment plan designed for long-lasting health.
            </p>

            <div className="welcome-highlight-card">
              <p><strong>Your First Visit Includes:</strong></p>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Complimentary Consultation
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Personalized Treatment Plan
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Transparent Pricing
                </li>
              </ul>
            </div>

            <div className="welcome-features">
              <div className="welcome-feature">
                <div className="icon">🦷</div>
                <span>Free Consultation</span>
              </div>
              <div className="welcome-feature">
                <div className="icon">📷</div>
                <span>Digital Scan</span>
              </div>
              <div className="welcome-feature">
                <div className="icon">🛡</div>
                <span>Lifetime Care</span>
              </div>
            </div>
          </div>

          <div className="welcome-popup-right">
            <img src={ceoImg} alt="Dr. Sheekha Shah" className="welcome-doctor-img" />
            <h3>Dr. Sheekha Shah</h3>
            <h4>Dental Surgeon</h4>
            <div className="welcome-quote">
              Your comfort and confidence are my top priorities. Welcome to a new standard of dental care.
            </div>
          </div>

          <div className="welcome-popup-actions-container">
            <div className="welcome-actions">
              <div className="welcome-actions-row">
                <button
                  className="welcome-btn primary"
                  onClick={() => {
                    handleClose();
                    setCurrentPage('enquiry');
                  }}
                >
                  Book Appointment
                </button>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="welcome-btn outline"
                  onClick={handleClose}
                >
                  WhatsApp
                </a>
                <a
                  href="tel:1234567890"
                  className="welcome-btn outline"
                  onClick={handleClose}
                >
                  Call Now
                </a>
              </div>
              <div className="welcome-limited">
                📅 Limited Appointments Available This Week
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
