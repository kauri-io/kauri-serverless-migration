import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import {
    InMemoryCache,
    IntrospectionFragmentMatcher,
    defaultDataIdFromObject,
} from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import introspectionQueryResultData from '../fragmentTypes.json'
import config from '../config'

// Polyfill fetch() on the server (used by apollo-client)
if (!global.window) {
    global.fetch = fetch
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
})

export function create(initialState, { getToken }) {
    // console.log('create apollo instance')
    const apiURL = config.gateway
    let httpLink = new HttpLink({
        uri: `http${
            process.env.NODE_ENV === 'development'
                ? 's'
                : global.window
                ? 's'
                : ''
        }://${apiURL}/graphql`,
    })
    const token = getToken()
    // console.log(token);
    // console.log(apiURL);
    const authMiddlewareLink = new ApolloLink((operation, next) => {
        operation.setContext({
            headers: {
                'X-Auth-Token': token ? `Bearer ${token}` : null,
            },
        })
        // @ts-ignore
        return next(operation)
    })

    // @ts-ignore
    httpLink = authMiddlewareLink.concat(httpLink)

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

        // @ts-ignore
        link = split(
            // split based on operation type
            ({ query }) => {
                // @ts-ignore
                const { kind, operation } = getMainDefinition(query)
                return (
                    kind === 'OperationDefinition' &&
                    operation === 'subscription'
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
                    // @ts-ignore
                    return object.id + object.version // use `key` as the primary key
                default:
                    return defaultDataIdFromObject(object)
            }
        },
    })

    return new ApolloClient({
        // @ts-ignore
        initialState,
        connectToDevTools: true,
        ssrMode: !global.window, // Disables forceFetch on the server (so queries are only run once)
        cache: cache.restore(initialState || {}),
        link,
    })
}

export default function initApollo(initialState, options) {
    return create(initialState, options)
}
