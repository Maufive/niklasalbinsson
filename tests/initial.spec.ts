import { test, expect } from "@playwright/test";

test("start page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  await expect(page).toHaveTitle("Niklas Albinsson");
});
