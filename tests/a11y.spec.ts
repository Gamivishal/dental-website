import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility (a11y) Checks', () => {
  // Define pages that are critical to accessibility
  const pagesToTest = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  for (const { name, path } of pagesToTest) {
    test(`Should not have any automatically detectable accessibility issues on ${name} page`, async ({ page }) => {
      await page.goto(path);
      
      // We may need to wait for animations to finish before running axe
      await page.waitForTimeout(1000);

      // Initialize AxeBuilder
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

      // Assert that there are no violations
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
