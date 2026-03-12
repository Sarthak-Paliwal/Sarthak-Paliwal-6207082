import {test,expect} from '@playwright/test';

//! toBeVisible
test('Assetions 1',async({page})=>{
await page.goto('https://www.amazon.in/');
const input=await page.locator('//input[@id="twotabsearchtextbox"]')
expect(input).toBeVisible();
input.fill("Shoes")

})

//!To have Screenshot


test('Assertion 2', async ({ page }) => {
  await page.goto('https://practicetestautomation.com');
    // await page.screenshot({ path: 'homepage.png'});
  await expect(page).toHaveScreenshot('homepage.png');
});

//! toContain
test ('Assetions 3',async({page})=>{
await page.goto('https://www.google.in/');
const title=await page.title();
expect(title).toContain("Google")
})





//! toContainText
test('Assetions 4',async({page})=>{
await page.goto('https://www.amazon.in/');
const listItem=await page.locator('//ul[@class="nav-ul"]/li')

 await expect(listItem).toContainText(["Sell","Bestsellers"])

})


//! Negating Matchers
test.only('Assetions 5',async({page})=>{
await page.goto('https://www.google.com/');
const title=await page.title();
console.log(title);

await expect(title).not.toContain("sarthak")
})


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

