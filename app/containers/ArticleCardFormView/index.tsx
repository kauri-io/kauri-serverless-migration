import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import { getArticleQuery } from '../../queries/Article'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import ArticleCard from '../../components/Card/ArticleCard'
import { IReduxState } from '../../lib/Module'
import { getArticleVariables } from '../../queries/__generated__/getArticle'
import { getArticleURL } from '../../lib/getURLs';

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
    isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
})

interface IProps {
    isLoggedIn: boolean
    data: { getArticle: any }
}

const View: React.FunctionComponent<IProps> = ({
    data: { getArticle: article },
}) => {
  return <ArticleCard {...article} href={getArticleURL(article)} />
}

export default compose(
    connect(
        mapStateToProps,
        {}
    ),
    graphql(getArticleQuery, {
        options: ({ id, version }: getArticleVariables) => ({
            variables: {
                id,
                version,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
