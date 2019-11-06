import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { getBookmarkFolders } from '../../../queries/User'
import { connect } from 'react-redux'
import withLoading from '../../../lib/with-loading'
import withApolloError from '../../../lib/with-apollo-error'
import { openModalAction } from '../../../components/Modal/Module'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { labelRootFolder, ROOT_FOLDER } from '../Module'

const mapStateToProps = state => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser:
            state.app && state.app.userId && state.app.userId.substring(2),
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            openModalAction,
            routeChangeAction,
            labelRootFolder,
        }
    ),
    graphql(getBookmarkFolders, {
        name: 'data',
        options: () => ({
            variables: {
                folder: ROOT_FOLDER,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
