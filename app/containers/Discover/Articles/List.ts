import Articles from './ListView'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { globalSearchApprovedArticles } from '../../../queries/Article'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import {
    openModalAction,
    closeModalAction,
} from '../../../components/Modal/Module'
import { addResourceToCollectionAction } from '../../AddToCollection/Module'
import config from '../../../config'

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

const QUERY_NAME = 'ArticlesQuery'

export default compose(
    connect(
        mapStateToProps,
        {
            routeChangeAction,
            openModalAction,
            addResourceToCollectionAction,
            closeModalAction,
        }
    ),
    graphql(globalSearchApprovedArticles, {
        name: QUERY_NAME,
        options: ({ scoringMode }: { scoringMode: string }) => ({
            fetchPolicy: 'network-only',
            variables: {
                filter: {
                    mustNotContainTag: ['ethdenver-2019-submission'],
                    mustNotIncludeUserId: config.testingAccounts,
                    types: ['ARTICLE', 'LINK'],
                },
                parameter: {
                    scoringMode,
                },
            },
        }),
    }),
    withLoading()
)(withPagination(Articles, 'searchAutocomplete', QUERY_NAME))
