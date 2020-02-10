import { ethers } from 'ethers'
import superagent from 'superagent'
import { of, forkJoin, from } from 'rxjs'
import { mergeMap, combineAll, map } from 'rxjs/operators'

const request = superagent.agent()
const config = require('../config').default

let smartContracts

type Web3Props = {
    currentProvider: string
}

const networkNamesToIds = {
    Main: 1,
    Morden: 2,
    Ropsten: 3,
    Rinkeby: 4,
    Kovan: 42,
    'Kauri Dev': 224895,
}

export const initSmartContracts = (web3: Web3Props, cb: any) => {
    if (typeof web3 !== 'undefined') {
        const smartContractNames = ['KauriCheckpoint']
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

        const getNetworkName = () => {
            return config.ethereumNetwork === 'Main'
                ? 'homestead'
                : config.ethereumNetwork.toLowerCase()
        }

        const provider = new ethers.providers.Web3Provider(
            global.window.web3.currentProvider,
            getNetworkName()
        )
        const signer = provider.getSigner()

        forkJoin(smartContractFetchObservables)
            .pipe(
                map(abiJSONs =>
                    smartContractNames.map(smartContractName => {
                        const fetchedSmartContract = abiJSONs.find(
                            abiJSON =>
                                abiJSON.contractName === smartContractName
                        )
                        console.log(
                            JSON.stringify(fetchedSmartContract.networks)
                        )
                        const smartContractWithProvider = new ethers.Contract(
                            fetchedSmartContract.networks[
                                networkNamesToIds[config.ethereumNetwork]
                            ].address,
                            fetchedSmartContract.abi,
                            signer
                        )

                        smartContractWithProvider.connect(signer)
                        return smartContractWithProvider.deployed()
                    })
                ),
                mergeMap(smartContractsToDeploy =>
                    of(...smartContractsToDeploy.map(sc => sc))
                ),
                combineAll(),
                map(arrayOfSmartContractsToDeploy => {
                    smartContractNames.map((_, index) => {
                        smartContracts[smartContractNames[index]] =
                            arrayOfSmartContractsToDeploy[index]
                    })
                    return smartContracts
                })
            )
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
