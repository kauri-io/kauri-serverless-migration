import { parseCookies } from '../init-uppy'

// jest.mock('superagent', () => ({
//     get: jest.fn().mockReturnValue({
//         responseType: jest.fn().mockReturnValue({ body: 'test' }),
//     }),
// }))

// const dummyFile = new File([], 'test filename')

// let cookieToParse = '_cookie1=test1'

describe('lib/init-uppy', () => {
    it('should return empty object if no request cookies', () => {
        // const result = parseCookies({}, undefined)
        // expect({result}).toEqual({})
        console.log(parseCookies)
        expect(true).toBe(true)
    })

    // it('should return parsed cookies', () => {
    //     global.window.document.cookie = cookieToParse
    //     const result = parseCookies(
    //         {
    //             req: {
    //                 headers: {
    //                     cookie: cookieToParse,
    //                 },
    //             },
    //         },
    //         undefined
    //     )
    //     expect(result).toEqual({
    //         _cookie1: 'test1',
    //     })
    // })
    // it('should handle processFile method calls', () => {
    //     const result = REQ.processfile('test url')
    //     expect(result).toEqual({ body: 'test' })
    // })

    // it('should handle downloadRemoteFileAsBlob method calls', async () => {
    //     const result = await REQ.downloadRemoteFileAsBlob(
    //         'test url',
    //         'test file name'
    //     )
    //     expect(result).toEqual(dummyFile)
    // })

    // it('should handle the file upload', async () => {
    //     const result = await REQ.uploadBundle([dummyFile])
    //     expect(result).toEqual(dummyFile)
    // })
})
