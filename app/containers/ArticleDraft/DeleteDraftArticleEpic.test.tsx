import testEpic from '../../lib/test-epic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import {
    deleteDraftArticleAction,
    deleteDraftArticleEpic,
} from './DeleteDraftArticleModule'
import { from } from 'rxjs'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('deleteDraftArticleEpic', () => {
    beforeAll(() => {
        // global.window = {}
        global.window.web3 = {
            toHex: () => ({ slice: () => 'abc' }),
            padLeft: () => 'abc',
            padRight: () => 'abc',
            sha3: () => 'abc',
            fromAscii: () => 'abc',
            eth: {
                accounts: ['abc'],
            },
        }
    })

    it('deletes a draft article', async () => {
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
            owner: { id: '123', name: 'Alice', type: 'COMMUNITY' },
            author: { id: '123', name: 'Alice' },
        }
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { deleteDraftArticle: { hash: '1234567890' } },
                }),
            query: () =>
                Promise.resolve({
                    data: { getArticle: mockGetArticle },
                }),
            resetStore: () => {},
        }
        const mockWeb3 = {
            toHex: () => ({ slice: () => 'abc' }),
            padLeft: () => 'abc',
            padRight: () => 'abc',
            sha3: () => 'abc',
            fromAscii: () => 'abc',
            eth: {
                accounts: ['abc'],
            },
        }
        const mockWeb3GetNetwork = () => from(Promise.resolve(true))
        const mockWeb3GetGasPrice = () => from(Promise.resolve(10000))
        const mockSmartContracts = () => ({
            KauriCore: {
                deleteDraftArticle: {
                    sendTransaction: () => Promise.resolve('transactionHash'),
                },
            },
        })

        const sourceAction = deleteDraftArticleAction({ id, version }, () => {})

        const expectedAction = [
            showNotificationAction({
                description: `Your draft article has been deleted!`,
                message: 'Draft article deleted',
                notificationType: 'success',
            }),
            routeChangeAction(`/username/${123}/p`),
        ]

        const resultingActions = await testEpic(
            deleteDraftArticleEpic,
            sourceAction,
            {
                app: {
                    user: {
                        communities: [{ community: { id: '123' } }],
                        id: '123',
                        username: 'username',
                    },
                },
            },
            {
                web3GetNetwork: mockWeb3GetNetwork,
                getGasPrice: mockWeb3GetGasPrice,
                apolloClient: mockApolloClient,
                apolloSubscriber: mockApolloSubscriber,
                personalSign: mockPersonalSign,
                smartContracts: mockSmartContracts,
                web3: mockWeb3,
            }
        )

        expect(resultingActions).toEqual(expectedAction)
    })
})
