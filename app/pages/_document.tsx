import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
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
                        {flush () || null}
                    </React.Fragment>
                ),
            }
        } finally {
            styledComponentsSheet.seal()
        }
    }

    render() {
        return (
            <html lang="en">
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
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
                    <script
                        defer
                        src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <style>{`a { color: inherit; text-decoration: none;} .uppy-DashboardTab:last-child{display: none !important;} `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
