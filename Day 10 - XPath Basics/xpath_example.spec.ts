import { test, expect } from "@playwright/test";

// XPath Basics - Examples

test("XPath - basic selectors", async ({ page }) => {
    await page.goto("https://www.amazon.in");

    // XPath by attribute
    await page.locator("//input[@id='twotabsearchtextbox']").fill("laptop");

    // XPath by text
    // await page.locator("//a[text()='Sign in']").click();

    // XPath with contains
    // await page.locator("//span[contains(text(), 'Hello')]").isVisible();
});

test("XPath - contains and starts-with", async ({ page }) => {
    await page.goto("https://www.google.com");

    // contains() - partial attribute match
    await page
        .locator("//input[contains(@class, 'search')]")
        .fill("playwright");

    // starts-with() - attribute starts with value
    // await page.locator("//input[starts-with(@name, 'q')]").fill("playwright");
});

test("XPath - parent and sibling axes", async ({ page }) => {
    await page.goto("https://example.com");

    // parent axis
    // let parent = page.locator("//input[@id='email']/parent::div");

    // following-sibling axis
    // let sibling = page.locator("//label[text()='Email']/following-sibling::input");

    // ancestor axis
    // let ancestor = page.locator("//input[@id='email']/ancestor::form");
});
