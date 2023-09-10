import { test, expect } from '@playwright/test';

test('navigation to the featured project', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('featured-project-link')).toBeVisible();
  await expect(
    page.getByTestId('featured-project-link').getByRole('heading')
  ).toBeVisible();
  await page.getByTestId('featured-project-link').click();

  await expect(page.getByRole('img', { name: 'Project Image' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View Project' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'View Repository' })
  ).toBeVisible();
});