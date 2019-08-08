import testEpic from '../../lib/test-epic'
import {
    createCommunityEpic,
    createCommunityAction,
    communityCreatedAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

describe('createCommunityEpic', () => {
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
            reload: () => ({}),
        } as any
    })

    it('creates the community if the user has a verified email and triggers the communityCreatedAction for reconciliation', async () => {
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
                    getEvent: {
                        output: {
                            id: communityId,
                            transactionHash,
                        },
                    },
                },
            })
        const mockReduxInitialState = {
            app: { user: { id, status: 'EMAIL_VERIFIED' } },
        }
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                        editCommunity: { hash: '1234567890' },
                        sendInvitation: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: {
                        prepareSendInvitation: {
                            messageHash: mockGetArticle.contentHash,
                        },
                    },
                }),
            resetStore: () => {},
        }

        const communityId = 'Community ID'
        const email = 'test@example.com'
        const invitations: any = [
            {
                email,
                role: 'ADMIN' as any,
            },
        ]

        const sourceAction = createCommunityAction(
            {
                name: 'Alice',
                invitations,
            },
            () => {}
        )

        const expectedAction = [
            showNotificationAction({
                description: `Your community is being created! Once this is completed (within a few minutes), you will be able to add articles and collections`,
                message: 'Creating Community',
                notificationType: 'info',
            }),
            communityCreatedAction({ transactionHash }),
            routeChangeAction(`/community/${communityId}/community-created`),
        ]

        const resultingActions = await testEpic(
            createCommunityEpic,
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
