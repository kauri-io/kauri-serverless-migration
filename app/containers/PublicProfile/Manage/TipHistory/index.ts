import View from './View'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../../../lib/with-loading'
import { withRouter } from 'next/router'
import { routeChangeAction } from '../../../../lib/Epics/RouteChangeEpic'
import { getTips } from '../../../../queries/Tip'

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
    graphql(getTips, {
        name: 'receivedTipsQuery',
        options: () => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                size: 100,
                filter: { includeReceived: true },
            },
        }),
    }),
    graphql(getTips, {
        name: 'sentTipsQuery',
        options: () => ({
            fetchPolicy: 'cache-and-network',
            variables: {
                page: 0,
                size: 100,
                filter: { includeSent: true },
            },
        }),
    }),
    withLoading()
)(withRouter(View))
