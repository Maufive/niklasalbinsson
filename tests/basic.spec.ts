import { test, expect } from "@playwright/test";

test.describe("Basic website functionality", () => {
  test("homepage loads and contains main sections", async ({ page }) => {
    await page.goto("/");

    // Check if main sections are present
    await expect(
      page.getByRole("heading", { name: "Niklas Albinsson", level: 1 }),
    ).toBeVisible();

    // Verify section headings
    await expect(page.getByRole("heading", { name: "Recent Crafts" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Recent Posts" })).toBeVisible();

    // Verify "view all" links exist for both sections
    const viewAllLinks = page.getByRole("link", { name: "view all →" });
    await expect(viewAllLinks).toHaveCount(2);
  });

  test("blog posts page loads and displays posts", async ({ page }) => {
    await page.goto("/posts");

    // Check if posts section exists
    await expect(page.getByRole("heading", { name: "Posts", level: 1 })).toBeVisible();

    // Verify at least one blog post exists
    const postLinks = page
      .getByRole("link")
      .filter({ has: page.getByRole("heading", { level: 2 }) });
    await expect(postLinks.first()).toBeVisible();

    // Click first post and verify content loads
    await postLinks.first().click();
    await expect(page.locator("article.prose")).toBeVisible();
    await expect(page.getByRole("link", { name: "← back to posts" })).toBeVisible();
  });

  test("crafts page loads and displays items", async ({ page }) => {
    await page.goto("/crafts");

    // Check if crafts section exists
    await expect(page.getByRole("heading", { name: "Crafts", level: 1 })).toBeVisible();

    // Verify craft items are displayed (assuming similar structure to posts)
    const craftLinks = page
      .getByRole("link")
      .filter({ has: page.getByRole("heading", { level: 2 }) });
    await expect(craftLinks.first()).toBeVisible();
  });

  test("footer is present and contains copyright", async ({ page }) => {
    await page.goto("/");

    // Check if footer exists and contains copyright
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(
      footer.getByText(new RegExp(new Date().getFullYear().toString())),
    ).toBeVisible();

    // Verify Spotify widget exists (checking for Spotify text)
    await expect(footer.getByText("Spotify")).toBeVisible();
  });
});
