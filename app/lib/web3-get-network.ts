import { from, of } from 'rxjs'
import { showNotificationAction } from './Epics/ShowNotificationEpic'
import { catchError } from 'rxjs/operators'
import config from '../config'

const networkNames = {
    1: 'Main',
    2: 'Morden',
    3: 'Ropsten',
    4: 'Rinkeby',
    42: 'Kovan',
    224895: 'Kauri Dev',
}

const getNetwork = () =>
    new Promise((resolve, reject) => {
        global.window &&
            global.window.web3.version.getNetwork((err, netId) => {
                const networkId = parseInt(netId, 10)
                if (err) {
                    console.error(err)
                    reject(err)
                } else {
                    // console.log(netId);
                    if (networkNames[networkId] === config.ethereumNetwork) {
                        resolve(true)
                    } else {
                        reject(new Error('Wrong network'))
                    }
                }
            })
    })

const web3GetNetwork = () =>
    global.window.web3 && global.window.web3.version
        ? from(getNetwork()).pipe(
              catchError(err => {
                  if (err.message.includes('Metamask locked!')) {
                      throw new Error('Metamask locked!')
                  } else if (err.message.includes('Wrong network')) {
                      throw new Error('Wrong network')
                  }
                  throw new Error('Submission error')
              })
          )
        : of(
              showNotificationAction({
                  notificationType: 'error',
                  message: 'Wrong network',
                  description: `Please switch to the ${config.ethereumNetwork} network to checkpoint articles!`,
              })
          )

export default web3GetNetwork
export { web3GetNetwork }
