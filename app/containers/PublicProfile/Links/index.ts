import Articles from './View'
import { compose, graphql } from 'react-apollo'
import { searchExternalLinks } from '../../../queries/Link'
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

const QUERY_NAME = 'LinksQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
        }
    ),
    graphql(searchExternalLinks, {
        name: QUERY_NAME,
        options: () => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                // userId,
                page: 0,
            },
        }),
    }),
    withLoading()
)(withPagination(Articles, 'searchExternalLinks', QUERY_NAME))
