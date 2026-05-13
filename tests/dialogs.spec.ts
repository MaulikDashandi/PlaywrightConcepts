//alert(), confirn(), prompt() 

import {test,expect,Locator} from "@playwright/test"

test('Handle Simple Dialog', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Trigger event which capture dialog for further actions 

    page.on('dialog', (dialog)=>{

        console.log('Dialog type: ',dialog.type());
        expect(dialog.type()).toContain('alert');
        console.log('Dialog message: ',dialog.message());
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    })

    await page.locator('#alertBtn').click(); //Opens dialog

    await page.waitForTimeout(5000);

})


test('Handle Confirmation Dialog', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Trigger event which capture dialog for further actions 

    page.on('dialog', (dialog)=>{

        console.log('Dialog type: ',dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log('Dialog message: ',dialog.message());
        expect(dialog.message()).toContain('Press a button!');
        dialog.accept();
        //dialog.dismiss();
    })

    await page.locator('#confirmBtn').click(); //Opens dialog

    const text:string = await page.locator('#demo').innerText();
    console.log(text);
    //expect(text).toContain('You pressed Cancel!');
    expect(text).toContain('You pressed OK!');

    await page.waitForTimeout(5000);

})

test.only('Handle Prompt Dialog', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Trigger event which capture dialog for further actions 

    page.on('dialog', (dialog)=>{

        console.log('Dialog type: ',dialog.type());
        expect(dialog.type()).toContain('prompt');
        console.log('Dialog message: ',dialog.message());
        expect(dialog.message()).toContain('Please enter your name:');

        //Input box default value
        expect(dialog.defaultValue()).toContain('Harry Potter');

        dialog.accept('Maulik'); //Passing param 
        //dialog.dismiss();
    })

    await page.locator('#promptBtn').click(); //Opens dialog

    const text:string = await page.locator('#demo').innerText();
    console.log(text);
    
    expect(page.locator('#demo')).toHaveText('Hello Maulik! How are you today?');

    await page.waitForTimeout(5000);

})