import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { getArticleQuery } from '../../queries/Article'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import View from './View'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'
import { deleteDraftArticleAction } from './DeleteDraftArticleModule'

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
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
            deleteDraftArticleAction,
        }
    ),
    graphql(getArticleQuery, {
        name: 'data',
        options: ({ id, version }: { id: string; version: string }) => {
            const versionInt = parseInt(version, 10)
            return {
                variables: {
                    id,
                    test:
                        version &&
                        version.length <= 2 &&
                        isNaN(versionInt) === false
                            ? versionInt
                            : null,
                    version: versionInt,
                },
            }
        },
    }),
    withLoading(),
    withApolloError()
)(View)
