import React, { useEffect } from 'react';

export interface TreatmentSub {
  name: string;
  desc: string;
  symptoms: string[];
  benefits: string[];
  duration: string;
  recovery: string;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  icon: string;
  summary: string;
  subs: TreatmentSub[];
}

export const treatmentData: TreatmentCategory[] = [
  {
    id: 'general',
    name: 'General Dentistry',
    icon: '🦷',
    summary: 'Essential procedures to maintain oral hygiene, repair tooth damage, and prevent dental disease.',
    subs: [
      {
        name: 'Dental Consultation',
        desc: 'Comprehensive visual and digital checkups of oral health conditions.',
        symptoms: ['Routine checkup request', 'First time visit', 'Mild tooth sensitivity'],
        benefits: ['Early detection of decay', 'Custom dental health roadmaps', 'Professional guidance'],
        duration: '20 - 30 minutes',
        recovery: 'None'
      },
      {
        name: 'Routine Check-up',
        desc: 'Periodical reviews ensuring filings and gum health remain in perfect state.',
        symptoms: ['6-month checkup due', 'Bite alignment monitoring'],
        benefits: ['Prevention of cavities', 'Ensures warranty validity on crowns/implants'],
        duration: '15 - 30 minutes',
        recovery: 'None'
      },
      {
        name: 'Dental Cleaning',
        desc: 'Removal of plaque, tartar, and external tooth stains.',
        symptoms: ['Yellowish teeth', 'Bad breath', 'Tartar build-up'],
        benefits: ['Prevents gum disease', 'Fresher breath', 'Brighter surface stain removal'],
        duration: '30 - 45 minutes',
        recovery: 'None (slight temporary sensitivity)'
      },
      {
        name: 'Tooth Fillings',
        desc: 'Composite tooth-colored restorations for decayed or chipped cavities.',
        symptoms: ['Visible black cavities', 'Food getting stuck', 'Pain while drinking cold drinks'],
        benefits: ['Restores tooth structure', 'Aesthetic blending with enamel', 'Prevents root canal requirement'],
        duration: '20 - 40 minutes per cavity',
        recovery: 'None (avoid extremely hot/cold items for 2 hours)'
      },
      {
        name: 'Gum Care',
        desc: 'Preventive therapies for bleeding gums, early gingivitis, or swelling.',
        symptoms: ['Bleeding gums while brushing', 'Red or tender gums'],
        benefits: ['Halts progression of gum infection', 'Protects support bone of teeth'],
        duration: '30 minutes',
        recovery: 'None'
      },
      {
        name: 'Tooth Extraction',
        desc: 'Safe, pain-free extraction of unsavable, broken, or heavily decayed teeth.',
        symptoms: ['Severe tooth decay', 'Deep crown fractures', 'Crowded teeth structure'],
        benefits: ['Halts spread of infection', 'Stops persistent pain', 'Prepares mouth for implant placement'],
        duration: '30 - 60 minutes',
        recovery: '2 - 3 days'
      }
    ]
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    icon: '✨',
    summary: 'Aesthetic designs tailored to enhance your smile, adjust contour curves, and build self-confidence.',
    subs: [
      {
        name: 'Smile Makeover',
        desc: 'A complete custom redesign combining multiple aesthetic solutions for a perfect, radiant smile.',
        symptoms: ['Discolored teeth', 'Uneven spacing', 'Worn or chipped smiles'],
        benefits: ['Perfect smile lines', 'Boosts self-confidence', 'Youthful facial aesthetics'],
        duration: '2 - 3 sessions over 10 days',
        recovery: 'Minimal (minor adaptation period)'
      },
      {
        name: 'Dental Veneers',
        desc: 'Ultra-thin custom porcelain or composite shells bonded to front tooth surfaces.',
        symptoms: ['Permanent staining', 'Minor crookedness', 'Gaps in front teeth'],
        benefits: ['Highly aesthetic translucency', 'Stain-resistant', 'Minimal tooth reduction required'],
        duration: '2 sessions',
        recovery: 'None'
      },
      {
        name: 'Composite Bonding',
        desc: 'A conservative procedure using tooth-colored composite resin to repair chips, cracks, or gaps.',
        symptoms: ['Chipped front tooth', 'Small gaps between teeth', 'Minor fractures'],
        benefits: ['Done in a single visit', 'Highly conservative', 'Blends naturally with enamel'],
        duration: '30 - 60 minutes per tooth',
        recovery: 'None'
      },
      {
        name: 'Gum Contouring',
        desc: 'Aesthetic laser reshaping of uneven or low gum lines to resolve a "gummy smile".',
        symptoms: ['Uneven gum line', 'Gummy smile', 'Teeth looking too short'],
        benefits: ['Balanced gum margins', 'Elongates tooth appearance', 'Relatively quick recovery with laser care'],
        duration: '30 - 45 minutes',
        recovery: '1 - 2 days'
      }
    ]
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    icon: '🦷',
    summary: 'Procedures built to reconstruct bite surfaces, repair cracks, and fill missing spaces.',
    subs: [
      {
        name: 'Dental Crowns',
        desc: 'Custom-fit protective caps restoring structural strength of heavily damaged or RCT treated teeth.',
        symptoms: ['Cracked tooth crown', 'Post root canal tooth protection', 'Weak tooth support structure'],
        benefits: ['Restores bite strength', 'Protects remaining natural tooth structure', 'Aesthetic tooth-like matching'],
        duration: '2 sessions',
        recovery: 'None'
      },
      {
        name: 'Dental Bridges',
        desc: 'Fixed dental restorations filling spaces left by one or more missing adjacent teeth.',
        symptoms: ['Single or multiple missing teeth', 'Difficulty chewing', 'Drifting adjacent teeth'],
        benefits: ['Restores chewing and speech', 'Prevents shifts in bite alignment', 'No surgical implants needed'],
        duration: '2 sessions',
        recovery: 'None'
      },
      {
        name: 'Dentures',
        desc: 'Premium removable partial or complete arches to replace extensive missing teeth.',
        symptoms: ['Many or all missing teeth', 'Sagging facial muscles', 'Difficulty eating'],
        benefits: ['Improves facial support', 'Budget-friendly teeth replacement', 'Restores bite function'],
        duration: '3 - 4 sessions (impressions & fittings)',
        recovery: 'Adaptation: 2 - 3 weeks'
      }
    ]
  },
  {
    id: 'rootcanal',
    name: 'Root Canal',
    icon: '⚡',
    summary: 'Single-sitting endodontic treatments to clean infected pulp channels and preserve natural teeth.',
    subs: [
      {
        name: 'Single-Sitting RCT',
        desc: 'Modern pain-free treatment to remove infected tooth pulp and seal root canals in a single visit.',
        symptoms: ['Severe throbbing tooth pain', 'Pain while chewing', 'Sensitivity to hot foods'],
        benefits: ['Immediate pain resolution', 'Saves the natural tooth', 'Completed in just 45-60 minutes'],
        duration: '45 - 60 minutes',
        recovery: '1 - 2 days (avoid hard chewing)'
      },
      {
        name: 'Micro-Endodontic Re-RCT',
        desc: 'Re-treatment of previously failed root canals using precision microscopic visualization.',
        symptoms: ['Returning pain in post-RCT tooth', 'Abscess or swelling near tooth'],
        benefits: ['Avoids extraction of failed cases', 'Thorough disinfection of micro-channels'],
        duration: '1 - 2 sessions',
        recovery: '1 - 2 days'
      }
    ]
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    icon: '🦷',
    summary: 'Permanent biocompatible posts anchored to the bone, offering full root replacement.',
    subs: [
      {
        name: 'Single Tooth Implant',
        desc: 'Biocompatible titanium post and custom porcelain crown to restore a single missing space.',
        symptoms: ['Single missing tooth', 'Wishes to avoid dental bridge shaving'],
        benefits: ['Preserves adjacent healthy teeth', 'Halts jawbone bone loss', 'Feels and looks like natural tooth'],
        duration: '3 - 6 months (incorporates healing time)',
        recovery: 'Initial: 3 - 5 days'
      },
      {
        name: 'Full Mouth Implants',
        desc: 'Complete restoration of top or bottom arches using advanced All-on-4 or All-on-6 protocols.',
        symptoms: ['All teeth missing or failing', 'Loose dentures', 'Severe bone loss'],
        benefits: ['Permanent fixed arches', 'Fully restores natural bite strength', 'Youthful facial structures'],
        duration: '3 - 6 months',
        recovery: 'Initial: 5 - 7 days'
      }
    ]
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    icon: '🦷',
    summary: 'Treatments designed to straighten teeth align curves, and adjust bite relations.',
    subs: [
      {
        name: 'Clear Aligners',
        desc: 'Virtually invisible removable transparent custom aligners to correct teeth alignment.',
        symptoms: ['Crooked or crowded teeth', 'Visible gaps', 'Bite alignment concerns'],
        benefits: ['Esthetic transparency', 'No diet restrictions (removable)', 'Easier brushing and flossing'],
        duration: '6 - 18 months',
        recovery: 'None (temporary light pressure with new trays)'
      },
      {
        name: 'Ceramic & Metal Braces',
        desc: 'Classic orthodontic brackets to resolve complex bite issues and teeth alignments.',
        symptoms: ['Severe teeth crowding', 'Deep bite or underbite', 'Complex jaw mismatches'],
        benefits: ['Highly effective for severe cases', 'Precise teeth movement control'],
        duration: '12 - 24 months',
        recovery: 'Adaptation: 1 - 2 weeks'
      }
    ]
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    icon: '✨',
    summary: 'Professional enamel bleaching to lift deep food stains and reveal a brighter tone.',
    subs: [
      {
        name: 'In-Clinic Whitening',
        desc: 'Advanced light-activated bleaching procedure delivering immediate shade improvements.',
        symptoms: ['Teeth yellowing or staining', 'Wishes for quick smile brightening'],
        benefits: ['Up to 8 shades lighter in 1 hour', 'Safe, monitored procedure'],
        duration: '45 - 60 minutes',
        recovery: 'None (mild temporary sensitivity)'
      },
      {
        name: 'Home Whitening Kits',
        desc: 'Custom-fit bleach trays and professional gels for convenient whitening at home.',
        symptoms: ['Desires gradual whitening control', 'Wishes to maintain clinic results'],
        benefits: ['Convenient home schedule', 'Customized trays prevent gum contact'],
        duration: '7 - 10 days (use 30 mins daily)',
        recovery: 'None'
      }
    ]
  },
  {
    id: 'children',
    name: 'Children\'s Dentistry',
    icon: '👶',
    summary: 'Pediatric diagnostics, protective sealants, and gentle dental habits coaching.',
    subs: [
      {
        name: 'Fluoride Applications',
        desc: 'Professional gel layers protecting developing teeth enamel from cavity attacks.',
        symptoms: ['Early signs of enamel soft spots', 'High cavity risk indicators'],
        benefits: ['Strengthens kids tooth enamel', 'Completely pain-free guard layer'],
        duration: '15 minutes',
        recovery: 'None (avoid food/drink for 30 minutes)'
      },
      {
        name: 'Pit & Fissure Sealants',
        desc: 'Protective resin seal layers brushed onto deep chewing grooves of primary molars.',
        symptoms: ['Deep molar grooves', 'Food catching on chewing surfaces'],
        benefits: ['Virtually eliminates food trap decay', 'Long-lasting molar shield'],
        duration: '10 minutes per tooth',
        recovery: 'None'
      }
    ]
  },
  {
    id: 'gum',
    name: 'Gum Treatment',
    icon: '🦷',
    summary: 'Scaling, root planing, and laser therapy to resolve gingivitis and support structures.',
    subs: [
      {
        name: 'Scaling & Root Planing',
        desc: 'Deep cleaning below the gum line to remove infected plaque and smooth roots.',
        symptoms: ['Bleeding gums', 'Swelling and bad breath', 'Receding gum margin'],
        benefits: ['Stops early gum disease progression', 'Resolves pocket infection sites'],
        duration: '45 - 60 minutes',
        recovery: '1 - 2 days'
      }
    ]
  },
  {
    id: 'surgery',
    name: 'Oral Surgery',
    icon: '🦷',
    summary: 'Surgical extraction of impacted teeth, wisdom teeth care, and tissue repairs.',
    subs: [
      {
        name: 'Wisdom Teeth Surgery',
        desc: 'Safe surgical extraction of impacted or misaligned third molar wisdom teeth.',
        symptoms: ['Jaw pain behind molars', 'Swelling at back gums', 'Crooked wisdom tooth erupting'],
        benefits: ['Avoids crowding of healthy teeth', 'Resolves pain and gum infections'],
        duration: '45 - 60 minutes',
        recovery: '3 - 5 days'
      }
    ]
  },
  {
    id: 'emergency',
    name: 'Emergency Dentistry',
    icon: '🚨',
    summary: 'Urgent pain relief, broken tooth support, and immediate trauma evaluations.',
    subs: [
      {
        name: 'Severe Toothache Treatment',
        desc: 'Same-day diagnostics and pain relief procedures to stop immediate throbbing toothache.',
        symptoms: ['Unbearable tooth pain', 'Swelling on face', 'Sleeplessness due to tooth pain'],
        benefits: ['Immediate pain resolution', 'Diagnoses root cause', 'Prevents infection spread'],
        duration: '30 - 60 minutes',
        recovery: 'Varies with treatment'
      }
    ]
  },
  {
    id: 'preventive',
    name: 'Preventive Dentistry',
    icon: '🛡️',
    summary: 'Routine care, cancer screenings, and dental guards to keep oral structures safe.',
    subs: [
      {
        name: 'Dental Night Guards',
        desc: 'Custom-molded protective appliances to prevent teeth wearing from night grinding (Bruxism).',
        symptoms: ['Morning jaw fatigue', 'Worn flat teeth crowns', 'Frequent headaches'],
        benefits: ['Protects enamel from grinding', 'Reduces TMJ jaw muscle pain'],
        duration: '1 session (fitting & impressions)',
        recovery: 'Adaptation: 2-3 nights'
      }
    ]
  }
];

