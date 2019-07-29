import initApollo from '../init-apollo'
const Apollo = require('apollo-client')
const FakeApolloClient = jest.fn(() => ({}))
Apollo.ApolloClient = FakeApolloClient

const getToken = jest.fn()

describe('lib/init-apollo', () => {
    beforeAll(() => {})

    it('should create an apollo client', async () => {
        initApollo(
            {},
            {
                getToken,
            }
        )
        expect(getToken).toHaveBeenCalled()
        expect(FakeApolloClient).toHaveBeenCalledWith(
            expect.objectContaining({
                ssrMode: false,
            })
        )
    })

    afterAll(() => {})
})
