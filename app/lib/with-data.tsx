import React from 'react'
import cookie from 'cookie'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ethers } from 'ethers'
import { Subject } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import { SnackbarProvider } from 'notistack'
import fetch from 'isomorphic-unfetch'
import mixpanel from 'mixpanel-browser'
import initRedux from './init-redux'
import initApollo from './init-apollo'

import { setHostNameAction } from './Module'
import userDetailsEpic, {
    fetchUserDetailsAction,
} from './Epics/FetchUserDetailsEpic'
import themeConfig from './theme-config'

// import "highlightjs/styles/vs2015.css";
import '@rej156/react-mde/lib/styles/css/react-mde-all.css'
import '../static/css/redraft-image.css'
// import "draft-js-inline-toolbar-plugin/lib/plugin.css"
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/url/dist/style.min.css'
import analytics from './analytics'
import ApolloClient from 'apollo-client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'

const config = require('../config').default

export const dispatchEpic = (epic, action, state = {}, dependencies = {}) => {
    const actions = new Subject()
    const actions$ = new ActionsObservable<any>(actions)
    const store = { getState: () => state }

    const promised = epic(actions$, store, dependencies).toPromise()

    if (action.length) {
        action.map(act => actions.next(act))
        actions.complete()
    } else {
        actions.next(action)
        actions.complete()
    }

    return promised
}
export const parseCookies = (ctx: any, options?: any) => {
    let cookieToParse =
        ctx.req && ctx.req.headers.cookie && ctx.req.headers.cookie
    if (process.browser) cookieToParse = global.window.document.cookie
    if (!cookieToParse) return {}
    return cookie.parse(cookieToParse, options)
}

interface IProps {
    stateRedux: any
    stateApollo: any
}

export let apollo: ApolloClient<NormalizedCacheObject>

