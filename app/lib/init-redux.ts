import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import fetch from 'isomorphic-unfetch'
import { ethers } from 'ethers'
import web3GetNetwork from './web3-get-network'
import web3PersonalSign, { personalSign } from './web3-personal-sign'
import { rootReducer, rootEpic } from './root'
import apolloSubscriber, {
    apolloChildHashesSubscriber,
} from './apollo-subscriber'

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION__) {
    devtools = global.window.__REDUX_DEVTOOLS_EXTENSION__()
}

function create(apollo: any, initialState = {}) {
    const dependencies = {
        web3:
            (global.window && global.window.web3) ||
            global.window && new ethers.providers.Web3Provider(
                global.window.web3.currentProvider
            ),
        smartContracts: () =>
            global.window ? global.window.smartContracts : {},
        apolloClient: apollo,
        fetch,
        apolloSubscriber,
        apolloChildHashesSubscriber,
        web3PersonalSign,
        web3GetNetwork,
        personalSign,
    }

    const combinedReducers = combineReducers({
        ...rootReducer,
    })

    const middleware = createEpicMiddleware<any, any, any, any>({
        dependencies,
    })

    const store = createStore<any, any, any, any>(
        combinedReducers,
        initialState, // Hydrate the store with server-side data
        compose(
            applyMiddleware(middleware), // Add additional middleware here
            devtools
        )
    )

    middleware.run(rootEpic)

    return store
}

const mergeLocalStorageState = initialState => {
    try {
        const serializedState = window.localStorage.getItem('redux')
        if (serializedState === null) {
            return initialState
        }
        return Object.assign(initialState, JSON.parse(serializedState))
    } catch (err) {
        return initialState
    }
}

export default (apollo: any, initialState: any) => {
    // TODO - Ensure this simplification doesn't break stuff
    if (!global.window) {
        return create(apollo, initialState)
    }
    return create(apollo, mergeLocalStorageState(initialState))
}
