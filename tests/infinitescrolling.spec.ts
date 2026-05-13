import { test, expect } from '@playwright/test';

test("Infinite scroll on booksbykilo.in",async ({page})=>{

    test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)

    await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

    let previousHeight = 0;

    while(true)
        {

            // Scroll to the bottom
            await page.evaluate(()=>{
                window.scrollTo(0, document.body.scrollHeight);
            })

            //Wait for new content to load
            await page.waitForTimeout(2000);

            // Get current scroll height
            const currentHeight = await page.evaluate(()=>{
                return document.body.scrollHeight;
            })

            console.log("==============================")
            console.log("Previous height: ", previousHeight);
            console.log("Current height: ", currentHeight);


            if(currentHeight===previousHeight)
                {
                    break;
                }

            previousHeight = currentHeight;

        }

        console.log("Reached end of the page");
})