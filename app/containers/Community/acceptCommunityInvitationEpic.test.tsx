import testEpic from '../../lib/test-epic'
import {
    acceptCommunityInvitationEpic,
    acceptCommunityInvitationAction,
    waitForInvitationReconciliationAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('acceptCommunityInvitationEpic', () => {
    beforeAll(() => {
        // global.window = {}
        global.window.web3 = {
            toHex: () => ({ slice: () => 'abc' }),
            padLeft: () => 'abc',
            padRight: () => 'abc',
            sha3: () => 'abc',
            fromAscii: () => 'abc',
        }
    })

    it('accepts an invitation to a community after personal signing for authentication then calls the waitForInvitationReconciliationAction', async () => {
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
                        prepareAcceptInvitation: { messageHash: '1234567890' },
                        acceptInvitation: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const communityInvitationId = 'Community ID'

        const sourceAction = (acceptCommunityInvitationAction as any)({
            id,
            invitationId: communityInvitationId,
        })

        const expectedAction = [
            closeModalAction(),
            showNotificationAction({
                description: 'This usually takes about 10 seconds!',
                message: 'Invitation acceptance in progress',
                notificationType: 'success',
            }),
            waitForInvitationReconciliationAction({
                id,
                transactionHash,
            }),
        ]

        const resultingActions = await testEpic(
            acceptCommunityInvitationEpic,
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
