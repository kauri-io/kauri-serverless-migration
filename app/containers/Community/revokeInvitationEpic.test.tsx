import testEpic from '../../lib/test-epic'
import {
    revokeInvitationEpic,
    revokeInvitationAction,
    invitationRevokedAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('revokeInvitationEpic', () => {
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

    it('revokes a current community invitation to an already invited email', async () => {
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
                        prepareRevokeInvitation: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const communityInvitationId = 'Community ID'

        const sourceAction = (revokeInvitationAction as any)({
            id,
            invitationId: communityInvitationId,
        })

        const expectedAction = [
            closeModalAction(),
            showNotificationAction({
                description: `That invitation to the community has been successfully revoked`,
                message: 'Invitation Revoked',
                notificationType: 'success',
            }),
            invitationRevokedAction(),
        ]

        const resultingActions = await testEpic(
            revokeInvitationEpic,
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
