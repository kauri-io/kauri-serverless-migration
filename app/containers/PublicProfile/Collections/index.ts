import View from './View'
import { compose, graphql } from 'react-apollo'
import { getCollectionsForUser } from '../../../queries/Collection'
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

const QUERY_NAME = 'CollectionQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
            openModalAction
        }
    ),
    graphql(getCollectionsForUser, {
        name: QUERY_NAME,
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                sort: 'dateUpdated',
                dir: 'DESC',
                filter: {
                    ownerIdEquals: userId,
                },
            },
        }),
    }),
    withLoading()
)(withPagination(View, 'searchCollections', QUERY_NAME))
