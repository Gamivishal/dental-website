import { test, expect } from '@playwright/test';

test.describe('Smoke Test', () => {
  test('should load the homepage and check title', async ({ page }) => {
    // Navigate to the base URL configured in playwright.config.ts
    await page.goto('/');

    // Check if the page title is correct (or at least that the page loads without error)
    await expect(page).toHaveTitle(/Dental Website|React/i);
    
    // Check if a root element is present, typically #root for Vite/React apps
    const rootElement = page.locator('#root');
    await expect(rootElement).toBeVisible();
  });
});
