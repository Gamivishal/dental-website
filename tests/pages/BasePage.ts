import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
    // Wait for the main wrapper to be visible indicating app loaded
    await this.page.waitForSelector('.page-content-wrapper', { state: 'visible' });
  }

  async checkVisualRegression(name: string) {
    // Allows animations to settle
    await this.page.waitForTimeout(500); 
    await expect(this.page).toHaveScreenshot(`${name}.png`, { maxDiffPixelRatio: 0.1 });
  }

  async acceptCookies() {
    const banner = this.page.locator('.cookie-consent-banner');
    if (await banner.isVisible()) {
      await this.page.getByRole('button', { name: 'Accept' }).click();
      await expect(banner).not.toBeVisible();
    }
  }
}
