import {test} from '@playwright/test';
test("Scroll",async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
await page.locator('input[type="checkbox"]').scrollIntoViewIfNeeded()
await page.locator('input[type="checkbox"]').check()
await page.getByText("Accept Our Policy").click();

})