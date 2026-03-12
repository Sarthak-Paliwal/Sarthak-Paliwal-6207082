import { test, expect } from '@playwright/test';

test('notification', async ({ browser }) => {
    const context=await browser.newContext({permissions:["notifications"]});
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.locator("#browNotButton").click();
    const result=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
});
