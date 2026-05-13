import {test,expect} from "@playwright/test";

test("Verify flow",async ({page})=>{

    //Nevigate to Url
    await page.goto("https://staging.bluebadgers.co.uk/");

    //Click on Register or sign in
    await page.getByRole("link",{name :'Register or Sign In'}).click();

    //Click on Reg
    await page.getByRole("link",{name :'Register here'}).click();

    //Join As BB Member
    await page.getByRole("link",{name :'Register Now'}).click();

    //Fill Registration form - using page.getByLable()

    await page.getByLabel("Username *").fill("Member26March");
    await page.getByLabel("Password *").fill("Member26March@123");
    await page.getByLabel("Confirm Password *").fill("Member26March@123");

    


})