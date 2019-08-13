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
