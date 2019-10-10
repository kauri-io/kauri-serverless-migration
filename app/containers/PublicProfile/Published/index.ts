import Articles from './View'
import { compose, graphql } from 'react-apollo'
import { searchPersonalArticles } from '../../../queries/Article'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
    }
}

const QUERY_NAME = 'ArticlesQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
        }
    ),
    graphql(searchPersonalArticles, {
        name: QUERY_NAME,
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                userId,
                page: 0,
            },
        }),
    }),
    withLoading()
)(withPagination(Articles, 'searchArticles', QUERY_NAME))