interface TreatmentsProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  setCurrentPage: (page: string) => void;
  setCurrentSubcategory: (sub: TreatmentSub) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({
  selectedCategory,
  setSelectedCategory,
  setCurrentSubcategory,
}) => {
  const currentCat = treatmentData.find((c) => c.id === selectedCategory) || treatmentData[0];
  const handleSubClick = (sub: TreatmentSub) => {
    setCurrentSubcategory(sub);
  };

  // Cinematic Scroll reveal trigger (play only once, threshold 0.22)
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
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <div className="page treatments-page fade-in">
      {/* Hero */}
      <section className="treatments-hero">
        <div className="hero-overlay">
          <span>TREATMENTS WE PROVIDE</span>
          <h1>Modern Dental Care Services</h1>
          <p>Explore our 12 service categories designed to provide clinical safety, efficiency, and lifelong results.</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="treatments-navigation">
        <div className="tabs-scroll-container">
          {treatmentData.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Selected Category Content */}
      <section className="category-details-section">
        <div className="category-header glass-card reveal">
          <span className="large-icon">{currentCat.icon}</span>
          <h2>{currentCat.name}</h2>
          <p>{currentCat.summary}</p>
        </div>

        <div className="subcategories-grid">
          {currentCat.subs.map((sub, idx) => (
            <div key={idx} className="subcategory-card reveal" onClick={() => handleSubClick(sub)}>
              <h3>{sub.name}</h3>
              <p>{sub.desc}</p>
              <div className="card-meta">
                <span>⏱️ Duration: {sub.duration}</span>
                <span>🏥 Recovery: {sub.recovery}</span>
              </div>
              <button className="view-detail-btn">View Detailed Procedure →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="comparison-section glass-card reveal">
        <h2>Treatment Options Comparison</h2>
        <p className="subtitle">Let us help you understand the differences between common treatments.</p>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Dental Implants</th>
                <th>Dental Bridges</th>
                <th>Partial Dentures</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Lifespan</strong></td>
                <td>Lifetime (with proper care)</td>
                <td>10 - 15 Years</td>
                <td>5 - 7 Years</td>
              </tr>
              <tr>
                <td><strong>Comfort</strong></td>
                <td>High (feels like natural teeth)</td>
                <td>Moderate (fixed, but gums might shift)</td>
                <td>Low (removable, requires adjust phase)</td>
              </tr>
              <tr>
                <td><strong>Jawbone Preservation</strong></td>
                <td>Yes (prevents bone shrinkage)</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Procedure Time</strong></td>
                <td>3 - 6 Months (incorporates healing)</td>
                <td>1 - 2 Weeks</td>
                <td>2 - 3 Weeks</td>
              </tr>
              <tr>
                <td><strong>Bite Strength</strong></td>
                <td>100% Retained</td>
                <td>70% - 80% Retained</td>
                <td>30% - 40% Retained</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
