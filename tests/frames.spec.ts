import {test, expect, Locator, Frame} from "@playwright/test"

test('frames demo',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total number of frames present in the page

    const frames:Array<Frame> = page.frames();
    console.log(frames.length);

    //Approach 1 : Using page.frame

    const frame : Frame | null = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    if(frame!=null)
        {
            await frame.locator("input[name='mytext1']").fill('Hello');
            //await frame.fill("input[name='mytext1']",'Hello');
        }
        else
            {
                console.log('Frame is not available');
            }

        await page.waitForTimeout(5000);


        //Approach 1 : Using page.frameLocator()    Easy and direct approach 

        const frame2 = page.frameLocator("[src='frame_2.html']");
        await frame2.locator("[name='mytext2']").fill("John");

        await page.waitForTimeout(5000);

})

test.only('inner/child frames demo',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frm3:Frame | null = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    if(frm3!=null)
        {
           await frm3.locator("[name='mytext3']").fill("Welcome to frame 3");
           const childFrames:Array<Frame> = frm3.childFrames();
           console.log(childFrames.length);//1

           const radioBtn:Locator = childFrames[0].getByLabel('I am a human');
           await radioBtn.check();

           await expect(radioBtn).toBeChecked();

        }
        else
            {
                console.log("Frame 3 is not found");
            }

        await page.waitForTimeout(5000);
})
