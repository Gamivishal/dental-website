import React from 'react';
import ceoImg from '../assets/images/CEO.jpeg';
import clinicImg1 from '../assets/images/Clinic.jpeg';
import clinicImg2 from '../assets/images/Clinic 2.jpeg';
import entryImg from '../assets/images/Entry.jpeg';
import waitingImg1 from '../assets/images/Waiting.jpeg';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';

export const About: React.FC = () => {
  const clinicTourImages = [
    { src: entryImg, label: 'Welcoming Clinic Entrance' },
    { src: waitingImg1, label: 'Lounge Waiting Area' },
    { src: waitingImg2, label: 'Premium Consulting Suite' },
    { src: clinicImg1, label: 'Main Operatory & Microscopy Set' },
    { src: clinicImg2, label: 'Advanced Diagnostics & Digital X-ray Suite' },
  ];

  return (
    <div className="page about-page fade-in">
      {/* About Hero Banner */}
      <section className="about-hero">
        <div className="hero-overlay">
          <span>ABOUT OCEANVIEW</span>
          <h1>Our Dedication to Dental Excellence</h1>
          <p>Learn more about our philosophy, our chief surgeon, and our world-class sterilization protocols.</p>
        </div>
      </section>

      {/* Chief Dentist Profile */}
      <section className="doctor-profile-section">
        <div className="doctor-profile-grid">
          <div className="doctor-image-container">
            <img src={ceoImg} alt="Dr. Sheekha Shah CEO Profile" className="doctor-profile-img" />
            <div className="doctor-credentials-badge">
              🏆 ISO 9001 Leading Clinician
            </div>
          </div>
          <div className="doctor-bio-info">
            <span>CHIEF ENDODONTIST & CEO</span>
            <h2>Dr. Sheekha Shah</h2>
            <p className="subtitle">M.D.S. in Conservative Dentistry & Micro-Endodontics</p>
            
            <div className="bio-block">
              <h3>Qualifications & Certifications</h3>
              <p>
                Dr. Sheekha Shah completed her Master's in Dental Surgery with top honors. She is certified in Advanced Laser Dentistry (Germany) and Microscopic Endodontics, specializing in pain-free root canals and cosmetic smile rehabilitation.
              </p>
            </div>

            <div className="bio-block">
              <h3>Experience & Expertise</h3>
              <p>
                With over 15 years of active clinical practice, she has performed more than 8,000 successful single-sitting root canals and smile reconstructions. She is a pioneer of microscopic dentistry in the region.
              </p>
            </div>

            <div className="bio-block">
              <h3>Treatment Philosophy</h3>
              <p>
                "Every patient deserves an anxiety-free treatment session backed by scientific precision. We do not just fix teeth; we enhance oral health longevity and aesthetic self-confidence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Dentist */}
      <section className="dentist-message-banner glass-card">
        <h2>A Personal Message to Our Patients</h2>
        <blockquote>
          "At Oceanview, we invest in the most advanced dental technologies—from digital microscopes to dental lasers—not because it's trendy, but because it ensures our patients receive the most precise, pain-free, and safe treatments. We treat every patient like family, guaranteeing absolute transparency and premium care."
          <cite>— Dr. Sheekha Shah, CEO</cite>
        </blockquote>
      </section>

      {/* Clinic Tour */}
      <section className="clinic-tour-section">
        <div className="section-header">
          <span>CLINIC TOUR</span>
          <h2>Our World-Class Dental Facility</h2>
          <p>Walk through our clean, modern, and hygienic dental studio spaces.</p>
        </div>
        <div className="tour-gallery-grid">
          {clinicTourImages.map((img, idx) => (
            <div key={idx} className="gallery-card glass-card">
              <img src={img.src} alt={img.label} className="gallery-img" />
              <div className="gallery-card-label">{img.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & Sterilisation */}
      <section className="tech-sterilization-section">
        <div className="tech-grid">
          <div className="tech-col">
            <h2>Micro-Dentistry & Technology</h2>
            <p>
              We operate under dental microscopes magnifying the field of view up to 20x. This allows Dr. Shah to locate complex canal maps, micro-fractures, and save natural teeth that would otherwise need extraction.
            </p>
            <ul className="tech-details-list">
              <li>🔬 **Carl Zeiss Dental Microscope:** For unmatched magnification.</li>
              <li>⚡ **Soft Tissue Lasers:** Fast, stitch-free gum treatments.</li>
              <li>📐 **3D CBCT Scanning:** Low-radiation 3D diagnostic scans.</li>
            </ul>
          </div>
          <div className="tech-col">
            <h2>100% Sterilization Protocol</h2>
            <p>
              Your health safety is our highest priority. We follow a strict Class-B Autoclave sterilization routine certified to international ISO safety benchmarks.
            </p>
            <ul className="tech-details-list">
              <li>🧴 **Ultrasonic Pre-Clean:** Removes microscopic debris.</li>
              <li>🌡️ **Class-B Sterilization:** Kills 100% of bacterial spores.</li>
              <li>📦 **Vacuum Sealed Pouches:** Kept sterile until opened in front of you.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values & Awards */}
      <section className="awards-values-section">
        <div className="values-grid">
          <div className="values-card glass-card">
            <h3>Our Core Values</h3>
            <ul>
              <li>🤝 <strong>Absolute Transparency:</strong> No hidden costs, detailed treatment maps.</li>
              <li>🛡️ <strong>Safety Integrity:</strong> Strict clinical hygiene protocols.</li>
              <li>🔬 <strong>Precision Standards:</strong> Tech-supported clinical execution.</li>
            </ul>
          </div>
          <div className="values-card glass-card">
            <h3>Awards & Recognition</h3>
            <ul>
              <li>🏆 <strong>Best Dental Clinic Award:</strong> Excellence in Patient Care.</li>
              <li>🌟 <strong>ISO 9001:2015 Certification:</strong> Verified Quality Systems.</li>
              <li>🥇 <strong>Endodontic Pioneer Award:</strong> Micro-dentistry recognition.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
