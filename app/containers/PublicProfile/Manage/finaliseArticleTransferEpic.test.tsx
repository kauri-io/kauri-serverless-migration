import testEpic from '../../../lib/test-epic'
import {
    finaliseArticleTransferEpic,
    finaliseArticleTransferAction,
} from './TransferModule'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'

describe('finaliseArticleTransferEpic', () => {
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

    it('finalises acceptance over the ownership of an article', async () => {
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
                    data: { finaliseArticleTransfer: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = finaliseArticleTransferAction({
            id,
            version,
            contentHash: mockGetArticle.contentHash,
            contributor: mockGetArticle.contributor,
            dateCreated: mockGetArticle.dateCreated,
        })

        const expectedAction = [
            showNotificationAction({
                description: `You successfully accepted the ownership of the article!`,
                message: 'Article Transfer Accepted!',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            finaliseArticleTransferEpic,
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
