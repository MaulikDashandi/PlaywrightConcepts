import {test,expect,Locator} from "@playwright/test"

test('Multiselect Dropdown',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) Select option from dropdown (4 ways)

    //await page.locator('#colors').selectOption('Red');
    //await page.locator('#colors').selectOption(['Red','Blue','Green']); //Using visible text
    //await page.locator('#colors').selectOption(['red','white','green']); //Using value attribute of element 
    //await page.locator('#colors').selectOption([{label:'Blue'},{label:'Green'},{label:'Yellow'}]); //Using lebel attribute
    //await page.locator('#colors').selectOption([{index:0},{index:2},{index:4}]); //Using index

    //2) Verify count/number of options in dropdown

    const dropdownOptions:Locator = page.locator('#colors>option');
    expect(dropdownOptions).toHaveCount(7);

    //3) Check an option present in dropdown

    const drpText:Array<string> = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    //console.log(drpText);
    expect(drpText).toContain('Red');

    //4) Priint all the options in console

    for(const option of drpText)
        {
            console.log(option);
        }

    await page.waitForTimeout(3000);
})