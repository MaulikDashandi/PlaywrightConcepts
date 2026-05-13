/*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByText() to locate by text content.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

 */

import {test,expect, Locator} from "@playwright/test";

test("Verify playwright locators",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    //1) page.getByAltText() --> Mostly used for images,area which has alt text attribute
    const logo:Locator = page.getByAltText("nopCommerce demo store");

    await expect(logo).toBeVisible();

    //2) page.getByText() --> Used for non interactive elements like div,h1,span etc
    //located by visible text on web

    //const text:Locator =page.getByText("Welcome to our store");
    //await expect(text).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();


    //3)page.getByRole() -->(Locating by Role) Used for interactive elements like buttons,input box,radio btn,checkbox , dropdown

    //Click on Register 

    await page.getByRole("link",{name:'Register'}).click();
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();

    //4) page.getByLabel() --> mostly use for forms(register,login labels)

    await page.getByLabel('First name:').fill("john");
    await page.getByLabel('Last name:').fill("kenedy");
    await page.getByLabel('Email:').fill("test@gmail.com");

    //5) page.getByPlaceholde() 

    await page.getByPlaceholder("Search store").fill("macbook");

    
    

})