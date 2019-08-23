import ShowDown from 'showdown'
import config from '../../config'
const converter = new ShowDown.Converter()

export default ({ content }) => {
    const html = converter.makeHtml(
        config.useCloudImage
            ? JSON.parse(String(content))
                  .markdown.replace(
                      /https:\/\/api.beta.kauri.io:443\/ipfs\//g,
                      `https://${config.cloudImageId}.cloudimg.io/cdn/n/twebp/https://api.beta.kauri.io:443/ipfs/`
                  )
                  .replace(
                      /https:\/\/api.kauri.io:443\/ipfs\//g,
                      `https://${config.cloudImageId}.cloudimg.io/cdn/n/twebp/https://api.beta.kauri.io:443/ipfs/`
                  )
            : JSON.parse(String(content)).markdown
    )
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    )
}
