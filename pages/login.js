class loginpage{
    constructor(page)
    {
        this.page=page;
        this.loginUpbutton="#login2"
        this.username="#loginusername"
        this.password="#loginpassword"
        this.loginbutton="//button[normalize-space()='Log in']"




         
    }
    async loginIntoApplication()
    {
        await this.page.click(this.loginUpbutton)
        await this.page.fill(this.username,"sidharath singh")
        await this.page.fill(this.password,"Pitu@1234")
        await this.page.click(this.loginbutton)
     
    
    }
}
module.exports=loginpage;