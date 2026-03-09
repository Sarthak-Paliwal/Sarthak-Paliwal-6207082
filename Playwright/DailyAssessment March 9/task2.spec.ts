import { test, expect } from '@playwright/test';

test('task2', async ({ page }) => {

  await page.goto('https://www.flipkart.com');

  const close = page.locator('//button[contains(text(),"✕")]');
  if (await close.isVisible()) {
    await close.click();
  }
  const searchBox = page.locator('//input[@name="q"]').first();
    await expect(searchBox).toBeEnabled();
  await searchBox.fill('shoes');
  await searchBox.press('Enter');
  const womenShoes = page.locator('//a[contains(translate(text(),"WOMEN","women"),"women")]');
  await expect(womenShoes.first()).toBeVisible();
  const count = await womenShoes.count();
  await expect(count).toBeGreaterThan(0);
  const firstText = await womenShoes.first().textContent();
  await expect(firstText?.toUpperCase()).toContain('WOMEN');
  await expect(page).toHaveScreenshot('flipkart-women-shoes.png');
  await page.screenshot({path: 'screenshot/task2.png'});

});