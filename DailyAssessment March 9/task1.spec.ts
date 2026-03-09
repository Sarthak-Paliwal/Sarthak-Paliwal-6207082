import {test,expect} from '@playwright/test';
test("Task 1", async ({ page }) => {
    await page.setDefaultTimeout(20000);
  await page.goto("https://demoapps.qspiders.com/ui/login");
  const email=await page.getByPlaceholder("Enter your email");
  await expect(email).toBeVisible();
  await email.fill("student@gmail.com");
  await expect(email).toHaveValue("student@gmail.com");
  const password=await page.getByPlaceholder("Enter your password");
  await expect(password).toBeEnabled();
  await password.fill("Password123");

  await page.getByText("Login").first().click();
  await page.screenshot({ path: "screenshot/Task1.png" });
});