import React from 'react';

interface PatientInfoProps {
  setCurrentPage: (page: string) => void;
}

export const PatientInfo: React.FC<PatientInfoProps> = ({ setCurrentPage }) => {
  return (
    <div className="page patient-info-page fade-in">
      {/* Patient Info Hero */}
      <section className="info-hero">
        <div className="hero-overlay">
          <span>PATIENT INFORMATION GUIDE</span>
          <h1>Your First Visit & Comfort</h1>
          <p>Everything you need to know about clinic procedures, comfort guidelines, and transparent payments.</p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="patient-guide-content">
        <div className="guide-grid">
          {/* Welcome & First Visit */}
          <div className="guide-card glass-card">
            <h2>Welcome to Oceanview</h2>
            <p>
              We design our clinic processes to ensure you never feel anxious. From free wifi in our relaxing waiting lounge to customizable treatment chairs, your comfort is key.
            </p>
            <h3>What to bring for your first visit:</h3>
            <ul className="bring-list">
              <li>🪪 Gov issued Photo Identification</li>
              <li>📑 Previous dental records or treatment summaries</li>
              <li>📁 Any current X-ray scans (less than 6 months old)</li>
              <li>💳 Insurance or corporate medical benefits card</li>
            </ul>
          </div>

          {/* Payment & Finance */}
          <div className="guide-card glass-card">
            <h2>Transparent Payment Options</h2>
            <p>
              We believe in honest dentistry. All treatment plans are documented with absolute cost maps beforehand.
            </p>
            <h3>We accept:</h3>
            <ul className="payment-options-list">
              <li>💵 Cash & Major Credit/Debit cards</li>
              <li>🏥 Approved Corporate Dental Insurance plans</li>
              <li>💳 <strong>0% Interest EMI:</strong> Monthly installment terms available through leading credit partners.</li>
            </ul>
          </div>
        </div>

        {/* First Visit Process Steps */}
        <div className="visit-steps-container mt-8">
          <h2>Your Journey on the First Visit</h2>
          <div className="timeline-steps">
            <div className="timeline-step glass-card">
              <span className="step-num">1</span>
              <h4>Reception check-in</h4>
              <p>Present ID and complete a simple digital health questionnaire details.</p>
            </div>
            <div className="timeline-step glass-card">
              <span className="step-num">2</span>
              <h4>3D Imaging & Consultation</h4>
              <p>Dr. Shah inspects oral status using intraoral camera scans and digital X-rays.</p>
            </div>
            <div className="timeline-step glass-card">
              <span className="step-num">3</span>
              <h4>Treatment Map Proposal</h4>
              <p>Receive a clear medical and transparent cost breakdown before scheduling therapy.</p>
            </div>
          </div>
        </div>

        {/* Comfort & Sterilization */}
        <div className="comfort-features-banner glass-card mt-8">
          <h2>Clinic Safety & Comfort Standard</h2>
          <div className="comfort-features-grid">
            <div className="comfort-item">
              <h4>☕ Waiting Lounge</h4>
              <p>Enjoy hot herbal tea or espresso, high speed Wi-Fi, and a quiet relaxing atmosphere.</p>
            </div>
            <div className="comfort-item">
              <h4>🩺 Anxiety Management</h4>
              <p>We provide noise-canceling headphones and ceiling-mounted screens for entertainment.</p>
            </div>
            <div className="comfort-item">
              <h4>🔬 Sterile Isolation</h4>
              <p>Single-use tools opened freshly at your chairside. Grade-B autoclave sterilization.</p>
            </div>
          </div>
        </div>

        {/* Emergency Patient Section */}
        <div className="emergency-alert-box glass-card mt-8">
          <h2>🚨 Dental Emergency Support</h2>
          <p>
            Are you experiencing a severe throbbing toothache, broken tooth, or swelling? We reserve special slots every day for walk-in emergency relief.
          </p>
          <button className="cta-button primary-cta" onClick={() => setCurrentPage('contact')}>
            Get Emergency Directions
          </button>
        </div>
      </section>
    </div>
  );
};
