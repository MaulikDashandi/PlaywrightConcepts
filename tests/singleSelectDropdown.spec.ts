import {test,expect,Locator} from "@playwright/test"

test('Single Select Dropdown',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) Select option from dropdown (4 ways)

    //await page.locator('#country').selectOption('India'); //Using visible text
    //await page.locator('#country').selectOption({value:'uk'}); //Using value attribute of element 
    //await page.locator('#country').selectOption({label:'India'}); //Using lebel attribute
    //await page.locator('#country').selectOption({index:3}); //Using index


    //2) Verify count/number of options in dropdown

    const dropdownOptions:Locator = page.locator('#country>option');

    expect(dropdownOptions).toHaveCount(10);

    //await page.waitForTimeout(5000);

    //3) Check an option present in dropdown

    const drpText:Array<string> = (await dropdownOptions.allTextContents()).map(text => text.trim());
    //console.log(drpText);
    expect(drpText).toContain('France');

    //3) Priint all the options in console

    for(const option of drpText)
        {
            console.log(option);
        }

})