import testEpic from '../../lib/test-epic'
import {
    waitForInvitationReconciliationEpic,
    waitForInvitationReconciliationAction,
    invitationAcceptedAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

describe('waitForInvitationReconciliationEpic', () => {
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
        } as any
    })

    it('waits for the ws committed and member added messages from the blockchain before refreshing the page for new JWT details', async () => {
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

        const communityInvitationId = 'Community ID'

        const sourceAction = (waitForInvitationReconciliationAction as any)({
            id,
            invitationId: communityInvitationId,
        })

        const expectedAction = [
            showNotificationAction({
                description: `You are now a member of the community!`,
                message: 'Invitation Accepted',
                notificationType: 'success',
            }),
            invitationAcceptedAction(),
        ]

        const resultingActions = await testEpic(
            waitForInvitationReconciliationEpic,
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
