//spec means specification files
import {test} from "@playwright/test"

//!fixture is a setup block of code which is reusable

//!--types--

//?page


test("title0", async ({page})=>{
    await page.goto("https://www.amazon.in");
    await page.locator('input#twotabsearchtextbox').fill("shoes")
})


//?browser

test("title2", async ({browser})=>{
     let context=await browser.newContext();
    let page=await context.newPage();

    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill("shoes")
    await page.pause()
    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill("shoes")
});


//?context

// test.fixme("title3", async ({context})=>{

//     let page=await context.newPage();

//     await page.goto("https://www.amazon.in/");
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
// })


//?browsername

// test("title4", async ({browser,browserName})=>{

//      let context=await browser.newContext();
//     let page=await context.newPage();

//     await page.goto("https://www.amazon.in/");
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
//     console.log(browserName);
    
// })


// test("title", async ({browser,browserName})=>{

//      let context=await browser.newContext();
//     let page2=await context.newPage();

//     page2.goto("https://www.flipkart.com/");
//     // await page.locator('input#twotabsearchtextbox').fill("shoes")
//     console.log(browserName);

// })