import web3GetGasPrice from '../web3-get-gas-price'
import { BigNumber } from 'ethers/utils/bignumber'

const ethers = require('ethers')

describe('lib/web3-get-gas-price', () => {
    it('should return the gas price', async () => {
        const dummyGasPrice = 3290293029
        const getGasPrice = jest
            .fn()
            .mockResolvedValue(new BigNumber(dummyGasPrice))
        const FakeWeb3Provider = jest.fn(() => ({
            getGasPrice,
        }))
        global.window.web3 = {
            currentProvider: {
                getGasPrice,
            },
        }

        ethers.ethers.providers.Web3Provider = FakeWeb3Provider

        const result = await web3GetGasPrice()
        expect(result).toEqual(dummyGasPrice)
    })
})
