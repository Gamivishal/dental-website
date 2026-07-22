# QA Test Coverage Matrix

## Overview
Based on source code analysis of the Dental Website project.

- **Total Pages:** 9
- **Total Components:** 4 core UI components + dynamic modals/alerts
- **Estimated Total Test Cases:** ~55
- **Missing Coverage:** Current tests (e.g., `home.spec.ts`, `forms.spec.ts`) are stubs (mostly ~84 bytes). Test coverage is effectively 0% for complex flows (modals, form submissions, mobile responsiveness, animations).
- **Critical Flows:** Appointment Booking (Contact), Comprehensive Enquiry Submission, Procedure Detail Modal Navigation, Cookie Consent handling.

## Discovered Elements
- **Routes & Pages:** Home, About, Treatments, TreatmentDetail, SmileGallery, PatientInfo, Testimonials, Contact, Enquiry.
- **Layouts:** Main layout with dynamic page rendering, Header, Footer, Floating CTAs.
- **Components:** `Header`, `Footer`, `FloatingButtons`, `InnerHero`, `AnimatedCounter`.
- **Forms:** Contact Appointment Form, Comprehensive Enquiry Form.
- **Modals:** Procedure Details Popup (Premium split-panel modal).
- **Tabs/Accordions:** FAQ Accordion on Home page.
- **Sliders/Carousels:** Hero Image Slider (Home), Treatment Marquee Scroller.
- **Authentication:** None found (public-facing marketing/informational site).
- **APIs:** None active (Forms use mock states/`preventDefault`).

---

## Page-by-Page Coverage Matrix

### 1. Home
- **Route:** `/` or `home`
- **Purpose:** Landing page driving conversions, displaying overview, stats, FAQs, and treatments.
- **Components:** Hero Slider, Stats Counter, Treatment Marquee, FAQ Accordion, Testimonials Preview.
- **User Flows:** Slide navigation, clicking Quick Action cards, opening FAQs, navigating to sub-pages.
- **Estimated Test Cases:** 12
- **Priority:** High
- **Risk:** High (first impression, high interaction)

### 2. About
- **Route:** `/about`
- **Purpose:** Doctor profile, clinic history, and trust-building.
- **Components:** InnerHero, standard text/image blocks.
- **User Flows:** Reading content, navigating to Contact/Enquiry.
- **Estimated Test Cases:** 4
- **Priority:** Medium
- **Risk:** Low

### 3. Treatments
- **Route:** `/treatments`
- **Purpose:** List all dental services and categories.
- **Components:** InnerHero, Category Filters.
- **User Flows:** Filtering treatments by category, opening Treatment Details modal.
- **Estimated Test Cases:** 7
- **Priority:** High
- **Risk:** Medium

### 4. Treatment Detail (Modal/Page)
- **Route:** `/treatment-detail` (also rendered as Overlay Modal in `App.tsx`)
- **Purpose:** Deep dive into specific procedures, benefits, and timelines.
- **Components:** Sticky Close Button, Procedure Timeline, Symptoms Chips.
- **User Flows:** Closing modal, clicking "Book Appointment" from modal.
- **Estimated Test Cases:** 6
- **Priority:** High
- **Risk:** High (complex UI overlay state)

### 5. Smile Gallery
- **Route:** `/gallery`
- **Purpose:** Before/after case studies.
- **Components:** Image grids.
- **User Flows:** Viewing images, filtering (if any).
- **Estimated Test Cases:** 4
- **Priority:** Low
- **Risk:** Low

### 6. Patient Info
- **Route:** `/patient-info`
- **Purpose:** Pre-visit information, warranties, protocols.
- **Components:** InnerHero, Information blocks.
- **User Flows:** Navigating informational links.
- **Estimated Test Cases:** 3
- **Priority:** Low
- **Risk:** Low

### 7. Testimonials
- **Route:** `/testimonials`
- **Purpose:** Social proof and patient reviews.
- **Components:** InnerHero, Review Cards.
- **User Flows:** Reading reviews, navigating to booking.
- **Estimated Test Cases:** 3
- **Priority:** Medium
- **Risk:** Low

### 8. Contact
- **Route:** `/contact`
- **Purpose:** Quick appointment booking, clinic location, emergency contact.
- **Components:** Embedded Google Map, Sticky Appointment Form.
- **User Flows:** Submitting appointment, clicking Map/Phone/WhatsApp links.
- **Estimated Test Cases:** 8
- **Priority:** Critical
- **Risk:** High (primary conversion point)

### 9. Enquiry
- **Route:** `/enquiry`
- **Purpose:** Comprehensive patient intake, uploading files, detailed triage.
- **Components:** Multi-section Form, File Upload mocks.
- **User Flows:** Filling all required fields, mock uploading files, checking consent, successful submission.
- **Estimated Test Cases:** 8
- **Priority:** Critical
- **Risk:** High (complex form validation state)
