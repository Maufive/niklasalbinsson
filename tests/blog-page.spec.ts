import { test, expect } from "@playwright/test";

test("navigation to a blog post through the blog page and back", async ({
  page,
}) => {
  await page.waitForLoadState("networkidle");
  await page.goto("/");
  await page.getByTitle("blog").click();

  await page.waitForURL("http://localhost:3000/blog");

  await expect(page.getByRole("heading", { name: "All posts" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "React Server Components" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Semantic CSS variables" }).waitFor();
  await page.getByRole("link", { name: "Semantic CSS variables" }).click();

  await expect(page).toHaveURL("http://localhost:3000/blog/semantic-variables");
});
