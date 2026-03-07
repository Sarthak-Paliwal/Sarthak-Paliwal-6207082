import { test } from "@playwright/test";
//TODO Fetch the price of first product from search result
test("Amazon Search", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  await page.locator("//input[@id='twotabsearchtextbox']").fill("Samsung phones");
  await page.locator("//input[@id='nav-search-submit-button']").click();
  console.log(await page.locator("(//span[@class='a-color-base'])").first().textContent());
});

