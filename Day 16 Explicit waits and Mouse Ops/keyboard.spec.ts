import {test} from '@playwright/test';
test.only("Keyboard Controls 1",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    let names=await page.getByPlaceholder("Enter your name").click();
await page.keyboard.press("s+a+r+t+Tab");
    await page.keyboard.press("Control+a+Control+c+Tab+Control+v");
    await page.keyboard.press("Tab");
    await page.keyboard.insertText("sarthak");
    await page.keyboard.press("Enter");
    
})
