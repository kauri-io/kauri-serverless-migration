import testEpic from '../../../lib/test-epic'
import {
    rejectArticleTransferEpic,
    rejectArticleTransferAction,
} from './TransferModule'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'

jest.mock('../../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('rejectArticleTransferEpic', () => {
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

    it('rejects the ownership of an article', async () => {
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
                    data: { rejectArticleTransfer: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }

        const sourceAction = rejectArticleTransferAction({
            id,
        })

        const expectedAction = [
            showNotificationAction({
                description: `You successfully rejected the ownership of the article!`,
                message: 'Article Transfer Rejected!',
                notificationType: 'success',
            }),
        ]

        const resultingActions = await testEpic(
            rejectArticleTransferEpic,
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
