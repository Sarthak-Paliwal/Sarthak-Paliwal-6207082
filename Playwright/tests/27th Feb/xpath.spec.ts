import { test } from "@playwright/test";

test("Flipkart practice", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    await page.locator("//input[@name='q' and not(@readonly)]").fill("iPhone 14 Pro Max");
    await page.locator("//[@id='container']/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/div/button").click();
    await page.locator('//[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]').click();
    await page.locator('//[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[19]/div/div/div/div/div/div-div-div-div-div-div-div-div-div-div-div-div-div-div-div-div-div-1]').click();
})