import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ethers } from 'ethers'
import { Subject } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import fetch from 'isomorphic-unfetch'
import mixpanel from 'mixpanel-browser'
import initRedux from './init-redux'
import initApollo from './init-apollo'
import { handleRedirects } from './redirects'
import 'prismjs/themes/prism-okaidia.css'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { parseCookies } from './cookies'

export const theme = createMuiTheme({
    palette: {
        common: {
            black: '#1E2428',
        },
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#0BA986',
        },
        secondary: {
            main: '#ffffff',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
})

import { setHostNameAction } from './Module'
import userDetailsEpic, {
    fetchUserDetailsAction,
} from './Epics/FetchUserDetailsEpic'
import themeConfig from './theme-config'
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/url/dist/style.min.css'
import analytics from './analytics'
import ApolloClient from 'apollo-client'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import '../components/Markdown/katex.css'

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
interface IProps {
    stateRedux: any
    stateApollo: any
}

export default (ComposedComponent: any) =>
    class WithData extends React.Component<IProps> {
        redux: any
        apollo: ApolloClient<NormalizedCacheObject>
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
            const apollo = initApollo(
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
                    <MaterialThemeProvider theme={theme}>
                        <CssBaseline />
                        <Provider store={redux}>
                            <ApolloProvider client={apollo}>
                                <ThemeProvider theme={themeConfig}>
                                    <>
                                        <ComposedComponent
                                            url={url}
                                            {...composedInitialProps}
                                        />
                                    </>
                                </ThemeProvider>
                            </ApolloProvider>
                        </Provider>
                    </MaterialThemeProvider>
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

            handleRedirects(context, stateApollo, url)

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
            this.apollo = initApollo(this.props.stateApollo.apollo.data, {
                getToken: () => props.parsedToken,
                hostName: props.hostName,
            })

            this.redux = initRedux(this.apollo, this.props.stateRedux)
        }

        componentDidMount() {
            global.window.addEventListener('load', async () => {
                if (global.window.ethereum) {
                    try {
                        analytics.setWeb3Status(true) // Track web3 status
                    } catch (error) {}
                    // Supports Metamask and Mist, and other wallets that provide 'web3'.
                } else if (global.window && global.window.web3) {
                    // Use the Mist/wallet provider.
                    global.window.web3 = new ethers.providers.Web3Provider(
                        global.window.web3.currentProvider
                    )
                    analytics.setWeb3Status(true)
                } else {
                    analytics.setWeb3Status(false)
                }
                // Init mixpanel
                mixpanel.init(config.mixpanelToken, {
                    debug: process.env.config !== 'production',
                })
            })
        }

        render() {
            // apm.setInitialPageLoadName('Initial Load')
            return (
                <MaterialThemeProvider theme={theme}>
                    <CssBaseline />
                    <Provider store={this.redux}>
                        <ApolloProvider client={this.apollo}>
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
                        </ApolloProvider>
                    </Provider>
                </MaterialThemeProvider>
            )
        }
    }
