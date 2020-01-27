import testEpic from '../../lib/test-epic'
import { addCommentEpic, addCommentAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('addCommentEpic', () => {
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

    it('can add a comment to a parent resource', async () => {
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
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { addComment: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = addCommentAction(
            {
                body: 'comment goes here',
                parent: {
                    id,
                    type: 'ARTICLE' as any,
                    version: mockGetArticle.version,
                },
            },
            () => {}
        )

        const expectedAction = [
            showNotificationAction({
                notificationType: 'success',
                message: 'Comment added',
                description: `Your comment has been added to the article.`,
            }),
        ]

        const resultingActions = await testEpic(
            addCommentEpic,
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
