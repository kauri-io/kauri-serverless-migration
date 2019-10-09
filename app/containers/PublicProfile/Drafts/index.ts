import View from './View'
import { compose, graphql } from 'react-apollo'
import { searchPersonalDrafts } from '../../../queries/Article'
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

const QUERY_NAME = 'DraftsQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
        }
    ),
    graphql(searchPersonalDrafts, {
        name: QUERY_NAME,
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                userId,
            },
        }),
    }),
    withLoading()
)(withPagination(View, 'searchArticles', QUERY_NAME))
