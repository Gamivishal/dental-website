import { test, expect } from '@playwright/test';

test.describe('Home Page Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home and accept cookies if present to prevent interference
    await page.goto('/');
    const cookieBtn = page.locator('button.primary-cta:has-text("Accept")');
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
    }
  });

  test('should display hero section and allow carousel navigation', async ({ page }) => {
    // Check main title
    await expect(page.locator('.hero-slide-title').first()).toBeVisible();
    
    // Check next/prev buttons
    const nextBtn = page.locator('.slider-arrow.next');
    const prevBtn = page.locator('.slider-arrow.prev');
    
    await expect(nextBtn).toBeVisible();
    await expect(prevBtn).toBeVisible();

    // Click next and verify state change (wait for animation or active class)
    await nextBtn.click();
    await expect(page.locator('.hero-slide').nth(1)).toHaveClass(/active/);
  });

  test('should display Quick Action Feature Grid', async ({ page }) => {
    const bookCard = page.locator('.fast-access-card:has-text("Book a Consultation")');
    const callCard = page.locator('.fast-access-card:has-text("Call the Clinic")');
    const whatsappCard = page.locator('.fast-access-card:has-text("WhatsApp Us")');

    await expect(bookCard).toBeVisible();
    await expect(callCard).toBeVisible();
    await expect(whatsappCard).toBeVisible();
  });

  test('should display FAQ Accordion and toggle answers', async ({ page }) => {
    const faqDetails = page.locator('details.home-faq-item-row').first();
    const faqSummary = faqDetails.locator('summary');
    const faqAnswer = faqDetails.locator('.home-faq-answer-inside');

    // First one is open by default
    await expect(faqDetails).toHaveAttribute('open', '');
    
    // Close it
    await faqSummary.click();
    await expect(faqDetails).not.toHaveAttribute('open', '');

    // Open second one
    const secondFaq = page.locator('details.home-faq-item-row').nth(1);
    await secondFaq.locator('summary').click();
    await expect(secondFaq).toHaveAttribute('open', '');
  });

  test('should navigate to Treatments page when a treatment card is clicked', async ({ page }) => {
    const treatmentCard = page.locator('.marquee-track.track-left .fast-access-card').first();
    await treatmentCard.click();

    // Should update URL or display treatments
    await expect(page).toHaveURL(/.*\/treatments/);
  });
});
