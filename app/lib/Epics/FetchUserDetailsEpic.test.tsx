import testEpic from '../test-epic'
import fetchUserDetailsEpic, {
    fetchUserDetailsAction,
    setUserDetailsAction,
} from './FetchUserDetailsEpic'

describe('fetchUserDetailsEpic', () => {
    it('take a parsed cookie token, query the backend and set them', async () => {
        const mockProfile = {
            id: '1234567890',
        }

        const mockApolloClient = {
            query: () =>
                Promise.resolve({ data: { getMyProfile: mockProfile } }),
        }
        const sourceAction = fetchUserDetailsAction({ parsedToken: 'test123' })
        const expectedAction = [
            setUserDetailsAction({
                user: mockProfile,
            } as any),
        ]

        const resultingActions = await testEpic(
            fetchUserDetailsEpic,
            sourceAction,
            {},
            { apolloClient: mockApolloClient }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
