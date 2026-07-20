import React, { useState } from 'react';

// Before & After Interactive Slider Component
const BeforeAfterSlider: React.FC<{ title: string; category: string; beforeSvg: string; afterSvg: string }> = ({
  title,
  category,
  beforeSvg,
  afterSvg,
}) => {
  const [sliderPos, setSliderPos] = useState(50); // 50% start

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="slider-card glass-card">
      <div className="slider-header">
        <span>{category}</span>
        <h3>{title}</h3>
      </div>
      
      <div className="slider-container">
        {/* After Image (Background) */}
        <div className="slider-image after-image">
          {/* We embed the SVGs directly or use inline style */}
          <div dangerouslySetInnerHTML={{ __html: afterSvg }} />
          <span className="slider-label label-after">AFTER</span>
        </div>

        {/* Before Image (Foreground, clipped based on slider pos) */}
        <div 
          className="slider-image before-image"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <div dangerouslySetInnerHTML={{ __html: beforeSvg }} />
          <span className="slider-label label-before">BEFORE</span>
        </div>

        {/* Sliding Bar Handle */}
        <div className="slider-bar" style={{ left: `${sliderPos}%` }}>
          <div className="slider-handle">↔</div>
        </div>

        {/* Transparent Input overlay to capture drags */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={handleSliderChange} 
          className="slider-input-overlay"
          aria-label="Before and after adjustment slider"
        />
      </div>
      <p className="slider-caption">Drag the slider left and right to see the tooth transformation.</p>
    </div>
  );
};

// Custom SVG Dental Graphics representing Before and After Dental States
const toothBeforeVeneers = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="background:#1e293b; display:block;">
  <rect width="100%" height="100%" fill="#111827"/>
  <g transform="translate(100, 50)">
    <!-- Yellowed, uneven teeth -->
    <path d="M 40 180 Q 70 200 100 180 L 100 100 Q 70 80 40 100 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <path d="M 100 175 Q 130 195 160 170 L 160 95 Q 130 80 100 100 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <path d="M 160 170 Q 190 190 220 175 L 220 102 Q 190 85 160 95 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <!-- Gums line with uneven shapes -->
    <path d="M 30 100 Q 70 80 100 100 Q 130 80 160 95 Q 190 85 230 102" fill="none" stroke="#fca5a5" stroke-width="12" stroke-linecap="round"/>
    <text x="100" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Uneven & Stain Discolored</text>
  </g>
</svg>
`;

const toothAfterVeneers = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="background:#0f172a; display:block;">
  <rect width="100%" height="100%" fill="#090d16"/>
  <g transform="translate(100, 50)">
    <!-- Perfectly shaped, sparkling white teeth -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <!-- Perfect pink gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="#f43f5e" stroke-width="10" opacity="0.8" stroke-linecap="round"/>
    <!-- Sparkle -->
    <path d="M 210 120 L 215 125 L 210 130 L 205 125 Z" fill="#38bdf8"/>
    <circle cx="210" cy="125" r="8" fill="#38bdf8" opacity="0.3"/>
    <text x="100" y="240" fill="#2dd4bf" font-size="14" text-anchor="middle" font-family="sans-serif">Aligned & Laser Whitened</text>
  </g>
</svg>
`;

const toothBeforeImplants = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="background:#1e293b; display:block;">
  <rect width="100%" height="100%" fill="#111827"/>
  <g transform="translate(100, 50)">
    <!-- Missing center tooth -->
    <path d="M 40 180 Q 70 200 100 180 L 100 100 Q 70 80 40 100 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <!-- Gap -->
    <path d="M 160 170 Q 190 190 220 175 L 220 102 Q 190 85 160 95 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <!-- Gums line -->
    <path d="M 30 100 Q 70 80 100 100 Q 130 90 160 95 Q 190 85 230 102" fill="none" stroke="#fca5a5" stroke-width="12" stroke-linecap="round"/>
    <text x="100" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Missing Central Incisor</text>
  </g>
</svg>
`;

const toothAfterImplants = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="background:#0f172a; display:block;">
  <rect width="100%" height="100%" fill="#090d16"/>
  <g transform="translate(100, 50)">
    <!-- Implant and crown placed -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
    <!-- Gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="#f43f5e" stroke-width="10" opacity="0.8" stroke-linecap="round"/>
    <text x="100" y="240" fill="#2dd4bf" font-size="14" text-anchor="middle" font-family="sans-serif">Implanted Zirconia Crown</text>
  </g>
</svg>
`;

export const SmileGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const cases = [
    {
      id: 1,
      title: 'Full Smile Veneers Makeover',
      category: 'COSMETIC',
      before: toothBeforeVeneers,
      after: toothAfterVeneers,
    },
    {
      id: 2,
      title: 'Central Incisor Dental Implant',
      category: 'IMPLANTS',
      before: toothBeforeImplants,
      after: toothAfterImplants,
    },
  ];

  const filteredCases = activeFilter === 'ALL' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  const filters = ['ALL', 'COSMETIC', 'IMPLANTS'];

  return (
    <div className="page smile-gallery-page fade-in">
      {/* Gallery Hero */}
      <section className="gallery-hero">
        <div className="hero-overlay">
          <span>PATIENT SMILE GALLERY</span>
          <h1>Interactive Transformations</h1>
          <p>Slide back and forth to view the results achieved for our patients.</p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="gallery-filters-section">
        <div className="filters-container">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Before-and-After Sliders Grid */}
      <section className="sliders-grid-section">
        <div className="sliders-grid">
          {filteredCases.map(c => (
            <BeforeAfterSlider 
              key={c.id} 
              title={c.title} 
              category={c.category} 
              beforeSvg={c.before} 
              afterSvg={c.after} 
            />
          ))}
        </div>
      </section>

      {/* Transformations Stories */}
      <section className="transformation-stories-section">
        <div className="section-header">
          <span>CLINICAL STORIES</span>
          <h2>Patient Transformations</h2>
        </div>
        <div className="stories-grid">
          <div className="story-card glass-card">
            <h3>"The Lifetime Warranty Gave Me Peace of Mind"</h3>
            <p>
              "I had three missing teeth that made chewing painful. Dr. Shah mapped a full-mouth implant layout using CBCT scanning. The result feels completely natural, and my warranty certificate is active."
            </p>
            <span className="story-author">— Robert D., Implants Patient</span>
          </div>
          <div className="story-card glass-card">
            <h3>"My Veneers Feel Completely Light & Solid"</h3>
            <p>
              "I wanted to fix gaps in my front teeth before my wedding. The composite bonding and veneer process took only 2 visits. The color matches my natural teeth perfectly."
            </p>
            <span className="story-author">— Priya S., Smile Makeover Patient</span>
          </div>
        </div>
      </section>

      {/* Clinical Disclaimer */}
      <section className="clinical-disclaimer-section">
        <div className="disclaimer-box glass-card">
          <p>
            <strong>Clinical Disclaimer:</strong> Before-and-after results shown reflect individual clinical outcomes. Teeth structure and shading responses differ across patients. Book a full diagnostic session for custom dental treatment maps.
          </p>
        </div>
      </section>
    </div>
  );
};
