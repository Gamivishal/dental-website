# Comprehensive QA Test Plan

## Overview
This QA Test Plan outlines the testing strategy for the Dental Website, based on the approved Test Coverage Matrix. It covers various testing dimensions ensuring complete functional, visual, and secure operations of the platform.

---

## Testing Dimensions

### 1. Functional Testing
- Verify all links, buttons, and navigation elements.
- Ensure state consistency across page transitions (e.g., active tabs, correct modal data).

### 2. UI & UX Testing
- Validate visual consistency (colors, typography, hover effects, transitions).
- Ensure animations (e.g., Cinematic Scroll, Hero Slider) trigger smoothly and do not block interactions.

### 3. Forms & Data Input
- Validate client-side form validation (required fields, email format, phone number formats).
- Ensure successful mock submissions display the correct success banners.

### 4. APIs & Backend (Mocked)
- Since no live APIs exist, test the `preventDefault` behavior and state updates for form submissions.

### 5. Responsive Testing
- Test across mobile (iPhone 12/Pixel 5), tablet (iPad), and desktop resolutions.
- Ensure the Treatments Marquee and FAQ Accordion scale correctly on smaller screens.

### 6. Accessibility (a11y)
- Verify ARIA labels, semantic HTML tags, keyboard navigation (tabbing through forms and modals).
- Ensure contrast ratios meet WCAG standards.

### 7. Performance
- Ensure fast load times, particularly checking large image assets (e.g., clinic/CEO images).
- Verify lazy loading on the Smile Gallery if implemented.

### 8. Security
- Test for XSS vulnerabilities in form inputs (e.g., Contact and Enquiry textareas).
- Verify that no sensitive data (PII) is exposed in local storage (except basic cookie consent).

### 9. Negative Testing & Edge Cases
- **Negative Testing:** Submitting forms with invalid data types (e.g., letters in phone number).
- **Edge Cases:** Extremely long names or messages in the Enquiry form, resizing the window while the Procedure Modal is open, double-clicking form submit buttons.

---

## Page-by-Page Test Scenarios

### 1. Home Page
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Load hero carousel and click 'Next' | Carousel advances to the next slide smoothly | High |
| Interact with FAQ accordion | Clicked question expands, others remain in their state | High |
| Click "Book a Consultation" quick access card | Navigates to `/enquiry` page | High |
| Submit XSS payload in Search/Inputs (if any) | Payload is sanitized/rejected | Medium |
| Verify responsive layout of Treatment Marquee | Scroller adapts without breaking layout on mobile | Medium |

### 2. About Page
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Verify Doctor Profile section | Content and images load properly; typography is legible | Medium |
| Check mobile responsiveness of timelines | Layout shifts to a vertical stack seamlessly | Low |
| Validate "Contact Clinic" CTAs | Redirects user to `/contact` | High |

### 3. Treatments Page
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Click Category Tabs (e.g., "Cosmetic Dentistry") | Updates the subcategory grid with matching items | High |
| Verify horizontal scrolling on mobile | Categories can be swiped horizontally | High |
| Check Comparison Table rendering | Table displays correctly without overflowing the container | Medium |

### 4. Treatment Detail (Modal/Overlay)
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Click a subcategory card | Modal opens with correct title, symptoms, and duration | High |
| Click outside the modal overlay | Modal closes and returns to the underlying page | Medium |
| Click "Book Appointment" inside modal | Closes modal and navigates to `/enquiry` | High |
| Open modal on a narrow mobile screen | Modal becomes scrollable and layout adjusts vertically | High |

### 5. Smile Gallery
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Load gallery images | Images load correctly (check for broken links) | Medium |
| Verify image hover states | Transform/scale animations occur without jitter | Low |

### 6. Patient Info
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Verify text readability and formatting | All policies and guidelines are clearly legible | Low |
| Check internal links | All hyperlinks point to valid sections/pages | Medium |

### 7. Testimonials
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Verify review card layout on tablet/mobile | Cards stack neatly without text overlap | Medium |

### 8. Contact Page
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Submit form with all valid data | Displays "Appointment Request Received!" | Critical |
| Submit form missing required fields | Native HTML5 or custom validation blocks submission | High |
| Verify embedded Google Map | Map iframe loads without console errors | Medium |
| Click WhatsApp and Phone links | Initiates `wa.me` or `tel:` protocols | High |

### 9. Enquiry Page
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Complete the multi-section form and submit | Displays success message | Critical |
| Leave Privacy Consent checkbox unchecked | Form submission is blocked | Critical |
| Mock upload a PDF report | File name appears next to the upload button | Medium |
| Submit extremely long text in "Dental Concern" | Textarea handles it without crashing or UI break | Low |

### 10. Global UI / Navigation
| Test Scenario | Expected Result | Priority |
| --- | --- | --- |
| Accept Cookie Consent | Banner disappears and stays hidden on refresh | High |
| Keyboard Navigation (Tab key) | Can navigate through Header links and CTAs | Medium |
| Floating Actions visibility on mobile | Buttons do not obstruct core content | Medium |
