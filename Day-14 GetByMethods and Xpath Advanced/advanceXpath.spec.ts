import {test} from '@playwright/test';
test("Advance Xpath", async ({page}) => {
    await page.goto("https://www.amazon.in/");
    // Absolute Xpath
   await page.locator("//input[@id='twotabsearchtextbox']").fill("Samsung phones");
  await page.locator("//input[@id='nav-search-submit-button']").click();
 const name=await page.locator('//h2[@aria-label="Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger"]').first().textContent();
console.log(name);

});