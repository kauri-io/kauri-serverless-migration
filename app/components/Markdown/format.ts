const append = (end, token, value) =>
    [value.slice(0, end), token, value.slice(end)].join('')

const prepend = (start, token, value) =>
    [value.slice(0, start), token, value.slice(start)].join('')

const wrapInToken = (start, end, value, token) => {
    const withEndWrap = append(end, token, value)
    const withAppend = prepend(start, token, withEndWrap)
    return withAppend
}

interface IProps {
    start: number
    end: number
    value: string
    type: string
    url?: string
    text?: string
}

export default ({ start, end, value, type, url, text }: IProps) => {
    // console.log(`Start: ${start}, End: ${end}, Value: ${value}, Type: ${type}, URL: ${url}, Text: ${text}`)
    switch (type) {
        case 'bold':
            return wrapInToken(start, end, value, '**')
        case 'italic':
            return wrapInToken(start, end, value, '_')
        case 'strike':
            return wrapInToken(start, end, value, '~~')
        case 'code':
            const selection = value.slice(start, end)
            if (/\r|\n/.exec(selection)) {
                return wrapInToken(start, end, value, '\n\n```\n')
            } else {
                return wrapInToken(start, end, value, '`')
            }
        case 'quote':
            return append(start, '> ', value)
        case 'title':
            return append(start, '\n##', value)
        case 'list':
            return append(start, '\n- ', value)
        case 'numbered-list':
            return append(start, '\n1. ', value)
        case 'image':
            return append(end, `![](${url})`, value)
        case 'link':
            return append(end, `[${text}](${url})`, value)
        case 'youtube':
            const youtubeURL =
                url &&
                url
                    .replace('watch?v=', 'embed/')
                    .replace('youtu.be/', 'youtube.com/embed/')
            const str = `<iframe width="560" height="315" src="${youtubeURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            return append(end, str, value)
        default:
            return value
    }
}
