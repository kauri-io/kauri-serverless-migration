// import ApolloClient from 'apollo-client'
// import {
//     InMemoryCache,
//     IntrospectionFragmentMatcher,
// } from 'apollo-cache-inmemory'
// import { createHttpLink } from 'apollo-link-http'
// import fetch from 'isomorphic-unfetch'
// import introspectionQueryResultData from './fragmentTypes.json'
// import config from '../config'

// if (!process.browser) {
//     global.fetch = fetch
// }

// const fragmentMatcher = new IntrospectionFragmentMatcher({
//     introspectionQueryResultData,
// })

// export const create = (token: string) => {
//     return new ApolloClient({
//         cache: new InMemoryCache({
//             fragmentMatcher,
//         }),
//         link: createHttpLink({
//             uri: `http${
//                 process.env.config === 'development'
//                     ? 's'
//                     : global.window
//                     ? 's'
//                     : ''
//             }://${config.gateway}/graphql`,
//             credentials: 'include',
//             useGETForQueries: false,
//             headers: {
//                 'X-Auth-Token': token ? `Bearer ${token}` : null,
//             },
//         }),
//         ssrMode: true,
//     })
// }

// export default (token: string) => create(token)

import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import {
    InMemoryCache,
    defaultDataIdFromObject,
    IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import config from '../config'

import introspectionQueryResultData from './fragmentTypes.json'

// Polyfill fetch() on the server (used by apollo-client)
if (!global.window) {
    global.fetch = fetch
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
})

export function create(initialState, { getToken }) {
    const apiURL = config.gateway
    // let httpLink = new HttpLink({
    //     uri: `http${
    //         process.env.config === 'development'
    //             ? 's'
    //             : global.window
    //             ? 's'
    //             : ''
    //     }://${apiURL}/graphql`,
    // })
    const token = getToken()
    let httpLink = createHttpLink({
        uri: `http${
            process.env.config === 'development'
                ? 's'
                : global.window
                ? 's'
                : ''
        }://${config.gateway}/graphql`,
        credentials: 'include',
        useGETForQueries: false,
        headers: {
            'X-Auth-Token': token ? `Bearer ${token}` : null,
        },
    })

    let link = httpLink

    if (global.window && token) {
        const xAuthToken = global.window.encodeURI(`Bearer ${token}`)
        const wsLink = new WebSocketLink({
            uri:
                token === 'DUMMYVERIFICATIONTOKEN'
                    ? `wss://${apiURL}/socket/graphql`
                    : `wss://${apiURL}/socket/graphql?X-Auth-Token=${xAuthToken}`,
            options: {
                reconnect: true,
            },
        })

        link = split(
            // split based on operation type
            ({ query }) => {
                const def = getMainDefinition(query)
                return (
                    def.kind === 'OperationDefinition' &&
                    def.operation === 'subscription'
                )
            },
            wsLink,
            httpLink
        )
    }

    const cache = new InMemoryCache({
        fragmentMatcher,
        dataIdFromObject: object => {
            switch (object.__typename) {
                case 'ArticleDTO':
                    return object.id // + object.version // use `key` as the primary key
                default:
                    return defaultDataIdFromObject(object)
            }
        },
    })

    return new ApolloClient({
        // initialState,
        connectToDevTools: true,
        // ssrMode: !global.window, // Disables forceFetch on the server (so queries are only run once)
        ssrMode: true,
        cache: cache.restore(initialState || {}),
        link,
    })
}

export default function initApollo(initialState, options) {
    return create(initialState, options)
}
