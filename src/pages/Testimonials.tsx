import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
const AnimatedCounter: React.FC<{ target: number; suffix?: string; decimals?: number; duration?: number }> = ({
  target,
  suffix = '',
  decimals = 0,
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          const totalMiliseconds = duration;
          const incrementTime = 30;
          const numIterations = totalMiliseconds / incrementTime;
          const step = (end - start) / numIterations;

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{count.toFixed(decimals)}{suffix}</span>;
};

// ==========================================
// MAIN TESTIMONIALS PAGE
// ==========================================
export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Sarah M.',
      treatment: 'Smile Makeover',
      rating: 5,
      date: '2 weeks ago',
      text: 'Dr. Shah completely transformed my smile with veneers. The process was completely painless, and the staff made sure I felt comfortable the whole time. Absolute recommendation!'
    },
    {
      name: 'David K.',
      treatment: 'Single-Sitting Root Canal',
      rating: 5,
      date: '1 month ago',
      text: 'I was terrified of root canals, but the single-sitting microscopic root canal here was a breeze. Done in under an hour and no pain at all the next day. Truly state-of-the-art.'
    },
    {
      name: 'Elena R.',
      treatment: 'Clear Aligners',
      rating: 5,
      date: '3 months ago',
      text: 'Very satisfied with my aligner journey. The scans were digital (no messy trays) and my teeth are perfectly aligned now. Excellent service!'
    }
  ]);

  const reviewCategories = [
    { title: 'Smile Makeovers', count: 248, label: 'reviews', summary: 'Veneers, bonding, and full smile design cases.' },
    { title: 'Root Canal Care', count: 196, label: 'reviews', summary: 'Single-sitting and microscopic endodontic care.' },
    { title: 'Implants & Restorations', count: 164, label: 'reviews', summary: 'Long-term function, comfort, and bite stability.' },
    { title: 'Family Dentistry', count: 312, label: 'reviews', summary: 'Routine checkups, cleanings, and preventive visits.' },
  ];

  const googleReviews = [
    { name: 'Anjali P.', stars: 5, text: 'The clinic was spotless and the team explained every step clearly. My crown treatment was smooth and painless.' },
    { name: 'Mohit S.', stars: 5, text: 'Best dental experience I have had. The digital scan and treatment planning felt very modern and precise.' },
    { name: 'Farah K.', stars: 5, text: 'I found them through Google and the experience matched the ratings. Friendly staff, transparent pricing, and excellent care.' },
  ];

  const warrantyReviews = [
    { name: 'Ritika J.', text: 'The warranty support on my restorative work gave me real confidence to proceed with treatment.' },
    { name: 'Arjun M.', text: 'They explained what was covered before treatment and honored every follow-up exactly as promised.' },
  ];

  // Leave a review form states
  const [formName, setFormName] = useState('');
  const [formTreatment, setFormTreatment] = useState('Smile Makeover');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Google Reviews slider state
  const [googleSlideIdx, setGoogleSlideIdx] = useState(0);
  const [googleHovered, setGoogleHovered] = useState(false);

  // Auto-play Google Reviews
  useEffect(() => {
    if (googleHovered) return;
    const timer = setInterval(() => {
      setGoogleSlideIdx((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [googleReviews.length, googleHovered]);

  // Scroll reveal observer
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    const newReview = {
      name: formName,
      treatment: formTreatment,
      rating: formRating,
      date: 'Just now',
      text: formText
    };

    setReviews([newReview, ...reviews]);
    setFormName('');
    setFormText('');
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="page testimonials-page fade-in">

      {/* 1. Testimonials Hero */}
      <section className="testimonials-hero-premium">
        <div className="hero-background-overlay" />
        <div className="hero-premium-content">
          <span className="premium-tag reveal">PATIENT SUCCESS STORIES</span>
          <h1 className="reveal">Reviews & Testimonials</h1>
          <p className="reveal">
            Read honest reviews and stories from patient cases who chose Oceanview Dental Studio.
          </p>
          <div className="hero-scroll-indicator reveal">
            <span className="mouse-icon">
              <span className="wheel-dot"></span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Overall Patient Rating */}
      <section className="overall-rating-section-premium reveal">
        <div className="premium-container">
          <div className="rating-flex-premium">
            <div className="rating-score-premium">
              <h2>
                <AnimatedCounter target={4.9} decimals={1} />
              </h2>
              <div className="stars-glowing">★★★★★</div>
              <p>Based on <AnimatedCounter target={1200} suffix="+" /> patient reviews</p>
            </div>

            <div className="rating-platforms-premium">
              <div className="platform-card-premium glass-card">
                <span className="platform-icon">🌐</span>
                <div className="platform-info">
                  <span>Google Reviews</span>
                  <strong><AnimatedCounter target={4.9} decimals={1} /> / 5.0 ★</strong>
                </div>
              </div>
              <div className="platform-card-premium glass-card">
                <span className="platform-icon">👥</span>
                <div className="platform-info">
                  <span>Facebook Reviews</span>
                  <strong><AnimatedCounter target={5.0} decimals={1} /> / 5.0 ★</strong>
                </div>
              </div>
              <div className="platform-card-premium glass-card">
                <span className="platform-icon">🛡️</span>
                <div className="platform-info">
                  <span>ISO Quality Audit</span>
                  <strong><AnimatedCounter target={100} suffix="%" /> Passed</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="trust-badges-row">
            <div className="trust-badge">
              <span className="badge-bullet">✔</span> Google Top Rated Clinic
            </div>
            <div className="trust-badge">
              <span className="badge-bullet">✔</span> ISO Certified Sterilisation
            </div>
            <div className="trust-badge">
              <span className="badge-bullet">✔</span> Complete Treatment Warranty
            </div>
            <div className="trust-badge">
              <span className="badge-bullet">✔</span> Pain-Free Precision Care
            </div>
          </div>
        </div>
      </section>

      {/* 3. Treatment-Based Review Categories */}
      <section className="review-categories-section-premium alternate-bg">
        <div className="premium-container">
          <div className="section-header-premium reveal">
            <span>REVIEW CATEGORIES</span>
            <h2>Treatment-Based Review Categories</h2>
            <p>See what patients say about the treatment that matters most to them.</p>
          </div>

          <div className="category-cards-grid-premium reveal">
            {reviewCategories.map((category) => (
              <article key={category.title} className="category-card-premium glass-card">
                <div className="card-top">
                  <h3>{category.title}</h3>
                  <strong className="case-count">
                    <AnimatedCounter target={category.count} suffix={` ${category.label}`} />
                  </strong>
                </div>
                <p>{category.summary}</p>
                <div className="card-bottom-accent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Video Testimonials */}
      <section className="video-testimonials-section-premium">
        <div className="premium-container">
          <div className="section-header-premium reveal">
            <span>VIDEO REVIEWS</span>
            <h2>Patient Story Highlights</h2>
          </div>

          <div className="video-cards-grid-premium">
            <div className="video-luxury-card glass-card reveal-left">
              <div className="video-thumbnail-container">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
                  alt="Veneers Transformation Story Preview"
                  className="video-thumb-img"
                />
                <div className="video-thumbnail-overlay">
                  <button className="glowing-play-btn" aria-label="Play Veneers Story">
                    <span className="play-triangle">▶</span>
                  </button>
                  <span className="duration-pill">1:42</span>
                </div>
              </div>
              <div className="video-card-body">
                <h4>Veneers Transformation Story</h4>
                <p>"Priya shares her clinical experience getting custom veneers before her wedding day."</p>
              </div>
            </div>

            <div className="video-luxury-card glass-card reveal-right">
              <div className="video-thumbnail-container">
                <img
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600"
                  alt="Implant Rehabilitation Journey Preview"
                  className="video-thumb-img"
                />
                <div className="video-thumbnail-overlay">
                  <button className="glowing-play-btn" aria-label="Play Implant Story">
                    <span className="play-triangle">▶</span>
                  </button>
                  <span className="duration-pill">2:15</span>
                </div>
              </div>
              <div className="video-card-body">
                <h4>Implant Rehabilitation Journey</h4>
                <p>"Robert details his full-arch implant recovery and eating standard foods again."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Google Reviews */}
      <section className="google-reviews-section-premium alternate-bg">
        <div className="premium-container">
          <div className="section-header-premium reveal">
            <span>GOOGLE REVIEWS</span>
            <h2>What People Say on Google</h2>
            <p>Highlights from public patient feedback across our clinic listings.</p>
          </div>

          <div
            className="google-slider-container glass-card reveal"
            onMouseEnter={() => setGoogleHovered(true)}
            onMouseLeave={() => setGoogleHovered(false)}
          >
            <span className="g-decor">G</span>
            <div className="google-slider-wrapper">
              {googleReviews.map((review, idx) => (
                <article
                  key={review.name}
                  className={`google-slide-item ${googleSlideIdx === idx ? 'active' : ''}`}
                >
                  <div className="review-stars-glowing">{'★'.repeat(review.stars)}</div>
                  <p className="slider-review-text">"{review.text}"</p>
                  <strong className="slider-reviewer-name">— {review.name}</strong>
                </article>
              ))}
            </div>

            {/* Dots */}
            <div className="google-slider-dots">
              {googleReviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`google-dot ${googleSlideIdx === idx ? 'active' : ''}`}
                  onClick={() => setGoogleSlideIdx(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Patient Story */}
      <section className="featured-story-section-premium">
        <div className="premium-container">
          <div className="featured-grid-premium">
            <div className="featured-image-wrapper reveal-left">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt="Priya Smile Makeover Success"
                className="featured-patient-img"
              />
              <div className="tag-makeover">✨ SMILE DESIGN CASE</div>
            </div>

            <div className="featured-story-text reveal-right">
              <span>FEATURED PATIENT STORY</span>
              <h2>From Dental Anxiety to a Confident Smile</h2>
              <p className="featured-desc">
                Priya came in worried about multiple treatments, but after a detailed scan, a gentle treatment plan,
                and step-by-step explanations, she completed her smile makeover without pain or stress.
              </p>

              {/* Timeline */}
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-number">1</div>
                  <div className="timeline-info">
                    <h4>Painless Scanning</h4>
                    <p>Digital 3D impressions mapping out her ideal smile outline.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">2</div>
                  <div className="timeline-info">
                    <h4>Gentle Execution</h4>
                    <p>Micro-treatment details led by Dr. Sheekha Shah.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-number">3</div>
                  <div className="timeline-info">
                    <h4>Confident Smile</h4>
                    <p>Priya completes her smile design journey stress-free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Warranty Experience Reviews */}
      <section className="warranty-reviews-section-premium alternate-bg">
        <div className="premium-container">
          <div className="section-header-premium reveal">
            <span>WARRANTY EXPERIENCE</span>
            <h2>Warranty Experience Reviews</h2>
            <p>Patients appreciate the confidence that comes with our documented treatment warranty program.</p>
          </div>

          <div className="warranty-reviews-grid-premium">
            {warrantyReviews.map((review, idx) => (
              <article key={review.name} className={`warranty-review-card-premium glass-card reveal-${idx === 0 ? 'left' : 'right'}`}>
                <div className="warranty-card-top">
                  <span className="guarantee-shield">🛡️ Protected Restoration</span>
                  <h3>{review.name}</h3>
                </div>
                <p>"{review.text}"</p>
                <div className="warranty-tag-bottom">Verified Patient</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Written Reviews */}
      <section className="written-reviews-section-premium">
        <div className="premium-container">
          <div className="section-header-premium reveal">
            <span>PATIENT FEEDBACK</span>
            <h2>Recent Written Reviews</h2>
          </div>

          <div className="reviews-masonry-grid">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="written-review-card glass-card reveal"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="written-card-header">
                  <div>
                    <strong>{rev.name}</strong>
                    <span className="written-treatment">({rev.treatment})</span>
                  </div>
                  <span className="written-date">{rev.date}</span>
                </div>
                <div className="review-stars-glowing">{'★'.repeat(rev.rating)}</div>
                <p className="written-text">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Leave a Review */}
      <section className="leave-review-section-premium alternate-bg">
        <div className="premium-container">
          <div className="review-form-card glass-card reveal">
            <h2>Leave a Review</h2>
            <p>Share your treatment experience at Oceanview Dental Studio.</p>

            {submitSuccess && (
              <div className="success-message-premium">
                ✔ Thank you! Your feedback helps us maintain premium quality.
              </div>
            )}

            <form onSubmit={handleSubmit} className="review-form-premium">
              <div className="form-grid-premium">

                {/* Name Input */}
                <div className="floating-group">
                  <input
                    type="text"
                    id="rev-name"
                    className="floating-input"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="rev-name" className="floating-label">Full Name</label>
                </div>

                {/* Treatment Dropdown */}
                <div className="floating-group active-label">
                  <select
                    id="rev-treatment"
                    className="floating-select"
                    value={formTreatment}
                    onChange={(e) => setFormTreatment(e.target.value)}
                  >
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Clear Aligners">Clear Aligners</option>
                    <option value="Dental Cleaning">Dental Cleaning</option>
                  </select>
                  <label htmlFor="rev-treatment" className="floating-label select-label">Treatment Received</label>
                </div>

                {/* Rating Dropdown */}
                <div className="floating-group active-label">
                  <select
                    id="rev-rating"
                    className="floating-select"
                    value={formRating}
                    onChange={(e) => setFormRating(Number(e.target.value))}
                  >
                    <option value={5}>5 Stars - Outstanding</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                  <label htmlFor="rev-rating" className="floating-label select-label">Rating</label>
                </div>
              </div>

              {/* Textarea */}
              <div className="floating-group text-group">
                <textarea
                  id="rev-text"
                  className="floating-textarea"
                  rows={4}
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="rev-text" className="floating-label">Your Review</label>
              </div>

              <button type="submit" className="cta-button primary-cta ripple-button">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. Book an Appointment */}
      <section className="testimonials-cta-section reveal">
        <div className="cta-background-img" />
        <div className="cta-gradient-overlay" />
        <div className="cta-content-premium">
          <h2>Book an Appointment</h2>
          <p>Schedule your consultation and we will help you choose the right treatment path.</p>
          <div className="cta-buttons-row">
            <button
              type="button"
              className="cta-button primary-cta ripple-button"
              onClick={() => window.location.hash = '#/enquiry'}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
