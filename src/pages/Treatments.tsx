import React from 'react';

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
        desc: 'Applying composite resin matching natural enamel to repair chips and minor gaps.',
        symptoms: ['Chipped front tooth', 'Small gaps between front teeth'],
        benefits: ['Single-visit solution', 'No tooth reduction', 'Cost-effective'],
        duration: '30 - 60 minutes per tooth',
        recovery: 'None'
      },
      {
        name: 'Gum Contouring',
        desc: 'Laser restructuring of the gumline to fix gummy smiles and achieve even contours.',
        symptoms: ['Gummy smile', 'Uneven gum margins'],
        benefits: ['Balanced smile proportion', 'Reveals natural tooth structure', 'Stitch-free laser recovery'],
        duration: '1 session (30-60 mins)',
        recovery: '24 - 48 hours'
      }
    ]
  },
  {
    id: 'restorative',
    name: 'Restorative Dentistry',
    icon: '🦷',
    summary: 'Reconstructive therapies replacing missing teeth structure to return complete chewing comfort.',
    subs: [
      {
        name: 'Dental Crowns',
        desc: 'Custom-fit Zirconia or ceramic caps that fully cover and reinforce damaged teeth.',
        symptoms: ['Weak teeth', 'Large cracked fillings', 'After a root canal treatment'],
        benefits: ['Restores bite strength', 'Protects from fracturing', 'Natural aesthetic match'],
        duration: '2 sessions (3-5 days)',
        recovery: 'None'
      },
      {
        name: 'Dental Bridges',
        desc: 'Fixed restorations bridging gaps created by one or more missing adjacent teeth.',
        symptoms: ['Single or multiple missing teeth', 'Difficulty chewing'],
        benefits: ['Restores chewing efficiency', 'Prevents shifting of remaining teeth'],
        duration: '2 sessions',
        recovery: 'None'
      },
      {
        name: 'Dentures',
        desc: 'Removable full or partial arch replacements for missing teeth.',
        symptoms: ['Loss of all or multiple teeth', 'Saggy facial cheeks'],
        benefits: ['Supports facial structure', 'Restores speech and chewing ability'],
        duration: '3 - 4 sessions',
        recovery: '1 - 2 weeks adjustment'
      }
    ]
  },
  {
    id: 'rootcanal',
    name: 'Root Canal Treatment',
    icon: '⚡',
    summary: 'Microscope-assisted endodontics to save infected teeth and eliminate persistent nerve pain.',
    subs: [
      {
        name: 'Single-Sitting Root Canal',
        desc: 'Advanced micro-endodontic therapy removing tooth infection in a single 60-minute visit.',
        symptoms: ['Severe throbbing toothache', 'Pain when biting', 'Sensitivity to hot foods'],
        benefits: ['Pain-free therapy', 'Saves natural tooth structure', 'Saves multiple clinic visits'],
        duration: '45 - 60 minutes',
        recovery: '1 - 2 days minor soreness'
      },
      {
        name: 'Re-Root Canal Treatment',
        desc: 'Correcting and recleaning a previously failed or reinfected root canal treated tooth.',
        symptoms: ['Pain in previously treated tooth', 'Gum swelling near capped tooth'],
        benefits: ['Resolves hidden infections', 'Prevents extraction of crowned tooth'],
        duration: '1 - 2 sessions',
        recovery: '2 - 3 days'
      }
    ]
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    icon: '🔩',
    summary: 'Permanent biocompatible titanium implants acting as secure roots for missing teeth.',
    subs: [
      {
        name: 'Single-Tooth Implant',
        desc: 'Replacing a single missing tooth without affecting neighboring teeth.',
        symptoms: ['One missing tooth', 'Difficulty chewing in a specific area'],
        benefits: ['Looks and acts like a real tooth', 'Prevents bone loss in jaw'],
        duration: 'Surgical placement: 30-45 mins (Healing: 3 months)',
        recovery: '3 - 5 days'
      },
      {
        name: 'Full-Mouth Implants',
        desc: 'Complete fixed arch replacement using advanced implant mapping layouts (All-on-4 or All-on-6).',
        symptoms: ['All teeth missing', 'Loose fitting dentures'],
        benefits: ['Full bite rehabilitation', 'No slips or painful clicks', 'Lifetime durability'],
        duration: 'Multi-stage process over 3-6 months',
        recovery: '7 - 10 days post-surgery'
      }
    ]
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    icon: '🦷',
    summary: 'Bite correction and teeth alignment treatments for all age groups.',
    subs: [
      {
        name: 'Clear Aligners',
        desc: 'Nearly invisible, removable customized medical plastic trays to straighten teeth.',
        symptoms: ['Crooked teeth', 'Crowded arches', 'Gaps between teeth'],
        benefits: ['Virtually invisible', 'Removable for eating & brushing', 'Extremely comfortable design'],
        duration: '6 - 18 months',
        recovery: 'None (mild pressure with new trays)'
      },
      {
        name: 'Metal & Ceramic Braces',
        desc: 'Traditional and tooth-colored ceramic bracket systems for complex bite realignment.',
        symptoms: ['Severe bite misalignment', 'Underbites/Overbites'],
        benefits: ['Highly predictable results', 'Effective for complex orthodontic movements'],
        duration: '12 - 24 months',
        recovery: 'Adjustment period of 1 week'
      }
    ]
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    icon: '💡',
    summary: 'Premium stain-removal systems providing instant teeth shade improvements.',
    subs: [
      {
        name: 'In-Clinic Whitening',
        desc: 'Fast, laser-activated whitening gel application achieving up to 8 shades lighter in 1 hour.',
        symptoms: ['Stained enamel', 'Yellow teeth from coffee/smoking'],
        benefits: ['Instant results in one visit', 'Safe gums protection protocol', 'Long-lasting shine'],
        duration: '60 minutes',
        recovery: 'Avoid colored food for 48 hours'
      }
    ]
  },
  {
    id: 'children',
    name: 'Children\'s Dentistry',
    icon: '🧸',
    summary: 'Gentle, friendly oral health checkups and preventive therapies customized for children.',
    subs: [
      {
        name: 'First Dental Visit',
        desc: 'Anxiety-free orientation visit to build dental confidence and check jaw development.',
        symptoms: ['Child reaching 1 year of age', 'Preventing dental phobia'],
        benefits: ['Positive dental association', 'Early bite alignment check'],
        duration: '20 minutes',
        recovery: 'None'
      },
      {
        name: 'Fluoride Treatment',
        desc: 'Applying protective fluoride varnish to strengthen developing enamel against acid decay.',
        symptoms: ['High risk of cavities', 'Early chalky white spots'],
        benefits: ['Remineralizes tooth enamel', 'Reduces cavity risk by 40%'],
        duration: '10 minutes',
        recovery: 'None (avoid drinking for 30 mins)'
      }
    ]
  },
  {
    id: 'gum',
    name: 'Gum Treatment',
    icon: '🌿',
    summary: 'Scaling, root planing, and laser surgery to manage periodontal infections.',
    subs: [
      {
        name: 'Scaling & Root Planing',
        desc: 'Deep cleaning below the gum line to remove deep tartar pockets and smooth tooth roots.',
        symptoms: ['Bleeding gums', 'Loose teeth', 'Receding gum line'],
        benefits: ['Stops progression of periodontitis', 'Reduces gum pocket depths'],
        duration: '1 - 2 sessions',
        recovery: '24 hours minor sensitivity'
      }
    ]
  },
  {
    id: 'surgery',
    name: 'Oral Surgery',
    icon: '🏥',
    summary: 'Surgical tooth extractions, wisdom teeth removal, and bone restructuring.',
    subs: [
      {
        name: 'Wisdom Tooth Removal',
        desc: 'Surgical extraction of impacted, painful, or misaligned wisdom teeth.',
        symptoms: ['Pain in the back jaw', 'Swollen gums near back molar', 'Crowding of back teeth'],
        benefits: ['Prevents molar crowding', 'Resolves deep jaw pain & infection'],
        duration: '45 - 60 minutes',
        recovery: '3 - 5 days'
      }
    ]
  },
  {
    id: 'emergency',
    name: 'Emergency Dentistry',
    icon: '🚨',
    summary: 'Priority dental services for sudden pain, injury, fractures, or bleeding.',
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
  setCurrentPage,
  setCurrentSubcategory,
}) => {
  const currentCat = treatmentData.find((c) => c.id === selectedCategory) || treatmentData[0];

  const handleSubClick = (sub: TreatmentSub) => {
    setCurrentSubcategory(sub);
    setCurrentPage('treatment-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <div className="category-header glass-card">
          <span className="large-icon">{currentCat.icon}</span>
          <h2>{currentCat.name}</h2>
          <p>{currentCat.summary}</p>
        </div>

        <div className="subcategories-grid">
          {currentCat.subs.map((sub, idx) => (
            <div key={idx} className="subcategory-card glass-card" onClick={() => handleSubClick(sub)}>
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
      <section className="comparison-section glass-card">
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
