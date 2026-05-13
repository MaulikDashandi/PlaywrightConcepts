import {test,expect,Locator} from "@playwright/test"

test('Verify Dynamic Table',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-table');

    const table:Locator = page.locator('.table.table-striped tbody');

    //await page.waitForTimeout(6000);

    await expect(table).toBeVisible();

    //Step-1 : For Chrome process get value of CPU load.

    //Read each row to check chrome presence

    const tableRows:Array<Locator> = await table.locator('tr').all();
    console.log('total rows: ',tableRows.length);

    expect(tableRows).toHaveLength(4);

    let cpuLoad = ''; //will use later for validation so defined outside of for loop
    for(const row of tableRows)
        {
            const browserName:string = await row.locator('td').nth(0).innerText();

            if(browserName === 'Chrome')
                {
                     
                    //const cpuLoad:string = await row.locator('td:has-text("%")').innerText(); //Approach 1
                    cpuLoad = await row.locator('td',{hasText:'%'}).innerText(); //Approach 2
                    console.log(cpuLoad);
                }
        }

    //Step-1 : Compare it with value in the yellow label.

    const expValue:string = await page.locator('#chrome-cpu').innerText();

    if(expValue.includes(cpuLoad))
        {
            console.log('cpu load of chrome is same');
        }
        else
            {
                console.log('cpu load of chrome is not same');
            }


            expect(expValue).toContain(cpuLoad);
})