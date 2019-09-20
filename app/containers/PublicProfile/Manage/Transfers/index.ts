import View from './View'
import { compose, graphql } from 'react-apollo'
import { getArticleTransfers } from '../../../../queries/Article'
import { connect } from 'react-redux'
import withLoading from '../../../../lib/with-loading'
import { withRouter } from 'next/router'
import { routeChangeAction } from '../../../../lib/Epics/RouteChangeEpic'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
        }
    ),
    graphql(getArticleTransfers, {
        name: 'PendingTransfersQuery',
        options: ({ userId }: { userId: string }) => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                size: 100,
                recipient: userId,
            },
        }),
    }),
    withLoading()
)(withRouter(View))
