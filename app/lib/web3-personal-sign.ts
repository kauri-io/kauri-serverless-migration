import { Observable, from } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ethers } from 'ethers'

const personalSign = (data: string) =>
    new Promise<string>((resolve, reject) => {
        const web3 = global.window && global.window.web3
        const web3Provider = new ethers.providers.Web3Provider(
            web3.currentProvider
        )

        console.log('********** PERSONAL SIGN ********')

        web3Provider.listAccounts().then(accounts => {
            if (accounts.length >= 1) {
                console.log('More than one account')
                global.window.ethereum &&
                    global.window.ethereum
                        .enable()
                        .then(result => {
                            if (
                                !result ||
                                (web3.eth.accounts &&
                                    web3.eth.accounts.length < 1)
                            ) {
                                reject(new Error('Metamask locked!'))
                            }

                            console.log(web3.eth.accounts)

                            web3.currentProvider.sendAsync(
                                {
                                    id: new Date().getTime(),
                                    jsonrpc: '2.0',
                                    method: 'personal_sign',
                                    params: [
                                        web3.eth.accounts[0],
                                        web3.toHex(data),
                                    ],
                                },
                                (err, { result }) => {
                                    if (err) console.error('err', err)
                                    return err || !result
                                        ? reject(err)
                                        : resolve(result)
                                }
                            )
                        })
                        .catch(err => {
                            console.log('enabled err: ', err)
                            reject(new Error('Metamask locked!'))
                        })
            } else {
                global.window.ethereum &&
                    global.window.ethereum.enable().then(() => {
                        console.log('Enabled')
                        web3.currentProvider.sendAsync(
                            {
                                id: new Date().getTime(),
                                jsonrpc: '2.0',
                                method: 'personal_sign',
                                params: [
                                    web3.eth.accounts[0],
                                    web3.toHex(data),
                                ],
                            },
                            (err, { result }) => {
                                if (err) console.error('err', err)
                                return err || !result
                                    ? reject(err)
                                    : resolve(result)
                            }
                        )
                    })
            }
        })
    })

const loginPersonalSign = (data: string) =>
    from(personalSign(data)).pipe(
        catchError(err => {
            console.error(err)
            if (err.message.includes('Metamask locked!')) {
                return Observable.throw(new Error('Metamask locked!'))
            }
            return Observable.throw(new Error('Submission error'))
        })
    )

export { loginPersonalSign, personalSign }
