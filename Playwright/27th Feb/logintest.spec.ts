import {test} from "@playwright/test"

test("username",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    //?locate using css Id
    await page.locator("input#username").fill("student");
    await page.waitForTimeout(2000);
    await page.locator("input#password").fill("Password123");
    await page.waitForTimeout(2000);

    await page.locator("button#submit").click();
    await page.waitForTimeout(2000);

    await page.pause(); 
    //?locate using css class
    await page.locator("a.wp-block-button__link").click();
    console.log("Login logout Successful");
    
})
test.only("Fill form",async({page})=>{
    await page.goto("file:///D:/Training%20Testing/16th%20feb%20to%2026th%20feb/classwork/two.html");
   
    await page.locator("input#name").fill("John");
    await page.locator("input#lname").fill("Doe");
    await page.locator("#gender[type='radio'][value='male']").check();
    await page.locator("textarea#address").fill("123 Main St");
    await page.locator("input#email").fill("johndoe@gmail.com");
    await page.locator("button").click();
})
