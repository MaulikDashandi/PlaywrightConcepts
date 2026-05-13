//Browser --> Context(Profiles) --> Page/pages

import {test,expect, Browser, BrowserContext, Page, chromium} from "@playwright/test";

test('Browser context demo',async ()=>{

    const browser:Browser = await chromium.launch(); //Creating browser

    const context: BrowserContext = await browser.newContext(); //Creating Browser context

    //Creating 2 pages
    const page1: Page = await context.newPage(); //Creating page of browser context
    const page2: Page = await context.newPage();

    console.log("Number of pages: ", context.pages().length);

    await page1.goto('https://testautomationpractice.blogspot.com/');   
    await expect(page1).toHaveTitle('Automation Testing Practice');

    await page2.goto('https://google.com');
    await expect(page2).toHaveTitle('Google');

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
})