import {test,expect,Locator} from "@playwright/test"

test('Verify Sorting of Dropdown',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownOptions:Locator = page.locator('#animals>option');//sorted
    //const dropdownOptions:Locator = page.locator('#colors>option'); //not sorted
   
    const dropdownText : Array<string>= (await dropdownOptions.allTextContents()).map(text=>text.trim());

    console.log(dropdownText);

    const originalList:Array<string> = [...dropdownText];
    const sortedList:Array<string> = [...dropdownText].sort(); //It will change the original list also as in array it is mutable to avoid we are using spread operator

    console.log('Original list:',originalList);
    console.log('sorted list:',sortedList);

    expect(originalList).toEqual(sortedList);

    //await page.waitForTimeout(3000);
})