import { test} from '@playwright/test';
import fs from 'fs'
import path from 'path'




const jsonData = fs.readFileSync(path.join(__dirname, './testdata/data.json'), 'utf-8');
let data=JSON.parse(jsonData)
test('Data Json 1', async ({ page }) => {
    for(let key of data2){
        console.log(`${key.greet}`);
    }
});

const jsonData2 = fs.readFileSync(path.join(__dirname, './testdata/login.json'));
let data2=JSON.parse(jsonData)

test('Data Json 2', async ({ page }) => {
    await page.goto(data2.url);
    await page.locator("#username").fill(data2.username);
    await page.locator("#password").fill(data2.password);
    await page.locator("#submit").click();


});

