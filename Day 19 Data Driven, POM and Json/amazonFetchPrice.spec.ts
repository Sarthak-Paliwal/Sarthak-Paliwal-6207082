import { test, expect } from '@playwright/test';
import path from "path"
import excel from "exceljs"
test('Amazon', async ({ page }) => {
    await page.goto("https://www.amazon.in");
    await page.locator("#twotabsearchtextbox").fill("Shoes")
    await page.locator("#nav-search-submit-button").click();

    const name=await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').allTextContents();
    console.log(name);
    
    // const price=
    
});
   


