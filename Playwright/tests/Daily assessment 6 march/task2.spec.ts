import {test} from '@playwright/test';
test.only('Task 2', async ({page}) => {
  await page.goto('https://www.icc-cricket.com/rankings');
  //Odi ranking
  await page.locator("//a[@text='mens-batting-rankings']").click();
  await page.locator("(//a[@title='full rankings'])").nth(5).click();
  //david warner retired so he no longer appears so i searched David Miller
   const rating=await page.locator("(//tr[@class='first:h-25 first:bg-logo-grey h-12 shadow-[0px_-1px_0px_0px_#0000001A_inset] odd:bg-logo-grey'])[45]/descendant::span[@class='text-[10px] lg:text-xs leading-140 font-extrabold uppercase text-blue-950']").textContent();
  console.log("Player Rating: " + rating);

})