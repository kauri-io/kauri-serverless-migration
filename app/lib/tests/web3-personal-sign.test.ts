import { personalSign, loginPersonalSign } from '../web3-personal-sign'

const OLD_GLOBAL = global

const sendAsync = jest
    .fn()
    .mockImplementation((_, callback) =>
        callback(null, { result: 'send async result' })
    )

const enable = jest.fn().mockResolvedValue('Enable Result')
let listAccounts = jest
    .fn()
    .mockResolvedValue(['0x00000000000000000', '0x00000000000000001'])
const toHex = jest.fn().mockReturnValue('toHex result')
const ethers = require('ethers')
const FakeWeb3Provider = jest.fn(() => ({
    listAccounts,
}))

describe('lib/web3-personal-sign', () => {
    beforeAll(() => {
        ethers.ethers.providers.Web3Provider = FakeWeb3Provider

        global.window.ethereum = {
            enable,
        }

        global.window.web3 = {
            toHex,
            eth: {
                accounts: ['0x00000000'],
            },
            currentProvider: {
                sendAsync,
            },
        }
    })
    it('should correctly sign', async () => {
        const result = await personalSign('randomstring')
        expect(result).toEqual('send async result')
        expect(sendAsync).toHaveBeenCalledWith(
            expect.objectContaining({
                jsonrpc: '2.0',
                method: 'personal_sign',
                params: ['0x00000000', 'toHex result'],
            }),
            expect.any(Function)
        )
    })

    it('should reject if no accounts are available in the web3 object', async () => {
        global.window.web3 = {
            toHex,
            eth: {
                accounts: [],
            },
            currentProvider: {
                sendAsync,
            },
        }

        try {
            await personalSign('randomstring')
        } catch (e) {
            expect(e).toEqual(Error('Metamask locked!'))
        }
    })

    it('should throw an error if no accounts are available at all', async () => {
        listAccounts = jest.fn().mockResolvedValue([])

        try {
            await personalSign('randomstring')
        } catch (e) {
            expect(e).toEqual(Error('Metamask locked!'))
        }
    })

    it('should handle the login personal sign', done => {
        loginPersonalSign('test').subscribe(data => {
            expect(data).toEqual('send async result')
            done()
        })
    })

    afterAll(() => {
        global = OLD_GLOBAL
    })
})
