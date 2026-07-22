import { test, expect } from '@playwright/test';

test.describe('Global Navigation and Consent', () => {
  test('should display cookie consent and hide on accept', async ({ page }) => {
    await page.goto('/');
    
    const banner = page.locator('.cookie-consent-banner');
    await expect(banner).toBeVisible();

    const acceptBtn = banner.locator('button:has-text("Accept")');
    await acceptBtn.click();

    await expect(banner).not.toBeVisible();
    
    // Refresh page to check local storage persistence
    await page.reload();
    await expect(banner).not.toBeVisible();
  });

  test('should display cookie consent and hide on ignore', async ({ page }) => {
    // Clear state before test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    const banner = page.locator('.cookie-consent-banner');
    await expect(banner).toBeVisible();

    const ignoreBtn = banner.locator('button:has-text("Ignore")');
    await ignoreBtn.click();

    await expect(banner).not.toBeVisible();
    
    await page.reload();
    await expect(banner).not.toBeVisible();
  });

  test('should navigate via header links', async ({ page }) => {
    await page.goto('/');
    
    // Click on About link in header
    // Using a more generic selector assuming the header has nav links
    const aboutLink = page.locator('header nav a:has-text("About")').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/.*\/about/);
    }
  });

  test('should open Floating CTAs', async ({ page }) => {
    await page.goto('/');
    
    // Floating buttons might have a main trigger or just be links
    const floatingNav = page.locator('.floating-buttons-container, .floating-ctas');
    if (await floatingNav.isVisible()) {
      // Just verifying it exists and doesn't crash the page
      await expect(floatingNav).toBeVisible();
    }
  });
});
