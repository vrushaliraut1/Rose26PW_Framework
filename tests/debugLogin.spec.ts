import { test, expect } from '@playwright/test';

test('Debug login page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.pause();

    console.log('URL:', page.url());

    const username = page.locator('input[name="username"]');

    console.log('Username count:', await username.count());

    await expect(username).toBeVisible();

    await username.fill('Admin');

    await page.pause();
});