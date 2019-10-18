import request from 'request-promise'
import cheerio from 'cheerio'

export const parseMedium = async (document: Document) => {
    const images = document.getElementsByTagName('img')
    const noscripts = document.getElementsByTagName('noscript')
    for (let i = 0; i < images.length; i++) {
        const url = images[i].src
        const new_url = url.replace('?q=20','').replace('/60/','/1920/')
        console.log(new_url)
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
    return document
}