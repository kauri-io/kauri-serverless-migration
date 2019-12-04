import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import { deleteDraftArticleAction } from './DeleteDraftArticleModule'
import { publishArticleAction } from '../WriteArticle/PublishArticleModule'
import { getArticleQuery } from '../../queries/Article'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import View from './View'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'

const mapStateToProps = (state: IReduxState) => {
    return {
        communities: state.app.user && state.app.user.communities,
        hostName: state.app && state.app.hostName,
        personalUsername:
            state.app && state.app.user && state.app.user.username,
        userId: state.app && state.app.user && state.app.user.id,
    }
}

export default compose(
    connect(mapStateToProps, {
        closeModalAction,
        deleteDraftArticleAction,
        openModalAction,
        publishArticleAction,
        routeChangeAction,
    }),
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
