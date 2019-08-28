const append = (end, token, value) => [value.slice(0, end), token, value.slice(end)].join('');

const prepend = (start, token, value) => [value.slice(0, start), token, value.slice(start)].join('');

const wrapInToken = (start, end, value, token) => {
    const withEndWrap = append(end, token, value)
    const withAppend = prepend(start, token, withEndWrap)
    return withAppend
}

export default (start: number, end: number, value: string, type: string, url?: string, text?: string) => {
    switch (type) {
        case 'bold':
            return wrapInToken(start, end, value, '**')
        case 'italic':
            return wrapInToken(start, end, value, '__')
        case 'strike':
            return wrapInToken(start, end, value, '~~')
        case 'code':
            const selection = value.slice(start, end)
            if (/\r|\n/.exec(selection)) {
                return wrapInToken(start, end, value, '\n```\n')
            } else {
                return wrapInToken(start, end, value, '`')
            }
        case 'quote':
            return append(start, '> ', value)
        case 'title':
            return append(start, '\n#', value)
        case 'list':
                return append(start, '\n- ', value)
        case 'numbered-list':
            return append(start, '\n1. ', value)
        case 'image':
            return append(end, `![](${url})`, value)
        case 'link':
            return append(end, `[${text}](${url})`, value)            
        default:
            return value
    }
}