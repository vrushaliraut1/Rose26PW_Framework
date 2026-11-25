import { test, expect } from '../fixtures/fixture';
import { LoginPage } from '../pages/LoginPage';

test('a test case without framework', async ({ page, testFixture, another }) => {
  
    await page.locator("input[name='username']").fill("Admin12")
    await page.locator("input[name='password']").fill("admin123");
    await page.getByRole("button").click();
 expect(await page.locator("p.oxd-alert-content-text").textContent()).toBe("Invalid credentials")
});


test('a test case with framework', async ({ page, testFixture }) => {

 const loginPage = new LoginPage(page)
 await loginPage.enterUserName("kuch bhi")
 await loginPage.enterPassword("2323")
 await loginPage.clickOnLoginBtn()
 //await loginPage.validateErrorMsg()
})
