const {test,expect} = require('@playwright/test');

test('sanity',async ({page})=>{

 await page.goto('https://strategy.mmp.ciotest.accenture.com/#/opp/0011862904/ssg/57');
 
 await page.waitForSelector('//*[@id="bannerLogo"]');

 await page.fill('//*[@id="i0116"]',"pratham.verma@accenture.com");

 


})