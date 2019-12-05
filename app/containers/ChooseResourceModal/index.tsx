import View from './View'
import { graphql, withApollo } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { connect } from 'react-redux'
import withApolloError from '../../lib/with-apollo-error'
import React from 'react'
import { globalSearchApprovedArticles } from '../../queries/Article'

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
const DEFAULT_QUERY = globalSearchApprovedArticles

const query = props => {
    return props.queryDoc || DEFAULT_QUERY
}

const graphqlDynamic = query => {
    return component => {
        return props => {
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

export default compose(
    withApollo,
    connect(
        mapStateToProps,
        {}
    ),
    graphqlDynamic(query),
    withApolloError()
)(View)
