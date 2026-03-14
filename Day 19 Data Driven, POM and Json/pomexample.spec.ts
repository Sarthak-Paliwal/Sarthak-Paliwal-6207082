import { test, expect } from '@playwright/test';
import example from "../pom/example.page.ts"
import path from "path"
import fs from "fs"

const jsonData2 = fs.readFileSync(path.join(__dirname, './testdata/login.json'));
let data2=JSON.parse(jsonData2)
test('Pom', async ({ page }) => {
    let examplepage=new example(page);
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill(data2.username);
    await page.locator("#password").fill(data2.password);
    await page.locator("#submit").click();

});

