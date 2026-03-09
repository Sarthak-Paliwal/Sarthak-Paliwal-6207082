import {test} from '@playwright/test';
test('test1', async ({page}) => {
    page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').type('secret_sauce');
    console.log(await page.getByTestId('username').inputValue());
    await page.getByTestId('login-button').click();
    await page.pause();
});

//?Text content works for both direct and indirect child
//?Inner text also displays the hidden text as well
//?Input value gives the user filled value in the input field, it does not give the default value of the input field. It is used to get the value of the input field after the user has filled it.

