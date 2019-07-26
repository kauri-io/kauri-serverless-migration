import testEpic from '../../lib/test-epic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { checkpointArticlesAction, checkpointArticlesEpic } from './Module'
import { from } from 'rxjs'

describe('checkpointArticlesEpic', () => {
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

    it('publishes a new article version since they are a member of the community that owns it', async () => {
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
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { checkpointArticles: { hash: '1234567890' } },
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
                checkpointArticles: {
                    sendTransaction: () => Promise.resolve('transactionHash'),
                },
            },
        })

        const sourceAction = checkpointArticlesAction()

        const expectedAction = [
            showNotificationAction({
                notificationType: 'success',
                message: 'Articles checkpointed!',
                description: 'All Kauri platform articles are now On-chain!',
            }),
        ]

        const resultingActions = await testEpic(
            checkpointArticlesEpic,
            sourceAction,
            {
                app: { user: { communities: [{ community: { id: '123' } }] } },
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
