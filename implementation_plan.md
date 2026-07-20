# Implementation Plan - Align Treatments Carousel Cards with Direct Connection Channels Card Style

This plan outlines the changes to transform the Treatments Carousel (marquee) cards on the homepage from 3D flip cards into cards that visually match the "Direct Connection Channels" (`fast-access-card`) design, preserving layout alignment, spacing, click-navigation, and hover states.

## Proposed Changes

### 1. Update Homepage Carousel Markup

#### [MODIFY] [Home.tsx](file:///c:/Users/Admin/source/repos/dental-website/src/pages/Home.tsx)
- Replace the 3D flip card wrapper structure (`.flip-card-container`, `.flip-card-inner`, `.flip-card-front`, `.flip-card-back`) in both marquee rows (track-left and track-right) with a flat `.fast-access-card` layout.
- Retain the custom icon (`cat.icon` emoji), title (`cat.name`), and shortened summary description (`cat.summary`).
- Retain the click navigation handler (`onClick={() => handleTreatmentNav(cat.id)}`).

### 2. Update CSS Styles

#### [MODIFY] [App.css](file:///c:/Users/Admin/source/repos/dental-website/src/App.css)
- Add `font-size: 24px` to `.fast-access-card .card-icon-circle` so emojis/icons render at premium scale.
- Style `.fast-access-card` inside `.marquee-card-sizer` to occupy `height: 100%` and `box-sizing: border-box` to align perfectly inside the carousel tracks.

---

## Verification Plan

### Automated Tests
- Validate TypeScript code safety.

### Manual Verification
1. Verify the Treatments Carousel cards on the homepage display with a clean outline and white background, matching the "Direct Connection Channels" card styling.
2. Confirm the cards smoothly animate (translate up by 8px, background fills from down-to-up with green gradient, text/icon turns white) on hover instead of flipping in 3D.
3. Verify that clicking any treatment card still successfully triggers navigation to its detail modal.
4. Ensure the infinite scroll, spacing, and width bounds of the marquee tracks remain responsive.
