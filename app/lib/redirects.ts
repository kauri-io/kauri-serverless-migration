import { getArticleURL, getCollectionURL } from './getURLs'

export const redirectArticle = (context, stateApollo, url) => {
    console.log('REDIRECTING')
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
    console.log('REDIRECTING', url)
    console.log(JSON.stringify(stateApollo))
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
    console.log('REDIRECTING')
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

export const redirectProfile = (context, stateApollo, url) => {
    console.log('REDIRECTING')
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
