import { test, expect } from '@playwright/test'
//Standard dropdown
test("Dropdown", async ({ page }) => {

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");

    const dropd = page.locator('#country_code')
    await dropd.selectOption({index:7});
    await expect(dropd).toHaveValue("+91")

    const phone = page.locator('#phone')
    await phone.fill("9876789878")
    await expect(phone).toHaveValue("9876789878")

    const radio = page.locator('#male')
    await radio.check()
    await expect(radio).toBeChecked()

    await page.locator('#select3').selectOption({label:"India"})
    await page.locator('#select5').selectOption({label:"Rajasthan"})

    await page.locator('(//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"])[3]')
        .selectOption({label:"Jhalawar"})

})

//Multi select Dropdown
test("MultiSelect", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    await page.locator('#select-multiple-native').selectOption([{value:"Mens Cotton Jacket"},{value:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}]);
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click();

})

// Custom Dropdown
test("Custom",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes");
    await page.locator('//div[@class="sort-sortBy"]').hover();
    await page.locator('//label[@class="sort-label "]')
    const allLabels=await page.locator('//label[@class="sort-label "]').all();
    for(let locate of allLabels){
        let text=await locate.textContent();
        console.log(text);
        if(text?.includes("Better ")){
            await locate.click();
            break;
        }

        
        
    }
    
})
//Auto Suggestion
test.only("Auto Suggest",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("input#twotabsearchtextbox").fill("Shoes");
    const search=await page.locator('//div[@class="left-pane-results-container"]/div').all();
    for(let locate of search){
        const text=await locate.textContent();
        if(text?.includes("women")){
            await locate.click();
            break;
        }
    }
})