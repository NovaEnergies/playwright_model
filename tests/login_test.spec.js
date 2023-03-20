import { test, expect } from '@playwright/test';

test('Login demo 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.getByPlaceholder('Enter your username').fill('TheShrike');
    await page.getByPlaceholder('Enter your password').fill('StrongPass94');
    await page.click('text=Sign in');
    await page.locator('text=ACME').isVisible();
    // await expect(page.locator('text=ACME').toHaveCount(1);
});

test('Login demo 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByRole('banner').getByText('Paul Collings').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Login demo 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Control+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Control+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByLabel('Remember me?').check();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/admin/');
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
});