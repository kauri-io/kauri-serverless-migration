import PageObjectModel from './PageObjectModel'

export default class CreateRequest extends PageObjectModel {
  createRequestNavbarButton = this.dataTestIdFactory('create-request-navbar')
  title = 'Create Request'

  constructor (driver) {
    super(driver)
    this.driver = driver
  }

  async navigateToCreateRequestPage () {
    await this.driver.click(this.createRequestNavbarButton)
    await this.waitUntil(this.titleIs(this.title))
    const title = await this.driver.getTitle()
    return title
  }
}
