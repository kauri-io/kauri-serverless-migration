const ARTICLE_CACHE = 'article-editor-cache'

let cache = {}

export const clearCachedItem = key => {
    cache = JSON.parse(window.localStorage.getItem(ARTICLE_CACHE) || '{}')
    delete cache[key]
    window.localStorage.setItem(ARTICLE_CACHE, JSON.stringify(cache))
}

export const getArticleCachedItem = key => {
    cache = JSON.parse(window.localStorage.getItem(ARTICLE_CACHE) || '{}')
    return cache[key]
}

export const setArticleCacheItem = (
    key,
    subject,
    tags,
    content,
    attributes,
    article
) => {
    const item = (cache[key] = {
        subject,
        tags,
        content,
        attributes,
        updated: Date.now(),
    })
    if (
        (article &&
            (item.subject !== article.subject ||
                item.content !== article.content)) ||
        (!article && (item.subject !== null || item.content !== null))
    ) {
        window.localStorage.setItem(ARTICLE_CACHE, JSON.stringify(cache))
    }
}
