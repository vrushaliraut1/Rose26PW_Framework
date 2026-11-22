import { Page, Locator } from "playwright";
import { expect } from "playwright/test"
export class LoginPage{

    page:Page
    usernametxtbx:Locator
    passwordtxtbx:Locator
    loginBtn:Locator


    constructor(page:Page){
        this.page = page
        this.usernametxtbx = page.locator('input[name="username"]')
        this.passwordtxtbx = page.locator('input[name="password"]')
        this.loginBtn = page.getByRole("button")
        //this.errorMsg = page.locator("p.oxd-alert-content-text")
    }
async enterUserName(username:string){

   await this.usernametxtbx.fill(username)

}
// async clearUserName(){
//    await this.usernametxtbx.clear()
//}

async enterPassword(password:string){
  await this.passwordtxtbx.fill(password)
}
async clickOnLoginBtn(){
   await this.loginBtn.click()
}
}
