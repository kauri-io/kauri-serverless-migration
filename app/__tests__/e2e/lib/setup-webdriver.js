import { Builder } from 'selenium-webdriver'
import path from 'path'
import fs from 'fs'
const config = require('../../../config').default

export default async () => {
  jest.setTimeout(30000)
  const extensionPath = path.join(__dirname, '/Metamask3_12_0.crx')
  const mmExtension = fs.readFileSync(extensionPath, 'base64')
  const driver = new Builder()
    // .usingServer('http://hub.browserstack.com/wd/hub')
    .withCapabilities({
      browserName: 'chrome',
      // 'browserstack.user': config.browserstackUser,
      // 'browserstack.key': config.browserstackKey,
      chromeOptions: {
        extensions: [mmExtension],
      },
    })
    .forBrowser('chrome')
    .build()

  return driver
}
