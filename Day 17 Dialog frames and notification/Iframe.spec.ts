import {test} from '@playwright/test'

test("Iframe",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frames=await page.frames();
    // for(let i of frames){
    //     console.log(await i.title());
        
    // }
    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    //! FIll method can take two arguments 1st xpath & then test to fill
    await frame?.fill('//input[@name="mytext1"]',"hjfghdjg");
    await page.pause();
})

test("Nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    const iframe=await frame3?.frameLocator('//iframe')
    await iframe?.locator('//div[@class="AB7Lab Id5V1"]').first().click();
})

