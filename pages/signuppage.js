class signuppage{
    constructor(page)
    {
         this.page=page;
         this.signUpbutton="#signin2"
         this.username="#sign-username"
         this.password="#sign-password"
         this.signupbutton="//button[normalize-space()='Sign up']"
        this.closebutton="//div[@id='signInModal']//button[@type='button'][normalize-space()='Close']"
    }
    async signUpIntoApplication()
    {
        await this.page.click(this.signUpbutton)
        await this.page.fill(this.username,"sidharath singh")
        await this.page.fill(this.password,"Pitu@1234")
        await this.page.click(this.signupbutton)
     
       await this.page.click(this.closebutton)
      //await this.page.pause()
    }
}
module.exports=signuppage;