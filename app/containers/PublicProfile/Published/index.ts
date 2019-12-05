import Articles from './View'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { searchResultsAutocomplete } from '../../../queries/Search'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { openModalAction } from '../../../components/Modal/Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
    }
}

const QUERY_NAME = 'PublishedQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
            openModalAction,
        }
    ),
    graphql(searchResultsAutocomplete, {
        name: QUERY_NAME,
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                filter: {
                    types: ['ARTICLE', 'LINK'],
                    mustIncludeUserId: userId,
                },
                page: 0,
                size: 10,
            },
        }),
    }),
    withLoading()
)(withPagination(Articles, 'searchAutocomplete', QUERY_NAME))
