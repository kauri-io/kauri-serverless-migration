import gql from 'graphql-tag'

export const recordViewMutation = gql`
    mutation recordView(
        $resourceId: ResourceIdentifierInput!
        $referrer: String
    ) {
        recordView(resourceId: $resourceId, referrer: $referrer) {
            hash
        }
    }
`
