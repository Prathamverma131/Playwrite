// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('w3schools',async ({page})=>{

  await page.goto('https://www.w3schools.com');
  
  await page.waitForSelector('//*[@id="main"]/div[1]/div/h1');

  await page.fill('//*[@id="search2"]','html');

  await page.waitForTimeout(2000);

  await page.click('//*[@id="learntocode_searchbtn"]');

  

  await page.waitForSelector('//*[@id="main"]/h1');

  const a= page.locator('//*[@id="main"]/h1');

  await expect(a).toHaveText('HTML Tutorial');


})
