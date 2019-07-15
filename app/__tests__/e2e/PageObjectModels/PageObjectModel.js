export default class PageObjectModel {
  constructor (driver) {
    this.driver = driver
  }

  dataTestIdFactory (id) {
    return `[data-test-id="${id}"`
  }
  open (url) {
    this.driver.url(url)
  }

  async getTitle () {
    const title = await this.driver.getTitle()
    return title
  }

  async switchTab (tabIndex) {
    const tabHandles = await this.driver.getTabIds()
    await this.driver.switchTab(tabHandles[tabIndex])
    await this.pause()
  }

  async pause (duration = 500) {
    await this.driver.pause(duration)
  }

  async waitUntil (condition) {
    await this.driver.waitUntil(await condition, 5000)
  }

  async titleIs (title) {
    const currentTitle = await this.driver.getTitle()
    return title === currentTitle
  }
}
