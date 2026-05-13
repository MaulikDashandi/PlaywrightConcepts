import {test,expect,Locator} from "@playwright/test"

test('Mouse Hover',async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    const hoverBtn:Locator = page.locator('.dropbtn');

    await hoverBtn.hover();

    const laptop:Locator = page.locator('.dropdown-content a:last-child');
    await laptop.hover();

    await page.waitForTimeout(5000);
})


test('Right click',async ({page})=>{


    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button:Locator = page.locator('span.context-menu-one');

    await button.click({button: "right"});

    await page.waitForTimeout(5000);

})

test('Double click',async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    const button:Locator = page.locator("button[ondblclick='myFunction1()']");

    await button.dblclick(); //Double click

    const field1:Locator = page.locator('#field1');
    const field2:Locator = page.locator('#field2');

    expect(await field1.textContent()).toBe(await field2.textContent());

    await page.waitForTimeout(5000);
})

test.only('Drag & Drop',async ({page})=>{

await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    const rome=page.locator("#box6");
    const italy=page.locator("#box106");

    //Appraoch 1:  mouse hover and drag manually

    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();

    //Appraoch 2:  mouse hover and drag manually

    const washington=page.locator('#box3');
    const usa=page.locator('#box103');

    await washington.dragTo(usa); // this wil perform drag and drop action

    await page.waitForTimeout(5000);
})