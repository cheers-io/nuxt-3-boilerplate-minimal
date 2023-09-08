import { test, expect } from '@playwright/test';
import de from '../../locales/de.json';

test('switch language', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.locator('select.language-selector').selectOption('de');
  const message = await page.locator('p.welcome-message').innerText();

  expect(message).toBe(de.welcome);
});
