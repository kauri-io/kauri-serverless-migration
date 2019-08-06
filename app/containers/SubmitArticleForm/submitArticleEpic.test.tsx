import testEpic from '../../lib/test-epic'
import { submitArticleEpic, submitArticleAction } from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { publishArticleAction } from './PublishArticleModule'

describe('submitArticleEpic', () => {
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

    it('proposes an article update by handing it over to the publishArticle action', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const selfPublish = undefined
        const destination = {
            __typename: 'PublicUserDTO',
            name: 'My Articles',
            type: 'USER',
            id,
        }

        const mockGetArticle = {
            id,
            version,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice' },
            author: { id: '123', name: 'Alice' },
        }
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { submitNewArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = submitArticleAction({
            text,
            subject,
            tags,
            attributes,
            selfPublish,
            destination,
        })
        const expectedAction = [
            routeChangeAction(
                `/article/${mockGetArticle.id}/v${mockGetArticle.version}/article-published`
            ),
            showNotificationAction({
                description: 'Your personal article has now been published!',
                message: 'Article published',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            submitArticleEpic,
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

    it('submits a fresh article by self publishing it', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const selfPublish = true
        const destination = {
            __typename: 'PublicUserDTO',
            name: 'My Articles',
            type: 'USER',
            id,
        }

        const mockGetArticle = {
            id,
            version,
            contentHash: 'LJLREW68184',
            contributor: 'abc',
            dateCreated: '2019',
            owner: { id: '123', name: 'Alice' },
            author: { id: '123', name: 'Alice' },
        }
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { submitNewArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = submitArticleAction({
            text,
            subject,
            tags,
            attributes,
            selfPublish,
            destination,
        })
        const expectedAction = [
            publishArticleAction({
                contentHash: String(mockGetArticle.contentHash),
                contributor: String(
                    mockGetArticle.author && mockGetArticle.author.id
                ),
                dateCreated: mockGetArticle.dateCreated,
                id: String(mockGetArticle.id),
                owner: (mockGetArticle as any).owner,
                version: Number(mockGetArticle.version),
            }),
        ]

        const resultingActions = await testEpic(
            submitArticleEpic,
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
