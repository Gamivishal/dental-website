import { test } from "@playwright/test";

const pages = [
    { name: "home", url: "/" },
    { name: "about", url: "/#/about" },
    { name: "patient-info", url: "/#/patient-info" },
    { name: "treatments", url: "/#/treatments" },
    { name: "gallery", url: "/#/gallery" },
    { name: "testimonials", url: "/#/testimonials" },
    { name: "contact", url: "/#/contact" }
];

test.describe("Design Audit", () => {

    for (const pageInfo of pages) {

        test(pageInfo.name, async ({ page }) => {

            await page.goto(`http://localhost:5173${pageInfo.url}`);

            await page.waitForLoadState("networkidle");

            await page.waitForTimeout(2500);

            await page.evaluate(async () => {

                await new Promise<void>((resolve) => {

                    let totalHeight = 0;

                    const distance = 600;

                    const timer = setInterval(() => {

                        window.scrollBy(0, distance);

                        totalHeight += distance;

                        if (totalHeight >= document.body.scrollHeight) {

                            clearInterval(timer);

                            resolve();

                        }

                    }, 300);

                });

            });

            await page.waitForTimeout(1000);

            await page.screenshot({

                path: `design-audit/${pageInfo.name}.png`,

                fullPage: true

            });

        });

    }

});