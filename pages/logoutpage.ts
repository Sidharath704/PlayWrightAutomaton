exports.logoutpage=
class logoutpage{
 page: any
    logoutLink: string
 constructor(page: any)
 {
     this.page=page
     this.logoutLink='#logout2'
 }
 async gotoLogutPage()
 {
    await this.page.locator(this.logoutLink).click()
 }
}