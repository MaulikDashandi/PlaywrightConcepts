import {test,expect} from "@playwright/test"

import {LoginPage} from "../pageObjects/LoginPage"
import {HomePage} from "../pageObjects/HomePage"
import {CartPage} from "../pageObjects/cartPage"

test('User can login & Add Product to cart', async({page})=>{

    await page.goto("https://demoblaze.com/");

    //Login page 
    const lp = new LoginPage(page);
    await lp.performLogin('pavanol','test@123');
    await page.waitForTimeout(2000);

    //Home page
    const hp = new HomePage(page);
    await hp.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(2000);
    await hp.gotoCart();
    

    //Cart page
    const cp = new CartPage(page);
    const isProductInCart:boolean = await cp.checkProductInCart('Samsung galaxy s6');


    expect(isProductInCart).toBe(true);
    //expect(isProductInCart).toBeTruthy();
})


