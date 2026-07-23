# Dental Website Premium UI Redesign

This plan outlines the complete UI/UX redesign of the dental website to establish a premium, modern, luxurious, and trustworthy medical aesthetic. The new design uses your logo as the single source of truth for branding.

## Goal

Create a luxury dental clinic website comparable to top international clinics. The design will emphasize white space (60% white, 25% light background, 10% teal, 5% gold accent), elegant typography, soft shadows, rounded corners (18-24px), smooth transitions, and a clean medical feel without any black backgrounds.

## User Review Required

> [!IMPORTANT]
> This redesign is comprehensive and will update global styles as well as individual components. Please review the color system mapping and proposed changes below. Once approved, I will begin execution and create a task list.

## Color System Mapping

- **Primary**: `#45696A` (Teal - for buttons, primary interactions)
- **Primary Hover**: `#355657` (Darker Teal)
- **Accent**: `#C89B3C` (Gold - strictly for small highlights, active menus, icons, badges)
- **Background**: `#F7F8F7` (Soft Off-White)
- **Alternate Sections**: `#EEF3F2` (Very Light Teal/Grey)
- **Cards**: `#FFFFFF` (Pure White)
- **Footer**: `#24393A` (Deep Teal)
- **Heading**: `#1B2C2D` (Very Dark Teal, replacing pure black)
- **Body Text**: `#5E6666` (Soft Grey/Teal)

## Proposed Changes

### Global Styles

#### [MODIFY] `src/index.css`
- Update all CSS variables to match the new Color System.
- Refine typography hierarchy (headings, body text) for a more elegant look.
- Update global `.glass-card`, button styles (`.cta-button`), and section padding to match the premium aesthetic (18-24px border radius, soft luxurious shadows).
- Remove any existing overly dark or generic colors.
- Enhance accessibility and contrast ratios.

#### [MODIFY] `src/App.css`
- Refine layout containers and spacing rules.
- Update hero sections, floating shapes (subtle gradients instead of harsh ones).
- Improve mobile and tablet responsiveness and padding.

### Core Components

#### [MODIFY] `src/components/Header.tsx` & Header CSS (in `App.css`)
- Streamline the navigation to feel less cluttered.
- Update the active state to use the gold accent (`#C89B3C`) subtly.
- Ensure the header background and blur effect align with the new luxury feel.

#### [MODIFY] `src/components/Footer.tsx` & Footer CSS (in `App.css`)
- Update footer background to `#24393A`.
- Refine typography and link hover states (subtle gold).

#### [MODIFY] `src/components/WelcomePopup.tsx` & `src/components/WelcomePopup.css`
- Apply the new border radii, soft shadows, and color palette.
- Refine the doctor image border and buttons.

### Pages (Updates via `App.css` and Inline Classes)

#### [MODIFY] `src/pages/Home.tsx`
- Redesign the Hero section with a cleaner layout, better spacing, and a subtle luxury gradient if applicable.
- Update Services/Treatments preview cards.
- Refine the Doctor section.

#### [MODIFY] `src/pages/Treatments.tsx` & `src/pages/TreatmentDetail.tsx`
- Improve layout for treatment categories and details.
- Update the modal/overlay styles to match the new card and button aesthetics.

#### [MODIFY] `src/pages/Testimonials.tsx` & `src/pages/SmileGallery.tsx`
- Redesign testimonial cards to feel premium (more whitespace, elegant quotes).
- Refine the gallery layout.

#### [MODIFY] `src/pages/Contact.tsx` & `src/pages/Enquiry.tsx`
- Update form inputs (rounded corners, soft borders, focus states using the gold accent or primary teal).
- Enhance the FAQ accordion styles.

## Verification Plan

### Automated Tests
- Run existing Playwright tests to ensure no functionality is broken by the UI updates.
- Use `npm run build` to verify there are no compilation errors.

### Manual Verification
- Verify the 60/25/10/5 color distribution rule visually.
- Test responsiveness across Mobile, Tablet, and Desktop breakpoints.
- Ensure buttons, links, and cards have smooth hover animations.
- Check contrast ratios for text on all backgrounds.
- Confirm that the logo remains unchanged and matches the new UI perfectly.
