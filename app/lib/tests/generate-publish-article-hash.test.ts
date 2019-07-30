import generatePublishArticleHash from '../generate-publish-article-hash'

const OLD_GLOBAL = global

describe('lib/generate-publish-article-hash', () => {
    beforeAll(() => {
        const padLeft = jest.fn()
        const padRight = jest.fn()
        const fromAscii = jest.fn()
        const sha3 = jest.fn()
        const toHex = jest.fn()
        global.window.web3 = {
            padLeft,
            padRight,
            fromAscii,
            sha3,
            toHex,
        }
        padRight.mockReturnValue('test')
        padLeft.mockReturnValue('test')
        fromAscii.mockReturnValue('test')
        sha3.mockReturnValue('test')
        toHex.mockReturnValue('test')
    })

    it('should generate the hash', async () => {
        const result = generatePublishArticleHash(
            '123',
            4,
            '567',
            '890',
            '2019-01-01'
        )
        expect(result).toBe('test')
    })

    afterAll(() => {
        global = OLD_GLOBAL
    })
})
