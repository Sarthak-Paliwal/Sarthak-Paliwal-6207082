import { test } from "@playwright/test";
test("Mouse action", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
  await page.locator("#circle").hover();
  await page.mouse.down();
  await page.waitForTimeout(5000);
  await page.mouse.up();
});

test("Disable button force click", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4"
  );
  //!Way 1
  // await page.locator('#submit').click({force:true});
  //!Way 2
  await page.locator("#submit").dispatchEvent("click");
});
//! Drag and Drop action using hover and mouse action
test("Drag and Drop", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2"
  );
  await page.getByText("Mobile Charger").hover();
  await page.mouse.down();
  await page.getByText("Mobile Accessories").hover();
  await page.mouse.up();
  await page.getByText("Mobile Cover").hover();
  await page.mouse.down();
  await page.getByText("Mobile Accessories").hover();
  await page.mouse.up();
  await page.getByText("Laptop Cover").hover();
  await page.mouse.down();
  await page.getByText("Laptop Accessories").hover();
  await page.mouse.up();
  await page.getByText("Laptop Charger").hover();
  await page.mouse.down();
  await page.getByText("Laptop Accessories").hover();
  await page.mouse.up();
});

//! Drag and Drop using Drag to method
test("Drag to Method", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2"
  );
  await page
    .getByText("Mobile Charger")
    .dragTo(page.getByText("Mobile Accessories"));
  await page
    .getByText("Mobile Cover")
    .dragTo(page.getByText("Mobile Accessories"));
  await page
    .getByText("Laptop Cover")
    .dragTo(page.getByText("Laptop Accessories"));
  await page
    .getByText("Laptop Charger")
    .dragTo(page.getByText("Laptop Accessories"));
});
