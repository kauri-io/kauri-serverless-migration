import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
    getProfileURL,
} from './getURLs'

export const redirectArticle = (context, stateApollo, url) => {
    const apolloArticleId = `${url.query.article_id}${stateApollo.apollo.data[`ResourceIdentifier:${url.query.article_id}`].version}`
    const title = stateApollo.apollo.data[apolloArticleId].title
    const redirectUrl = getArticleURL({
        id: url.query.article_id,
        title,
    })
    context.res.writeHead(301, {
        Location: redirectUrl.as,
    })
    context.res.end()
}

export const redirectCollection = (context, stateApollo, url) => {
    const name =
        stateApollo.apollo.data[`CollectionDTO:${url.query.collection_id}`].name
    const redirectUrl = getCollectionURL({
        id: url.query.collection_id,
        name,
    })
    context.res.writeHead(301, {
        Location: redirectUrl.as,
    })
    context.res.end()
}

export const redirectCommunity = (context, stateApollo, url) => {
    const name =
        stateApollo.apollo.data[`CommunityDTO:${url.query.community_id}`].name
    const redirectUrl = getCommunityURL({
        id: url.query.community_id,
        name,
    })
    context.res.writeHead(301, {
        Location: redirectUrl.as,
    })
    context.res.end()
}

export const redirectProfile = (context, _stateApollo, url) => {
    const redirectUrl = getProfileURL({
        username: url.query.username,
    })
    context.res.writeHead(301, {
        Location: redirectUrl.as,
    })
    context.res.end()
}

export const handleRedirects = (context, stateApollo, url) => {
    if (!process.browser && url.pathname === '/article' && !url.query.slug) {
        redirectArticle(context, stateApollo, url)
    }
    if (!process.browser && url.pathname === '/collection' && !url.query.slug) {
        redirectCollection(context, stateApollo, url)
    }
    if (!process.browser && url.pathname === '/community' && !url.query.slug) {
        redirectCommunity(context, stateApollo, url)
    }
}
