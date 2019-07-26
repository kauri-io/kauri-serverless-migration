import testEpic from '../../lib/test-epic'
import { composeCollectionAction, composeCollectionEpic } from './Module'
import { from } from 'rxjs'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'

describe('composeCollectionEpic', () => {
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

    it('composes a collection with updating in its payload', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { composeCollection: { hash: '1234567890' } },
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
                composeCollection: {
                    sendTransaction: () => Promise.resolve('transactionHash'),
                },
            },
        })

        const sections = []
        const tags = []

        const sourceAction = composeCollectionAction(
            {
                id,
                sections,
                tags,
                updating: true,
            },
            () => {}
        )

        const expectedAction = [
            showNotificationAction({
                notificationType: 'success',
                message: 'Collection updated!',
                description: 'Your collection is now available for viewing!',
            }),
            routeChangeAction(`/collection/${id}/collection-${'updated'}`),
        ]

        const resultingActions = await testEpic(
            composeCollectionEpic,
            sourceAction,
            {
                app: {
                    user: {
                        communities: [{ community: { id: '123' } }],
                        id: '123',
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

    it('composes a new collection', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { output: { id, version } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { composeCollection: { hash: '1234567890' } },
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
                composeCollection: {
                    sendTransaction: () => Promise.resolve('transactionHash'),
                },
            },
        })

        const sections = []
        const tags = []

        const sourceAction = composeCollectionAction(
            {
                id,
                sections,
                tags,
            },
            () => {}
        )

        const expectedAction = [
            showNotificationAction({
                notificationType: 'success',
                message: 'Collection created!',
                description: 'Your collection is now available for viewing!',
            }),
            routeChangeAction(`/collection/${id}/collection-${'created'}`),
        ]

        const resultingActions = await testEpic(
            composeCollectionEpic,
            sourceAction,
            {
                app: {
                    user: {
                        communities: [{ community: { id: '123' } }],
                        id: '123',
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
