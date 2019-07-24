import ArticleRejected from './View'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getArticleQuery } from '../../queries/Article'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import withLoading from '../../lib/with-loading'
import { IReduxState } from '../../lib/Module'

const mapStateToProps = (state: IReduxState) => {
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
        options: ({ id, version }: { id: string; version: number }) => ({
            variables: { id, version },
        }),
    }),
    withLoading()
)(ArticleRejected)
