import testEpic from '../../lib/test-epic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { checkpointArticlesAction, checkpointArticlesEpic } from './Module'
import { from } from 'rxjs'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

describe('checkpointArticlesEpic', () => {
    beforeAll(() => {
        global.window.ethereum = {
            enable: () => from(Promise.resolve(true)),
        }
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

    it('checkpoints the articles', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const commandResult = 'checkpointCreated'
        const checkpointHash = 'QmPeiAe7X4dUAzYaK8XfZ74qQscUrs6fbgqNpijW8uAZuU'
        const mockApolloSubscriber = () =>
            Promise.resolve({
                data: {
                    getEvent: { output: { checkpointHash, commandResult } },
                },
            })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { checkpointArticles: { hash: '1234567890' } },
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
                checkpointArticles: () => Promise.resolve('transactionHash'),
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
