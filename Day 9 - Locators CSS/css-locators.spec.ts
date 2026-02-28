import { test, expect } from '@playwright/test';

test("CSS Locators Practice", async ({ page }) => {
    // Navigate to a sample page for testing locators
    await page.goto("https://kitchen.applitools.com/ingredients/select");

    // 1. Element Selector
    const heading = page.locator('h1');
    console.log(await heading.textContent());

    // 2. Class Selector
    const container = page.locator('.container');

    // 3. ID Selector
    const spiceDropdown = page.locator('#spices-select-single');

    // 4. Attribute Selector
    const submitBtn = page.locator('[type="submit"]');

    // 5. Descendant Selector (form inside a div, etc)
    const options = page.locator('form select > option');

    // 6. Direct child selector
    const firstOption = page.locator('select#spices-select-single > option:nth-child(1)');

    // 7. Playwright built-in locators
    // Get by Role
    const selectElement = page.getByRole('combobox');

    // Get by Text
    const label = page.getByText('Spices');

    // Using locator actions
    await spiceDropdown.selectOption('garlic');
});
