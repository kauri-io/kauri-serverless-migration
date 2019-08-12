import testEpic from '../../lib/test-epic'
import {
    transferArticleToCommunityEpic,
    transferArticleToCommunityAction,
    articleTransferredToCommunityAction,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { closeModalAction } from '../../components/Modal/Module'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('transferArticleToCommunityEpic', () => {
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

    it('transfers an article you own to a community', async () => {
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
        const mockCallback = () => {}

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

        const sourceAction = transferArticleToCommunityAction(
            {
                id,
                recipient: {
                    id: communityId,
                    type: 'COMMUNITY' as any,
                },
            },
            mockCallback
        )

        const expectedAction = [
            articleTransferredToCommunityAction(),
            closeModalAction(),
            showNotificationAction({
                description: `Your selected article was successfully transferred to the community!`,
                message: 'Article Transferred',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            transferArticleToCommunityEpic,
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
