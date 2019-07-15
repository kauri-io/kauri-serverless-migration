import PageObjectModel from './PageObjectModel'
import MetamaskPOM from './Metamask'

export default class Login extends PageObjectModel {
  emailInput = '[data-test-id="email"]'
  constructor (driver) {
    super(driver)
    this.driver = driver
    this.metamaskPOM = new MetamaskPOM(driver)
  }

  async clickLoginOnNavbar () {
    await this.driver.click('[data-test-id="login-navbar"]')
    await this.driver.waitForExist(this.emailInput, 5000)
  }

  async setEmailAndUsername () {
    await this.driver.setValue(this.emailInput, 'ericjohn.juta@consensys.net')
    await this.driver.setValue('[data-test-id="username"]', 'rej156')
  }

  async submit () {
    await this.driver.click('[data-test-id="login-submit"]')
    await this.metamaskPOM.signMessage()
    await this.driver.waitUntil(
      async () => {
        const title = await this.driver.getTitle()
        return title === 'Profile'
      },
      10000,
      'Profile page expected to load after 10s'
    )
    return true
  }

  async logIn () {
    await this.clickLoginOnNavbar()
    await this.setEmailAndUsername()
    await this.submit()
    return true
  }
}
