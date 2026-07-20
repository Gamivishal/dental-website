import React, { useState } from 'react';

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

  return (
    <div className="page contact-page fade-in">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <span>GET IN TOUCH</span>
          <h1>Contact & Book Appointment</h1>
          <p>We are ready to respond to your queries. Drop by or schedule a diagnostic checkup.</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-main-section">
        <div className="contact-grid">
          {/* Left Column: Details & Map */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h2>Contact Details</h2>
              <div className="contact-detail-items">
                <p>📍 <strong>Clinic Address:</strong><br />102 Blue Ocean Plaza, Marine Boulevard, Suite B</p>
                <p>📞 <strong>Phone Support:</strong><br /><a href="tel:+18005550199">+1 800 555 0199</a></p>
                <p>📧 <strong>Email Support:</strong><br /><a href="mailto:info@oceanviewdental.com">info@oceanviewdental.com</a></p>
                <p>💬 <strong>WhatsApp Chat:</strong><br /><a href="https://wa.me/15550199">+1 555 0199</a></p>
              </div>
            </div>

            <div className="info-card glass-card">
              <h2>Clinic Hours</h2>
              <div className="hours-grid">
                <div className="hours-row"><span>Monday - Friday</span> <strong>9:00 AM - 8:00 PM</strong></div>
                <div className="hours-row"><span>Saturday</span> <strong>9:00 AM - 6:00 PM</strong></div>
                <div className="hours-row"><span>Sunday</span> <strong>By Appointment Only</strong></div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder-card glass-card">
              <h3>Our Location</h3>
              <div className="mock-map">
                <div className="map-marker">📍</div>
                <span>Oceanview Dental Studio</span>
                <p>102 Blue Ocean Plaza, Marine Boulevard</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-btn">
                  Get Directions on Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="contact-form-col">
            <div className="appointment-form-card glass-card">
              <h2>Schedule An Appointment</h2>
              <p>Fill out the form below, and our coordinator will confirm your time slot.</p>

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

              <div className="quick-chat-ctas">
                <a href="https://wa.me/15550199" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp">
                  💬 Chat on WhatsApp
                </a>
                <a href="tel:+18005550199" className="quick-btn phone">
                  📞 Call +1 800 555 0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patients section */}
      <section className="international-patients-banner glass-card mt-8">
        <h2>✈️ International Patients Services</h2>
        <p>
          We provide custom dental tourism packages: including airport pickup coordination, nearby luxury lodging alignment, digital CBCT pre-scans evaluations via email, and rapid single-visit crowns or veneers.
        </p>
        <p>
          Email your dental X-rays to <strong>international@oceanviewdental.com</strong> for a free pre-diagnostic cost estimate.
        </p>
      </section>
    </div>
  );
};
