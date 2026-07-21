import React, { useEffect } from 'react';
import ceoImg from '../assets/images/CEO.jpeg';
import clinicImg1 from '../assets/images/Clinic.jpeg';
import clinicImg2 from '../assets/images/Clinic 2.jpeg';
import entryImg from '../assets/images/Entry.jpeg';
import waitingImg1 from '../assets/images/Waiting.jpeg';
import waitingImg2 from '../assets/images/Waiting 2.jpeg';
import { InnerHero } from '../components/InnerHero';

export const About: React.FC = () => {
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

  const clinicTourImages = [
    { src: entryImg, label: 'Welcoming Clinic Entrance' },
    { src: waitingImg1, label: 'Lounge Waiting Area' },
    { src: waitingImg2, label: 'Premium Consulting Suite' },
    { src: clinicImg1, label: 'Main Operatory & Microscopy Set' },
    { src: clinicImg2, label: 'Advanced Diagnostics & Digital X-ray Suite' },
  ];

  const teamMembers = [
    {
      name: 'Dr. Sheekha Shah',
      role: 'Chief Endodontist & CEO',
      bio: 'Creates precision-led treatment plans focused on painless care, long-term oral health, and elevated aesthetics.',
      image: ceoImg,
      imageClassName: 'team-card-img team-card-img--portrait',
    },
    {
      name: 'Dr. Nidhi Rao',
      role: 'Senior Cosmetic Dentist',
      bio: 'Specialises in smile design, restorative artistry, and comfortable cosmetic dentistry for confident results.',
      image: clinicImg1,
      imageClassName: 'team-card-img',
    },
    {
      name: 'Ms. Priya Menon',
      role: 'Clinical Coordinator',
      bio: 'Ensures every visit is smooth, reassuring, and fully tailored to the patient’s comfort and treatment goals.',
      image: clinicImg2,
      imageClassName: 'team-card-img',
    },
  ];

  return (
    <div className="page about-page fade-in">
      {/* About Hero Banner */}
      <InnerHero
        pageTitle="Our Dedication to Dental Excellence"
        badgeText="ABOUT OCEANVIEW"
        subtitle="Learn more about our philosophy, our chief surgeon, and our world-class sterilization protocols."
        currentPageName="About Us"
        bgImage={waitingImg1}
      />

      {/* Chief Dentist Profile */}
      <section className="doctor-profile-section">
        <div className="doctor-profile-grid">
          <div className="doctor-image-container reveal-left">
            <img src={ceoImg} alt="Dr. Sheekha Shah CEO Profile" className="doctor-profile-img" />
            <div className="doctor-credentials-badge">
              🏆 ISO 9001 Leading Clinician
            </div>
          </div>
          <div className="doctor-bio-info reveal-right">
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

      {/* Professional Journey */}
      <section className="professional-journey-section">
        <div className="section-header reveal">
          <span>PROFESSIONAL JOURNEY</span>
          <h2>From Specialist Training to Modern Dental Leadership</h2>
          <p>Dr. Sheekha Shah’s career reflects a steady pursuit of precision, education, and patient-centered excellence.</p>
        </div>
        <div className="journey-timeline">
          <div className="journey-card glass-card reveal">
            <h3>Clinical Foundation</h3>
            <p>Her early career focused on conservative dentistry, endodontics, and restorative care built around comfort and long-term function.</p>
          </div>
          <div className="journey-card glass-card reveal">
            <h3>Advanced Specialisation</h3>
            <p>She developed expertise in microscopic endodontics and laser-assisted treatment, enabling more accurate and less invasive care.</p>
          </div>
          <div className="journey-card glass-card reveal">
            <h3>Leadership & Innovation</h3>
            <p>Today, she leads a premium clinic where technology, sterilisation, and compassionate treatment come together seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Message from the Dentist */}
      <section className="dentist-message-banner reveal">
        <h2>A Personal Message to Our Patients</h2>
        <blockquote>
          "At Oceanview, we invest in the most advanced dental technologies—from digital microscopes to dental lasers—not because it's trendy, but because it ensures our patients receive the most precise, pain-free, and safe treatments. We treat every patient like family, guaranteeing absolute transparency and premium care."
          <cite>— Dr. Sheekha Shah, CEO</cite>
        </blockquote>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <div className="section-header reveal">
          <span>MEET THE TEAM</span>
          <h2>Experienced Professionals Who Care for Every Detail</h2>
          <p>Our clinicians and support staff work together to create a calm, meticulous, and reassuring patient experience.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card glass-card reveal">
              <img src={member.image} alt={member.name} className={member.imageClassName} />
              <div className="team-card-body">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Clinic Tour */}
      <section className="clinic-tour-section">
        <div className="section-header reveal">
          <span>CLINIC TOUR</span>
          <h2>Our World-Class Dental Facility</h2>
          <p>Walk through our clean, modern, and hygienic dental studio spaces.</p>
        </div>
        <div className="tour-gallery-grid">
          {clinicTourImages.map((img, idx) => (
            <div key={idx} className="gallery-card reveal">
              <img src={img.src} alt={img.label} className="gallery-img" />
              <div className="gallery-card-label">{img.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & Sterilisation */}
      <section className="tech-sterilization-section reveal">
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
      <section className="awards-values-section reveal">
        <div className="values-card">
          <h3>Our Core Values</h3>
          <ul>
            <li>🤝 <strong>Absolute Transparency:</strong> No hidden costs, detailed treatment maps.</li>
            <li>🛡️ <strong>Safety Integrity:</strong> Strict clinical hygiene protocols.</li>
            <li>🔬 <strong>Precision Standards:</strong> Tech-supported clinical execution.</li>
          </ul>
        </div>
        <div className="values-card">
          <h3>Awards & Recognition</h3>
          <ul>
            <li>🏆 <strong>Best Dental Clinic Award:</strong> Excellence in Patient Care.</li>
            <li>🌟 <strong>ISO 9001:2015 Certification:</strong> Verified Quality Systems.</li>
            <li>🥇 <strong>Endodontic Pioneer Award:</strong> Micro-dentistry recognition.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
