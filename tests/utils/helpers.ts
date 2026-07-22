import { Page, expect } from '@playwright/test';

export class Helpers {
  /**
   * Listens for any console errors and fails the test if encountered.
   * Call this in test.beforeEach
   */
  static failOnConsoleError(page: Page) {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        throw new Error(`Browser console error: ${msg.text()}`);
      }
    });
  }

  /**
   * Intercepts and fails on failed network requests (404, 500, etc.)
   */
  static failOnNetworkError(page: Page) {
    page.on('response', response => {
      // Ignore analytic or external tracking scripts, focus on internal assets
      if (!response.url().includes('google-analytics') && response.status() >= 400) {
        throw new Error(`Network failure: ${response.status()} on ${response.url()}`);
      }
    });
  }

  /**
   * Helper to verify all images on the page load correctly
   */
  static async verifyImagesLoad(page: Page) {
    const images = await page.locator('img').all();
    for (const img of images) {
      const isLoaded = await img.evaluate((image: HTMLImageElement) => {
        return image.complete && image.naturalHeight > 0;
      });
      expect(isLoaded).toBeTruthy();
    }
  }
}
