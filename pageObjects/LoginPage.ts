import {Page,Locator} from "@playwright/test"

export class LoginPage
{
    //Variables - private and readonly(to achieve encapsulation)

    private readonly page : Page;
    private readonly loginLink : Locator;
    private readonly userNameInput : Locator;
    private readonly passwordInput : Locator;
    private readonly loginButton : Locator;

    //Constructor

    constructor(page:Page)  //We will receive page from actual test and capture here
    {
        this.page = page; //Assigning page comes from test to current class page
        this.loginLink = this.page.getByRole('link', { name: 'Log in' }); //Assiging Locator to current class variable
        this.userNameInput = this.page.locator('#loginusername');
        this.passwordInput = this.page.locator('#loginpassword');
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });

    }

    //Action Methods

    async clickLoginLink() :Promise<void>
    {
        await this.loginLink.click();
    }

    async enterUserName(username : string) :Promise<void>
    {
        await this.userNameInput.clear();
        await this.userNameInput.fill(username);
    }

    async enterPassword(password : string) :Promise<void>
    {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() :Promise<void>
    {
        await this.loginButton.click();
    }

    async performLogin(username:string, password:string) :Promise<void>   //Single consolidated method 
    {
        await this.clickLoginLink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}