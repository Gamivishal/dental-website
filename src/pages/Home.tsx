import React from 'react';
import dentalClinicImg from '../assets/images/dental-clinic.svg';
import clinicImg from '../assets/images/Clinic.jpeg';
import waitingImg from '../assets/images/Waiting.jpeg';
import entryImg from '../assets/images/Entry.jpeg';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (category: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, setSelectedCategory }) => {
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
    <div className="page home-page fade-in">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="warranty-tag">🏆 Lifetime Dental Warranty Guaranteed</div>
          <h1>Smile Confidently with Premium Dentistry</h1>
          <p>
            Oceanview Dental Studio provides ISO 9001:2015 certified treatments combining micro-dentistry, laser technology, and world-class dental experts.
          </p>
          <div className="hero-ctas">
            <button className="cta-button primary" onClick={() => handleNav('enquiry')}>
              Book Consultation
            </button>
            <button className="cta-button secondary" onClick={() => handleNav('about')}>
              Meet Our Doctor
            </button>
          </div>
        </div>
        <div className="hero-illustration-container">
          <img src={dentalClinicImg} alt="Dental Illustration Logo" className="hero-illustration" />
        </div>
      </section>

      {/* Trust & Achievement Bar */}
      <section className="trust-bar">
        <div className="trust-item">
          <h2>5.0 ★★★★★</h2>
          <p>Google Rating (1000+ Reviews)</p>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <h2>ISO Certified</h2>
          <p>9001:2015 Standards</p>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <h2>15+ Years</h2>
          <p>Clinical Experience</p>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <h2>100%</h2>
          <p>Warranty Validated Cases</p>
        </div>
      </section>

      {/* Featured Treatment Categories */}
      <section className="featured-treatments-section">
        <div className="section-header">
          <span>OUR SERVICES</span>
          <h2>State-Of-The-Art Dental Treatments</h2>
          <p>We combine advanced tech with custom treatment plans for long-lasting health.</p>
        </div>
        <div className="treatments-preview-grid">
          <div className="treatment-preview-card glass-card" onClick={() => handleTreatmentNav('cosmetic')}>
            <span className="card-icon">✨</span>
            <h3>Cosmetic Dentistry</h3>
            <p>Veneers, Smile Makeovers, composite bonding, and gum contouring.</p>
            <button className="card-link">Learn More →</button>
          </div>
          <div className="treatment-preview-card glass-card" onClick={() => handleTreatmentNav('implants')}>
            <span className="card-icon">🦷</span>
            <h3>Dental Implants</h3>
            <p>Single tooth, multiple, or full-mouth permanent restorations.</p>
            <button className="card-link">Learn More →</button>
          </div>
          <div className="treatment-preview-card glass-card" onClick={() => handleTreatmentNav('rootcanal')}>
            <span className="card-icon">⚡</span>
            <h3>Root Canal Therapy</h3>
            <p>Pain-free single-sitting root canals using dental microscopy.</p>
            <button className="card-link">Learn More →</button>
          </div>
          <div className="treatment-preview-card glass-card" onClick={() => handleTreatmentNav('orthodontics')}>
            <span className="card-icon">🛡️</span>
            <h3>Orthodontics</h3>
            <p>Clear aligners, ceramic, and metal braces for teens & adults.</p>
            <button className="card-link">Learn More →</button>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="cta-button outline" onClick={() => handleNav('treatments')}>
            Explore All 12 Categories
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="why-choose-grid">
          <div className="why-choose-info">
            <span>WHY CHOOSE US</span>
            <h2>We Are Dedicated to Your Ultimate Comfort</h2>
            <p>
              We provide the highest standard of dental sterilization, pain-free therapies, and specialized care from initial diagnostic scanning to your post-treatment smile checkups.
            </p>
            <ul className="benefits-list">
              <li>🔬 <strong>Dental Microscopy:</strong> 20x magnified accuracy for clean root canals.</li>
              <li>🛡️ <strong>Safety Sterilization:</strong> Grade-B autoclave sterilization protocol.</li>
              <li>🛋️ <strong>Anxiety-Free Environment:</strong> Relaxing visual guides and comfort setups.</li>
              <li>💳 <strong>0% EMI Payment Options:</strong> Transparent, flexible finance plans.</li>
            </ul>
          </div>
          <div className="why-choose-tour">
            <div className="tour-badge">📸 Clinic Tour Preview</div>
            <div className="tour-images-stack">
              <img src={clinicImg} alt="Dental chair" className="stack-img main" />
              <div className="stack-row">
                <img src={entryImg} alt="Clinic entrance" className="stack-img" />
                <img src={waitingImg} alt="Waiting lounge" className="stack-img" />
              </div>
            </div>
            <button className="cta-button text-link" onClick={() => handleNav('about')}>
              Take Full Interactive Tour →
            </button>
          </div>
        </div>
      </section>

      {/* Meet Dr. Sheekha Shah Preview */}
      <section className="dentist-preview-banner">
        <div className="dentist-preview-content">
          <span>MEET OUR CEO</span>
          <h2>Dr. Sheekha Shah</h2>
          <p className="subtitle">M.D.S. in Conservative Dentistry & Endodontics</p>
          <p className="dentist-quote">
            "Our clinic stands on three pillars: absolute sterilization, cutting-edge technology, and patient-first care. We build smiles that last a lifetime."
          </p>
          <button className="cta-button primary" onClick={() => handleNav('about')}>
            Read Doctor's Profile
          </button>
        </div>
      </section>

      {/* FAQ Accordion Preview */}
      <section className="faq-preview-section">
        <div className="section-header">
          <span>COMMON INQUIRIES</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <details className="faq-item glass-card" open>
            <summary>Do dental implants feel like natural teeth?</summary>
            <div className="faq-answer">
              Yes, dental implants integrate directly with your jawbone, acting as strong, natural tooth roots. They provide 100% natural chewing functionality and dental warranty.
            </div>
          </details>
          <details className="faq-item glass-card">
            <summary>How long does a Smile Makeover take?</summary>
            <div className="faq-answer">
              A custom veneer smile makeover typically requires 2 to 3 sessions across 7-10 days, depending on patient contour goals.
            </div>
          </details>
          <details className="faq-item glass-card">
            <summary>What is a single-sitting Root Canal treatment?</summary>
            <div className="faq-answer">
              Using modern micro-endodontics, we clean, shape, and fill the root canals in a single pain-free session of 45-60 minutes, instead of multiple appointments.
            </div>
          </details>
        </div>
      </section>

      {/* Final Appointment CTA Banner */}
      <section className="final-cta-banner">
        <div className="final-cta-content">
          <h2>Ready to Begin Your Smile Transformation?</h2>
          <p>Book a premium dental diagnostic consultation with Dr. Sheekha Shah today.</p>
          <button className="cta-button primary-cta" onClick={() => handleNav('enquiry')}>
            Schedule Your Visit Now
          </button>
        </div>
      </section>
    </div>
  );
};
