import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import View from './View'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import { getLink } from '../../queries/Link'
import { addCommentAction, voteAction } from '../Article/Module'

const mapStateToProps = (state: IReduxState) => ({
    personalUsername: state.app && state.app.user && state.app.user.username,
    userId: state.app && state.app.user && state.app.user.id,
    user: state.app && state.app.user,
})

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            closeModalAction,
            openModalAction,
            routeChangeAction,
            addCommentAction,
            voteAction,
        }
    ),
    graphql(getLink, {
        name: 'data',
        options: ({ id }: { id: string }) => ({
            variables: {
                id,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
