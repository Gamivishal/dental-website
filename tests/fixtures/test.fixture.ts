import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TreatmentsPage } from '../pages/TreatmentsPage';
import { FormsPage } from '../pages/FormsPage';

type CustomFixtures = {
  homePage: HomePage;
  treatmentsPage: TreatmentsPage;
  formsPage: FormsPage;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  treatmentsPage: async ({ page }, use) => {
    await use(new TreatmentsPage(page));
  },
  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page));
  },
});

export { expect } from '@playwright/test';
