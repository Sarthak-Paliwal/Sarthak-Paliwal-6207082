import { test, expect } from '@playwright/test';
import path from 'path/win32';

test('Upload files', async ({ browser }) => {
    let context = await browser.newContext()
    const page = await context.newPage() 
    await page.goto("https://testautomationpractice.blogspot.com/") 
    await page.locator('#singleFileInput').setInputFiles('C:/Users/OMEN/Desktop/CapG/tests/date_13_03_26/uploadfile/excel.xlsx');
    await page.getByRole('button',{name: "Upload Single File"}).click()
    await page.waitForTimeout(5000)

    await page.locator('#multipleFilesInput').setInputFiles([
  'C:/Users/OMEN/Desktop/CapG/tests/date_13_03_26/uploadfile/excel.xlsx',
 'C:/Users/OMEN/Desktop/CapG/tests/date_13_03_26/uploadfile/js.js',
 'C:/Users/OMEN/Desktop/CapG/tests/date_13_03_26/uploadfile/python.py'
]);
    await page.getByRole('button',{name: "Upload Multiple Files"}).click()
    await page.waitForTimeout(5000)

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../../tests/date_13_03_26/uploadfile/excel.xlsx'));
    await page.getByRole('button',{name: "Upload Single File"}).click()
    await page.waitForTimeout(5000)
});