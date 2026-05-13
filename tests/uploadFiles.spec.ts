import { test, expect } from '@playwright/test';


  test('Single file upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('uploads/Test1.txt');
    await page.locator("button:has-text('Upload Single File')").click();

    const msg:string|null = await page.locator("#singleFileStatus").textContent();

    expect(msg).toContain("Test1.txt");
    console.log("Upload successful");

    await page.waitForTimeout(5000);

  })


  test.only('Multiple file upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#multipleFilesInput').setInputFiles(['uploads/testfile1.pdf','uploads/testfile2.pdf']);
    await page.locator("button:has-text('Upload Multiple Files')").click();

    const msg:string|null = await page.locator("#multipleFileStatus").textContent();

    expect(msg).toContain("testfile1.pdf");
    expect(msg).toContain("testfile2.pdf");

    console.log("Files uploaded");

    await page.waitForTimeout(5000);

  })