exports.loginpage =
class loginpage{
    page: any;
    loginLink: string;
    usernameInput: string;
    passwordInput: string;
    loginbutton: string;
    constructor(page: any)
    {
        this.page=page;
        this.loginLink="#login2"
        this.usernameInput="#loginusername"
        this.passwordInput="#loginpassword"
        this.loginbutton="//button[normalize-space()='Log in']"
}


//  async gotoLoginPage()
//  {
//    await this.page.goto('https://www.demoblaze.com/index.html')
   
//  }
    async login(username: any,password: any)
    {
       
         await this.page.locator(this.loginLink).click();
         await this.page.locator(this.usernameInput).fill(username);
         await this.page.locator(this.passwordInput).fill(password);
         await this.page.locator(this.loginbutton).click();
    
    }
}

