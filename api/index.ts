import Readability from 'readability'
import request from 'request-promise'
import { JSDOM } from 'jsdom'
import cheerio from 'cheerio'
import { parseMedium } from './tweaks/medium'

const headers = {
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-GB,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Cache-Control': 'max-age=0',
}

const translateNode = ($, str?: string) => {
  let string = str || ''
  $('*').each((_index, item) =>{
    if (item.name === 'h1') {
      string += `\n\n# ${$(item).text()} \n`
    }
    if (item.name === 'h2') {
      string += `\n\n## ${$(item).text()} \n`
    }
    if (item.name === 'h3') {
      string += `\n\n### ${$(item).text()} \n`
    }
    if (item.name === 'h4') {
      string += `\n\n#### ${$(item).text()} \n`
    }
    if (item.name === 'p') {
      string += `\n\n${$(item).text()} \n\n`
    }
    if (item.name === 'img') {
      string += `\n![${$(item).attr('alt')}](${$(item).attr('src')})\n`
    }
    if (item.name === 'code') {
      string += '\n\n```\n'
      string += `![${$(item).text()})`
      string += '\n```\n\n'
    }
  })
  return string
}

module.exports = async (req, res) => {

  const raw_url = req.query.url.replace('https://','').replace('http://').replace('https:/','').replace('http:/','')
  const url = `https://${encodeURI(raw_url)}`
  
  if (!url) {
    res.send('Please provide a url')
  } else {
    const body = await request(url, { headers, gzip: true })
    const doc = new JSDOM(body, {
      url
    })
    const document = await parseMedium(doc.window.document)
    const reader = new Readability(document)
    const article = reader.parse()
    let $ = cheerio.load(article.content,
      { xmlMode: true, decodeEntities: false}
      )
    const md = translateNode($)
    article.md = md.trim()
    res.send(article)
  }
}