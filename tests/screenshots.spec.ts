import {test,expect} from "@playwright/test"

test('Capture Screenshots',async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const timestamp = Date.now();

    //page screenshot
    //await page.screenshot({path:'screenshots/homepage' +timestamp+ '.png'});

    //full page screenshot
    //await page.screenshot({path:'screenshots/fullpage' +timestamp+ '.png', fullPage:true});

    //Capture screenshot of specific element(e.g. logo or section)
    //const logo = page.getByRole('img', { name: 'Tricentis Demo Web Shop' });
    //await logo.screenshot({path:'screenshots/logo' +timestamp+ '.png'});

    await page.locator('div.product-grid.home-page-product-grid:visible').screenshot({path:'screenshots/featuredproduct' +timestamp+ '.png'});

})

test.only('Screenshots from config',async ({page})=>{

    
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123X'); //password incorrect
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

})