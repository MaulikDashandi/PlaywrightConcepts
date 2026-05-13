import {test,expect,Locator} from "@playwright/test"

test('Verify static table', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator = page.locator("table[name='BookTable'] tbody");

    await expect(table).toBeVisible();

    //1) Count total rows

    const rows:Locator = table.locator("tr");

    await expect(rows).toHaveCount(7);

    const rowsCount:number = await rows.count();
    console.log('number of rows: ',rowsCount);
    expect(rowsCount).toBe(7);

    //2) Count total columns

    const columns:Locator = rows.locator("th");
    await expect(columns).toHaveCount(4);

    const columnsCount:number = await columns.count();
    console.log('number of columns: ',columnsCount);
    expect(columnsCount).toBe(4);

    //3) Read data from specific row (2nd or any) 

    const secondRowCells:Locator = rows.nth(1).locator('td');

    const secondRowTexts:Array<string> = await secondRowCells.allInnerTexts();
    console.log(secondRowTexts);
    await expect(secondRowCells).toHaveText([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])

    for(let secondRowText of secondRowTexts)
        {
            console.log(secondRowText);
        }

    //4) Read all data from table(excluding header)

    console.log("---------------------printing all columns data-----------------------")

    const allRawData:Array<Locator> = await rows.all();

    for(let row of allRawData.slice(0))
        {
           const colsData:Array<string> = await row.locator('td').allInnerTexts();
           console.log(colsData.join('\t'));
        }


    //5) Print book name based on Author name(mukesh)

    console.log('------------------Printing book name based on Author name------------------------');

        const mukeshBooks:Array<string> = [];

    for(let row of allRawData.slice(1))
        {
           const cells:Array<string> = await row.locator('td').allInnerTexts();
           const author = cells[1];
           const books = cells[0];


           if(author === 'Mukesh')
            {
                console.log(`${author} \t ${books}`);
                mukeshBooks.push(books);
            }
           
        }

        expect(mukeshBooks).toHaveLength(2);

    //6) Calculate the total price of all the books
    
    let totalPrice:number = 0;
     for(let row of allRawData.slice(1))
        {
           const cells:Array<string> = await row.locator('td').allInnerTexts();
           const price:string = cells[3];

           totalPrice = totalPrice + parseInt(price);
           
        }

        console.log(totalPrice);

})