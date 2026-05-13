import {test,expect, BrowserContext, Page} from "@playwright/test";

test('Handle popup window', async ({browser}) => {

    //Create own browser
    //const chromeBrowser:Browser = await chromium.launch();

    //Create Context(Profile in browser)
    const chromeContext:BrowserContext = await browser.newContext();

    //Create Pages of browser context
    const page:Page = await chromeContext.newPage();
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Need to execute parallel
    //chromeContext.waitForEvent('page'); //It will capture the event which is new page opening event
    //parentPage.getByText('New Tab').click(); //Opens new tab/new page
    
    await Promise.all([page.waitForEvent('popup'),await page.locator('#PopUp').click()]);

    //Approach 1 : Switch between pages and get titles 

    const allPopupWindows: Array<Page> = chromeContext.pages(); //Returns array of pages
    console.log("Number of pages/windows : ", allPopupWindows.length);//3

    console.log(allPopupWindows[0].url());
    console.log(allPopupWindows[1].url());
    console.log(allPopupWindows[2].url());

     for(const pw of allPopupWindows)
    {
        const title=await pw.title();
        if(title.includes('Playwright')){
                await pw.locator('.getStarted_Sjon').click();
                await page.waitForTimeout(5000);
                //Perform any other actions....
                await pw.close(); // This will close playwrigt popup window

        }

    }

    await page.waitForTimeout(5000);

    //Approach 2 : Direct alternate 

    //console.log('Title of Parent page: ',await parentPage.title());
    //console.log('Title of Child page: ',await childPage.title());

})