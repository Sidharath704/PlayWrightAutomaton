const { test, expect } = require('@playwright/test')
const signupPage = require("../pages/signuppage")

const loginpage = require('../pages/login')
const homePage = require('../pages/homepage')

//const HomePage = require("../pages/homepage")
test('Signup To Application Using POM', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html')

  const signuppage = new signupPage(page)
  await signuppage.signUpIntoApplication()

  const login = new loginpage(page)
  await login.loginIntoApplication()

  const home = new homePage(page)
  await home.logoutFromApplication()




})