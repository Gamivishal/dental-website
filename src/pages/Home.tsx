import React, { useEffect, useState, useRef } from 'react';
import { treatmentData } from './Treatments';
import clinicImg from '../assets/images/Clinic.jpeg';
import clinicImg2 from '../assets/images/Clinic 2.jpeg';
import ceoImg from '../assets/images/CEO.jpeg';
import waitingImg from '../assets/images/Waiting.jpeg';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';
import entryImg from '../assets/images/Entry.jpeg';

export const AnimatedCounter: React.FC<{ value: number; suffix?: string; decimals?: number; duration?: number }> = ({ value, suffix = '', decimals = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count.toFixed(decimals)}{suffix}</span>;
};

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (category: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, setSelectedCategory }) => {
  const slides = [
    {
      image: clinicImg,
      heading: 'Creating Beautiful & Healthy Smiles',
      description: 'Advanced dental treatments with personalized care, modern technology, and experienced specialists.',
    },
    {
      image: clinicImg2,
      heading: 'Your Smile, Our Passion',
      description: 'Providing painless, comfortable, and premium dental care for the entire family.',
    },
    {
      image: waitingImg,
      heading: 'Modern Dentistry You Can Trust',
      description: 'State-of-the-art clinic with experienced dentists and advanced equipment.',
    },
    {
      image: waitingImg2,
      heading: 'State-of-the-Art Comfort',
      description: 'Providing premium treatment rooms with lifetime dental warranties and certified hygiene protocols.',
    },
    {
      image: entryImg,
      heading: 'Relaxing Spa-like Studio',
      description: 'Thoughtfully designed entryways and waiting areas built to maximize patient comfort and calm.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

  // Mouse parallax handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2); // range -1 to 1
    const y = (clientY - top - height / 2) / (height / 2); // range -1 to 1
    currentTarget.style.setProperty('--mouse-x', `${x}`);
    currentTarget.style.setProperty('--mouse-y', `${y}`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '0');
    e.currentTarget.style.setProperty('--mouse-y', '0');
  };

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
    }, { threshold: 0.1 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page-container fade-in">

      {/* 1. Hero Image Slider (Ken Burns Transitions) */}
      <section
        className="hero-slider-section"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={(e) => {
          setIsPlaying(true);
          handleMouseLeave(e);
        }}
        onMouseMove={handleMouseMove}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === activeSlide ? 'active' : ''}`}
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-container">
              <div className="hero-slide-content">
                <span className="hero-slide-tag">🏆 PREMIUM DENTAL STUDIO</span>
                <h1 className="hero-slide-title">{slide.heading}</h1>
                <p className="hero-slide-desc">{slide.description}</p>
                <div className="hero-slide-ctas">
                  <button className="cta-button primary-hero" onClick={() => handleNav('enquiry')}>
                    Book Appointment
                  </button>
                  <button className="cta-button secondary-hero" onClick={() => handleNav('about')}>
                    Meet Our Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Slide">⟨</button>
        <button className="slider-arrow next" onClick={handleNext} aria-label="Next Slide">⟩</button>

        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Floating scroll indicator */}
        <div className="hero-scroll-indicator">
          <div className="mouse-wheel-icon">
            <span className="wheel-dot"></span>
          </div>
        </div>
      </section>

      {/* Main Page Layout Wrapper */}
      <div className="page" style={{ overflow: 'hidden' }}>

        {/* 2. Lifetime Dental Warranty Redesigned as a Premium Split Layout */}
        <section className="home-section-alternate-light reveal">
          <div className="split-info-visuals-grid">
            <div className="split-left-info reveal-left">
              <span className="section-tag">PATIENT PROTECTION</span>
              <h2>Lifetime Dental Warranty Program</h2>
              <p>Selected restorative and implant cases are fully backed by our long-term warranty program. We establish clear clinical protocols to ensure confidence before treatment begins.</p>

              <ul className="details-checklist">
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Coverage That Stays With You:</strong>
                    <p>Designed to support qualifying treatments with clear diagnostic follow-ups.</p>
                  </div>
                </li>
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Built on Clinical Standards:</strong>
                    <p>Warranty-backed plans are paired with strict sterilization and digital planning.</p>
                  </div>
                </li>
                <li>
                  <span className="check-bullet">✓</span>
                  <div>
                    <strong>Simple Eligibility Reviews:</strong>
                    <p>We explain details and options beforehand so you remain fully informed.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="split-right-visuals reveal-right">
              <div className="visuals-frame">
                <img src={clinicImg2} alt="Modern clinical treatment room" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Quick Action Feature Grid (Elegant Translucent Icons, no white boxed cards) */}
        <section className="home-section-alternate-white reveal">
          <div className="section-header">
            <span>FAST ACCESS</span>
            <h2>Direct Connection Channels</h2>
            <p>Reach our clinic coordinators through the path that suits you best.</p>
          </div>

          <div className="home-treatments-outline-grid">
            <div className="fast-access-card reveal-left" onClick={() => handleNav('enquiry')}>
              <div className="card-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Book a Consultation</h3>
              <p>Reserve an appointment and receive a diagnostics review from Dr. Shah.</p>
            </div>

            <a href="tel:+18005550199" style={{ textDecoration: 'none' }}>
              <div className="fast-access-card reveal">
                <div className="card-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3>Call the Clinic</h3>
                <p>Speak with the reception team for emergency guidance or office hours.</p>
              </div>
            </a>

            <a href="https://wa.me/919510212154" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="fast-access-card reveal-right">
                <div className="card-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>WhatsApp Us</h3>
                <p>Send a quick query for details, address coordinates, or questions.</p>
              </div>
            </a>
          </div>
        </section>

        {/* 4. Large Trust & Achievement Bar (Statistics Section) */}
        <section className="home-stats-bar-premium reveal">
          <div className="home-stat-item-premium fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="stat-icon">⭐</div>
            <h3><AnimatedCounter value={5.0} decimals={1} suffix=" ★" /></h3>
            <p>Google Rating (1000+ Reviews)</p>
          </div>
          <div className="home-stat-item-premium fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="stat-icon">🏅</div>
            <h3>ISO</h3>
            <p>Certified 9001:2015 Standards</p>
          </div>
          <div className="home-stat-item-premium fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="stat-icon">🦷</div>
            <h3><AnimatedCounter value={15} suffix="+ Yrs" /></h3>
            <p>Clinical Practice</p>
          </div>
          <div className="home-stat-item-premium fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="stat-icon">🛡️</div>
            <h3><AnimatedCounter value={100} suffix="%" /></h3>
            <p>Warranty Validated Cases</p>
          </div>
        </section>

        {/* 5. Featured Treatments (Elegant Grid with outlines and custom hover glowing) */}
        <section className="home-section-alternate-light reveal">
          <div className="section-header">
            <span>OUR SERVICES</span>
            <h2>State-Of-The-Art Dental Treatments</h2>
            <p>We combine advanced tech with custom treatment roadmaps for long-lasting oral health.</p>
          </div>

          {/* Row 1: Left Auto Scrolling (First 6 Categories) */}
          <div className="marquee-wrapper">
            <div className="marquee-track track-left">
              {[...treatmentData.slice(0, 6), ...treatmentData.slice(0, 6)].map((cat, idx) => (
                <div key={`${cat.id}-${idx}`} className="marquee-card-sizer">
                  <div
                    className="fast-access-card"
                    onClick={() => handleTreatmentNav(cat.id)}
                  >
                    <div className="card-icon-circle">{cat.icon}</div>
                    <h3>{cat.name}</h3>
                    <p>{cat.summary.slice(0, 75)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Auto Scrolling (Next 6 Categories) */}
          <div className="marquee-wrapper" style={{ marginTop: '24px' }}>
            <div className="marquee-track track-right">
              {[...treatmentData.slice(6, 12), ...treatmentData.slice(6, 12)].map((cat, idx) => (
                <div key={`${cat.id}-${idx}`} className="marquee-card-sizer">
                  <div
                    className="fast-access-card"
                    onClick={() => handleTreatmentNav(cat.id)}
                  >
                    <div className="card-icon-circle">{cat.icon}</div>
                    <h3>{cat.name}</h3>
                    <p>{cat.summary.slice(0, 75)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="cta-button outline" onClick={() => handleNav('treatments')}>
              View Detailed Procedures →
            </button>
          </div>
        </section>

        {/* 6. Why Choose Us (Split Layout benefit items vs. tour stack preview) */}
        <section className="why-choose-us reveal">
          <div className="why-choose-grid">
            <div className="why-choose-info reveal-left">
              <span>WHY CHOOSE US</span>
              <h2>We Are Dedicated to Your Ultimate Comfort</h2>
              <p>
                We maintain the highest global standards of sterilization, pain-free therapies, and specialized care from digital scanning to post-treatment checks.
              </p>
              <ul className="benefits-list">
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--accent)'}}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> <strong>Dental Microscopy:</strong> 20x magnification for exact root canal accuracy.</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--accent)'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <strong>Grade-B Autoclaves:</strong> Strict hospital sterilization workflows.</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--accent)'}}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> <strong>Anxiety-Free Environment:</strong> Relaxing background visuals and calm setups.</li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', color: 'var(--accent)'}}><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> <strong>Flexible Finance:</strong> 0% interest EMI payment structures.</li>
              </ul>
            </div>

            <div className="why-choose-tour reveal-right">
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

        {/* 7. Meet Dr. Sheekha Shah Redesigned as a Premium 2-Column Section */}
        <section className="home-section-alternate-white reveal">
          <div className="home-doctor-split-section">
            <div className="doctor-photo-frame reveal-left">
              <img src={ceoImg} alt="Dr. Sheekha Shah, BDS, MDS" />
            </div>

            <div className="doctor-profile-content reveal-right">
              <span className="doc-tag">MEET OUR FOUNDER & CEO</span>
              <h2>Dr. Sheekha Shah</h2>
              <span className="doc-title-sub">M.D.S. in Conservative Dentistry & Endodontics</span>
              <p className="doc-quote-block">
                "Our studio stands on three pillars: absolute clinical sterilization, cutting-edge technology, and patient-first care. We build smiles that last a lifetime."
              </p>
              <p>Dr. Shah is a certified specialist in micro-endodontics, dedicated to making advanced dental treatments pain-free and highly aesthetic.</p>
              <button className="cta-button primary" onClick={() => handleNav('about')}>
                Read Doctor's Profile
              </button>
            </div>
          </div>
        </section>

        {/* 8. Smile Gallery Spotlight & Case Highlights */}
        <section className="gallery-preview-section reveal">
          <div className="section-header">
            <span>SMILE GALLERY</span>
            <h2>Preview Real Patient Transformations</h2>
            <p>See the kinds of results featured in our interactive before-and-after gallery.</p>
          </div>

          <div className="gallery-preview-grid">
            <article className="gallery-spotlight reveal-left" style={{ border: '1px solid var(--border)', borderRadius: '24px', overflow: 'hidden', background: '#ffffff' }}>
              <img src={clinicImg} alt="Before and After transformation" className="gallery-spotlight-img" />
              <div className="gallery-spotlight-content" style={{ padding: '32px' }}>
                <span>CASE HIGHLIGHT</span>
                <h3>Precision planning for smile makeovers and implant restorations</h3>
                <p>Every transformation starts with scanning, planning, and a clear treatment roadmap.</p>
                <button className="cta-button outline" onClick={() => handleNav('gallery')}>
                  Open Full Gallery
                </button>
              </div>
            </article>

            <div className="gallery-highlights-grid reveal-right">
              <article className="gallery-highlight-card" style={{ border: '1px solid var(--border)', borderRadius: '20px', background: '#ffffff', padding: '24px' }}>
                <span className="card-icon">✨</span>
                <h3>Smile Makeover Cases</h3>
                <p>Veneers, bonding, and contouring plans built around facial proportions.</p>
              </article>
              <article className="gallery-highlight-card" style={{ border: '1px solid var(--border)', borderRadius: '20px', background: '#ffffff', padding: '24px' }}>
                <span className="card-icon">🦷</span>
                <h3>Implant Restorations</h3>
                <p>Permanent tooth replacement plans with natural bite and appearance.</p>
              </article>
              <article className="gallery-highlight-card" style={{ border: '1px solid var(--border)', borderRadius: '20px', background: '#ffffff', padding: '24px' }}>
                <span className="card-icon">📸</span>
                <h3>Confidence Boosts</h3>
                <p>Real stories from patients who wanted a faster, cleaner smile reset.</p>
              </article>
            </div>
          </div>
        </section>

        {/* 9. Technology & Comfort Details (Split visual grid) */}
        <section className="home-section-alternate-teal reveal">
          <div className="tech-comfort-grid">
            <div className="tech-comfort-copy reveal-left">
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

            <div className="tech-comfort-visuals reveal-right">
              <div className="comfort-image-stack">
                <img src={clinicImg2} alt="Advanced clinic room" className="comfort-image main" />
                <div className="comfort-image-row">
                  <img src={waitingImg2} alt="Comfortable waiting area" className="comfort-image" />
                  <img src={entryImg} alt="Clinic entrance" className="comfort-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Patient Journey Redesigned as a Premium Horizontal Timeline */}
        <section className="journey-section reveal">
          <div className="section-header">
            <span>PATIENT JOURNEY</span>
            <h2>From First Message to Lasting Follow-Up</h2>
            <p>A simple path that keeps treatment clear from start to finish.</p>
          </div>

          <div className="home-timeline-container">
            <div className="home-timeline-step-card reveal-left">
              <span className="timeline-num">01</span>
              <h3>Discover & Book</h3>
              <p>Start with a quick call, WhatsApp message, or online enquiry form.</p>
            </div>
            <div className="home-timeline-step-card reveal">
              <span className="timeline-num">02</span>
              <h3>Scan & Diagnose</h3>
              <p>We use digital scans and a thorough exam to build a precise plan.</p>
            </div>
            <div className="home-timeline-step-card reveal">
              <span className="timeline-num">03</span>
              <h3>Treat with Comfort</h3>
              <p>Micro-dentistry, lasers, and anxiety-aware care guide the procedure.</p>
            </div>
            <div className="home-timeline-step-card reveal-right">
              <span className="timeline-num">04</span>
              <h3>Review & Protect</h3>
              <p>Aftercare guidance and warranty-backed follow-up keep results on track.</p>
            </div>
          </div>
        </section>

        {/* 11. Staggered Testimonials Preview Grid */}
        <section className="home-section-alternate-white reveal">
          <div className="section-header">
            <span>PATIENT FEEDBACK</span>
            <h2>What Patients Say After Treatment</h2>
            <p>Short excerpts from real feedback and treatment stories.</p>
          </div>

          <div className="testimonial-preview-grid">
            <article className="testimonial-preview-card reveal-left" style={{ border: '1px solid var(--border)', borderRadius: '24px', background: '#F7FAF9', padding: '36px' }}>
              <div className="testimonial-stars" style={{ color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6' }}>“The process was completely painless, and the staff made sure I felt comfortable the whole time.”</p>
              <strong style={{ display: 'block', marginTop: '16px', color: 'var(--text-h)' }}>Sarah M.</strong>
              <span style={{ fontSize: '13px', color: 'var(--accent-hover)' }}>Smile Makeover</span>
            </article>

            <article className="testimonial-preview-card reveal" style={{ border: '1px solid var(--border)', borderRadius: '24px', background: '#F7FAF9', padding: '36px' }}>
              <div className="testimonial-stars" style={{ color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6' }}>“Done in under an hour and no pain at all the next day. Truly state-of-the-art.”</p>
              <strong style={{ display: 'block', marginTop: '16px', color: 'var(--text-h)' }}>David K.</strong>
              <span style={{ fontSize: '13px', color: 'var(--accent-hover)' }}>Single-Sitting Root Canal</span>
            </article>

            <article className="testimonial-preview-card reveal-right" style={{ border: '1px solid var(--border)', borderRadius: '24px', background: '#F7FAF9', padding: '36px' }}>
              <div className="testimonial-stars" style={{ color: 'var(--accent-gold)', marginBottom: '12px', display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6' }}>“The scans were digital and my teeth are perfectly aligned now. Excellent service!”</p>
              <strong style={{ display: 'block', marginTop: '16px', color: 'var(--text-h)' }}>Elena R.</strong>
              <span style={{ fontSize: '13px', color: 'var(--accent-hover)' }}>Clear Aligners</span>
            </article>
          </div>

          <div className="text-center mt-6">
            <button className="cta-button outline" onClick={() => handleNav('testimonials')}>
              Read All Testimonials
            </button>
          </div>
        </section>

        {/* 12. FAQ Accordion (Redesigned with revolving plus triggers) */}
        <section className="faq-preview-section reveal">
          <div className="section-header">
            <span>COMMON INQUIRIES</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="home-faq-accordion">
            <details className="home-faq-item-row" open>
              <summary>
                Do dental implants feel like natural teeth?
                <span className="plus-icon-state">+</span>
              </summary>
              <div className="home-faq-answer-inside">
                <p>Yes, dental implants integrate directly with your jawbone, acting as strong, natural tooth roots. They provide 100% natural chewing functionality and dental warranty.</p>
              </div>
            </details>

            <details className="home-faq-item-row">
              <summary>
                How long does a Smile Makeover take?
                <span className="plus-icon-state">+</span>
              </summary>
              <div className="home-faq-answer-inside">
                <p>A custom veneer smile makeover typically requires 2 to 3 sessions across 7-10 days, depending on patient contour goals.</p>
              </div>
            </details>

            <details className="home-faq-item-row">
              <summary>
                What is a single-sitting Root Canal treatment?
                <span className="plus-icon-state">+</span>
              </summary>
              <div className="home-faq-answer-inside">
                <p>Using modern micro-endodontics, we clean, shape, and fill the root canals in a single pain-free session of 45-60 minutes, instead of multiple appointments.</p>
              </div>
            </details>
          </div>
        </section>

        {/* 13. Redesigned Luxury Green Gradient Final CTA Banner */}
        <section className="home-final-cta-luxury reveal">
          <h2>Ready to Begin Your Smile Transformation?</h2>
          <p>Book a premium dental diagnostic consultation with Dr. Sheekha Shah today.</p>
          <button className="cta-action-btn-luxury" onClick={() => handleNav('enquiry')}>
            Schedule Your Visit Now
          </button>
        </section>

      </div>
    </div>
  );
};
