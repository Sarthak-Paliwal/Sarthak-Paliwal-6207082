import {test} from '@playwright/test';
test('Explicit wait', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const link = await page.locator('input#username');
    await link.waitFor({timeout:20000,state:"detached"}); //? state can be visible, hidden, attached,detached  
    await link.click();
    page.pause();
})

//Page waits
test('Page wait', async ({browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    let [page2]=await Promise.all([
        page.waitForNavigation(),
        page.locator('(//div[@class="bLCLBY nr15la"])[1]').click()
    ]);
    console.log(await page.url());
    console.log(await page2.url());
    
    
})
