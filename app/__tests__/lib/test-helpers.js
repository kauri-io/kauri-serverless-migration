import fetch from 'isomorphic-unfetch'
import config from '../../config'

export const KauriCoreArtifact = require(config.default.KauriCoreArtifact)
export const message = 'v0G9u7huK4mJb2K1'

export const login = async (userId, signature) =>
  fetch(`http://${config.default.monolithApi}/auth`, {
    method: 'post',
    body: JSON.stringify({
      owner: userId,
      signature,
    }),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(({ token }) => token)

export const web3GetAccounts = web3 =>
  new Promise((resolve, reject) => {
    web3.eth.getAccounts((err, result) => {
      err ? reject(err) : resolve(result)
    })
  })

export const web3Sign = (web3, web3Account, web3Message) =>
  new Promise((resolve, reject) => {
    web3.eth.sign(web3Account, web3Message, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  })
