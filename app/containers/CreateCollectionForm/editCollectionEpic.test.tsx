import testEpic from '../../lib/test-epic'
import {
    editCollectionAction,
    editCollectionEpic,
    composeCollectionAction,
} from './Module'
import { from } from 'rxjs'

describe('editCollectionEpic', () => {
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

    it('edits a collection with updating in its payload and then attempts to compose it', async () => {
        const mockPersonalSign = () => Promise.resolve('abc')
        const id = '1234567890-'
        const version = 123
        const mockApolloSubscriber = () =>
            Promise.resolve({ data: { getEvent: { output: { id, version } } } })
        const mockApolloClient = {
            mutate: () =>
                Promise.resolve({
                    data: { editCollection: { hash: '1234567890' } },
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
                editCollection: {
                    sendTransaction: () => Promise.resolve('transactionHash'),
                },
            },
        })

        const name = 'name'
        const background = 'background'
        const description = 'description'
        const sections = []
        const tags = []
        const destination = {
            type: 'USER',
            id,
        }

        const sourceAction = editCollectionAction(
            {
                id,
                name,
                background,
                description,
                sections,
                tags,
                destination,
            },
            () => {}
        )

        const expectedAction = [
            composeCollectionAction({ id, name, sections, tags }, () => {}),
        ]

        const resultingActions = await testEpic(
            editCollectionEpic,
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

        expect(resultingActions[0].type).toEqual(expectedAction[0].type)
        expect(resultingActions[0].payload.updating).toBeTruthy()
    })
})
