//TODO Get By Methods
//! 1 getbyText()
//! 2 getbyAltText()
//! 3 getbyLabel()
//! 4 getbyTitle()
//! 5 getbyPlaceholder()
//? All above 5 methods check partial text

//! 6 getbyRole()
//! 7 getbyTextId()

import { test } from "@playwright/test";
test("Test1", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByLabel("Username", { exact: true }).fill("student");
  //use optional property exact:true to check the complete text, if not used it will check the partial text
  await page.getByLabel("Password", { exact: true }).fill("Password123");
  await page.getByText("Submit").first().click();
  await page.getByText("Log out").click();
});

//?Using getByRole() method
test("Test2", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page
    .getByRole("textbox", { name: "Username", exact: true })
    .fill("student");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("Password123");
  await page.getByRole("button", { name: "Submit", exact: true }).click();
  await page.getByRole("link", { name: "Log out", exact: true }).click();
});

//?Get By placeholder
test("Test3", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  await page.getByPlaceholder("Enter your name").fill("student");
  await page.getByPlaceholder("Enter Your Email").fill("student@gmail.com");
  await page.getByPlaceholder("Enter your password").fill("Password123");
  await page.getByText("Register").first().click();
});

//? Get by alt text
test.only("Test4", async ({ page }) => {
  await page.goto("https://flipkart.com/");
  await page.getByAltText("Image").first().click();
});

//? Get by test id
test('test1', async ({page}) => {
    page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').type('secret_sauce');
    await page.getByTestId('login-button').click();
    await page.pause();
});
