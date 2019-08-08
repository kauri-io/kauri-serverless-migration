import testEpic from '../../lib/test-epic'
import {
    updateCommunityEpic,
    updateCommunityAction,
    communityUpdatedAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

describe('updateCommunityEpic', () => {
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

    it('updates the community details such as the homepage and sends community invitations to emails with roles if there are some', async () => {
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
                            id,
                            transactionHash,
                        },
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

        const sourceAction = updateCommunityAction(
            {
                id: communityId,
                name: 'Alice',
                homepage: [],
                invitations,
            },
            () => {}
        )

        const expectedAction = [
            showNotificationAction({
                description: `The community's details have been updated!`,
                message: 'Community updated',
                notificationType: 'success',
            }),
            communityUpdatedAction(),
            routeChangeAction(`/community/${communityId}/community-updated`),
        ]

        const resultingActions = await testEpic(
            updateCommunityEpic,
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
