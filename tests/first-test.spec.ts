import { test, expect } from '@playwright/test';

test.describe('First test', async() => {
    test('Start the server and run the test',async ({page, baseURL}, testInfo) => {
        await page.goto(baseURL);
        await page.locator('#new-todo-input').fill('first');
        await page.click('text=Add');
        await expect([page.locator('//label[text()="first"]')]).toBeTruthy;
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
    });
});