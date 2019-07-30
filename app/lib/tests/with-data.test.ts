import { parseCookies, dispatchEpic } from '../with-data'

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

    it('should dispatch epics', async () => {
        const epic = jest.fn().mockReturnValue({
            toPromise: jest.fn().mockResolvedValue('test toPromise value'),
        })
        const dummyAction = {
            type: 'test action',
        }
        const result = await dispatchEpic(epic, dummyAction)
        expect(result).toEqual('test toPromise value')
    })
})
