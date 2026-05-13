import {test,expect, chromium, Browser, BrowserContext, Page} from "@playwright/test";

test('Handle tabs', async () => {

    //Create own browser
    const chromeBrowser:Browser = await chromium.launch();

    //Create Context(Profile in browser)
    const chromeContext:BrowserContext = await chromeBrowser.newContext();

    //Create Pages of browser context
    const parentPage:Page = await chromeContext.newPage();
    
    await parentPage.goto('https://testautomationpractice.blogspot.com/');

    //Need to execute parallel
    //chromeContext.waitForEvent('page'); //It will capture the event which is new page opening event
    //parentPage.getByText('New Tab').click(); //Opens new tab/new page
    
    const [childPage] = await Promise.all([chromeContext.waitForEvent('page'),parentPage.getByText('New Tab').click()]);

    //Approach 1 : Switch between pages and get titles 

    const pages: Array<Page> = chromeContext.pages();
    console.log("Number of pages : ", pages.length);

    console.log('Title of Parent page: ',await pages[0].title());
    console.log('Title of Child page: ',await pages[1].title());

    //Approach 2 : Direct alternate 

    console.log('Title of Parent page: ',await parentPage.title());
    console.log('Title of Child page: ',await childPage.title());

})