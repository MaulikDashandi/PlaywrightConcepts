import {test,expect,Locator} from "@playwright/test"

test('Verify Dropdown contains duplicates',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //const dropdownOptions:Locator = page.locator('#colors>option'); // Having duplicates
    const dropdownOptions:Locator = page.locator('#animals>option');// !Having duplicates
    
    const dropdownText : Array<string>= (await dropdownOptions.allTextContents()).map(text=>text.trim());

   const myset = new Set<string>();         //Set --> Duplicates not allowed
   const duplicates:Array<string> = [];     //Arry --> Duplicates allowed


    for(const text of dropdownText)
        {
            if(myset.has(text))
                {
                    duplicates.push(text);
                }
            else
                {
                    myset.add(text);
                }
        }

    console.log("Duplicate options are==> ",duplicates);
    //console.log("Unique options are==> ",myset);

        if(duplicates.length>0)
            {
                console.log("Duplicate options are found", duplicates);
            }
        else
            {
                console.log("No duplicate options found..");
            }

    expect(duplicates.length).toBe(0);

    //await page.waitForTimeout(3000);
})