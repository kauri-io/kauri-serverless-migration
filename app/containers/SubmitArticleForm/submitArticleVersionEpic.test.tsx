import testEpic from '../../lib/test-epic'
import { submitArticleVersionEpic, submitArticleVersionAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { publishArticleAction } from './PublishArticleModule'

describe('submitArticleVersionEpic', () => {
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

    it('submits a new self published article version via publishArticle', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const updateComment = 'yada yada yada'
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
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { submitArticleVersion: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = submitArticleVersionAction({
            id,
            text,
            subject,
            tags,
            attributes,
            selfPublish,
            updateComment,
        })
        const expectedAction = [
            publishArticleAction({
                contentHash: mockGetArticle.contentHash,
                contributor: mockGetArticle.authorId,
                dateCreated: mockGetArticle.dateCreated,
                id: mockGetArticle.id,
                owner: mockGetArticle.owner,
                updateComment,
                version: mockGetArticle.version,
            }),
        ]

        const resultingActions = await testEpic(
            submitArticleVersionEpic,
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

    it('submits a draft article version', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const text = 'julz'
        const subject = 'LJLREW68184'
        const attributes = { background: 'asdfghjkl' }
        const tags = []
        const updateComment = 'yada yada yada'
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
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { submitArticleVersion: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = submitArticleVersionAction({
            id,
            text,
            subject,
            tags,
            attributes,
            selfPublish,
            updateComment,
        })
        const expectedAction = [
            showNotificationAction({
                description:
                    'Your article has now been drafted to be updated or published in the future',
                message: 'Article drafted',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            submitArticleVersionEpic,
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
