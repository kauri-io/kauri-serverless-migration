import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { globalSearchApprovedArticles } from '../../queries/Article'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import withApolloError from '../../lib/with-apollo-error'

interface IState {
    app: {
        hostName: string
        user: { id: string }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        hostName: state.app && state.app.hostName,
        userId: state.app && state.app.user && state.app.user.id,
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

const QUERY_NAME = 'GlobalSearchQuery'

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            routeChangeAction,
        }
    ),
    graphql(globalSearchApprovedArticles, {
        name: QUERY_NAME,
        options: ({ query, filter }: { query: String; filter: any }) => ({
            fetchPolicy: 'network-only',
            variables: {
                size: 10,
                query,
                filter: { ...filter, types: ['ARTICLE', 'LINK'] },
                parameter: {
                    scoringMode: 'LAST_UPDATED',
                },
            },
        }),
    }),
    withApolloError()
)(View)
