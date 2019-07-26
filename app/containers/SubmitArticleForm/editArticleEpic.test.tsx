import testEpic from '../../lib/test-epic'
import { editArticleEpic, editArticleAction } from './Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { publishArticleAction } from './PublishArticleModule'

describe('editArticleEpic', () => {
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

    it('edits a new self published article version via publishArticle', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const selfPublish = true
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
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { editArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = editArticleAction({
            id,
            version,
            text,
            subject,
            tags,
            attributes,
            selfPublish,
        })

        const expectedAction = [
            publishArticleAction({
                contentHash: mockGetArticle.contentHash,
                contributor: mockGetArticle.authorId,
                dateCreated: mockGetArticle.dateCreated,
                id: mockGetArticle.id,
                owner: mockGetArticle.owner,
                version: mockGetArticle.version,
            }),
        ]

        const resultingActions = await testEpic(
            editArticleEpic,
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

    it('edits a new article version', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const selfPublish = undefined
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
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { editArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = editArticleAction({
            id,
            version,
            text,
            subject,
            tags,
            attributes,
            selfPublish,
        })

        const expectedAction = [
            routeChangeAction(`/article/${id}/v${version}/article-updated`),
            showNotificationAction({
                description: 'The article version has been updated!',
                message: 'Article updated',
                notificationType: 'info',
            }),
        ]

        const resultingActions = await testEpic(
            editArticleEpic,
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
