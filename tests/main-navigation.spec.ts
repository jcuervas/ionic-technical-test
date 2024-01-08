import { test, expect } from '@playwright/test';

test.beforeEach('Open', async ({ page }) => {
  await page.goto('/');
});

test('should navigate to Tab 1 and display its content', async ({ page }) => {
  await page.click('ion-tab-button[tab="tab1"]');
  await page.waitForSelector('app-tab1');
  const tab1Content = await page.$eval('app-tab1', (el) => el.textContent);
  expect(tab1Content).toContain('Tab 1');
});

test('should navigate to Tab 2 and display its content', async ({ page }) => {
  await page.click('ion-tab-button[tab="tab2"]');
  await page.waitForSelector('app-tab2');
  const tab2Content = await page.$eval('app-tab2', (el) => el.textContent);
  expect(tab2Content).toContain('Tab 2');
});

test('should navigate to Tab 3 and display its content', async ({ page }) => {
  await page.click('ion-tab-button[tab="tab3"]');
  await page.waitForSelector('app-tab3');
  const tab3Content = await page.$eval('app-tab3', (el) => el.textContent);
  expect(tab3Content).toContain('Tab 3');
});
