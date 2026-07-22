# Playwright Automation Suite Implementation Plan

This plan outlines the architecture and implementation of an enterprise-grade Playwright test suite for Oceanview Dental Studio, as per the approved Test Coverage Matrix.

## Framework Architecture

The test suite will use a highly maintainable architecture with the following layers:
- **Page Object Model (POM)**: Encapsulates page locators and actions.
- **Custom Fixtures**: Automatically initializes Page Objects and test data for each test.
- **Utils / Helpers**: Contains reusable functions for accessibility (`axe-core`), mocking, and visual comparisons.
- **Test Data**: Separates data from test logic.

## Proposed Changes

### 1. Project Configuration Update
#### [MODIFY] `playwright.config.ts`
- Ensure `trace: 'retain-on-failure'`, `video: 'retain-on-failure'`, and `screenshot: 'only-on-failure'` are set correctly for CI/CD performance.
- Add Mobile viewport configurations (`Mobile Chrome`, `Mobile Safari`) to test responsive layouts.
- Define explicit test matching (e.g., `testMatch: '**/*.spec.ts'`).
- Ensure visual regression snapshot paths are configured properly.

### 2. Base & Utility Files
#### [NEW] `tests/utils/axe-helper.ts`
- Helper wrapper for `@axe-core/playwright` to run accessibility checks cleanly.
#### [NEW] `tests/data/test-data.ts`
- Mock form data for `Contact`, `Enquiry`, and `Review` submissions.
#### [NEW] `tests/fixtures/test-fixtures.ts`
- Extends Playwright's `test` object to include initialized POM instances (e.g., `homePage`, `enquiryPage`), allowing tests to access pages without repetitive setup.

### 3. Page Object Models
#### [NEW] `tests/pages/BasePage.ts`
- Shared methods: URL navigation, handling global elements (Header, Footer, Cookie Consent, Floating Action Buttons, Mega Menu).
#### [NEW] `tests/pages/HomePage.ts`
- Extends `BasePage`. Locators and methods for Hero Slider, Statistics, Marquee, FAQ Accordion.
#### [NEW] `tests/pages/TreatmentsPage.ts`
- Extends `BasePage`. Locators for Horizontal Tabs, Subcategory Grid, and Treatment Modal.
#### [NEW] `tests/pages/FormsPage.ts` (or individual Contact/Enquiry pages)
- Locators for Inputs, Dropdowns, Radio Buttons, File Uploads, Validation Messages, and Submit Buttons.
#### [NEW] `tests/pages/SmileGalleryPage.ts`
- Locators for Before/After interactive sliders.
#### [NEW] `tests/pages/TestimonialsPage.ts`
- Locators for Video Overlays, Google Review auto-slider, and "Leave a Review" form.

### 4. Test Specifications
*We will clean up the existing top-level stub files and organize them into categorized directories.*

#### [DELETE] Existing stub files in `tests/`
- `tests/home.spec.ts`, `tests/a11y.spec.ts`, `tests/forms.spec.ts`, `tests/smoke.spec.ts`, etc.

#### [NEW] `tests/specs/e2e/smoke.spec.ts`
- Fast, high-level navigation verification across all main routes to ensure no 404s and no critical console/network errors.

#### [NEW] `tests/specs/e2e/home.spec.ts`
- Validates Hero Slider transitions, Marquee interactivity, and FAQ Accordion toggles.

#### [NEW] `tests/specs/e2e/navigation.spec.ts`
- Tests Mega Menu hover states, Mobile hamburger menu toggle, and Footer link routing.

#### [NEW] `tests/specs/e2e/treatments.spec.ts`
- Validates Category Tabs Carousel, opening subcategory modals, and modal close mechanisms.

#### [NEW] `tests/specs/e2e/forms.spec.ts`
- Validates field requirements, input formatting (email/tel), and successful submission (mocking the network response or validating local state transitions) for Enquiry, Contact, and Leave a Review forms. Includes mock file uploads.

#### [NEW] `tests/specs/e2e/visual.spec.ts`
- Visual regression tests using `expect(page).toHaveScreenshot()` for critical viewports.

#### [NEW] `tests/specs/a11y/accessibility.spec.ts`
- Uses `axe-core` to scan main pages for WCAG compliance violations.

## Verification Plan
### Automated Tests
- Run `npx playwright test` to verify all implemented tests pass against the local dev server.
- Run `npx playwright test --project="chromium" --headed` to visually inspect test execution.
- Validate `axe-core` is correctly flagging or passing accessibility markers.
- Ensure HTML report correctly bundles traces, videos, and screenshots on failure.

## User Review Required
> [!IMPORTANT]
> The project does not currently appear to have `@axe-core/playwright` installed in `package.json`. I will install it (`npm install -D @axe-core/playwright`) to support the accessibility tests. Please confirm this is acceptable.

> [!NOTE]
> I will restructure the existing files inside the `tests/` directory to adhere strictly to the POM architecture outlined above. Existing `.spec.ts` stubs in the root of `tests/` will be deleted in favor of the new structured files.
