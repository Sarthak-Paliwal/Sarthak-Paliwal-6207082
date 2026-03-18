import { test, expect } from '@playwright/test';

test('Custom Waits', async ({ page }) => {
    await page.goto("https://www.amazon.in")
    await page.waitForFunction(()=>{
        
    })
});



