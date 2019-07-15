import setupWebdriverIO from '../lib/setup-webdriverio'
import MetamaskPOM from '../PageObjectModels/Metamask'
import CreateRequestPOM from '../PageObjectModels/CreateRequest'

describe('Create Request without bounty', () => {
  let driver
  let metamaskPOM
  beforeAll(async () => {
    jest.setTimeout(30000)
    driver = setupWebdriverIO()
    metamaskPOM = new MetamaskPOM(driver)

    await metamaskPOM.setupEnvironment()
  })

  afterAll(async () => {
    await driver.quit()
  })

  test('it navigates to the create request page on Kauri', async () => {
    const createRequestPOM = new CreateRequestPOM(driver)
    const title = await createRequestPOM.navigateToCreateRequestPage()
    expect(title).toBe('Create Request')
  })
})
