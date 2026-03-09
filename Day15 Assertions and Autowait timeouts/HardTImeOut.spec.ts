import { test } from "@playwright/test";
test("username",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    //?locate using css Id
    await page.locator("input#username").fill("student");
    await page.waitForTimeout(10000);
    await page.locator("input#password").fill("Password123");
    await page.waitForTimeout(10000);

    await page.locator("button#submit").click();
    await page.waitForTimeout(10000);

    await page.pause(); 
    //?locate using css class
    await page.locator("a.wp-block-button__link").click();
    console.log("Login logout Successful");
    
})