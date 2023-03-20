import { test, expect } from '@playwright/test';

test.describe('Hooks and groups all tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://saucedemo.com');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test.afterAll(async ({page}) => {
        await page.close();
    })

    test('Hooks and groups homepage test', async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('#item_1_title_link').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    })

    test('Hooks and groups logout test', async ({page}) => {
        await page.getByRole('button', {name: 'Open Menu'}).click();
        await page.getByRole('link', {name: 'Logout'}).click();
    })

})