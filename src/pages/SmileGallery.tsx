import React, { useState, useEffect } from 'react';
import { InnerHero } from '../components/InnerHero';
import entryImg from '../assets/images/Entry.jpeg';

// Before & After Interactive Slider Component
const BeforeAfterSlider: React.FC<{ title: string; category: string; desc?: string; beforeSvg: string; afterSvg: string }> = ({
  title,
  category,
  desc,
  beforeSvg,
  afterSvg,
}) => {
  const [sliderPos, setSliderPos] = useState(50); // 50% start

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="slider-card">
      <div className="slider-header">
        <span className="category-tag">{category}</span>
        <h3>{title}</h3>
        {desc && <p className="slider-desc">{desc}</p>}
      </div>
      
      <div className="slider-container">
        {/* After Image (Background) */}
        <div className="slider-image after-image">
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

// ==========================================
// REALISTIC GRADIENT DENTAL SVGs
// ==========================================

const toothBeforeMakeover = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="stainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#854d0e"/>
      <stop offset="35%" stop-color="#ca8a04"/>
      <stop offset="70%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#fef9c3"/>
    </linearGradient>
    <linearGradient id="gumGradBefore" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#f87171"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(80, 40)">
    <!-- Yellowed, severely uneven, crowded teeth -->
    <!-- Tooth 1 (Crooked left) -->
    <path d="M 42 165 C 45 195, 68 200, 92 180 L 85 92 C 65 78, 42 85, 42 98 Z" fill="url(#stainGrad)" stroke="#713f12" stroke-width="1.5"/>
    <!-- Tooth 2 (Overlapped center-left) -->
    <path d="M 92 180 C 100 195, 125 200, 150 175 L 142 88 C 122 75, 95 82, 85 92 Z" fill="url(#stainGrad)" stroke="#713f12" stroke-width="1.5"/>
    <!-- Tooth 3 (Rotated center-right) -->
    <path d="M 145 160 C 160 195, 185 198, 215 170 L 210 95 C 185 80, 155 85, 142 88 Z" fill="url(#stainGrad)" stroke="#713f12" stroke-width="1.5"/>
    <!-- Tooth 4 (Crooked right) -->
    <path d="M 215 170 C 235 185, 260 180, 275 168 L 270 98 C 250 85, 225 90, 210 95 Z" fill="url(#stainGrad)" stroke="#713f12" stroke-width="1.5"/>
    <!-- Gum line uneven -->
    <path d="M 30 102 Q 65 72, 90 94 Q 120 70, 145 88 Q 180 75, 212 96 Q 245 78, 285 102" fill="none" stroke="url(#gumGradBefore)" stroke-width="16" stroke-linecap="round"/>
    <text x="140" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Severe Crowding & Deep Staining</text>
  </g>
</svg>
`;

const toothAfterMakeover = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="cleanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="20%" stop-color="#ffffff"/>
      <stop offset="80%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="gumGradAfter" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(80, 40)">
    <!-- Perfectly shaped, aligned, white teeth -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="url(#cleanGrad)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="url(#cleanGrad)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#cleanGrad)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 220 180 Q 250 190 280 180 L 280 100 Q 250 90 220 100 Z" fill="url(#cleanGrad)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Perfect symmetrical gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100 Q 260 90 290 100" fill="none" stroke="url(#gumGradAfter)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <!-- Sparkles -->
    <path d="M 60 120 L 64 124 L 60 128 L 56 124 Z" fill="#ffffff"/>
    <path d="M 230 130 L 235 135 L 230 140 L 225 135 Z" fill="#ffffff"/>
    <text x="140" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Flawless Symmetrical Makeover</text>
  </g>
</svg>
`;

const toothBeforeImplants = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="naturalTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="60%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="gumImplants" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(100, 50)">
    <!-- Neighboring teeth -->
    <path d="M 40 180 Q 70 195 95 180 L 95 100 Q 70 85 40 100 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Center Tooth Missing (Gap in bone) -->
    <path d="M 95 100 Q 130 95 160 100" fill="none" stroke="#dc2626" stroke-width="4" stroke-dasharray="2 2" opacity="0.6"/>
    <!-- Neighboring teeth -->
    <path d="M 160 180 Q 190 195 220 175 L 220 102 Q 190 85 160 95 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Gum line with gap depression -->
    <path d="M 30 100 Q 70 85 98 100 Q 128 115 158 98 Q 190 85 230 102" fill="none" stroke="url(#gumImplants)" stroke-width="16" stroke-linecap="round"/>
    <text x="130" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Missing Front Central Incisor</text>
  </g>
</svg>
`;

const toothAfterImplants = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="naturalTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="60%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="implantCrown" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="gumImplants" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(100, 50)">
    <!-- Left Tooth -->
    <path d="M 40 180 Q 70 190 95 180 L 95 100 Q 70 90 40 100 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Center Implant Crown Restored -->
    <path d="M 95 180 Q 130 190 160 180 L 160 100 Q 130 90 95 100 Z" fill="url(#implantCrown)" stroke="#4e6f6e" stroke-width="2"/>
    <!-- Right Tooth -->
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Restored Gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="url(#gumImplants)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <text x="130" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Restored Ceramic Implant</text>
  </g>
</svg>
`;

const toothBeforeVeneers = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="chippedTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#fef9c3"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
    <linearGradient id="gumVeneers" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#f87171"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(100, 50)">
    <!-- Chipped, cracked, short worn front teeth -->
    <path d="M 40 155 Q 65 162 95 145 L 95 100 Q 70 85 40 100 Z" fill="url(#chippedTooth)" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 95 145 Q 120 160 155 140 L 160 95 Q 130 85 95 100 Z" fill="url(#chippedTooth)" stroke="#ca8a04" stroke-width="1.5"/>
    <path d="M 160 140 Q 185 170 220 155 L 220 102 Q 190 85 160 95 Z" fill="url(#chippedTooth)" stroke="#ca8a04" stroke-width="1.5"/>
    <!-- Gum line -->
    <path d="M 30 100 Q 70 85 100 100 Q 130 85 160 95 Q 190 85 230 102" fill="none" stroke="url(#gumVeneers)" stroke-width="16" stroke-linecap="round"/>
    <text x="130" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Worn Incisal Edge Fractures</text>
  </g>
</svg>
`;

const toothAfterVeneers = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="veneerTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="90%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="gumVeneers" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(100, 50)">
    <!-- Perfectly aligned translucent veneers -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="url(#veneerTooth)" stroke="#cbd5e1" stroke-width="1"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="url(#veneerTooth)" stroke="#cbd5e1" stroke-width="1"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#veneerTooth)" stroke="#cbd5e1" stroke-width="1"/>
    <!-- Gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="url(#gumVeneers)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <text x="130" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Laminated Porcelain Veneers</text>
  </g>
</svg>
`;

const toothBeforeWhitening = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="yellowTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fca5a5"/>
    </linearGradient>
    <linearGradient id="gumWhite" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(100, 50)">
    <path d="M 40 180 Q 70 195 100 180 L 100 100 Q 70 85 40 100 Z" fill="url(#yellowTooth)" stroke="#78350f" stroke-width="1.5"/>
    <path d="M 100 180 Q 130 195 160 180 L 160 100 Q 130 85 100 100 Z" fill="url(#yellowTooth)" stroke="#78350f" stroke-width="1.5"/>
    <path d="M 160 180 Q 190 195 220 180 L 220 100 Q 190 85 160 100 Z" fill="url(#yellowTooth)" stroke="#78350f" stroke-width="1.5"/>
    <path d="M 30 100 Q 70 85 100 100 Q 130 85 160 100 Q 190 85 230 100" fill="none" stroke="url(#gumWhite)" stroke-width="16" stroke-linecap="round"/>
    <text x="130" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Deep Coffee & Nicotine Stains</text>
  </g>
</svg>
`;

const toothAfterWhitening = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="whiteTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="85%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="gumWhite" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(100, 50)">
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="url(#whiteTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="url(#whiteTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#whiteTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="url(#gumWhite)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <path d="M 150 120 L 153 123 L 150 126 L 147 123 Z" fill="#ffffff"/>
    <text x="130" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Laser Whitened Shade (8 levels up)</text>
  </g>
</svg>
`;

const toothBeforeAligners = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="naturalTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="60%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="gumAlign" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#f87171"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(100, 50)">
    <!-- Crooked, overlapping alignments -->
    <path d="M 40 170 Q 70 195 95 160 L 95 95 Q 70 80 40 100 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1.5"/>
    <path d="M 85 180 Q 115 190 145 170 L 140 100 Q 110 85 85 95 Z" fill="url(#naturalTooth)" stroke="#475569" stroke-width="2"/>
    <path d="M 140 165 Q 175 195 210 170 L 210 98 Q 175 80 140 95 Z" fill="url(#naturalTooth)" stroke="#94a3b8" stroke-width="1.5"/>
    <path d="M 30 100 Q 70 80 100 95 Q 130 85 160 95 Q 190 80 230 100" fill="none" stroke="url(#gumAlign)" stroke-width="16" stroke-linecap="round"/>
    <text x="130" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Teeth Crowding & Rotations</text>
  </g>
</svg>
`;

const toothAfterAligners = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="straightTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="90%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <linearGradient id="gumAlign" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(100, 50)">
    <!-- Perfectly straight aligned teeth -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="url(#straightTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="url(#straightTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#straightTooth)" stroke="#94a3b8" stroke-width="1"/>
    <!-- Perfect alignment gum line -->
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100" fill="none" stroke="url(#gumAlign)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <text x="130" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Aligned Orthodontic Arch</text>
  </g>
</svg>
`;

const toothBeforeRehab = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="wornTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#78350f"/>
      <stop offset="50%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <linearGradient id="gumRehab" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0a0f18"/>
  <g transform="translate(80, 40)">
    <!-- Worn occlusions, decays, gaps -->
    <path d="M 40 138 Q 70 148 100 132 L 100 95 Q 70 75 40 90 Z" fill="url(#wornTooth)" stroke="#451a03" stroke-width="1.5"/>
    <rect x="105" y="95" width="48" height="40" rx="3" fill="#180e0e" opacity="0.5"/>
    <path d="M 160 128 Q 190 138 220 122 L 220 90 Q 190 75 160 85 Z" fill="url(#wornTooth)" stroke="#451a03" stroke-width="1.5"/>
    <rect x="225" y="90" width="48" height="40" rx="3" fill="#180e0e" opacity="0.5"/>
    <path d="M 30 90 Q 70 75 100 95 Q 130 85 160 85 Q 190 75 230 90" fill="none" stroke="url(#gumRehab)" stroke-width="16" stroke-linecap="round"/>
    <text x="140" y="240" fill="#9ca3af" font-size="14" text-anchor="middle" font-family="sans-serif">Severe Occlusal Decay & Wear</text>
  </g>
</svg>
`;

const toothAfterRehab = `
<svg viewBox="0 0 400 300" width="100%" height="100%" style="display:block;">
  <defs>
    <linearGradient id="rehabTooth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="30%" stop-color="#ffffff"/>
      <stop offset="90%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="gumRehab" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#070a10"/>
  <g transform="translate(80, 40)">
    <!-- Fully restored occlusal anatomy with zirconia implants/bridges -->
    <path d="M 40 180 Q 70 190 100 180 L 100 100 Q 70 90 40 100 Z" fill="url(#rehabTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 100 180 Q 130 190 160 180 L 160 100 Q 130 90 100 100 Z" fill="url(#rehabTooth)" stroke="#4e6f6e" stroke-width="2"/>
    <path d="M 160 180 Q 190 190 220 180 L 220 100 Q 190 90 160 100 Z" fill="url(#rehabTooth)" stroke="#94a3b8" stroke-width="1"/>
    <path d="M 220 180 Q 250 190 280 180 L 280 100 Q 250 90 220 100 Z" fill="url(#rehabTooth)" stroke="#4e6f6e" stroke-width="2"/>
    <path d="M 30 100 Q 70 90 100 100 Q 130 90 160 100 Q 190 90 230 100 Q 260 90 290 100" fill="none" stroke="url(#gumRehab)" stroke-width="14" opacity="0.9" stroke-linecap="round"/>
    <text x="140" y="240" fill="#a7c8c3" font-size="14" text-anchor="middle" font-family="sans-serif">Fully Rehabilitated Bite & Arch</text>
  </g>
</svg>
`;

export const SmileGallery: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: 'Full Smile Makeover',
      category: 'SMILE MAKEOVERS',
      desc: 'Complete aesthetic restoration using custom veneer planning.',
      before: toothBeforeMakeover,
      after: toothAfterMakeover,
    },
    {
      id: 2,
      title: 'Central Incisor Implant',
      category: 'DENTAL IMPLANTS',
      desc: 'Replaced a missing front tooth with a premium ceramic implant crown.',
      before: toothBeforeImplants,
      after: toothAfterImplants,
    },
    {
      id: 3,
      title: 'Laminated Veneers Fitting',
      category: 'VENEERS',
      desc: 'Corrected chipped and worn edges for a symmetrical smile line.',
      before: toothBeforeVeneers,
      after: toothAfterVeneers,
    },
    {
      id: 4,
      title: 'Laser Whitening Session',
      category: 'TEETH WHITENING',
      desc: 'Removed deep stubborn stains and brightened teeth by 8 shades.',
      before: toothBeforeWhitening,
      after: toothAfterWhitening,
    },
    {
      id: 5,
      title: 'Clear Aligners Orthodontics',
      category: 'BRACES & ALIGNERS',
      desc: 'Corrected teeth crowding and alignment in a 12-month timeline.',
      before: toothBeforeAligners,
      after: toothAfterAligners,
    },
    {
      id: 6,
      title: 'Full-Mouth Rehabilitation',
      category: 'FULL-MOUTH REHAB',
      desc: 'Complete bite reconstruction using Zirconia bridges & implants.',
      before: toothBeforeRehab,
      after: toothAfterRehab,
    }
  ];

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
    <div className="page smile-gallery-page fade-in">
      {/* 1. Gallery Hero */}
      <InnerHero
        pageTitle="Interactive Transformations"
        badgeText="PATIENT SMILE GALLERY"
        subtitle="Explore real-life outcomes from our clinic procedures. Drag the slider to compare before and after results."
        currentPageName="Smile Gallery"
        bgImage={entryImg}
      />

      {/* 2. Before-and-After Sliders Grid */}
      <section className="sliders-grid-section">
        <div className="sliders-grid">
          {cases.map((c, idx) => (
            <div 
              key={c.id} 
              className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}
            >
              <BeforeAfterSlider 
                title={c.title} 
                category={c.category} 
                desc={c.desc}
                beforeSvg={c.before} 
                afterSvg={c.after} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED CATEGORY SHOWCASES */}
      <div className="detailed-cases-wrapper">
        
        {/* 4. Featured Smile Makeovers */}
        <section id="smile-makeovers" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-info reveal-left">
              <span className="case-tag">COSMETIC REDESIGN</span>
              <h2>Featured Smile Makeovers</h2>
              <p className="case-explanation">
                A Smile Makeover is a comprehensive aesthetic treatment program combining veneers, alignments, and contouring. We build custom designs matching your natural facial shape and skin tone to produce a radiant, confident smile line.
              </p>
              <ul className="case-checklist">
                <li>✨ Custom facial mapping & mockups</li>
                <li>✨ Perfect symmetry planning</li>
                <li>✨ High-end translucent porcelain shells</li>
              </ul>
            </div>
            <div className="case-showcase-slider reveal-right">
              <BeforeAfterSlider 
                title="Aesthetic Makeover (8 Upper Veneers)" 
                category="SMILE MAKEOVERS"
                beforeSvg={toothBeforeMakeover}
                afterSvg={toothAfterMakeover}
              />
            </div>
          </div>
        </section>

        {/* 5. Dental Implant Cases */}
        <section id="dental-implants" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-slider reveal-left">
              <BeforeAfterSlider 
                title="Single Tooth Central Incisor Implant" 
                category="DENTAL IMPLANTS"
                beforeSvg={toothBeforeImplants}
                afterSvg={toothAfterImplants}
              />
            </div>
            <div className="case-showcase-info reveal-right">
              <span className="case-tag">RESTORATIVE SURGERY</span>
              <h2>Dental Implant Cases</h2>
              <p className="case-explanation">
                Implantology replaces lost teeth structures with biocompatible titanium anchors. This preserves underlying bone mass from shrinking and provides natural bite strength without affecting adjacent teeth.
              </p>
              <ul className="case-checklist">
                <li>🛡️ Biocompatible Grade-5 Titanium</li>
                <li>🛡️ Solid osseointegration mapping</li>
                <li>🛡️ Lifelike CAD-designed Zirconia crowns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Veneer Cases */}
        <section id="veneers" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-info reveal-left">
              <span className="case-tag">MINIMALLY INVASIVE</span>
              <h2>Veneer Cases</h2>
              <p className="case-explanation">
                Dental veneers are thin, custom shells bonded onto the front surface of teeth. They hide stains, correct minor misalignment gaps, and restore teeth worn flat or chipped due to bruxism or injury.
              </p>
              <ul className="case-checklist">
                <li>✨ Minimal tooth reduction needed</li>
                <li>✨ Premium stain-resistant porcelain</li>
                <li>✨ Durable bonding lasting up to 15 years</li>
              </ul>
            </div>
            <div className="case-showcase-slider reveal-right">
              <BeforeAfterSlider 
                title="Porcelain Veneers (Upper Central Incisors)" 
                category="VENEERS"
                beforeSvg={toothBeforeVeneers}
                afterSvg={toothAfterVeneers}
              />
            </div>
          </div>
        </section>

        {/* 7. Teeth Whitening Cases */}
        <section id="teeth-whitening" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-slider reveal-left">
              <BeforeAfterSlider 
                title="Laser Whitening Stain Clearance" 
                category="TEETH WHITENING"
                beforeSvg={toothBeforeWhitening}
                afterSvg={toothAfterWhitening}
              />
            </div>
            <div className="case-showcase-info reveal-right">
              <span className="case-tag">STAIN REMOVAL</span>
              <h2>Teeth Whitening Cases</h2>
              <p className="case-explanation">
                Professional laser teeth whitening targets deep stains within the enamel pores. Monitored gel applications release active whitening compounds that break up color bonds without altering physical tooth structures.
              </p>
              <ul className="case-checklist">
                <li>✨ Up to 8 shades lighter in 1 hour</li>
                <li>✨ Safe desensitizing gel protocol</li>
                <li>✨ Clear home maintenance plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Braces and Aligner Cases */}
        <section id="braces-aligners" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-info reveal-left">
              <span className="case-tag">ORTHODONTICS</span>
              <h2>Braces and Aligner Cases</h2>
              <p className="case-explanation">
                Orthodontic aligners move rotated, crowded, or gapped teeth into position over time using series of custom clear trays. They provide discreet styling and let you eat and brush without wire obstacles.
              </p>
              <ul className="case-checklist">
                <li>✨ Removable clear aligner trays</li>
                <li>✨ Painless teeth movement pacing</li>
                <li>✨ Corrects deep overbites & crowded alignments</li>
              </ul>
            </div>
            <div className="case-showcase-slider reveal-right">
              <BeforeAfterSlider 
                title="Clear Aligners Progression (12 Months)" 
                category="BRACES & ALIGNERS"
                beforeSvg={toothBeforeAligners}
                afterSvg={toothAfterAligners}
              />
            </div>
          </div>
        </section>

        {/* 9. Full-Mouth Rehabilitation Cases */}
        <section id="full-mouth-rehab" className="detailed-case-section">
          <div className="case-showcase-grid">
            <div className="case-showcase-slider reveal-left">
              <BeforeAfterSlider 
                title="Full-Mouth Rehabilitation (Bridges & Implants)" 
                category="FULL-MOUTH REHAB"
                beforeSvg={toothBeforeRehab}
                afterSvg={toothAfterRehab}
              />
            </div>
            <div className="case-showcase-info reveal-right">
              <span className="case-tag">RECONSTRUCTIVE CARE</span>
              <h2>Full-Mouth Rehabilitation Cases</h2>
              <p className="case-explanation">
                Full-mouth reconstruction resolves severe tooth wear, tooth decay, TMJ alignment issues, or extensive tooth loss. By placing custom crowns, bridges, or full implant-supported arches, we rebuild the complete chewing function.
              </p>
              <ul className="case-checklist">
                <li>🛡️ Complete bite height restoration</li>
                <li>🛡️ Corrects jaw muscle alignment stress</li>
                <li>🛡️ Restores natural face proportions</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* 10. Patient Transformation Stories */}
      <section className="transformation-stories-section">
        <div className="section-header">
          <span>CLINICAL STORIES</span>
          <h2>Patient Transformation Stories</h2>
          <p>Read about patient experiences with our diagnostic planning and procedures.</p>
        </div>
        <div className="stories-grid">
          <div className="story-card reveal-left">
            <h3>"The Lifetime Warranty Gave Me Peace of Mind"</h3>
            <p>
              "I had three missing teeth that made chewing painful. Dr. Shah mapped a full-mouth implant layout using CBCT scanning. The result feels completely natural, and my warranty certificate is active."
            </p>
            <span className="story-author">— Robert D., Implants Patient</span>
          </div>
          <div className="story-card reveal-right">
            <h3>"My Veneers Feel Completely Light & Solid"</h3>
            <p>
              "I wanted to fix gaps in my front teeth before my wedding. The composite bonding and veneer process took only 2 visits. The color matches my natural teeth perfectly."
            </p>
            <span className="story-author">— Priya S., Smile Makeover Patient</span>
          </div>
        </div>
      </section>

      {/* 11. Clinical Disclaimer */}
      <section className="clinical-disclaimer-section reveal">
        <div className="disclaimer-box">
          <p>
            <strong>Clinical Disclaimer:</strong> Before-and-after results shown reflect individual clinical outcomes. Teeth structure and shading responses differ across patients. Book a full diagnostic session for custom dental treatment maps.
          </p>
        </div>
      </section>

      {/* 12. Start Your Smile Transformation (CTA) */}
      <section className="start-transformation-cta reveal">
        <div className="cta-content">
          <h2>Start Your Smile Transformation</h2>
          <p>Book a diagnostic scan session with Dr. Sheekha Shah to see what treatment map is right for your smile goals.</p>
          <button 
            className="cta-button primary-cta"
            onClick={() => {
              window.history.pushState({}, '', '/enquiry');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            Book Consultation Appointment
          </button>
        </div>
      </section>
    </div>
  );
};
