import { By } from 'selenium-webdriver'
import moment from 'moment'
import setupWebdriver from '../lib/setup-webdriver'
const url = 'https://beta.kauri.io'

describe('Kauri homepage', () => {
  let driver
  let startingTime
  beforeAll(async () => {
    driver = await setupWebdriver()
  })

  beforeEach(async () => {
    startingTime = moment()
    await driver.get(url)
  })

  afterAll(async () => {
    await driver.quit()
  })

  test('it renders', async () => {
    const loadingTime = moment().diff(startingTime, 'milliseconds')
    console.log('Homepage loading time', loadingTime)
    const title = await driver.findElement(By.tagName('h2')).getText()
    expect(title).toContain('Kauri Features')
  })
})
