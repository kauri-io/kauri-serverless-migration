import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'

// const isProduction = process.env.config === 'production'

interface IProps {
    styleTags: any
}

export default class MyDocument extends Document<IProps> {
    static async getInitialProps(ctx) {
        const styledComponentsSheet = new ServerStyleSheet()
        const materialSheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentsSheet.collectStyles(
                            materialSheets.collect(<App {...props} />)
                        ),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                        {flush() || null}
                    </React.Fragment>
                ),
            }
        } finally {
            styledComponentsSheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* {isProduction && global.process.browser && (
            <script>
              `${(function(h, o, t, j, a, r) {
                h.hj =
                  h.hj ||
                  function() {
                    (h.hj.q = h.hj.q || []).push(arguments);
                  };
                h._hjSettings = { hjid: 734967, hjsv: 6 };
                a = o.getElementsByTagName("head")[0];
                r = o.createElement("script");
                r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
              })(
                window,
                document,
                "https://static.hotjar.com/c/hotjar-",
                ".js?sv="
              )}
              `
            </script>
          )} */}
                    <meta charSet="UTF-8" />
                    <link
                        key="icon-apple"
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/favicon/apple-touch-icon.png"
                    />
                    <link
                        key="icon-32"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/favicon/favicon-32x32.png"
                    />
                    <link
                        key="icon-16"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicon/favicon-16x16.png"
                    />
                    <meta
                        key="apple-name"
                        name="apple-mobile-web-app-title"
                        content="Kauri"
                    />
                    <meta
                        key="app-name"
                        name="application-name"
                        content="Kauri"
                    />
                    <meta
                        key="ms-name"
                        name="msapplication-TileColor"
                        content="#da532c"
                    />
                    <meta
                        key="theme-color"
                        name="theme-color"
                        content="#8e00d2"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
                        rel="stylesheet"
                    />
                    <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <style>{`
                    html, body {
                        font-family: 'Roboto'
                    }
                    a { color: inherit; text-decoration: none;}
                    .uppy-DashboardTab:last-child{
                        display: none !important;
                    }
                    .mde-tabs {
                        display: flex;
                    }
                    .mde-tab {
                        background: transparent;
                        padding: 8px;
                        margin-top: 8px;
                        border: none;
                        cursor: pointer;
                    }
                    .mde-tab-activated {
                        margin-bottom: -1px;
                        margin-top: 8px;
                        border-top-left-radius: 2px;
                        border-top-right-radius: 2px;
                        background: white;
                        padding: 8px;
                        border:1px solid #c8ccd0;
                        border-bottom: none;
                        cursor: pointer;
                    }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