export default (ComposedComponent: any) =>
    class WithData extends React.Component<IProps> {
        redux: any
        static async getInitialProps(context) {
            const url = { query: context.query, pathname: context.pathname }
            const hostName =
                (context.req && context.req.headers.host) ||
                process.env.monolithExternalApi
            const ua =
                context && context.req
                    ? context.req.headers['user-agent']
                    : navigator.userAgent

            // console.log(hostName)
            let stateApollo = {
                apollo: {
                    data: {},
                },
            }

            let stateRedux: any = {}

            const parsedToken = parseCookies(context)['TOKEN']
            // console.log(parsedToken);

            // Redirect on write-article if user is logged out
            if (
                context &&
                context.req &&
                context.req.url &&
                context.req.url.includes('/write-article') &&
                !context.req.url.includes('/login') &&
                !parsedToken
            ) {
                context.res.writeHead(302, {
                    Location: `/login?r=${context.req.url}`,
                })
                context.res.end()
            }

            // Setup a server-side one-time-use apollo client for initial props and
            // rendering (on server)
            apollo = apollo
                ? apollo
                : initApollo(
                      {},
                      {
                          getToken: () => parsedToken,
                      }
                  )
            const redux = initRedux(apollo, stateRedux)

            // Set userId from cookie
            const userId = parseCookies(context)['USER_ID']
            redux && redux.dispatch({ type: 'SET_USER_ID', userId })
            // Set hostName from request context
            redux && redux.dispatch(setHostNameAction({ hostName }))
            // Parse token jwt for user details
            if (parsedToken) {
                try {
                    const sourceAction = fetchUserDetailsAction({ parsedToken })
                    const setUserDetailsAction = await dispatchEpic(
                        userDetailsEpic,
                        sourceAction,
                        {},
                        { fetch, apolloClient: apollo }
                    )
                    redux && redux.dispatch(setUserDetailsAction)
                } catch (err) {
                    console.error(
                        'Something wrong happened with the user JWT: ',
                        err
                    )
                }
            }

            // Hide intro banner from cookie
            const hideIntroBanner = parseCookies(context)['HIDE_INTRO_BANNER']
            if (hideIntroBanner) {
                redux && redux.dispatch({ type: 'HIDE_INTRO_BANNER_SUCCESS' })
            }

            // Evaluate the composed component's getInitialProps()
            let composedInitialProps = {}
            if (ComposedComponent.getInitialProps) {
                composedInitialProps = await ComposedComponent.getInitialProps(
                    context,
                    apollo
                )
            }

            // Run all graphql queries in the component tree
            // and extract the resulting data
            if (!global.window) {
                if (context.res && context.res.finished) {
                    // When redirecting, the response is finished.
                    // No point in continuing to render
                    return
                }

                // Provide the `url` prop data in case a graphql query uses it

                // Run all graphql queries
                const app = (
                    <Provider store={redux}>
                        <ApolloProvider client={apollo}>
                            <SnackbarProvider maxSnack={3}>
                                <ThemeProvider theme={themeConfig}>
                                    <>
                                        <ComposedComponent
                                            url={url}
                                            {...composedInitialProps}
                                        />
                                    </>
                                </ThemeProvider>
                            </SnackbarProvider>
                        </ApolloProvider>
                    </Provider>
                )
                try {
                    await getDataFromTree(app, {
                        router: {
                            asPath: context.asPath,
                            pathname: context.pathname,
                            query: context.query,
                        },
                    })
                } catch (err) {
                    console.error(err)
                }

                // Extract query data from the Apollo's store
                Head.rewind()

                stateApollo = {
                    apollo: {
                        data: apollo.cache.extract(),
                    },
                }
            }
            stateRedux = redux && redux.getState()

            return {
                ua,
                stateApollo,
                stateRedux,
                hostName,
                parsedToken,
                ...composedInitialProps,
            }
        }

        constructor(props) {
            super(props)
            apollo = apollo
                ? apollo
                : initApollo(this.props.stateApollo.apollo.data, {
                      getToken: () => props.parsedToken,
                      hostName: props.hostName,
                  })

            this.redux = initRedux(apollo, this.props.stateRedux)
        }

        componentDidMount() {
            global.window.addEventListener('load', async () => {
                if (global.window.ethereum) {
                    // NOTICE - Moved to sign in only.
                    // global.window.web3 = new Web3(window.ethereum);
                    try {
                        const cookieToParse = global.window.document.cookie
                        if (!cookieToParse) return {}
                        const userId = cookie.parse(cookieToParse)['USER_ID']
                        // Request account access if needed and logged in
                        if (userId) {
                            await global.window.ethereum.enable()
                        }
                        // Acccounts now exposed
                        analytics.setWeb3Status(true) // Track web3 status
                    } catch (error) {
                        // User denied account access...
                    }
                    // Supports Metamask and Mist, and other wallets that provide 'web3'.
                } else if (
                    typeof global.window &&
                    global.window.web3 !== 'undefined'
                ) {
                    // Use the Mist/wallet provider.
                    ;(global.window.web3 = new ethers.providers.Web3Provider(
                        global.window.web3.currentProvider
                    )),
                        // track web3 status
                        analytics.setWeb3Status(true)
                } else {
                    analytics.setWeb3Status(false)
                    // No web3 detected. Show an error to the user or use Infura: https://infura.io/
                    // global.window.web3 = new Web3(new Web3.providers.HttpProvider(`http://${process.env.gethBlockchain}`))
                }
                // Init mixpanel
                mixpanel.init(
                    config.mixpanelToken,
                    {
                        debug: process.env.config !== 'production',
                    }
                    /*
            {
                debug: true,
                loaded: function() {
                    mixpanel.track('loaded() callback works but is unnecessary');
                }
            }
            */
                )
            })
        }

        render() {
            return (
                <Provider store={this.redux}>
                    <ApolloProvider client={apollo}>
                        <SnackbarProvider maxSnack={3}>
                            <ThemeProvider theme={themeConfig}>
                                <>
                                    <ComposedComponent
                                        {...this.props}
                                        web3={
                                            global.window
                                                ? global.window.web3
                                                : global.window
                                        }
                                    />
                                </>
                            </ThemeProvider>
                        </SnackbarProvider>
                    </ApolloProvider>
                </Provider>
            )
        }
    }
