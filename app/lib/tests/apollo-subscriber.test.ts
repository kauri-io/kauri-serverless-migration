import {
    apolloChildHashesSubscriber,
    apolloHashSubscriber,
} from '../apollo-subscriber'

jest.mock('../../queries/Module', () => ({ getEvent: 'test string' }))
const query = require('../../queries/Module')

let firstSubscribe = jest.fn()
let secondSubscribe = jest.fn()

jest.mock('../with-data', () => ({
    apollo: jest.fn(),
}))
const apollo = require('../with-data').apollo

describe('lib/apollo-subscriber', () => {
    beforeAll(async () => {
        apollo.subscribe = firstSubscribe
        firstSubscribe.mockImplementation(() => ({
            subscribe: secondSubscribe,
        }))
    })
    it('should subscribe to child hashes', async () => {
        await apolloChildHashesSubscriber(['test hash'])
        expect(firstSubscribe).toHaveBeenCalledWith({
            query: query.getEvent,
            variables: { hash: 'test hash' },
        })
        expect(secondSubscribe).toHaveBeenCalled()
    })

    it('should subscribe to regular hashes', async () => {
        apolloHashSubscriber('test hash')
        expect(firstSubscribe).toHaveBeenCalledWith({
            query: query.getEvent,
            variables: { hash: 'test hash' },
        })
        expect(secondSubscribe).toHaveBeenCalled()
    })

    afterAll(() => {
        jest.clearAllMocks()
    })
})
