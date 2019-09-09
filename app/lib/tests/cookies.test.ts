import { parseCookies } from '../cookies'

const cookieToParse = '_cookie1=test1'

describe('lib/with-data', () => {
    it('should return empty object if no request cookies', () => {
        const result = parseCookies({}, undefined)
        expect(result).toEqual({})
    })

    it('should return parsed cookies', () => {
        global.window.document.cookie = cookieToParse
        const result = parseCookies(
            {
                req: {
                    headers: {
                        cookie: cookieToParse,
                    },
                },
            },
            undefined
        )
        expect(result).toEqual({
            _cookie1: 'test1',
        })
    })
})
