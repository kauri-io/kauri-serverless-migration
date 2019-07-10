import contract from 'truffle-contract'
import superagent from 'superagent'
import { of, forkJoin, from } from 'rxjs'
const request = superagent.agent()
const config = require('../config').default

let smartContracts

type Web3Props = {
    currentProvider: string
}

export const initSmartContracts = (web3: Web3Props, cb: any) => {
    if (typeof web3 !== 'undefined') {
        const smartContractNames = ['KauriCore', 'Wallet', 'Community']
        const smartContractFetchObservables = smartContractNames.map(
            smartContractName =>
                from(
                    request
                        .get(
                            `https://${config.gateway}/smartcontract/${smartContractName}/all`
                        )
                        .then(({ body }) => body)
                )
        )
        const smartContracts = {}

        forkJoin(smartContractFetchObservables)
            .map(abiJSONs =>
                smartContractNames.map(smartContractName => {
                    const fetchedSmartContract = abiJSONs.find(
                        abiJSON => abiJSON.contractName === smartContractName
                    )
                    const smartContractWithProvider = contract(
                        fetchedSmartContract
                    )
                    smartContractWithProvider.setProvider(web3.currentProvider)
                    return smartContractWithProvider.deployed()
                })
            )
            .mergeMap(smartContractsToDeploy =>
                of(...smartContractsToDeploy.map(sc => sc))
            )
            .combineAll()
            .map(arrayOfSmartContractsToDeploy => {
                smartContractNames.map((_, index) => {
                    smartContracts[smartContractNames[index]] =
                        arrayOfSmartContractsToDeploy[index]
                })
                return smartContracts
            })
            .subscribe(
                result => {
                    // console.log(result)
                    global.window.smartContracts = result
                    cb(result)
                    return result
                },
                err => {
                    console.error(err)
                    cb(false, err)
                }
            )
    }
}

export default smartContracts
