import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import {
    InMemoryCache,
    IntrospectionFragmentMatcher,
    defaultDataIdFromObject,
} from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import introspectionQueryResultData from '../fragmentTypes.json'
import config from '../config'

let apolloClient = null

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
})

export function create(initialState, { getToken }) {
    const apiURL = config.gateway
    const token = getToken()

    let link = createHttpLink({
        fetch,
        uri: `https://${apiURL}/graphql`,
        credentials: 'same-origin',
        useGETForQueries: false,
        headers: {
            'X-Auth-Token': token ? `Bearer ${token}` : null,
        },
    })

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
            link
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

    const client = new ApolloClient({
        // @ts-ignore
        initialState,
        connectToDevTools: true,
        ssrMode: true,
        // Remember that this is the interface the SSR server will use to connect to the
        // API server, so we need to ensure it isn't firewalled, etc
        link,
        cache: cache.restore(initialState || {}),
    })

    return client
}

export default function initApollo(initialState, options) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!global.window) {
        return create(initialState, options)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState, options)
    }

    return apolloClient
}
