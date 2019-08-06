import View from './View'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { IReduxState } from '../../lib/Module'
import { saveUserDetailsAction } from '../../components/EditProfileForm/Module'
import { getOwnProfile } from '../../queries/User'
import { compose, graphql } from 'react-apollo'

const mapStateToProps = (state: IReduxState) => ({
    user: state.app.user,
})

export default compose(
    connect(
    mapStateToProps,
    { routeChangeAction, showNotificationAction, saveUserDetailsAction }),
    graphql(getOwnProfile, {
        name: 'OwnProfile',
        options: {
            fetchPolicy: 'network-only',
        },
    })
)(View)