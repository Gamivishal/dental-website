import { test, expect } from '@playwright/test';

test.describe('Form Submissions', () => {
  test.beforeEach(async ({ page }) => {
    // Accept cookies globally if banner is visible to not obscure elements
    await page.goto('/');
    const cookieBtn = page.locator('button.primary-cta:has-text("Accept")');
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
    }
  });

  test.describe('Contact Form', () => {
    test('should successfully submit an appointment request', async ({ page }) => {
      await page.goto('/contact');
      
      // Fill the form fields
      await page.fill('#book-name', 'John Doe');
      await page.fill('#book-phone', '+1 555-1234');
      await page.fill('#book-date', '2026-08-15');
      await page.selectOption('#book-time', 'afternoon');

      // Submit form
      await page.click('button[type="submit"]:has-text("Confirm Booking Request")');

      // Check for success message
      const successMessage = page.locator('.success-message');
      await expect(successMessage).toBeVisible();
      await expect(successMessage).toContainText('Appointment Request Received!');
    });

    test('should enforce required fields on Contact form', async ({ page }) => {
      await page.goto('/contact');
      // Submit empty form
      await page.click('button[type="submit"]:has-text("Confirm Booking Request")');
      
      // Success message should not appear
      const successMessage = page.locator('.success-message');
      await expect(successMessage).not.toBeVisible();
    });
  });

  test.describe('Enquiry Form', () => {
    test('should successfully submit a comprehensive enquiry', async ({ page }) => {
      await page.goto('/enquiry');

      // Section 1: Patient Information
      await page.fill('#enq-name', 'Jane Smith');
      await page.fill('#enq-phone', '+1 555-9876');
      await page.fill('#enq-email', 'jane.smith@example.com');
      await page.fill('#enq-city', 'Los Angeles, USA');
      
      // Section 2: Clinical Details
      await page.selectOption('#enq-cat', 'treatment');
      await page.selectOption('#enq-method', 'email');
      await page.fill('#enq-date', '2026-08-20');
      
      // Textarea
      await page.fill('#enq-msg', 'I am experiencing tooth sensitivity and would like an evaluation.');

      // Check Consent (Required)
      await page.check('input[type="checkbox"]');

      // Submit
      await page.click('button[type="submit"]:has-text("Submit Comprehensive Enquiry")');

      // Validate success
      const successMessage = page.locator('.success-message');
      await expect(successMessage).toBeVisible();
      await expect(successMessage).toContainText('Enquiry submitted successfully!');
    });

    test('should prevent submission if consent is unchecked', async ({ page }) => {
      await page.goto('/enquiry');
      
      await page.fill('#enq-name', 'Jane Smith');
      await page.fill('#enq-phone', '+1 555-9876');
      await page.fill('#enq-email', 'jane.smith@example.com');
      
      // Deliberately leave consent unchecked
      
      // Submit
      await page.click('button[type="submit"]:has-text("Submit Comprehensive Enquiry")');
      
      // Success message should not appear
      const successMessage = page.locator('.success-message');
      await expect(successMessage).not.toBeVisible();
    });
  });
});
