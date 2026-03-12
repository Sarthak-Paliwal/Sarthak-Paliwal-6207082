import {test} from '@playwright/test'
//! Handling all Dialog at once

test('test name', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",dialog=>{
        dialog.accept("Sarthak");
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.pause();
});



//! Handling all Dialog at once with condition

test.only('hello', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async d=>{
        if(d.type()=="alert" ){
            await d.accept();
        }
        else if(d.type()=="confirm"){
            await d.accept();
        }
        else{
            if(d.defaultValue()=='Harry Potter'){
                await d.accept(d.defaultValue());
            }
            else{
                await d.accept('Tom');
            }
            
            
        }
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.pause();
});


//! Handling each Dialog seperately
test("Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.once('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    page.once('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    page.once('dialog',async dialog=>{
        await dialog.accept("Sarthak");
    })
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.pause();
    await page.waitForTimeout(12000);
    

})







