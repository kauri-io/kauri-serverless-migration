import Communities from './ListView'
import { compose, graphql } from 'react-apollo'
import { searchResultsAutocomplete } from '../../../queries/Search'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import withLoading from '../../../lib/with-loading'
import withPagination from '../../../lib/with-pagination'
import config from '../../../config'

interface IState {
    app: {
        hostName: string
    }
}

const mapStateToProps = (state: IState) => {
    return { hostName: state.app && state.app.hostName }
}

const QUERY_NAME = 'CommunityQuery'

export default compose(
    connect(
        mapStateToProps,
        { routeChangeAction }
    ),
    graphql(searchResultsAutocomplete, {
        name: QUERY_NAME,
        options: () => ({
            variables: {
                page: 0,
                size: 6,
                filter: {
                    type: 'COMMUNITY',
                    mustNotIncludeUserId: config.testingAccounts,
                },
            },
        }),
    }),
    withLoading()
)(withPagination(Communities, 'searchAutocomplete', QUERY_NAME))
