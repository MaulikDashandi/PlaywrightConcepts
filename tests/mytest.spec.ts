import {test,expect} from "@playwright/test";

//
test("testTitle",async ({page})=>{
    
    await page.goto("https://bluebadgers.co.uk/");

    let pTitle:string = await page.title();
    console.log(pTitle);

    await expect(page).toHaveTitle("Blue Badgers – Huge Savings, Made Accessible.");

})