import testEpic from '../../lib/test-epic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    publishArticleAction,
    publishArticleEpic,
} from './PublishArticleModule'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('publishArticleEpic', () => {
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

    it('publishes a new article version since they are a member of the community that owns it', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const updateComment = 'yada yada yada'
        const mockGetArticle = {
            id,
            version,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            authorId: id,
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice', type: 'COMMUNITY' },
            author: { id: '123', name: 'Alice' },
        }
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { publishArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = publishArticleAction({
            id,
            version,
            contentHash: mockGetArticle.contentHash,
            dateCreated: mockGetArticle.dateCreated,
            contributor: 'abc',
            owner: mockGetArticle.owner,
            updateComment,
        })

        const expectedAction = [
            showNotificationAction({
                description: `Your article has been published.`,
                message: 'Article Published',
                notificationType: 'success',
            }),
            routeChangeAction("/public-profile?username=test-username", '/test-username/p'),
        ]

        const resultingActions = await testEpic(
            publishArticleEpic,
            sourceAction,
            {
                app: {
                    user: {
                        userId: '123',
                        username: 'test-username',
                        communities: [{ community: { id: '123' } }],
                    },
                },
            },
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })

    it('publishes a new article version since they own it', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const updateComment = 'yada yada yada'
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
                    data: { publishArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = publishArticleAction({
            id,
            version,
            contentHash: mockGetArticle.contentHash,
            dateCreated: mockGetArticle.dateCreated,
            contributor: mockGetArticle.owner.id,
            owner: mockGetArticle.owner,
            updateComment,
        })

        const expectedAction = [
            showNotificationAction({
                description: `Your article has been published.`,
                message: 'Article Published',
                notificationType: 'success',
            }),
            routeChangeAction("/public-profile?username=test-username", `/test-username/p`),
        ]

        const resultingActions = await testEpic(
            publishArticleEpic,
            sourceAction,
            {
                app: {
                    user: {
                        username: 'test-username',
                        userId: '123',
                    },
                },
            },
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })

    it('proposes an article version via publishArticle', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const updateComment = 'yada yada yada'
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
                    data: { publishArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = publishArticleAction({
            id,
            version,
            contentHash: mockGetArticle.contentHash,
            dateCreated: mockGetArticle.dateCreated,
            contributor: mockGetArticle.authorId,
            owner: mockGetArticle.owner,
            updateComment,
        })

        const expectedAction = [
            showNotificationAction({
                description: `Your article has been submitted for review.`,
                message: 'Article submitted',
                notificationType: 'success',
            }),
            routeChangeAction("/public-profile?username=test-username", `/test-username/p`),
        ]

        const resultingActions = await testEpic(
            publishArticleEpic,
            sourceAction,
            {
                app: {
                    user: {
                        username: 'test-username',
                        userId: '123',
                    },
                },
            },
            {
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
