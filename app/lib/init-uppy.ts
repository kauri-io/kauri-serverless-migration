const Uppy = require('@uppy/core')
const Url = require('@uppy/url')
const Dashboard = require('@uppy/dashboard')
const XHRUpload = require('@uppy/xhr-upload')
import cookie from 'cookie'
import config from '../config'

export const parseCookies = (ctx: any, options?: any) => {
    let cookieToParse =
        ctx.req && ctx.req.headers.cookie && ctx.req.headers.cookie
    if (process.browser) cookieToParse = global.window.document.cookie
    if (!cookieToParse) return {}
    return cookie.parse(cookieToParse, options)
}

const initUppy = ({ allowGifs, trigger }) => {
    const parsedToken = parseCookies({}, {})['TOKEN']
    const uppy = Uppy(config.uppyConfig)
        .use(Dashboard, {
            closeModalOnClickOutside: true,
            disableThumbnailGenerator: false,
            showProgressDetails: true,
            proudlyDisplayPoweredByUppy: false,
            closeAfterFinish: true,
            trigger,
            note: `PNG ${
                !allowGifs ? ', GIF' : ''
            } or JPEG images only, up to 10 MB`,
            locale: {
                strings: {
                    dropPaste:
                        'Drag and drop your image here or browse files from your device',
                    dropPasteImport:
                        'Drag and drop your image here or browse files from your device',
                    browse: 'browse your files.',
                },
            },
            bundle: true,
        })
        .use(Url, {
            target: Dashboard,
            companionUrl: "https://api2.transloadit.com/uppy-server",
            headers: {
                "X-Auth-Token": `Bearer ${parsedToken}`,
            },
        })
        .use(XHRUpload, {
            limit: 1,
            method: 'post',
            formData: true,
            fieldName: 'file',
            bundle: true,
            endpoint: `https://${config.gateway}:443/ipfs/`,
            headers: {
                'X-Auth-Token': `Bearer ${parsedToken}`,
            }
        })
    return uppy
}

export default initUppy
