import {test, expect} from '../fixtures/fixture';
import { LoginModule } from '../modules/loginmodule';
import { PIMMenuPage } from '../pages/PIMMenupage';

test('Verify employee record once it is created', async ({ page, testFixture }) => {
    let loginModule = new LoginModule(page)
    await loginModule.loginUsingValidCredentials()
    let pimMenuPage = new PIMMenuPage();
    

})