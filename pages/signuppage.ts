exports.signuppage=
class signuppage{
    page: any;
    signUpLink: string;
    usernamefield: string;
    passwordfield: string;
    signupbutton: string;
    closebutton: string;
  
    constructor(page: any)
    {
         this.page=page;
         this.signUpLink="#signin2"
         this.usernamefield="#sign-username"
         this.passwordfield="#sign-password"
         this.signupbutton="//button[normalize-space()='Sign up']"
        this.closebutton="//div[@id='signInModal']//button[@type='button'][normalize-space()='Close']"
    }

  
    async signUpIntoApplication()
    {
        await this.page.locator(this.signUpLink).click();
        await this.page.locator(this.usernamefield).fill("sidharath singh");
        await this.page.locator(this.passwordfield).fill("Pitu@1234");
        await this.page.locator(this.signupbutton).click();
        await this.page.locator(this.closebutton).click();
      
    }
}
