import {test} from '@playwright/test';
test('Task 1', async ({page}) => {
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator("//a[text()='All Athletes']").click();
    const medalCount=await page.locator("//li[@data-row-id='all-athletes-table-row-2']/descendant::span[@data-cy='ocs-text-module']").first().textContent();
    console.log("Medal Count: " + medalCount);
})