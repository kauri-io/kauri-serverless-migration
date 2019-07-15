import { Builder } from 'selenium-webdriver'
import path from 'path'
import fs from 'fs'
import { Buffer } from 'buffer'
const config = require('../../../config').default
const webdriverio = require('webdriverio')

export default () => {
  jest.setTimeout(60000)
  const extensionPath = path.join(__dirname, '../lib/Metamask3_12_0.crx')
  const mmExtension = fs.readFileSync(extensionPath, 'base64')
  // const mmExtensionBase64FromBuffer = Buffer(fs.readFileSync(extensionPath), 'binary').toString('base64')
  var options = {
    // host: 'zalenium.dev.kauri.io',
    // port: 80,
    port: '9515',
    path: '/',
    // services: ['chromedriver'],
    sync: true,
    desiredCapabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        extensions: [mmExtension],
        // args: ['--headless', '--disable-gpu'],
      },
    },
  }

  return webdriverio.remote(options).init()

  // const driver = new Builder()
  //   .usingServer(
  //     'http://localhost:4444/wd/hub'
  //     // ||
  //     // 'https://zalenium.dev.kauri.io/wd/hub'
  //   )
  //   .withCapabilities({
  //     browserName: 'chrome',
  //     // 'browserstack.user': config.browserstackUser,
  //     // 'browserstack.key': config.browserstackKey,
  //     chromeOptions: {
  //       extensions: [mmExtensionBase64FromBuffer],
  //     },
  //   })
  //   .forBrowser('chrome')
  //   .build()

  // return driver
}
