import ArticleProposed from './View'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { getArticleQuery } from '../../queries/Article'
import withLoading from '../../lib/with-loading'

const mapStateToProps = state => {
    return {
        userId: state.app && state.app.user && state.app.user.id,
    }
}

export default compose(
    connect(
        mapStateToProps,
        { routeChangeAction }
    ),
    graphql(getArticleQuery, {
        options: ({ id, version }: { id: string; version: string }) => ({
            variables: {
                id,
                version,
            },
        }),
    }),
    withLoading()
)(ArticleProposed)
