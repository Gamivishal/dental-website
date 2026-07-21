import React, { useState, useEffect } from 'react';
import { InnerHero } from '../components/InnerHero';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';

export const Contact: React.FC = () => {
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('morning');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingDate) return;
    setSubmitSuccess(true);
    setBookingName('');
    setBookingPhone('');
    setBookingDate('');
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
    }, { threshold: 0.22 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page contact-page fade-in">
      
      {/* 1. Premium Hero Section */}
      <InnerHero
        pageTitle="Luxury Clinic Consultations"
        badgeText="GET IN TOUCH"
        subtitle="We are ready to respond to your queries. Drop by our studio or schedule a diagnostic checkup."
        currentPageName="Contact"
        bgImage={waitingImg2}
      />

      {/* Alternating Light Sage background Section: Details & Hours */}
      <div className="contact-section-light reveal">
        
        {/* 2. Elegant Icon Details Grid */}
        <div className="contact-details-grid">
          <div className="contact-icon-card">
            <div className="card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Clinic Address</h3>
            <p>102 Blue Ocean Plaza, Marine Boulevard, Suite B</p>
          </div>

          <div className="contact-icon-card">
            <div className="card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Phone Support</h3>
            <p><a href="tel:+18005550199">+1 800 555 0199</a></p>
          </div>

          <div className="contact-icon-card">
            <div className="card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Email Support</h3>
            <p><a href="mailto:info@oceanviewdental.com">info@oceanviewdental.com</a></p>
          </div>

          <div className="contact-icon-card">
            <div className="card-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>WhatsApp Chat</h3>
            <p><a href="https://wa.me/919510212154" target="_blank" rel="noopener noreferrer">+91 95102 12154</a></p>
          </div>
        </div>
      </div>

      {/* Main Grid: Map & Hours vs Sticky Booking Form */}
      <section className="contact-main-section">
        <div className="contact-grid">
          
          {/* Left Column: Clinic Hours & Map */}
          <div className="contact-info-col reveal-left">
            
            {/* 3. Redesigned Clinic Timings */}
            <div className="info-card">
              <h2>Clinic Hours</h2>
              <div className="timings-timeline-layout">
                <div className="timeline-hours-row">
                  <div className="hours-left">
                    <svg className="hours-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Monday - Friday</span>
                  </div>
                  <strong>9:00 AM - 8:00 PM</strong>
                </div>

                <div className="timeline-hours-row">
                  <div className="hours-left">
                    <svg className="hours-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Saturday</span>
                  </div>
                  <strong>9:00 AM - 6:00 PM</strong>
                </div>

                <div className="timeline-hours-row">
                  <div className="hours-left">
                    <svg className="hours-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Sunday</span>
                  </div>
                  <strong>By Appointment Only</strong>
                </div>
              </div>
            </div>

            {/* 4. Embedded Google Map Card with Directions */}
            <div className="info-card">
              <h2>Our Location</h2>
              <div className="embedded-map-container">
                <iframe 
                  title="Oceanview Dental Studio Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4752834375!2d-73.98785368459388!3d40.74844047932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625624729112!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
              <div style={{ marginTop: '16px' }}>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-btn" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Appointment Booking Form */}
          <div className="contact-form-col reveal-right">
            <aside className="sticky-booking-aside">
              <div className="modern-booking-card">
                <h2>Schedule An Appointment</h2>
                <p>Fill out the form below, and our coordinator will confirm your time slot.</p>

                {/* Appointment Confirmation Alert */}
                {submitSuccess && (
                  <div className="success-message">
                    🎉 Appointment Request Received! Our front office will call you shortly to confirm.
                  </div>
                )}

                <form onSubmit={handleBooking} className="booking-form">
                  <div className="form-group">
                    <label htmlFor="book-name">Patient Full Name</label>
                    <input
                      type="text"
                      id="book-name"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="Dr. / Mr. / Ms. Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="book-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="book-phone"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="book-date">Preferred Date</label>
                    <input
                      type="date"
                      id="book-date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="book-time">Preferred Time Slot</label>
                    <select
                      id="book-time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                    >
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>

                  <button type="submit" className="cta-button primary-cta w-full">
                    Confirm Booking Request
                  </button>
                </form>

                <div className="or-divider">OR</div>

                {/* Direct Action Buttons */}
                <div className="quick-chat-ctas">
                  <a href="https://wa.me/919510212154" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp">
                    💬 WhatsApp
                  </a>
                  <a href="tel:+18005550199" className="quick-btn phone">
                    📞 Call Us
                  </a>
                  <a href="mailto:info@oceanviewdental.com" className="quick-btn email">
                    📧 Email Us
                  </a>
                </div>
              </div>
            </aside>
          </div>

        </div>
      </section>

      {/* 5. Emergency Banner Redesign with pulse animation */}
      <section className="emergency-pulse-banner reveal">
        <div className="emerg-left">
          <div className="emerg-icon-wrap">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div className="emerg-text">
            <h2>🚨 Urgent Emergency Care</h2>
            <p>Severe tooth pain, trauma, or gum swelling? We prioritize critical walk-ins. Get in touch immediately.</p>
          </div>
        </div>
        <a href="tel:+18005550199" className="emergency-pulse-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          Call Emergency Line
        </a>
      </section>

      {/* Alternating pure white background Section: International Patient Services */}
      <div className="contact-section-white reveal">
        
        {/* 6. International Patients Services (Two-Column Layout) */}
        <div className="intl-section-grid">
          
          <div className="intl-left-info">
            <h2>✈️ International Patient Services</h2>
            <p>
              We provide comprehensive medical travel plans to support your journey. From digital CBCT scans diagnostic reviews to scheduling nearby local stays, our clinic team covers it all.
            </p>
            <p>
              Email your dental scans to our international care coordinators at <strong>international@oceanviewdental.com</strong> for a prompt diagnostic cost treatment evaluation.
            </p>
          </div>

          <div className="intl-right-features">
            <div className="intl-feature-card">
              <div className="intl-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <div className="intl-content">
                <h3>Airport Logistics</h3>
                <p>Private shuttle service to coordinate airport pickup and drop-offs safely.</p>
              </div>
            </div>

            <div className="intl-feature-card">
              <div className="intl-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="intl-content">
                <h3>Luxury Lodging Support</h3>
                <p>Stay at curated 5-star partner hotels directly adjacent to our dental studio.</p>
              </div>
            </div>

            <div className="intl-feature-card">
              <div className="intl-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div className="intl-content">
                <h3>Rapid Veneers & Implants</h3>
                <p>Utilize digital milling tech to fit implants and veneers in a single week.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
