import setupWebdriverIO from '../lib/setup-webdriverIO'
import LoginPOM from '../PageObjectModels/Login'
import MetamaskPOM from '../PageObjectModels/Metamask'

describe('Login', () => {
  let driver
  let metamaskPOM
  beforeAll(async () => {
    driver = setupWebdriverIO()
    metamaskPOM = new MetamaskPOM(driver)
    await metamaskPOM.setupEnvironment()
  })

  afterAll(() => {
    driver.end()
  })

  it('should be able to navigate to the login page', async () => {
    const loginPOM = new LoginPOM(driver)
    await loginPOM.clickLoginOnNavbar()
    await loginPOM.setEmailAndUsername()
    const loggedIn = await loginPOM.submit()
    expect(loggedIn).toBeTruthy()
  })
})
