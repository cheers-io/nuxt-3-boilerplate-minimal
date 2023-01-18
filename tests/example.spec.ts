import { test, expect } from '@playwright/test';

test('switch language', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.locator('select.language-selector').selectOption('de');

  const b = await page.locator('p.welcome-message').innerText();
  expect(b).toBe('Willkommen');
});

