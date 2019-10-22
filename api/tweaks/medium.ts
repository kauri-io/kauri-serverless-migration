export const parseMedium = async (document: Document) => {
    const images = document.getElementsByTagName('img')
    const noscripts = document.getElementsByTagName('noscript')
    for (let i = 0; i < images.length; i++) {
        const url = images[i].src
        const new_url = url.replace('?q=20','')
            .replace('/40/','/1920/')
            .replace('/50/','/1920/')
            .replace('/60/','/1920/')
        images[i].src = new_url
    }
    for (let i = 0; i < noscripts.length; i ++) {
       noscripts[i].remove()
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