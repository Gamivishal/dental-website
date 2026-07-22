# Implement Premium Welcome Popup

This plan outlines the creation and integration of a premium Welcome Popup matching the luxury dental clinic branding.

## Proposed Changes

### `src/components/WelcomePopup.tsx`
[NEW] Create the React component.
- Implements `useEffect` to show the popup after an 800ms-1200ms delay if `welcome_popup_dismissed` is not in `localStorage` or if 24 hours have passed.
- Sets up an event listener for the `Escape` key and handles click-outside to close the popup.
- Manages focus trap for accessibility (setting `tabIndex` on elements and managing active focus on mount).
- Defines the two-column layout for Desktop and stacking rules for Mobile/Tablet.
- Connects buttons ("Book Appointment", "WhatsApp", "Call Now") to their respective actions (navigation and external links).

### `src/components/WelcomePopup.css`
[NEW] Create specific styling for the popup.
- `position: fixed` overlay with backdrop blur.
- Glassmorphism effect for the main container (`background: rgba(250, 249, 247, 0.95)`, `backdrop-filter`, `border-radius: 28px`).
- Complex CSS Grid/Flexbox layout handling:
  - Left content: Header, Features, Highlight Card, Actions.
  - Right content: Doctor circular image with Premium Gold (`#CDA851`) border.
- Custom entry animations (Fade in + scale up).

### `src/App.tsx`
[MODIFY] Integrate `WelcomePopup`.
- Import `WelcomePopup`.
- Mount it at the root of the app so it renders across all pages, passing the necessary `setCurrentPage` function for internal navigation (e.g., booking an appointment).

## Verification Plan

### Manual Verification
- Hard refresh the page and verify the popup opens automatically after ~1 second.
- Verify animations are smooth (fade in + scale up).
- Ensure the layout matches exactly on Desktop (2-columns), Tablet (stacked, image on top), and Mobile (stacked, single column).
- Test all closing mechanisms: Close button, clicking outside the modal backdrop, and pressing the `Escape` key.
- Close the modal, reload the page, and confirm it does not reappear immediately (verifying localStorage persistence).
