import Index from '../../containers/CreateCommunityForm'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { getCommunity } from '../../queries/Community'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import { getCommunityVariables } from '../../queries/__generated__/getCommunity'

export default compose(
    graphql<{ id: string }, getCommunityVariables>(getCommunity, {
        options: ({ id }: getCommunityVariables) => ({
            variables: {
                id,
            },
        }),
        skip: ({ id }) => !id,
    }),
    withLoading(),
    withApolloError()
)(Index)
