import testEpic from '../../lib/test-epic'
import { communityCreatedEpic, communityCreatedAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

describe('communityCreatedEpic', () => {
    beforeAll(() => {
        // global.window = {}
        global.window.web3 = {
            toHex: () => ({ slice: () => 'abc' }),
            padLeft: () => 'abc',
            padRight: () => 'abc',
            sha3: () => 'abc',
            fromAscii: () => 'abc',
        }

        delete global.window.location
        global.window = Object.create(window)
        global.window.location = {
            port: '123',
            protocol: 'http:',
            hostname: 'localhost',
            reload: () => ({})
        } as any
    })

    it('takes a transactionHash from the createCommunityEpic and waits for the backend to reconcile before refreshing the page to refresh JWT state', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const mockGetArticle = {
            id,
            version,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            authorId: id,
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice', type: 'USER' },
            author: { id: '123', name: 'Alice' },
        }
        const transactionHash = 'abc'

        const mockApolloSubscriber = () =>
            Promise.resolve({
                data: {
                    output: {
                        id,
                        transactionHash,
                    },
                },
            })
        const mockReduxInitialState = {
            app: { user: { communities: [{ community: { id: '123' } }], id } },
        }
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                        prepareAcceptInvitation: { messageHash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = communityCreatedAction({ transactionHash })

        const expectedAction = [
            showNotificationAction({
                description: `Your community has been created! You can start adding articles and collections now!`,
                message: 'Community Created',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            communityCreatedEpic,
            sourceAction,
            mockReduxInitialState,
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
