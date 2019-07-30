import {
    apolloChildHashesSubscriber,
    apolloHashSubscriber,
} from '../apollo-subscriber'

jest.mock('../../queries/Module', () => ({ getEvent: 'test string' }))
const query = require('../../queries/Module')

jest.mock('../init-apollo', () => jest.fn())
const apolloClient = require('../init-apollo')

let firstSubscribe = jest.fn()
let secondSubscribe = jest.fn()

describe('lib/apollo-subscriber', () => {
    beforeAll(async () => {
        apolloClient.mockImplementation(() => ({
            subscribe: firstSubscribe,
        }))
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
        apolloHashSubscriber('test hash', 'test filter')
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
