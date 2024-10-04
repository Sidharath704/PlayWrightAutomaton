class HomePage{

    constructor(page)
    {
         this.page=page
         this.logoutButton="#logout2"
        
    }

    async logoutFromApplication()
    {
        await this.page.click(this.logoutButton)
      //  await this.page.pause()
  
    }

}

module.exports=HomePage