import EditProfile from './View'
import { compose, graphql } from 'react-apollo'
import { getOwnProfile } from '../../queries/User'
import { connect } from 'react-redux'
import { saveUserDetailsAction } from './Module'
import { resendEmailVerificationAction } from '../EmailVerification/Module'

const mapStateToProps = (state, ownProps) => {
    return {
        hostName: state.app && state.app.hostName,
        currentUser: state.app.userId && state.app.userId.substring(2),
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            saveUserDetailsAction,
            resendEmailVerificationAction,
        },
        null,
        { withRef: true }
    ),
    graphql(getOwnProfile, {
        fetchPolicy: 'network-only',
        name: 'OwnProfile',
        withRef: true,
    })
)(EditProfile)
