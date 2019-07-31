import testEpic from '../../../lib/test-epic'
import {
    acceptArticleTransferEpic,
    acceptArticleTransferAction,
    finaliseArticleTransferAction,
} from './TransferModule'

describe('acceptArticleTransferEpic', () => {
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

    it('initiates acceptance of ownership of an article then calls the finalise transfer action', async () => {
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
                        hash: mockGetArticle.contentHash,
                        version,
                        articleAuthor: mockGetArticle.contributor,
                        dateCreated: mockGetArticle.dateCreated,
                    },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { acceptArticleTransfer: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = acceptArticleTransferAction({
            id,
        })

        const expectedAction = [
            finaliseArticleTransferAction({
                contentHash: mockGetArticle.contentHash,
                contributor: mockGetArticle.contributor,
                dateCreated: mockGetArticle.dateCreated,
                id,
                version: mockGetArticle.version,
            }),
        ]

        const resultingActions = await testEpic(
            acceptArticleTransferEpic,
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
