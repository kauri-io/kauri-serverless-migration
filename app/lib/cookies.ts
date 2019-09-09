import cookie from 'cookie'

export const parseCookies = (ctx: any, options?: any) => {
    let cookieToParse =
        ctx.req && ctx.req.headers.cookie && ctx.req.headers.cookie
    if (process.browser) cookieToParse = global.window.document.cookie
    if (!cookieToParse) return {}
    return cookie.parse(cookieToParse, options)
}
