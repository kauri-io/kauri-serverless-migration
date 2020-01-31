import Readability from 'readability'
import request from 'request-promise'
import { JSDOM } from 'jsdom'
import { parseMedium } from './tweaks/medium'
import TurndownService from 'turndown'

const headers = {
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:69.0) Gecko/20100101 Firefox/69.0',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-GB,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Cache-Control': 'max-age=0',
}

const turndownService = new TurndownService({codeBlockStyle: "fenced"})
turndownService.addRule('gist', {
  filter: function (node, _options) {
    return (node.nodeName === 'A' &&
            node.getAttribute('href').indexOf('https://gist.github.com') !== -1)
  },
  replacement: function (_content, node, _options) {
    const href = node.getAttribute('href')
    return `[GIST ID: ${href.split('/')[4]}](${href})`
  }
})
turndownService.addRule('code', {
  filter: function (node, _options) {
    return (node.nodeName === 'CODE' || node.nodeName === 'SPAN')
  },
  replacement: function (content) {
    if(content.indexOf("\n") !== -1) {
      return '\n\n```\n' + content + '\n```\n\n'
    } else {
      return '`' + content + '`'
    }
  }
})

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

    const md = turndownService.turndown(article.content);
    article.md = md.trim()
    res.send(article)
  }
}