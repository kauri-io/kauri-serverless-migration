import CreateCollectionForm from '../CreateCollectionForm'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { globalCollectionDetails as getCollection } from '../../queries/Collection'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'

const mapStateToProps = state => ({
    userId: state.app && state.app.user && state.app.user.id,
})

export default compose(
    connect(mapStateToProps, {}),
    graphql(getCollection, {
        options: ({ id }: { id: string }) => ({
            variables: {
                id,
            },
        }),
        skip: ({ id }) => !id,
    }),
    withLoading(),
    withApolloError()
)(CreateCollectionForm)
