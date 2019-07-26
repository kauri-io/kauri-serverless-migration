import { ethers } from 'ethers'

const web3GetGasPrice = () => {
    const provider = new ethers.providers.Web3Provider(
        global.window.web3.currentProvider
    )

    return provider
        .getGasPrice()
        .then(gasPrice => gasPrice.toNumber())
        .catch(err => err)
}

export default web3GetGasPrice
