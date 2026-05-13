import {test,expect,Locator} from "@playwright/test"

test('Comparing methods',async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const productList:Locator = page.locator(".product-title");

    /*

    //console.log(await productList.nth(1).innerText()); //14.1-inch Laptop
    //console.log(await productList.nth(1).textContent()); //            14.1-inch Laptop


    const productCount:number = await productList.count();

    for(let i=0; i<productCount; i++)
        {
            //const productName:string = await productList.nth(i).innerText(); //Return text without any spaces or any hidden elements
            //console.log(productName);

            const productName: null|string = await productList.nth(i).textContent(); //Return text with spaces or hidden elements
            console.log(productName?.trim());

        }

    */

    //2) allTextContents() and allInnerText()

    //const productNames: Array<string> = await productList.allInnerTexts(); //It will return string of array 
    //console.log(productNames);

    /*
    const productNames: Array<string> = await productList.allTextContents();//It will return string of array with spaces that we need to trim & map
    //console.log(productNames);

    for(let pnames of productNames)
        {
            console.log(pnames.trim());
        }

    */

    /*
    const productNames: Array<string> = await productList.allTextContents();//It will return string of array with spaces that we need to trim & map
    //console.log(productNames);
    const trimName: Array<string> = productNames.map(text=>text.trim());

    for(let pnames of trimName)
        {
            console.log(pnames);
        }

    */

    //3) all() - convert locators to Locator type of an array

    const productLocators : Array<Locator> = await productList.all(); //Locators of 6 products

    console.log(productLocators);

    console.log(await productLocators[0].innerText());

    for(let ptext of productLocators)
        {
            console.log(await ptext.innerText());
        }

     for(let i in productLocators)
        {
            console.log(await productLocators[i].innerText());
        }

})