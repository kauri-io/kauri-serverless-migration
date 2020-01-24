import View from './View'
import { compose, graphql, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import withApolloError from '../../lib/with-apollo-error'
import React from 'react'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'

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

const QUERY_NAME = 'Query'

const query = props => {
    return props.queryDoc
}

const graphqlDynamic = query => {
    return component => {
        return props => {
            if (props.queryDoc) {
                return React.createElement(
                    graphql(query(props), {
                        name: QUERY_NAME,
                        options: {
                            fetchPolicy: 'network-only',
                            variables: props.queryVariables,
                        },
                    })(component),
                    props
                )
            }
        }
    }
}

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {
            showNotificationAction,
        }
    ),
    graphqlDynamic(query),
    withApolloError()
)(View)
