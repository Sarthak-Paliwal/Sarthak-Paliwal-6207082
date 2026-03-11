// import {test} from '@playwright/test'
// test("Browser control",async({browser})=>{
//     const context=await browser.newContext();
//     const page=await context.newPage();
//     console.log(await page.viewportSize());
//     await page.setViewportSize({height:1280,width:720})
//     await page.goto("https://www.google.com");
//     console.log(await page.title());
//     console.log(await page.url());

    
    
    
    
     
// })
// test("Cookies",async({browser})=>{
//     const context=await browser.newContext();
//     const page=await context.newPage();
//     await page.goto("https://www.flipkart.com");
//     // await page.locator('#btn').click();

//     const cookies=await context.cookies();
//     await context.clearCookies();
//     console.log();
    
//     console.log(cookies);
    
// })

import {test} from "@playwright/test"
test("Present",async({browser})=>{
    //?newContext()
    const context=await browser.newContext();
    const page=await context.newPage();

    //goto
    await page.goto("https://www.google.com")
    // console.log(page.title());
    // console.log(page.url());

    // console.log(page.viewportSize());
    await page.setViewportSize({height:1240,width:720});
    // console.log(page.viewportSize());
    const cookie=await context.cookies();
    console.log(cookie);
    
})
