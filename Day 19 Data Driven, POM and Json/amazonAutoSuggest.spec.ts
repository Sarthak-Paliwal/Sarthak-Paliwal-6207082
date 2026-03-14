import { test, expect } from '@playwright/test';
import path from "path"
import excel from "exceljs"
test('Amazon', async ({ page }) => {
    await page.goto("https://www.amazon.in");
    await page.locator("#twotabsearchtextbox").fill("Shoes")
    await page.waitForSelector(".s-suggestion",{timeout:5000})
    const suggestions=await page.locator("//div[@class='s-suggestion s-suggestion-ellipsis-direction']").allTextContents();
    console.log(suggestions);
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, './testdata/excel2.xlsx'));
    let sheet=await book.getWorksheet('Sheet4')
    if(!sheet){
        sheet=await book.addWorksheet('Sheet4')
    }
    // Filling values in multiple cells in one row
    for (let i = 0; i < suggestions.length; i++) {
        sheet.getCell(1, i + 1).value = suggestions[i];
    }
    await book.xlsx.writeFile(path.join(__dirname, './testdata/excel2.xlsx'));
});
   


