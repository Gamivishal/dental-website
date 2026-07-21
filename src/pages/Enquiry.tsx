import React, { useState, useEffect } from 'react';
import { treatmentData } from './Treatments';
import { InnerHero } from '../components/InnerHero';
import entryImg from '../assets/images/Entry.jpeg';

export const Enquiry: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [patientType, setPatientType] = useState('new');
  const [enquiryCat, setEnquiryCat] = useState('general');
  const [treatmentCat, setTreatmentCat] = useState('general');
  const [treatmentSub, setTreatmentSub] = useState('');
  const [contactMethod, setContactMethod] = useState('phone');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [reportFile, setReportFile] = useState<string | null>(null);
  const [xrayFile, setXrayFile] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedCatObj = treatmentData.find((c) => c.id === treatmentCat) || treatmentData[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !consent) return;
    setSubmitSuccess(true);
    // Clear fields
    setName('');
    setPhone('');
    setEmail('');
    setCity('');
    setMessage('');
    setConsent(false);
    setReportFile(null);
    setXrayFile(null);
  };

  const handleMockUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'report' | 'xray') => {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name;
      if (type === 'report') {
        setReportFile(fileName);
      } else {
        setXrayFile(fileName);
      }
    }
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
    <div className="page enquiry-page fade-in">
      {/* Enquiry Hero */}
      <InnerHero
        pageTitle="Comprehensive Consultation Form"
        badgeText="GENERAL DENTAL ENQUIRY"
        subtitle="Submit your dental scans, query categories, and medical conditions for evaluation by Dr. Shah."
        currentPageName="Enquiry"
        bgImage={entryImg}
      />

      {/* Main Layout containing Form Column and Quick Assist Column */}
      <div className="enquiry-layout-wrapper">
        
        {/* Form Column */}
        <div className="enquiry-form-column reveal-left">
          <section className="enquiry-form-section">
            {submitSuccess && (
              <div className="success-message">
                🎉 Enquiry submitted successfully! Dr. Sheekha Shah and our clinic coordinators will review your files and contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="enquiry-multi-form">
              <div className="form-sections-grid">
                
                {/* Section 1: Contact Details */}
                <div className="form-sub-section">
                  <h3>1. Patient Information</h3>
                  <div className="form-group">
                    <label htmlFor="enq-name">Full Name *</label>
                    <input
                      type="text"
                      id="enq-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-phone">Phone Number (with Country Code) *</label>
                    <input
                      type="tel"
                      id="enq-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 0199"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-email">Email Address *</label>
                    <input
                      type="email"
                      id="enq-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-city">City & Country</label>
                    <input
                      type="text"
                      id="enq-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. New York, USA"
                    />
                  </div>

                  <div className="form-group">
                    <label>Patient Type</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="patientType"
                          value="new"
                          checked={patientType === 'new'}
                          onChange={() => setPatientType('new')}
                        /> New Patient
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="patientType"
                          value="returning"
                          checked={patientType === 'returning'}
                          onChange={() => setPatientType('returning')}
                        /> Returning Patient
                      </label>
                    </div>
                  </div>
                </div>

                {/* Section 2: Clinical Details */}
                <div className="form-sub-section">
                  <h3>2. Consultation & Case Details</h3>
                  
                  <div className="form-group">
                    <label htmlFor="enq-cat">Enquiry Category</label>
                    <select
                      id="enq-cat"
                      value={enquiryCat}
                      onChange={(e) => setEnquiryCat(e.target.value)}
                    >
                      <option value="general">General Enquiry</option>
                      <option value="treatment">Treatment Enquiry</option>
                      <option value="appointment">Appointment Enquiry</option>
                      <option value="emergency">Emergency Enquiry</option>
                      <option value="international">International Patient Enquiry</option>
                      <option value="virtual">Virtual Consultation Enquiry</option>
                      <option value="warranty">Dental Warranty Enquiry</option>
                      <option value="finance">Payment and Finance Enquiry</option>
                      <option value="opinion">Second Opinion Enquiry</option>
                      <option value="post_treatment">Post-Treatment Support Enquiry</option>
                      <option value="feedback">Feedback and Complaint</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-treat-cat">Treatment Category</label>
                    <select
                      id="enq-treat-cat"
                      value={treatmentCat}
                      onChange={(e) => {
                        setTreatmentCat(e.target.value);
                        setTreatmentSub('');
                      }}
                    >
                      {treatmentData.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-treat-sub">Treatment Subcategory</label>
                    <select
                      id="enq-treat-sub"
                      value={treatmentSub}
                      onChange={(e) => setTreatmentSub(e.target.value)}
                    >
                      <option value="">Select Specific Treatment (Optional)</option>
                      {selectedCatObj.subs.map((sub, idx) => (
                        <option key={idx} value={sub.name}>{sub.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-method">Preferred Contact Method</label>
                    <select
                      id="enq-method"
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                    >
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp Chat</option>
                      <option value="email">Email Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-date">Preferred Appointment Date</label>
                    <input
                      type="date"
                      id="enq-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enq-time">Preferred Consultation Time</label>
                    <select
                      id="enq-time"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message & File Uploads */}
              <div className="form-textarea-section mt-4">
                <div className="form-group">
                  <label htmlFor="enq-msg">Dental Concern / Medical History Details</label>
                  <textarea
                    id="enq-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention any active throbbing pain, historical treatments, allergies, or warranty queries..."
                  />
                </div>

                {/* Reports/Xray upload mock */}
                <div className="upload-flex-container">
                  <div className="upload-box">
                    <span>📁 Upload Dental Reports (PDF/DOC)</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleMockUpload(e, 'report')}
                      id="file-report"
                      className="hidden-file-input"
                    />
                    <label htmlFor="file-report" className="upload-label-btn">Choose File</label>
                    {reportFile && <span className="upload-success-text">Loaded: {reportFile}</span>}
                  </div>

                  <div className="upload-box">
                    <span>💀 Upload X-rays or Tooth Images (JPG/PNG)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleMockUpload(e, 'xray')}
                      id="file-xray"
                      className="hidden-file-input"
                    />
                    <label htmlFor="file-xray" className="upload-label-btn">Choose File</label>
                    {xrayFile && <span className="upload-success-text">Loaded: {xrayFile}</span>}
                  </div>
                </div>

                {/* Consent and Submit */}
                <div className="consent-group mt-6">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    I consent to Oceanview Dental Studio storing my medical details to facilitate diagnostic review according to GDPR & Privacy policy regulations. *
                  </label>
                </div>

                <button type="submit" className="cta-button primary-cta mt-4 w-full">
                  Submit Comprehensive Enquiry
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Quick Assist Direct Channels Column */}
        <div className="enquiry-sidebar-column reveal-right">
          <div className="quick-assist-card">
            <h3>Direct Enquiry Support</h3>
            <p>Prefer to connect with our care coordinators immediately? Choose a direct channel below for instant help.</p>
            <div className="assist-actions-list">
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary-cta whatsapp-action-btn"
              >
                <span>💬 WhatsApp Enquiry</span>
              </a>
              <a 
                href="tel:+919999999999" 
                className="cta-button secondary-cta call-action-btn"
              >
                <span>📞 Call Enquiry</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
