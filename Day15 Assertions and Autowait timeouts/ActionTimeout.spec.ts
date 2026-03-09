import { test } from '@playwright/test';

//! to set timeout for complete file block
test.use({actionTimeout:15000})
//! To set timeout for any methods 
test('test1', async ({page}) => {
    await page.goto('https://www.amazon.in');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes',{timeout:5000});
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    
});

//! to set timeout for complete test block
test('test2', async ({page}) => {
    await page.setDefaultTimeout(10000);
    await page.goto('https://www.amazon.in');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes',{timeout:5000});
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    
});
//!hard code waits
test('test 3', async({page}) => {
    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(5000);
  
})
