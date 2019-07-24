import { Observable, of, from } from 'rxjs'
import { showNotificationAction } from './Epics/ShowNotificationEpic'
import apolloClient from './init-apollo'
import apolloSubscriber from './apollo-subscriber'
import { catchError } from 'rxjs/operators'
import { ethers } from 'ethers'

const personalSign = (data: string) =>
    new Promise<string>((resolve, reject) => {
        const web3 = global.window && global.window.web3
        const web3Provider = new ethers.providers.Web3Provider(
            web3.currentProvider
        )

        web3Provider.listAccounts().then(accounts => {
            if (accounts.length > 1) {
                global.window.ethereum &&
                    global.window.ethereum
                        .enable()
                        .then(result => {
                            console.log('enabled result: ', result)
                            if (
                                web3.eth.accounts &&
                                web3.eth.accounts.length < 1
                            ) {
                                reject(new Error('Metamask locked!'))
                            }
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
                                    console.log('result', result)
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
                web3.currentProvider.sendAsync(
                    {
                        id: new Date().getTime(),
                        jsonrpc: '2.0',
                        method: 'personal_sign',
                        params: [web3.eth.accounts[0], web3.toHex(data)],
                    },
                    (err, { result }) => {
                        if (err) console.error('err', err)
                        console.log('result', result)
                        return err || !result ? reject(err) : resolve(result)
                    }
                )
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

const web3PersonalSign = (id, data, gqlMutation) =>
    global.window && global.window.web3.eth.accounts.length > 0
        ? from(personalSign(data))
              .flatMap(signature =>
                  apolloClient({}, {}).mutate({
                      mutation: gqlMutation,
                      variables: {
                          id,
                          signature,
                      },
                  })
              )
              .flatMap(({ data }) =>
                  apolloSubscriber(
                      data[gqlMutation.definitions['0'].name.value].hash,
                      {}
                  )
              )
              .catch(err => {
                  console.error(err)
                  if (err.message.includes('Metamask locked!')) {
                      return Observable.throw(new Error('Metamask locked!'))
                  }
                  return Observable.throw(new Error('Submission error'))
              })
        : of(
              showNotificationAction({
                  notificationType: 'error',
                  message: 'Your wallet is locked!',
                  description: 'Please unlock your wallet!',
              })
          )

export default web3PersonalSign
export { loginPersonalSign, personalSign }
