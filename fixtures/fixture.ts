import {test as base, expect} from '@playwright/test'

type TestFixture = {
    testFixture: void
    another: void
}
 //Before test case
        //Error handling
        // const env = process.argv.find(arg=>arg.startsWith('--env'))?.split('=')[1]
        // let url: string = process.env.BASE_URL ?? ''
        //coelsecing nullish => if left hand side is null or undefined, then set with default value
        // || true or false

export const test = base.extend<TestFixture>({
    testFixture: async ({page}, use)=>{

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      await use(); //Test case execution

    }
    // another: async ({page}, use)=>{
    //     console.log("Hello I am another fixture")
    //     await use()
    
    // }
})


export {expect}