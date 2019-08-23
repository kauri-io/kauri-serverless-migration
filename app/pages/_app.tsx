import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import analytics from '../lib/analytics'

class MyApp extends App {
    constructor(props) {
        super(props)
        ;(process as any).browser && analytics.init()
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode!.removeChild(jssStyles)
        }

        window.addEventListener('beforeunload', this.handleCloseBrowserTab) // Enable close tab warning
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleCloseBrowserTab)
    }

    handleCloseBrowserTab = e => {
        // Cancel the event as stated by the standard.
        if (
            window.location.pathname === '/write-article' ||
            window.location.pathname.indexOf('/update-article') !== -1
        ) {
            e.preventDefault()
            // Chrome requires returnValue to be set.
            e.returnValue =
                'Do you want to leave this site? Changes you made may not be saved'
        }
    }

    render() {
        analytics.page(this.props.router)
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head>
                    <script
                        type="text/javascript"
                        src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
                        data-dojo-config="usePlainJson: true, isDebug: false"
                    />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html:
                                'window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us17.list-manage.com","uuid":"e46233ccfd6bb938ab7cbb5a3","lid":"f49f81a2a9","uniqueMethods":true}) })',
                        }}
                    />
                </Head>

                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp
