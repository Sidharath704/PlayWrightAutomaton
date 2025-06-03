
import { test, expect } from '@playwright/test';


import { loginpage } from '../pages/loginpage'
import { homepage } from '../pages/homepage'
import { cartpage } from '../pages/cartpage'
import {logoutpage} from '../pages/logoutpage'
import {signuppage} from '../pages/signuppage'




test('Signup ,Login , and Home Page Logout functionality check To Application Using POM', async ({ page }) => {
  //website url
  await page.goto('https://www.demoblaze.com/index.html')
  //signup
  const signup = new signuppage(page)
  await signup.signUpIntoApplication()
  await page.screenshot({path:'tests\screenshots/'+Date.now()+'signup.png'})
  await page.waitForTimeout(3000)


  //Login
  const login = new loginpage(page)
  //await login.gotoLoginPage()
  await login.login('sidharath singh', 'Pitu@1234');
  await page.waitForTimeout(3000)
  await page.screenshot({path:'tests\screenshots/'+Date.now()+'LoginPage.png'})



  //home
  const home = new homepage(page)
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(3000)
  await home.gotoCart();
  await page.screenshot({path:'tests\screenshots/'+Date.now()+'HomePage.png'})


  //cart
  const cart = new cartpage(page);
  await page.waitForTimeout(3000)
  const status = await cart.checkProductInCart("Nexus 6")
  expect(await status).toBe(true)
  await page.screenshot({path:'tests\screenshots/'+Date.now()+'CartPage.png'})

  //logout
  const logoutbtn =new logoutpage(page)
  await page.waitForTimeout(3000)
  await logoutbtn.gotoLogutPage()
  await page.screenshot({path:'tests\screenshots/'+Date.now()+'logout.png'})
  //await page.waitForTimeout(3000)




});

