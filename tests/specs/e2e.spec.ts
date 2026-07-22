import { test, expect } from '../fixtures/test.fixture';
import { TEST_DATA } from '../data/test-data';

test.describe('POM Based E2E Suite', () => {

  test.describe('Home Page functionality', () => {
    test.beforeEach(async ({ homePage }) => {
      await homePage.navigate('/');
    });

    test('Verify Hero and CTAs', async ({ homePage }) => {
      await homePage.verifyHeroSection();
    });

    test('Category Selection navigates to treatments', async ({ homePage, page }) => {
      await homePage.selectCategory('Cosmetic');
      await expect(page).toHaveURL(/.*treatments/);
    });
  });

  test.describe('Treatments & Modals', () => {
    test.beforeEach(async ({ treatmentsPage }) => {
      await treatmentsPage.navigate('/treatments');
    });

    test('Filter by category and open modal', async ({ treatmentsPage }) => {
      await treatmentsPage.filterByCategory('Surgical');
      await treatmentsPage.openTreatmentModal('Implant Placement');
      
      // Navigate via modal
      await treatmentsPage.clickBookFromModal();
      await expect(treatmentsPage.page).toHaveURL(/.*enquiry/);
    });
  });

  test.describe('Forms Validations', () => {
    test('Booking Form Submission', async ({ formsPage }) => {
      await formsPage.navigate('/contact');
      const data = TEST_DATA.validBooking;
      await formsPage.submitBooking(data.name, data.phone, data.date, data.time);
      await formsPage.verifyBookingSuccess();
    });

    test('Enquiry Form Negative and Positive Test', async ({ formsPage }) => {
      await formsPage.navigate('/enquiry');
      
      // Negative (missing required)
      await formsPage.enqSubmit.click();
      await expect(formsPage.enqSuccess).not.toBeVisible();

      // Positive with long text edge case
      const data = TEST_DATA.validEnquiry;
      await formsPage.submitEnquiry(data.name, data.email, data.phone, data.service, data.message);
      await formsPage.verifyEnquirySuccess();
    });
  });

});
