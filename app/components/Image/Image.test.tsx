import Image, { getURL } from './index'
import { mountWithTheme } from '../../setupTests'

jest.mock('../../config')

import config from '../../config'

describe('components/Image', () => {
    const url = 'testURL'
    it('should match snapshot', () => {
        let props = {
            image: 'http://test.com/image.png',
            width: 100,
        }
        const wrapper = mountWithTheme(<Image {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should return the plain url on development', () => {
        ;(config.useCloudImage = false), (config.cloudImageId = 'cloudImageId')
        const result = getURL(url, 10, 10)
        expect(result).toBe(url)
    })

    it('should return the default cloud image url if on production and no dimensions passed', () => {
        config.useCloudImage = true
        const result = getURL(url)
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/width/2560/webp/${url}`
        )
    })

    it('should return the plain url on production with height and width', () => {
        config.useCloudImage = true
        const result = getURL(url, 10, 10)
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/crop/10x10/webp/${url}`
        )
    })

    it('should return the plain url on production with height and no width', () => {
        config.useCloudImage = true
        const result = getURL(url, 10)
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/crop/2560x10/webp/${url}`
        )
    })

    it('should return the plain url on production with width and no height', () => {
        config.useCloudImage = true
        const result = getURL(url, undefined, 10)
        expect(result).toBe(`https://cloudImageId.cloudimg.io/10/webp/${url}`)
    })
})
