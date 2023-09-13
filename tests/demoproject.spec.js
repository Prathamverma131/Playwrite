var {test,expect} = require('@playwright/test');



test('demo-automation', async ({page})=>{
    //Redirect to website with mentioned link
    await page.goto('https://www.saucedemo.com');
   //Fill username
    await page.fill('[data-test="username"]','standard_user');
    //Fill password
    await page.fill('[data-test="password"]','secret_sauce');
    //Click on login button
    await page.click('[data-test="login-button"]'); 
    //Click on dropdown
    await page.getByText('Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
    //Select from dropdown
    await page.locator('[data-test="product_sort_container"]').selectOption('Price (low to high)');
    //Wait for 2 sec {1000=1sec}
    await page.waitForTimeout(2000);
    //Click on add item
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    //Item added
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    //Item added
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    //Item removed
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    //Click on add to card
    await page.locator('a').filter({ hasText: '2' }).click();

    //Verifying page title
    await expect(page).toHaveTitle('Swag Labs');
    //Click on checkout
    await page.locator('[data-test="checkout"]').click();
    //Fill First name
    await page.fill('[data-test="firstName"]','Pratham');
    //Fill last name
    await page.fill('[data-test="lastName"]','Verma');
    //Fill zipcode
    await page.fill('[data-test="postalCode"]','263139');
    //Click on continue
    await page.locator('[data-test="continue"]').click();
    //Click on finish
    await page.locator('[data-test="finish"]').click();
    //Wait for 7 sec
    await page.waitForTimeout(7000);
    //Back to Home
    await page.locator('[data-test="back-to-products"]');

} )