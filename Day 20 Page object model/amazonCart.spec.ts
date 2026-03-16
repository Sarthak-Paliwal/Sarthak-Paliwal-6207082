import path from "path"
import fs from "fs"
import {test} from '@playwright/test';
import Amazon from '../pom/amazon.page.ts'
const jsonData = fs.readFileSync(path.join(__dirname, './testdata/data.json'), 'utf-8');
let data=JSON.parse(jsonData)
test('Amazon', async ({ page }) => {
    await page.goto(data.url);
    let amazonPage=new Amazon(page);
    amazonPage.searchProduct(data);  
    amazonPage.filterProduct(data);

   
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator('//div[@class="a-section aok-relative s-image-fixed-height"]/img').nth(4).click()
    ]) 
    await page2.locator("select#quantity").selectOption({label:data.quantity})
    await page2.locator("#add-to-cart-button").nth(1).click();
        
})
    