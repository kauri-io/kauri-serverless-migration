import request from 'request-promise'
import cheerio from 'cheerio'

export const parseMedium = async (document: Document) => {
    const images = document.getElementsByTagName('img')
    const noscripts = document.getElementsByTagName('noscript')
    for (let i = 0; i < images.length; i++) {
        const url = images[i].src
        const new_url = url.replace('?q=20','').replace('/60/','/1920/')
        images[i].src = new_url
    }
    for (let i = 0; i < noscripts.length; i ++) {
       noscripts[i].remove()
    }

    const iframes = document.getElementsByTagName('iframe')

    for (let i = 0; i < iframes.length; i++) {
        const gistURL = iframes[i].getAttribute('src')
        const body = await request(String(gistURL), { gzip: true})
        const $ = cheerio.load(body)
        const script = $('script').attr('src')
        if (script.indexOf('gist.githubusercontent.com') !== -1){
            script.replace('.js','/raw')
            // Fetch the content and do something with it
        }
    }

    const brs = document.getElementsByTagName('br')
    for (let i = 0; i < brs.length; i ++) {
        brs[i].replaceWith('\n')
    }
    const spans = document.getElementsByTagName('span')
    for (let i = 0; i < spans.length; i ++) {
        spans[i].outerHTML = spans[i].outerHTML + '\n'
    }
    return document
}