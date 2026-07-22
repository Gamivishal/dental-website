import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heroTitle: Locator;
  readonly exploreBtn: Locator;
  readonly categoryCards: Locator;

  constructor(page: Page) {
    super(page);
    this.heroTitle = page.locator('h1.hero-title');
    this.exploreBtn = page.getByRole('button', { name: /Explore Treatments/i });
    this.categoryCards = page.locator('.category-card');
  }

  async verifyHeroSection() {
    await expect(this.heroTitle).toBeVisible();
    await expect(this.heroTitle).toContainText(/Crafting Precision Smiles/i);
    await expect(this.exploreBtn).toBeVisible();
  }

  async selectCategory(categoryName: string) {
    const card = this.categoryCards.filter({ hasText: categoryName });
    await card.scrollIntoViewIfNeeded();
    await card.click();
  }
}
