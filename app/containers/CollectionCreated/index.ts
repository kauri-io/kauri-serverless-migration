import CollectionCreated from './View'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { getCollectionQuery } from '../../queries/Collection'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import withLoading from '../../lib/with-loading'

const mapStateToProps = () => {
    return {}
}

export default compose(
    connect(
        mapStateToProps,
        { routeChangeAction }
    ),
    graphql(getCollectionQuery, {
        options: ({ id }: { id: string }) => ({
            variables: { id },
        }),
    }),
    withLoading()
)(CollectionCreated)
