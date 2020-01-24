import { ethers } from 'ethers'

const sendTransaction = (from: string, to: string, amountInEther: string) => {
    const provider = new ethers.providers.Web3Provider(
        global.window.web3.currentProvider
    )

    const params = [
        {
            from: from,
            to: to,
            value: ethers.utils
                .parseUnits(amountInEther, 'ether')
                .toHexString(),
        },
    ]

    return provider.send('eth_sendTransaction', params)
}

export { sendTransaction }
