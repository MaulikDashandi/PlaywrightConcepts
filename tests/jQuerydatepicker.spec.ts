import {test,expect,Locator,Page} from "@playwright/test"

const selectDate = async (targetYear:string, targetMonth:string, tragetDate:string, page:Page, isFuture:boolean)=>{

        while(true)
        {
            const currentMonth:string = await page.locator('.ui-datepicker-month').innerText();
            const currentYear:string = await page.locator('.ui-datepicker-year').innerText();

            if(currentMonth === targetMonth && currentYear === targetYear)
                {
                    break;
                }
                else
                
                if(isFuture===true)
                    {
                        //Future date
                        await page.locator('.ui-datepicker-next').click();
                    }
                else
                    {
                        //Past date
                        await page.locator('.ui-datepicker-prev').click();
                    }
                        
                    //await page.waitForTimeout(4000);
        }


    const allDates:Array<Locator> =await page.locator('.ui-datepicker-calendar td').all();

    for(let dt of allDates)
        {
            const dateText:string = await dt.innerText();

            if(dateText === tragetDate)
                {
                    await dt.click();
                    break;
                }
        }
}

test('Verify jQuery Date Picker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const datePickerbox:Locator = page.locator('#datepicker');

    await expect(datePickerbox).toBeVisible();


    //Approach 1 : Using fill method
    //await datePickerbox.fill('04/20/2026');


    //Approach 2 : Using date picker

    await datePickerbox.click();

    //Future target date
    
    const year = '2028';
    const month = 'May';
    const date = '10';
    

    //Past target date
    /*
    const year = '2020';
    const month = 'May';
    const date = '10';
    */

    selectDate(year,month,date,page,true);

    const expectedDate = '05/10/2028'; //mm/dd/yyyy
    expect(datePickerbox).toHaveValue('05/10/2028');

    await page.waitForTimeout(4000);

})