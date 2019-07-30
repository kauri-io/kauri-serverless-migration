import testEpic from '../../lib/test-epic'
import { voteEpic, voteAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

describe('voteEpic', () => {
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

    it('can upvote a resource', async () => {
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
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { vote: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const value = 1

        const sourceAction = voteAction({
          resourceId: {
            id,
            type: "ARTICLE" as any,
            version
          }, 
          value
        })

        const expectedAction = [
          showNotificationAction({
            description:
                value > 0
                    ? 'Your vote has been counted! Thanks for your feedback!'
                    : 'Please leave a comment below with your feedback to the author to help them improve the article.',
            message: `Voted`,
            notificationType: 'success',
        })
        ]

        const resultingActions = await testEpic(
            voteEpic,
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

it('can downvote a resource', async () => {
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
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { vote: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const value = -1

        const sourceAction = voteAction({
          resourceId: {
            id,
            type: "ARTICLE" as any,
            version
          }, 
          value
        })

        const expectedAction = [
          showNotificationAction({
            description:
                value > 0
                    ? 'Your vote has been counted! Thanks for your feedback!'
                    : 'Please leave a comment below with your feedback to the author to help them improve the article.',
            message: `Voted`,
            notificationType: 'success',
        })
        ]

        const resultingActions = await testEpic(
            voteEpic,
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
