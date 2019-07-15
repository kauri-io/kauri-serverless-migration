import setupWebdriverIO from '../lib/setup-webdriverIO'
import { By, until } from 'selenium-webdriver'

function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

describe('Create Request without bounty', () => {
  let driver
  beforeAll(() => {
    jest.setTimeout(30000)
    driver = setupWebdriverIO()
  })

  // afterAll(async () => {
  //   // await driver.quit()
  //   driver.end()
  // })

  test('it renders', async () => {
    const extensionId = 'nkbihfbeogaeaoehlefnkodbefgpgknn'

    driver
      .url('chrome://extensions')
      .getTitle()
      .then(function (title) {
        console.log('Title is: ' + title)
        expect(title).toBe('Extensions')
      })
      .url(`chrome-extension://${extensionId}/popup.html`)
      .end()
    // const title = await driver.getTitle()
    // console.log(title)
    // expect(title).toBeTruthy()
    // driver.url('https://duckduckgo.com/')
    // // .end()
    // // driver

    // expect(title).toBe(extensionId)
  })
})
