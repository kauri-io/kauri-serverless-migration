import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { getArticleQuery, relatedArticles } from '../../queries/Article'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import { voteAction, addCommentAction, tipAction } from './Module'
import View from './View'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'

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
            addCommentAction,
            closeModalAction,
            openModalAction,
            routeChangeAction,
            voteAction,
            tipAction,
        }
    ),
    graphql(getArticleQuery, {
        name: 'data',
        options: ({ id }: { id: string }) => ({
            variables: {
                id,
            },
        }),
    }),
    graphql(relatedArticles, {
        name: 'RelatedArticles',
        options: ({ id }: { id: string }) => ({
            variables: {
                filter: {
                    type: 'ARTICLE',
                },
                page: 0,
                resourceId: {
                    id,
                    type: 'ARTICLE',
                },
                size: 2,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
