import { test } from '@playwright/test';

test("browser controls",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    // let ob=await page.viewportSize();
    // console.log(ob);

    // await page.setViewportSize({width:2400,height:2000})
    // console.log(await page.viewportSize());
    await page.goto("https://linkedin.com")
    let time=new Date().getTime();
    // await page.screenshot({path:`linkedin/${time}.png`});
    
    // let title=await page.title();
    // console.log(title);
    
    // let url=await page.url();
    // console.log(url);
    
    console.log(await context.cookies());
    
    
    
    
    
})
