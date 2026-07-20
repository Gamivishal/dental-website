import React, { useState } from 'react';

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

  const [formName, setFormName] = useState('');
  const [formTreatment, setFormTreatment] = useState('Smile Makeover');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      {/* Testimonials Hero */}
      <section className="testimonials-hero">
        <div className="hero-overlay">
          <span>PATIENT SUCCESS STORIES</span>
          <h1>Reviews & Testimonials</h1>
          <p>Read honest reviews and stories from patient cases who chose Oceanview Dental.</p>
        </div>
      </section>

      {/* Trust Rating Bar */}
      <section className="overall-rating-section glass-card">
        <div className="rating-flex">
          <div className="rating-score">
            <h2>4.9</h2>
            <div className="stars">★★★★★</div>
            <p>Based on 1,200+ patient reviews</p>
          </div>
          <div className="rating-platforms">
            <div className="platform-card">
              <span>Google Reviews</span>
              <strong>4.9 / 5.0 ★</strong>
            </div>
            <div className="platform-card">
              <span>Facebook Reviews</span>
              <strong>5.0 / 5.0 ★</strong>
            </div>
            <div className="platform-card">
              <span>ISO Quality Audit</span>
              <strong>100% Passed</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="video-testimonials-section">
        <div className="section-header">
          <span>VIDEO REVIEWS</span>
          <h2>Patient Story Highlights</h2>
        </div>
        <div className="video-cards-grid">
          <div className="video-placeholder-card glass-card">
            <div className="video-thumb">
              <span className="play-btn">▶</span>
              <span className="duration">1:42</span>
            </div>
            <h4>Veneers Transformation Story</h4>
            <p>"Priya shares her clinical experience getting custom veneers before her wedding day."</p>
          </div>
          <div className="video-placeholder-card glass-card">
            <div className="video-thumb">
              <span className="play-btn">▶</span>
              <span className="duration">2:15</span>
            </div>
            <h4>Implant Rehabilitation Journey</h4>
            <p>"Robert details his full-arch implant recovery and eating standard foods again."</p>
          </div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="written-reviews-section">
        <div className="section-header">
          <span>PATIENT FEEDBACK</span>
          <h2>Recent Written Reviews</h2>
        </div>
        <div className="reviews-list-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card glass-card">
              <div className="review-header">
                <div>
                  <strong>{rev.name}</strong>
                  <span className="review-treatment">({rev.treatment})</span>
                </div>
                <span className="review-date">{rev.date}</span>
              </div>
              <div className="review-stars">{'★'.repeat(rev.rating)}</div>
              <p className="review-text">"{rev.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Write a Review Form */}
      <section className="leave-review-section glass-card">
        <h2>Leave a Review</h2>
        <p>Share your treatment experience at Oceanview Dental Studio.</p>

        {submitSuccess && (
          <div className="success-message">
            Thank you! Your feedback helps us maintain premium quality.
          </div>
        )}

        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="rev-name">Full Name</label>
            <input
              type="text"
              id="rev-name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rev-treatment">Treatment Received</label>
            <select
              id="rev-treatment"
              value={formTreatment}
              onChange={(e) => setFormTreatment(e.target.value)}
            >
              <option value="Smile Makeover">Smile Makeover</option>
              <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Clear Aligners">Clear Aligners</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rev-rating">Rating</label>
            <select
              id="rev-rating"
              value={formRating}
              onChange={(e) => setFormRating(Number(e.target.value))}
            >
              <option value={5}>5 Stars - Outstanding</option>
              <option value={4}>4 Stars - Very Good</option>
              <option value={3}>3 Stars - Good</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rev-text">Your Review</label>
            <textarea
              id="rev-text"
              rows={4}
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
              placeholder="How was your treatment with Dr. Shah?"
              required
            />
          </div>

          <button type="submit" className="cta-button primary-cta">
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
};
