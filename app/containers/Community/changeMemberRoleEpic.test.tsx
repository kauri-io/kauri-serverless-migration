import testEpic from '../../lib/test-epic'
import {
    changeGrantedMemberRoleEpic,
    changeGrantedMemberRoleAction,
    grantedMemberRoleChangedAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

describe('changeGrantedMemberRoleEpic', () => {
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

    it('does what it says on the tin', async () => {
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
                    getEvent: {
                        output: {
                            id,
                            version,
                            hash: mockGetArticle.contentHash,
                            articleAuthor: mockGetArticle.author.id,
                            dateCreated: mockGetArticle.dateCreated,
                        },
                    },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: {
                        initiateArticleTransfer: { hash: '1234567890' },
                    },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const communityId = 'Community ID'

        const sourceAction = changeGrantedMemberRoleAction({
            id: communityId,
            account: mockGetArticle.contributor,
            role: 'ADMIN' as any,
            signature: '',
        })

        const expectedAction = [
            closeModalAction(),
            showNotificationAction({
                description: `That user has had their role changed within the community`,
                message: 'Member role changed',
                notificationType: 'success',
            }),
            grantedMemberRoleChangedAction(),
        ]

        const resultingActions = await testEpic(
            changeGrantedMemberRoleEpic,
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
