import gql from 'graphql-tag'

export const recordViewMutation = gql`
    mutation recordView($resourceId: ResourceIdentifierInput!) {
        recordView(resourceId: $resourceId) {
            hash
        }
    }
`
