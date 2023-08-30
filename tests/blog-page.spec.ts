import { test, expect } from '@playwright/test';

test('navigation to a blog post through the blog page and back', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Blog', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'All posts' })).toBeVisible();

  await page.getByTitle('React Server Components').click();

  await expect(
    page.getByRole('heading', { name: 'React Server Components' })
  ).toBeVisible();

  await page.getByRole('link', { name: 'All posts' }).click();
});
