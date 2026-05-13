import {test, expect, Locator} from "@playwright/test"

test("Verify Autosuggest Dropdown",async ({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.locator('input:visible').fill("smart");

    await page.waitForTimeout(5000);
    //Get all suggested options --> ctrl+shift+p --> Emulate focused page

    const options:Locator = page.locator("ul>li");

    const optionsCount = await options.count();

    console.log(optionsCount);

    //console.log("5th option: ",await options.nth(5).innerText());

    //Printing all the options
    //const optionsText:Array<string> = await options.allTextContents();
    //console.log(optionsText);

    for(let i=0;i<optionsCount;i++)
        {
            //console.log(await options.nth(i).innerText());
            console.log(await options.nth(i).textContent());
        }


    //click on smartphone option    

    for(let i=0;i<optionsCount;i++)
        {
            const text:string | null = await options.nth(i).textContent();

            if(text==='smartphone')
                {
                    options.nth(i).click();
                    break;
                }
        }
})