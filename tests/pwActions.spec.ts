import {test,expect,Locator} from "@playwright/test"

//Text input/Text box/ Input box

test('Text input Actions',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

   //page.locator('#name').fill('Test Name');

   const nameTextBox:Locator = page.locator('#name');

    await expect(nameTextBox).toBeVisible(); //Verify if text box is visible or not

    await expect(nameTextBox).toBeEnabled() //Verify if text box is enable or not

    await nameTextBox.fill('Test Name'); //Enter the value

    const maxLength: null|string = await nameTextBox.getAttribute('maxlength');

    expect(maxLength).toBe("15");

    await nameTextBox.fill('Test Name');

    const nameValue:string = await nameTextBox.inputValue();

    console.log('Input value of First name: ',nameValue); //It will fetch/returns the input value that we recently added into text box

    expect(nameValue).toBe('Test Name');

    await page.waitForTimeout(3000);

})

//Radio buttons

test('Radio buttons',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //const maleRadio:Locator = page.getByRole('radio',{name:'Male'});
    const maleRadio:Locator = page.locator('#male');

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check();

    //expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();

    await page.waitForTimeout(3000);
})

//Checkboxes

test.only('Checkbox Actions',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckbox:Locator = page.getByLabel('Sunday');
    sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    //2.Capture all the checkboxes & assert(validate) each checked or not

    const days:Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const checkboxes:Array<Locator> = days.map(index => page.getByLabel(index));

    expect(checkboxes.length).toBe(7);

    

    //3.Select all the checkboxes and asert all

    for(const checkbox of checkboxes)
        {
            await checkbox.check();
            expect(checkbox).toBeChecked();
        }


    //4.unselect last 3 checkboxes and asert all
    
    for(const checkbox of checkboxes.slice(-3))
        {
            await checkbox.uncheck();
            expect(checkbox).not.toBeChecked();
        }

    
    //4.Randomly selects checkboxes - select checkboxes by index (1,3,6) ans assert
    
    const indexes:Array<number> = [1,3,6];

        for(const i of indexes)
            {
                await checkboxes[i].check();
                expect(checkboxes[i]).toBeChecked();
            }

    await page.waitForTimeout(3000);

})