import React from 'react';
import dentalClinicImg from '../assets/images/dental-clinic.svg';
import clinicImg from '../assets/images/Clinic.jpeg';
import clinicImg2 from '../assets/images/Clinic 2.jpeg';
import ceoImg from '../assets/images/CEO.jpeg';
import waitingImg from '../assets/images/Waiting.jpeg';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';
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

  const quickActions = [
    {
      title: 'Book a Consultation',
      description: 'Reserve a diagnostic appointment and get a treatment plan from Dr. Shah.',
      action: 'Schedule Visit',
      icon: '📅',
      kind: 'button' as const,
      onClick: () => handleNav('enquiry'),
    },
    {
      title: 'Call the Clinic',
      description: 'Speak with the front desk for emergency guidance or visit timings.',
      action: '+1 800 555 0199',
      icon: '📞',
      kind: 'link' as const,
      href: 'tel:+18005550199',
    },
    {
      title: 'WhatsApp Us',
      description: 'Send a quick message for availability, directions, or treatment questions.',
      action: 'Open Chat',
      icon: '💬',
      kind: 'link' as const,
      href: 'https://wa.me/919510212154',
    },
  ];

  const galleryHighlights = [
    {
      title: 'Smile Makeover Cases',
      description: 'Veneers, bonding, and contouring plans built around facial proportions.',
      icon: '✨',
    },
    {
      title: 'Implant Restorations',
      description: 'Permanent tooth replacement plans with natural bite and appearance.',
      icon: '🦷',
    },
    {
      title: 'Confidence Boosts',
      description: 'Real stories from patients who wanted a faster, cleaner smile reset.',
      icon: '📸',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Discover & Book',
      description: 'Start with a quick call, WhatsApp message, or online appointment request.',
    },
    {
      step: '02',
      title: 'Scan & Diagnose',
      description: 'We use digital scans and a thorough exam to build a precise plan.',
    },
    {
      step: '03',
      title: 'Treat with Comfort',
      description: 'Micro-dentistry, lasers, and anxiety-aware care guide the procedure.',
    },
    {
      step: '04',
      title: 'Review & Protect',
      description: 'Aftercare guidance and warranty-backed follow-up keep results on track.',
    },
  ];

  const testimonialPreviews = [
    {
      name: 'Sarah M.',
      treatment: 'Smile Makeover',
      quote: 'The process was completely painless, and the staff made sure I felt comfortable the whole time.',
    },
    {
      name: 'David K.',
      treatment: 'Single-Sitting Root Canal',
      quote: 'Done in under an hour and no pain at all the next day. Truly state-of-the-art.',
    },
    {
      name: 'Elena R.',
      treatment: 'Clear Aligners',
      quote: 'The scans were digital and my teeth are perfectly aligned now. Excellent service!',
    },
  ];

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

      {/* Lifetime Warranty Highlight */}
      <section className="warranty-highlight-section">
        <div className="section-header">
          <span>PATIENT PROTECTION</span>
          <h2>Lifetime Dental Warranty</h2>
          <p>Selected restorative and implant cases are backed by our long-term warranty program.</p>
        </div>
        <div className="warranty-grid">
          <article className="warranty-card glass-card">
            <span className="card-icon">🏆</span>
            <h3>Coverage That Stays With You</h3>
            <p>Designed to support qualifying treatments with clear follow-up and documentation.</p>
          </article>
          <article className="warranty-card glass-card">
            <span className="card-icon">🛡️</span>
            <h3>Built on Clinical Standards</h3>
            <p>Warranty-backed plans are paired with strict sterilization and diagnostic protocols.</p>
          </article>
          <article className="warranty-card glass-card">
            <span className="card-icon">📄</span>
            <h3>Simple Eligibility Review</h3>
            <p>We explain what is covered before treatment begins so there are no surprises later.</p>
          </article>
        </div>
      </section>

      {/* Quick Appointment Actions */}
      <section className="quick-actions-section">
        <div className="section-header">
          <span>FAST ACCESS</span>
          <h2>Quick Appointment Actions</h2>
          <p>Reach the clinic through the channel that works best for you.</p>
        </div>
        <div className="quick-actions-grid">
          {quickActions.map((action) => (
            <article key={action.title} className="quick-action-card glass-card">
              <span className="card-icon">{action.icon}</span>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              {action.kind === 'button' ? (
                <button className="card-link" onClick={action.onClick}>
                  {action.action} →
                </button>
              ) : (
                <a
                  className="card-link"
                  href={action.href}
                  target={action.href?.startsWith('http') ? '_blank' : undefined}
                  rel={action.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {action.action} →
                </a>
              )}
            </article>
          ))}
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

      {/* Smile Gallery Preview */}
      <section className="gallery-preview-section">
        <div className="section-header">
          <span>SMILE GALLERY</span>
          <h2>Preview Real Patient Transformations</h2>
          <p>See the kinds of results featured in our interactive before-and-after gallery.</p>
        </div>
        <div className="gallery-preview-grid">
          <article className="gallery-spotlight glass-card">
            <img src={ceoImg} alt="Dr. Sheekha Shah" className="gallery-spotlight-img" />
            <div className="gallery-spotlight-content">
              <span>CASE HIGHLIGHT</span>
              <h3>Precision planning for smile makeovers and implant restorations</h3>
              <p>Every transformation starts with scanning, planning, and a clear treatment roadmap.</p>
              <button className="cta-button outline" onClick={() => handleNav('gallery')}>
                Open Full Gallery
              </button>
            </div>
          </article>
          <div className="gallery-highlights-grid">
            {galleryHighlights.map((item) => (
              <article key={item.title} className="gallery-highlight-card glass-card">
                <span className="card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Comfort */}
      <section className="tech-comfort-section">
        <div className="tech-comfort-grid">
          <div className="tech-comfort-copy">
            <div className="section-header align-left">
              <span>TECHNOLOGY & COMFORT</span>
              <h2>Modern Dentistry That Feels Calm and Precise</h2>
              <p>Digital diagnostics, microscope-led treatments, and a relaxed clinic environment help reduce friction at every step.</p>
            </div>
            <ul className="tech-comfort-points">
              <li>🔬 20x microscope support for exact treatment delivery</li>
              <li>📐 Digital scans and low-radiation diagnostics</li>
              <li>🛋️ Comfortable lounge and consultation spaces</li>
              <li>🌿 Clear explanations, pacing, and anxiety-aware care</li>
            </ul>
          </div>
          <div className="tech-comfort-visuals">
            <div className="comfort-image-stack">
              <img src={clinicImg2} alt="Advanced clinic room" className="comfort-image main" />
              <div className="comfort-image-row">
                <img src={waitingImg2} alt="Comfortable waiting area" className="comfort-image" />
                <img src={entryImg} alt="Clinic entrance" className="comfort-image" />
              </div>
            </div>
            <div className="comfort-callout glass-card">
              <span>COMFORT FIRST</span>
              <p>We design the visit so patients feel informed, unhurried, and supported.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="journey-section">
        <div className="section-header">
          <span>PATIENT JOURNEY</span>
          <h2>From First Message to Lasting Follow-Up</h2>
          <p>A simple path that keeps treatment clear from start to finish.</p>
        </div>
        <div className="journey-grid">
          {journeySteps.map((step) => (
            <article key={step.step} className="journey-step glass-card">
              <span className="journey-step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview-section">
        <div className="section-header">
          <span>PATIENT FEEDBACK</span>
          <h2>What Patients Say After Treatment</h2>
          <p>Short excerpts from real feedback and treatment stories.</p>
        </div>
        <div className="testimonial-preview-grid">
          {testimonialPreviews.map((review) => (
            <article key={review.name} className="testimonial-preview-card glass-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <strong>{review.name}</strong>
              <span>{review.treatment}</span>
            </article>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="cta-button outline" onClick={() => handleNav('testimonials')}>
            Read All Testimonials
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
