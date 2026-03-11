import { test, expect } from "@playwright/test";

test("Task 2", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await page.locator('//select[@class="product_sort_container"]').selectOption({ value: "lohi" });
    const addCartButton = page.locator('#add-to-cart-sauce-labs-onesie');
    await addCartButton.click();
    const removeButton=await page.locator('#remove-sauce-labs-onesie');
    await expect(removeButton).toHaveText("Remove");
    const cartCount = page.locator('.shopping_cart_badge');
    await expect(cartCount).toHaveText("1");
    await page.screenshot({path:"Daily Assessment March 11/screenshot/task2.png"});

});