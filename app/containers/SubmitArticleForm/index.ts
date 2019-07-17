import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { getArticle } from '../../queries/Article'
import {
    submitArticleAction,
    submitArticleVersionAction,
    editArticleAction,
    draftArticleAction,
} from './Module'
import { IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { publishArticleAction } from './PublishArticleModule'
import withLoading from '../../lib/with-loading'
import View from './View'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'

const mapStateToProps = (state: IReduxState) => ({
    communities: state.app.user && state.app.user.communities,
    userAvatar: state.app.user && state.app.user.avatar,
    userId: state.app.user && state.app.user && state.app.user.id,
    username: state.app.user && state.app.user.username,
})

export default compose(
    connect(
        mapStateToProps,
        {
            closeModalAction,
            draftArticleAction,
            editArticleAction,
            openModalAction,
            publishArticleAction,
            routeChangeAction,
            showNotificationAction,
            submitArticleAction,
            submitArticleVersionAction,
        }
    ),
    graphql(getArticle, {
        options: ({ id, version }: { id: string; version: string }) => ({
            variables: {
                id,
                version,
            },
        }),
        skip: ({ id }) => !id,
    }),
    withLoading()
)(View)
