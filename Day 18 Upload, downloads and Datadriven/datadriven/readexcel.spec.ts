import { test, expect } from '@playwright/test';
import path from "path"
import excel from "exceljs"
test('Excel Read', async ({ page }) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
    const sheet=await book.getWorksheet("Sheet1")
    //!Way 1 to read data
    const value=await sheet?.getRow(1).getCell(1).toString()
    //!Way 2 to read data
    const value2=await sheet?.getRow(1).getCell(1).value
    
    

    console.log(value);
    
});

test('Excel Read2', async ({ page }) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/excel2.xlsx"))
    const sheet=await book.getWorksheet("Sheet1")
    for(let i=1;i<=sheet?.rowCount!;i++){
        for(let j=1;j<=sheet?.columnCount!;j++){
            const cellValue=await sheet?.getRow(i).getCell(j).toString()
            console.log(cellValue);
            
        }
    }
    
    

    
});

test.only('Sheet3', async ({ page }) => {
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/excel2.xlsx"))
     const sheet=await book.getWorksheet("Sheet2")
     let url=sheet?.getRow(1).getCell(1).toString()
    await page.goto(url!);
    const name=await page.locator("#name")
    const email=await page.locator("#email")
    const passwd=await page.locator("#password")
    for(let i=1;i<=sheet?.rowCount!;i++){
        const nameValue=sheet?.getRow(i).getCell(2).toString()
        const emailValue=sheet?.getRow(i).getCell(3).toString()
        const passValue=sheet?.getRow(i).getCell(4).toString()
        await name.fill(nameValue!)
        await email.fill(emailValue!)
        await passwd.fill(passValue!)
        


    }
});

