import React, { useEffect } from 'react';
import { InnerHero } from '../components/InnerHero';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';

interface PatientInfoProps {
  setCurrentPage: (page: string) => void;
}

export const PatientInfo: React.FC<PatientInfoProps> = ({ setCurrentPage }) => {
  const faqItems = [
    {
      question: 'How early should I arrive for my first visit?',
      answer: 'Please arrive 10 to 15 minutes early so we can complete your registration and health history comfortably.',
    },
    {
      question: 'Can I bring old X-rays or treatment records?',
      answer: 'Yes. Bringing previous dental records helps us understand your history and plan treatment more accurately.',
    },
    {
      question: 'Do you treat emergency pain cases?',
      answer: 'Yes. We reserve emergency slots for severe tooth pain, swelling, broken teeth, and urgent dental concerns.',
    },
  ];

  // Cinematic Scroll reveal trigger (repeats on scroll, threshold 0.22)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.22 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page patient-info-page fade-in">
      
      {/* 1. Hero Section */}
      <InnerHero
        pageTitle="A Calm, Confident First Visit"
        badgeText="PATIENT INFORMATION"
        subtitle="Everything you need to know before your appointment before visiting our clinic."
        currentPageName="Patient Info"
        bgImage={waitingImg2}
      >
        <button className="cta-button primary-cta" onClick={() => setCurrentPage('enquiry')}>
          Book First Visit
        </button>
        <button className="cta-button secondary-cta" onClick={() => setCurrentPage('contact')}>
          Get Emergency Guide
        </button>
      </InnerHero>

      {/* 2. Welcome Section */}
      <section className="welcome-section-callout reveal-left">
        <div className="welcome-box">
          <div className="welcome-icon-wrap">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="welcome-text">
            <h2>New Patient Welcome</h2>
            <p>We welcome every new patient with a calm, step-by-step process designed to reduce anxiety and make your first visit easy to follow.</p>
          </div>
        </div>
      </section>

      {/* 3. First Visit Process (Vertical Timeline) */}
      <section className="first-visit-timeline-section">
        <div className="section-header reveal">
          <h2>First Visit Process</h2>
        </div>
        <div className="vertical-timeline">
          <div className="timeline-step-item reveal-left">
            <div className="step-badge">1</div>
            <div className="step-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="step-content">
              <h3>Reception check-in and health history review</h3>
              <p>Meet our care team, complete your diagnostic checklist, and hand over medical records cleanly.</p>
            </div>
          </div>

          <div className="timeline-step-item reveal-right">
            <div className="step-badge">2</div>
            <div className="step-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
              </svg>
            </div>
            <div className="step-content">
              <h3>Clinical examination with digital scans if needed</h3>
              <p>Relax in our high-end treatment suite as we review your visual structure and bone alignment details.</p>
            </div>
          </div>

          <div className="timeline-step-item reveal-left">
            <div className="step-badge">3</div>
            <div className="step-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="step-content">
              <h3>Treatment discussion and transparent cost estimate</h3>
              <p>Explore your customized treatment map and receive structured breakdowns of costs and timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Appointment Process (Horizontal Process Timeline) */}
      <section className="appointment-process-section">
        <div className="section-header reveal">
          <h2>Appointment Process</h2>
        </div>
        <div className="horizontal-timeline-grid">
          <div className="timeline-card reveal-left">
            <div className="card-num">1</div>
            <h3>Book Appointment</h3>
            <p>Call, message, or book through the enquiry page.</p>
          </div>
          <div className="timeline-connector">➔</div>
          <div className="timeline-card reveal">
            <div className="card-num">2</div>
            <h3>Confirm Details</h3>
            <p>Confirm your preferred date, time, and treatment goal.</p>
          </div>
          <div className="timeline-connector">➔</div>
          <div className="timeline-card reveal-right">
            <div className="card-num">3</div>
            <h3>Arrive Comfortably</h3>
            <p>Arrive a little early so our team can assist you smoothly.</p>
          </div>
        </div>
      </section>

      {/* 5. What to Bring & Patient Comfort Grid */}
      <div className="bring-comfort-grid">
        {/* What to Bring */}
        <section className="bring-card-list reveal-left">
          <h2>What to Bring</h2>
          <div className="checklist-items">
            <div className="checklist-row">
              <div className="check-icon-wrap">✓</div>
              <span>🪪 Government-issued photo ID</span>
            </div>
            <div className="checklist-row">
              <div className="check-icon-wrap">✓</div>
              <span>📑 Previous dental records or summaries</span>
            </div>
            <div className="checklist-row">
              <div className="check-icon-wrap">✓</div>
              <span>📁 Recent X-rays or scans, if available</span>
            </div>
            <div className="checklist-row">
              <div className="check-icon-wrap">✓</div>
              <span>💳 Insurance or benefit card, if applicable</span>
            </div>
          </div>
        </section>

        {/* Patient Comfort */}
        <section className="comfort-card-list reveal-right">
          <h2>Patient Comfort</h2>
          <div className="checklist-items">
            <div className="comfort-row">
              <div className="comfort-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="comfort-info">
                <h3>Calm waiting area with refreshments</h3>
                <p>Relax in our lounge containing refreshments, organic teas, and calming music.</p>
              </div>
            </div>
            <div className="comfort-row">
              <div className="comfort-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="comfort-info">
                <h3>Comfort options for anxious patients</h3>
                <p>Personalized noise-canceling headphones and relaxing aromatherapy.</p>
              </div>
            </div>
            <div className="comfort-row">
              <div className="comfort-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="comfort-info">
                <h3>Adjustable treatment chair support</h3>
                <p>Ergonomic memory-foam patient chairs adjusted perfectly for your posture.</p>
              </div>
            </div>
            <div className="comfort-row">
              <div className="comfort-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                </svg>
              </div>
              <div className="comfort-info">
                <h3>Clean, quiet, and sterilised clinical rooms</h3>
                <p>Rigorous Class-B autoclave sterilization and HEPA room filtration air filters.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. Payment & Treatment Preparation Grid */}
      <div className="payment-prep-grid">
        {/* Payment Options */}
        <section className="payment-options-card reveal-left">
          <h2>Payment Options</h2>
          <div className="payments-grid-layout">
            <div className="payment-card-item">
              <div className="pay-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <span>Cash & Cards</span>
            </div>
            <div className="payment-card-item">
              <div className="pay-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>Insurance</span>
            </div>
            <div className="payment-card-item">
              <div className="pay-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="10" width="18" height="11" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
              </div>
              <span>EMI Plans</span>
            </div>
            <div className="payment-card-item">
              <div className="pay-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span>UPI Payments</span>
            </div>
          </div>
        </section>

        {/* Treatment Prep */}
        <section className="prep-info-card reveal-right">
          <h2>Treatment Preparation</h2>
          <div className="prep-list-layout">
            <div className="prep-step-row">
              <div className="prep-num">1</div>
              <span>Eat normally unless told otherwise by Dr. Shah.</span>
            </div>
            <div className="prep-step-row">
              <div className="prep-num">2</div>
              <span>Share any medicines, allergies, or history with the team.</span>
            </div>
            <div className="prep-step-row">
              <div className="prep-num">3</div>
              <span>Ask questions before your treatment session begins.</span>
            </div>
          </div>
        </section>
      </div>

      {/* 7. Aftercare Instructions (Premium Callout Banner) */}
      <section className="aftercare-banner-section reveal">
        <div className="aftercare-banner-callout">
          <div className="aftercare-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="aftercare-info">
            <h2>Aftercare Instructions</h2>
            <ul className="aftercare-checklist-horizontal">
              <li>Follow the medication and hygiene instructions provided by the clinic.</li>
              <li>Avoid chewing on the treated side if you received a restorative procedure.</li>
              <li>Contact us if swelling, discomfort, or bleeding does not improve.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Downloadable Patient Forms */}
      <section className="downloadable-forms-section">
        <div className="section-header reveal">
          <h2>Downloadable Patient Forms</h2>
          <p>Download and complete these forms before your visit to save time at reception.</p>
        </div>
        <div className="forms-grid-layout">
          <div className="form-download-card reveal-left">
            <div className="form-card-left">
              <div className="pdf-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="form-meta">
                <h3>New Patient Form</h3>
                <span>PDF Format • 142 KB</span>
              </div>
            </div>
            <a className="download-action-btn" href="/forms/new-patient-form.txt" download aria-label="Download New Patient Form">
              ↓
            </a>
          </div>

          <div className="form-download-card reveal-right">
            <div className="form-card-left">
              <div className="pdf-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className="form-meta">
                <h3>Medical History Form</h3>
                <span>PDF Format • 118 KB</span>
              </div>
            </div>
            <a className="download-action-btn" href="/forms/medical-history-form.txt" download aria-label="Download Medical History Form">
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="faq-accordion-section">
        <div className="section-header reveal">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="accordion-container-layout">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-detail-row reveal">
              <summary>
                <span>{item.question}</span>
                <span className="plus-icon-state">+</span>
              </summary>
              <div className="faq-answer-inside">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* 10. Emergency Section (Red Gradient Callout Banner) */}
      <section className="emergency-red-banner reveal">
        <div className="emerg-left">
          <div className="emerg-icon-wrap">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div className="emerg-text">
            <h2>Emergency Information</h2>
            <p>If you have severe tooth pain, swelling, trauma, or a broken tooth, contact the clinic immediately for urgent support.</p>
          </div>
        </div>
        <button className="emerg-action-btn" onClick={() => setCurrentPage('contact')}>
          Emergency Call & Map
        </button>
      </section>

      {/* 11. Book First Visit (CTA Banner) */}
      <section className="book-first-visit-cta reveal">
        <div className="cta-left">
          <h2>Book First Visit</h2>
          <p>Ready to start? Book your first appointment and our team will guide you through every step.</p>
        </div>
        <button className="cta-action-btn" onClick={() => setCurrentPage('enquiry')}>
          Book Online Appointment
        </button>
      </section>

    </div>
  );
};
