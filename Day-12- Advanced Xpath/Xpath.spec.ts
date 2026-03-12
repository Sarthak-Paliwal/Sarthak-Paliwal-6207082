import {test} from "@playwright/test";
test("test", async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.locator("//input[@id='twotabsearchtextbox']").fill("phones");
    await page.locator("//input[@id='nav-search-submit-button']").click();
    await page.locator('//div[@id="p_n_g-1003517064111/51258619031"]/descendant::ul[@id="filter-p_n_g-1003517064111"]/descendant::span[@data-csa-c-content-id="p_n_g-1003517064111/51258733031"]/descendant::i').click();
    await page.screenshot({path:"screenshot/screenshot.png"+Date.now(), fullPage:true}); 
    
    
})