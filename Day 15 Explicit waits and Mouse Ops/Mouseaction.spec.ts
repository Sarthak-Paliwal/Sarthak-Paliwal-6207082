import {test} from '@playwright/test';
test('Mouse action', async({page})=>{
    
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2');
    //! Double click action
    await page.locator('#btn_a').dblclick();
    //! click action with options
    await page.locator('#btn_a').click({clickCount: 2}); //clickCount: 2 will perform double click action
    await page.locator('#btn_a').click({button:'right'});//take argument left | right | middle
    await page.locator('#btn_a').click({force:true}); //force:true will perform click action even if the element is not visible or not enabled
    
    //! Click and hold action (Single click)
    await page.locator('@btn_a').hover();
    await page.mouse.down(); //click and hold action
    await page.mouse.up(); //release the mouse button


    
})
test("Hover",async({page})=>{
    page.goto('https://demoapps.qspiders.com/ui/hover/hover?sublist=2');
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover();
})

//! Move Method
//?await page.mouse.move(100,100); 
//Move the mouse to the specified coordinates (x,y) on the page