import {test,expect,Locator} from "@playwright/test"

test("Verify Hidden Dropdown",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Login 

    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    //click on PIM

    await page.getByText('PIM').click();

    //Click on Job title Dropdown

    await page.locator('form i').nth(2).click();

    await page.waitForTimeout(3000);
    //Capture all options from dropdown

    const drpOptions:Locator = page.locator("div[role='listbox'] span");

    const count:number = await drpOptions.count();
    console.log(count);
    //console.log(await drpOptions.allTextContents());

    
    for(let i=0; i<count;i++)
        {
            //console.log(await drpOptions.nth(i).textContent());
            //console.log(await drpOptions.nth(i).innerText());
           const text:string = await drpOptions.nth(i).innerText();

           if(text === 'QA Lead')
            {
                await drpOptions.nth(i).click();
                break;
            }

            
        }

        await page.waitForTimeout(5000);





})