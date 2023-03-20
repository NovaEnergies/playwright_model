import { test, expect } from '@playwright/test';

test('Selectors test', async({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Andrey');
    await page.click('//input[@id="password"]');
    await page.locator('//input[@id="password"]').fill('StrongPass94')
    await page.click('input:has-text("LOGIN")');
});