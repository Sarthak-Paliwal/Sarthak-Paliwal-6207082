import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test.only("Write excel data",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../testdata/excel2.xlsx"))
    let sheet=await book.getWorksheet("Sheet3")
    if(!sheet){
        sheet=await book.addWorksheet("Sheet3")
    }
    sheet.getRow(1).getCell(1).value="Playwright";

    await book.xlsx.writeFile(path.join(__dirname,"../testdata/excel2.xlsx"));
})