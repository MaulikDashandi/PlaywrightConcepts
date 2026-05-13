import {test,expect,Locator} from "@playwright/test"

test('Read data from all pages of table',async ({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

    let hasmorepages = true;

    
    while(hasmorepages)
        {
            const rows:Array<Locator> = await page.locator('#example tbody tr').all();

            for(let row of rows)
                {
                   console.log(await row.innerText());
                }

            //button[aria-label='Next']
            //button[aria-controls='example']:has-text('›')
            //page.getByText('›')
            await page.waitForTimeout(2000);
            const nextPage:Locator = page.getByText('›');

            const isDisabled = await nextPage.getAttribute('class'); //dt-paging-button disabled next
             if(isDisabled?.includes('disabled'))
                {
                    hasmorepages = false;
                }
                else
                {
                   await nextPage.click();
                }
                      
        }

})



test('Filter the rows and Verify the rows count',async ({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

    const dropdown:Locator = page.locator('#dt-length-0');

    await dropdown.selectOption({label:'25'});

    const rows:Array<Locator> = await page.locator('#example tbody tr').all();

    expect(rows.length).toBe(25);
})


test.only('Search for specific data in a table',async ({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

    const searchBox:Locator = page.locator('#dt-search-0');

    searchBox.fill('Thor Walton');

    await page.waitForTimeout(5000);

    const rows:Array<Locator> = await page.locator('#example tbody tr').all();

    if(rows.length>=1)
        {
            let matchFound = false;
            for(let row of rows)
                {
                    const text = await row.innerText();

                    if(text.includes('Thor Walton'))
                        {
                            console.log('Record found')
                            matchFound =true;
                            break;
                        }

                }

                //expect(matchFound).toBe(true);
                expect(matchFound).toBeTruthy();

        }
        else
        {
            console.log('No rows found with search text')
        }
})