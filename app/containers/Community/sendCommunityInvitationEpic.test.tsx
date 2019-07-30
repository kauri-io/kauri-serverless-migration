import testEpic from '../../lib/test-epic'
import {
    sendCommunityInvitationEpic,
    sendCommunityInvitationAction,
    invitationsendCommunitydAction,
    invitationSentAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('sendCommunityInvitationEpic', () => {
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

    it('sends a community invitation with a chosen role to a specified email', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const invitation = {
            email: 'test@test.com',
            role: 'ADMIN' as any,
        }
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

        const mockApolloSubscriber = () =>
            Promise.resolve({
                data: {
                    output: {
                        id,
                        version,
                        hash: mockGetArticle.contentHash,
                        articleAuthor: mockGetArticle.author.id,
                        dateCreated: mockGetArticle.dateCreated,
                    },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                        prepareSendInvitation: { messageHash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: {
                        prepareSendInvitation: { messageHash: '1234567890' },
                    },
                }),
            resetStore: () => {},
        }

        const sourceAction = (sendCommunityInvitationAction as any)({
            id,
            invitation,
        })

        const expectedAction = [
          showNotificationAction({
            description: `The invitation ${invitation.email} for to join the community has been sent! You can view and manage all moderators from the Manage tab.`,
            message: 'Invitation Sent',
            notificationType: 'success',
          }),
          invitationSentAction(),
          closeModalAction(),
        ]

        const resultingActions = await testEpic(
            sendCommunityInvitationEpic,
            sourceAction,
            {},
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
