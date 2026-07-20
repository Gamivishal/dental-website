import React from 'react';

interface FloatingButtonsProps {
  setCurrentPage: (page: string) => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ setCurrentPage }) => {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/15550199?text=Hello%20Oceanview%20Dental,%20I'd%20like%20to%20enquire%20about%20dental%20treatments."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </a>

      {/* Sticky Mobile Action Footer Bar */}
      <div className="sticky-mobile-actions">
        <a href="tel:+18005550199" className="mobile-action-btn call-btn">
          📞 Call Now
        </a>
        <button onClick={() => handleNav('enquiry')} className="mobile-action-btn book-btn">
          📅 Book Visit
        </button>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
        title="Back to Top"
        aria-label="Back to Top"
      >
        ▲
      </button>
    </>
  );
};
