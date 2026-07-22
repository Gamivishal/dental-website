import { test, expect } from '@playwright/test';

test.describe('Treatments Page and Modal Flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/treatments');
    const cookieBtn = page.locator('button.primary-cta:has-text("Accept")');
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
    }
  });

  test('should display categories and filter subcategories on tab click', async ({ page }) => {
    // Default should be General Dentistry
    await expect(page.locator('.category-header h2')).toContainText('General Dentistry');

    // Click on 'Cosmetic Dentistry' tab
    const cosmeticTab = page.locator('.tab-btn:has-text("Cosmetic Dentistry")');
    await cosmeticTab.click();

    // Header should update
    await expect(page.locator('.category-header h2')).toContainText('Cosmetic Dentistry');
    
    // Check if subcategories update (Smile Makeover should be visible)
    const smileMakeover = page.locator('.subcategory-card h3:has-text("Smile Makeover")');
    await expect(smileMakeover).toBeVisible();
  });

  test('should open procedure detail modal and allow booking', async ({ page }) => {
    // Click on a subcategory card
    const firstSubCard = page.locator('.subcategory-card').first();
    const cardTitle = await firstSubCard.locator('h3').innerText();
    await firstSubCard.click();

    // Modal should appear
    const modal = page.locator('.treatment-modal-overlay');
    await expect(modal).toBeVisible();

    // Check if title matches
    const modalTitle = modal.locator('h2');
    await expect(modalTitle).toContainText(cardTitle);

    // Click Book Appointment from modal
    const bookBtn = modal.locator('button.primary-cta:has-text("Book Appointment")');
    await bookBtn.click();

    // Should redirect to /enquiry
    await expect(page).toHaveURL(/.*\/enquiry/);
    
    // Modal should be closed
    await expect(modal).not.toBeVisible();
  });

  test('should close procedure detail modal on close button click', async ({ page }) => {
    const firstSubCard = page.locator('.subcategory-card').first();
    await firstSubCard.click();

    const modal = page.locator('.treatment-modal-overlay');
    await expect(modal).toBeVisible();

    // Click close button
    const closeBtn = modal.locator('.modal-close-btn-premium');
    await closeBtn.click();

    await expect(modal).not.toBeVisible();
  });

  test('should verify the comparison table is rendered', async ({ page }) => {
    const table = page.locator('.comparison-table');
    await expect(table).toBeVisible();
    await expect(table.locator('th:has-text("Dental Implants")')).toBeVisible();
  });
});
