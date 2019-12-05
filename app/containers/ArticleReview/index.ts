import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import { approveArticleAction, rejectArticleAction } from './Module'
import { getArticleQuery } from '../../queries/Article'
import { IReduxState } from '../../lib/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import withLoading from '../../lib/with-loading'
import View from './View'
import {
    closeModalAction,
    openModalAction,
} from '../../components/Modal/Module'

const mapStateToProps = (
    state: IReduxState,
    props: { id: string; version: string }
) => ({
    communities: state.app && state.app.user && state.app.user.communities,
    id: props.id,
    userId: state.app && state.app.user && state.app.user.id,
    version: props.version,
})

interface IArticleVersion {
    id: string
    version: string
}

export default compose(
    connect(
        mapStateToProps,
        {
            approveArticleAction,
            closeModalAction,
            openModalAction,
            rejectArticleAction,
            routeChangeAction,
        }
    ),
    graphql(getArticleQuery, {
        name: 'ProposedUpdate',
        options: ({ id, version }: IArticleVersion) => ({
            variables: {
                id,
                version: parseInt(version, 10),
            },
        }),
    }),
    graphql(getArticleQuery, {
        name: 'CurrentArticle',
        options: ({ id }: IArticleVersion) => ({
            variables: {
                id,
            },
        }),
    }),
    withLoading()
)(View)
