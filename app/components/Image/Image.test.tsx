import Image, { getURL } from './index'
import { mountWithTheme } from '../../setupTests'

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
        const result = getURL(url, 'development', 'cloudImageId', 10, 10)
        expect(result).toBe(url)
    })

    it('should return the default cloud image url if on production and no dimensions passed', () => {
        const result = getURL(url, 'production', 'cloudImageId')
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/width/2560/webp/${url}`
        )
    })

    it('should return the plain url on production with height and width', () => {
        const result = getURL(url, 'production', 'cloudImageId', 10, 10)
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/crop/10x10/webp/${url}`
        )
    })

    it('should return the plain url on production with height and no width', () => {
        const result = getURL(url, 'production', 'cloudImageId', 10)
        expect(result).toBe(
            `https://cloudImageId.cloudimg.io/crop/2560x10/webp/${url}`
        )
    })

    it('should return the plain url on production with width and no height', () => {
        const result = getURL(url, 'production', 'cloudImageId', undefined, 10)
        expect(result).toBe(`https://cloudImageId.cloudimg.io/10/webp/${url}`)
    })
})
