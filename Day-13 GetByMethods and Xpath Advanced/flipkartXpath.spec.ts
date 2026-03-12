import { test } from "@playwright/test";

test("Flipkart Xpath", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  // Absolute Xpath
  const searchBar = await page
    .locator('//input[@class="nw1UBF v1zwn25"]')
    .first();
  await searchBar.fill("phones");
  await searchBar.press("Enter");
  const product = await page.locator(
    "(//div[@class='RG5Slk']) | (//div[@class='hZ3P6w DeU9vF'])"
  );
  Array.from(await product.allInnerTexts()).forEach((text) => {
    console.log(text);
  });
});
