import { test } from '@playwright/test';
import path from "path";

test.only("Task 4", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");

    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");

    const downloadPath = "D:/Playwright/tests/downloads";

    const [downloadFile] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button", { name: "Download" }).click()
    ]);

    const file = downloadFile.suggestedFilename();
    console.log(file);

    await downloadFile.saveAs(path.join(downloadPath, file));

});