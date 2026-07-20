# Dental Studio Website Implementation Plan

Build a premium, responsive multi-page website for **Oceanview Dental Studio** inspired by [teethcarecentre.com](https://teethcarecentre.com/). The implementation will use a clean, dynamic client-side router (based on React state) to provide smooth transitions, premium glassmorphism layouts, micro-animations, interactive before-and-after sliders, a mega menu, and form validations.

We will integrate all local assets provided by the client:
- **Logo**: `Logo.jpeg`
- **Dr. Sheekha Shah (CEO)**: `CEO.jpeg`
- **Clinic Photos**: `Clinic.jpeg`, `Clinic 2.jpeg`, `Entry.jpeg`, `Waiting.jpeg`, `Waiting 2.jpeg`
- **Illustrations**: `dental-clinic.svg`

---

## User Review Required

> [!IMPORTANT]
> **Aesthetic Design**: We are using a unified premium color theme: Deep Navy (`#0b1329`) + Ocean Blue (`#1c2541`) as the base, accented with soft Pastel Teal/Turquoise (`#3a86c8`, `#06b6d4`, `#2dd4bf`) and elegant Glassmorphism card layouts. This matches the modern high-end feel of the reference site.
>
> **Router Choice**: We are implementing a custom React state-based page router. This ensures compatibility with React 19, allows smooth, GPU-accelerated page transitions, and avoids introducing bulky external routing packages.

---

## Open Questions

1. **Dr. Sheekha Shah Profile Details**: I have set up Dr. Sheekha Shah's bio page using `CEO.jpeg`. Let me know if you would like me to adjust any of the biography details, achievements, or credentials.
2. **Interactive Slider Cases**: For the Before-and-After slider, we will use mock/illustrative teeth SVGs for the demo. Please confirm if you have actual medical before-and-after photos you want to plug in later.

---

## Proposed Changes

### Configuration and Assets

#### [MODIFY] [index.html](file:///c:/Users/Admin/source/repos/dental-website/index.html)
- Add Google Fonts link (Inter and Outfit) for modern premium typography.
- Update page meta tags for dental studio SEO (title, description, keywords).

---

### Layout Components

#### [NEW] [Header.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/components/Header.tsx)
- Create a sticky, transparent header with blur background.
- Display `Logo.jpeg` as the studio brand.
- Implement a modern hovering Mega Menu for the **Treatments** item detailing all 12 dental categories.
- Add primary Call-to-Actions (Book Appointment, Call, WhatsApp).

#### [NEW] [Footer.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/components/Footer.tsx)
- Unified footer showing Logo, clinic timings, short location, copyright, quick links, category navigation, social links, and a medical disclaimer.

#### [NEW] [FloatingButtons.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/components/FloatingButtons.tsx)
- Create a floating WhatsApp chat button.
- Create a sticky mobile Call/Book action bar that sticks to the bottom on mobile.

---

### Page Components

#### [NEW] [Home.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Home.tsx)
- **Hero Banner**: High-end banner showing `dental-clinic.svg` illustration, warranty highlight, and booking CTA.
- **Trust Bar**: Accolades and patient rating score.
- **Categories preview**: Overview of cosmetic, general, and restorative treatments.
- **Why Choose Us**: Value propositions.
- **Interactive Tour Preview**: Images of the clinic (`Clinic.jpeg`, `Waiting.jpeg`, `Entry.jpeg`).
- **Interactive FAQ accordion**.

#### [NEW] [About.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/About.tsx)
- Profile of **Dr. Sheekha Shah** (CEO) using `CEO.jpeg`.
- Professional credentials, certifications, experience.
- Full interactive **Clinic Tour** displaying `Clinic.jpeg`, `Clinic 2.jpeg`, `Entry.jpeg`, `Waiting.jpeg`, `Waiting 2.jpeg` in a gallery layout.
- Sterilization and safety technology section.

#### [NEW] [Treatments.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Treatments.tsx)
- Overview of all 12 treatment categories and subcategories.
- Tab-based filter navigation to browse treatments.
- Treatment comparison tool.
- Dynamic route dispatch to `TreatmentDetail` on click.

#### [NEW] [TreatmentDetail.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/TreatmentDetail.tsx)
- Dynamic template page for any chosen subcategory.
- Shows Overview, symptoms, treatment duration, recovery tips, and custom booking triggers.

#### [NEW] [SmileGallery.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/SmileGallery.tsx)
- Category filters for smile transformations.
- **Interactive Before-and-After Slider**: Interactive drag bar allowing comparison between treatment results.

#### [NEW] [PatientInfo.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/PatientInfo.tsx)
- Guide for first-time visitors.
- What to expect, payment options, and download forms section.

#### [NEW] [Testimonials.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Testimonials.tsx)
- Google review summaries, patient video card placeholders, and written stories.
- High-end review rating cards.

#### [NEW] [Contact.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Contact.tsx)
- Interactive forms for scheduling visits.
- Displays timings, map mock-ups, WhatsApp and call buttons.

#### [NEW] [Enquiry.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Enquiry.tsx)
- Advanced booking/enquiry form containing upload fields for reports/X-rays, calendar dates, times, and structured dropdown fields.

---

### Global Styling & State Routing

#### [MODIFY] [App.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/App.tsx)
- Set up global page routing state (`currentPage`).
- Handle page scroll-to-top on transition.
- Wrap content in Header and Footer.

#### [MODIFY] [App.css](file:///c:/Users/Admin/source/repos/dental-website/src/App.css)
- Implement custom glassmorphism styles (`.glass-card`), card hovers, animations (`@keyframes fadeIn`), smooth transitions, and general layout structures.

#### [MODIFY] [index.css](file:///c:/Users/Admin/source/repos/dental-website/src/index.css)
- Set up root colors (Navy, Cyan, White, Slate) and CSS variables for light/dark mode compliance.

---

## Verification Plan

### Manual Verification
1. Run local dev server to ensure all routes and transitions function seamlessly.
2. Confirm the header logo (`Logo.jpeg`), CEO profile image (`CEO.jpeg`), and clinic images load correctly.
3. Test interactive elements:
   - Before-and-after slider drag control.
   - FAQ accordion opening/closing.
   - Treatments mega menu hover interaction.
   - Form submission and validation.
