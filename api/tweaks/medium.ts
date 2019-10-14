export const parseMedium = (document: Document) => {
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
    return document
}