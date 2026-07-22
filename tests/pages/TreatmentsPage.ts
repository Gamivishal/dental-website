import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TreatmentsPage extends BasePage {
  readonly tabs: Locator;
  readonly treatmentCards: Locator;
  readonly modalOverlay: Locator;
  readonly modalCloseBtn: Locator;
  readonly modalBookCta: Locator;

  constructor(page: Page) {
    super(page);
    this.tabs = page.locator('.tab-btn');
    this.treatmentCards = page.locator('.treatment-card');
    this.modalOverlay = page.locator('.treatment-modal-overlay');
    this.modalCloseBtn = page.locator('.modal-close-btn-premium');
    this.modalBookCta = page.getByRole('button', { name: /Book Appointment/i });
  }

  async filterByCategory(categoryName: string) {
    const tab = this.tabs.filter({ hasText: categoryName });
    await tab.click();
    await expect(tab).toHaveClass(/active/);
  }

  async openTreatmentModal(treatmentName: string) {
    const card = this.treatmentCards.filter({ hasText: treatmentName });
    await card.click();
    await expect(this.modalOverlay).toBeVisible();
  }

  async closeModal() {
    await this.modalCloseBtn.click();
    await expect(this.modalOverlay).not.toBeVisible();
  }

  async clickBookFromModal() {
    await this.modalBookCta.click();
    await expect(this.modalOverlay).not.toBeVisible();
  }
}
