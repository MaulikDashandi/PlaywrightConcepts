import { Page, Locator } from '@playwright/test';

export class HomePage 
{
    //Variables
    private readonly page: Page;
    private readonly productLists: Promise<Array<Locator>>;
    private readonly addToCartButton: Locator;
    private readonly cartLink: Locator;

    //Constructor
    constructor(page: Page) 
    {
        this.page = page;

        // CSS selector targeting all product links under the product cards
        this.productLists = this.page.locator('div#tbodyid div.card h4.card-title a').all();

        // 'Add to cart' button (exact match using text)
        this.addToCartButton = this.page.locator('a:has-text("Add to cart")');

        // Cart link in the top menu
        this.cartLink = this.page.locator('#cartur');
    }

    // Method to add a specific product to cart
    async addProductToCart(productName: string): Promise<void> 
    {
        const productElements = await this.productLists;
        for (const product of productElements) {
            const name = await product.textContent();

            if (name?.trim() === productName) {
                await product.click();
                break;
            }
        }

        // Handle alert/dialog after clicking "Add to cart"
            this.page.once('dialog', async dialog => {
                if (dialog.message().includes('added')) 
                    {
                        await dialog.accept();
                    }
            });

            await this.addToCartButton.click(); //Click on add to cart
    }

    // Method to navigate to the cart
    async gotoCart() 
    {
        await this.cartLink.click();
    }


}