import {Page} from "playwright";
import { LoginPage } from "../pages/LoginPage";

export class LoginModule {
 page: Page

 constructor(page: Page) {
    this.page = page;
 }

async loginUsingValidCredentials(){
    let loginPage = new LoginPage(this.page)
    let username = process.env.username
    let password = process.env.password

    if (username) {
       await loginPage.enterUserName(username)
    } else {
        console.log("logging in using default admin username and password")
       await loginPage.enterUserName('Admin')
    }
    if (password) {
        await loginPage.enterPassword(password)
    } else {
       await loginPage.enterPassword('admin123')
    }
   await loginPage.clickOnLoginBtn()
 }

 loginUsingInalidCredentials(){
    
 }
}