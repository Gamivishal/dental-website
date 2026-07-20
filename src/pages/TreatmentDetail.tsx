import React from 'react';
import type { TreatmentSub } from './Treatments';

interface TreatmentDetailProps {
  subcategory: TreatmentSub | null;
  setCurrentPage: (page: string) => void;
}

export const TreatmentDetail: React.FC<TreatmentDetailProps> = ({ subcategory, setCurrentPage }) => {
  if (!subcategory) {
    return (
      <div className="page treatment-detail-page fade-in text-center py-10">
        <h2>No Treatment Selected</h2>
        <p>Please browse our treatments page to select a procedure.</p>
        <button className="cta-button primary mt-4" onClick={() => setCurrentPage('treatments')}>
          Browse Treatments
        </button>
      </div>
    );
  }

  return (
    <div className="page treatment-detail-page fade-in">
      {/* Detail Hero */}
      <section className="detail-hero">
        <div className="hero-overlay">
          <span>DENTAL TREATMENT PROCEDURE</span>
          <h1>{subcategory.name}</h1>
          <p>{subcategory.desc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="detail-content-section">
        <button className="back-link-btn" onClick={() => setCurrentPage('treatments')}>
          ← Back to Treatments
        </button>

        <div className="detail-grid">
          {/* Left Column: Details */}
          <div className="detail-info-col">
            <div className="info-block glass-card">
              <h2>Overview & Indications</h2>
              <p>{subcategory.desc}</p>
              
              <h3>Common Symptoms indicating this treatment:</h3>
              <ul className="symptoms-list">
                {subcategory.symptoms.map((sym, idx) => (
                  <li key={idx}>⚠️ {sym}</li>
                ))}
              </ul>
            </div>

            <div className="info-block glass-card">
              <h2>Benefits of the Treatment</h2>
              <ul className="benefits-list">
                {subcategory.benefits.map((ben, idx) => (
                  <li key={idx}>✅ {ben}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Procedure & Quick Stats */}
          <div className="detail-sidebar-col">
            <div className="quick-stats-card glass-card">
              <h3>Procedure Information</h3>
              <div className="stat-row">
                <span>⏱️ Average Duration:</span>
                <strong>{subcategory.duration}</strong>
              </div>
              <div className="stat-row">
                <span>🏥 Recovery Period:</span>
                <strong>{subcategory.recovery}</strong>
              </div>
              <div className="stat-row">
                <span>🛡️ Material Quality:</span>
                <strong>FDA Approved Premium Bio-grade</strong>
              </div>
              <button className="cta-button primary-cta w-full mt-4" onClick={() => setCurrentPage('enquiry')}>
                Book Diagnostic Appointment
              </button>
            </div>

            <div className="procedure-steps-card glass-card">
              <h3>What to Expect During the Procedure</h3>
              <ol className="steps-list">
                <li>
                  <strong>Step 1: Diagnostics & 3D Imaging</strong>
                  <p>Dr. Shah reviews oral structures using digital scans to outline precision root or bone anatomy maps.</p>
                </li>
                <li>
                  <strong>Step 2: Comfort & Numbing</strong>
                  <p>We administer local anesthesia to ensure the therapy zone is fully numb, giving you a completely painless visit.</p>
                </li>
                <li>
                  <strong>Step 3: Clinical Intervention</strong>
                  <p>Operating under Carl Zeiss magnification, we perform tooth shaping, canal clearing, or veneer bonding.</p>
                </li>
                <li>
                  <strong>Step 4: Post-op Sealed Check</strong>
                  <p>We verify crown margins or restoration seal stability, then review your custom medication and recovery details.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Aftercare Advice */}
        <div className="aftercare-banner glass-card mt-8">
          <h2>Recovery & Aftercare Tips</h2>
          <p>To ensure perfect longevity, follow these standard guidelines:</p>
          <ul className="aftercare-list">
            <li>🚫 Avoid extremely hot, cold, or hard foods for 2 hours post-procedure.</li>
            <li>🪥 Continue brushing and flossing twice daily, being gentle around the treated area.</li>
            <li>💊 Complete any prescribed anti-inflammatory medicines as directed by Dr. Shah.</li>
            <li>📞 Call our emergency support hotline immediately if you notice severe swelling or bleeding.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
