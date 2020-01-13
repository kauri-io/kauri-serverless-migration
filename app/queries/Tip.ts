import gql from 'graphql-tag'

export const getTipAddress = gql`
    query getTipAddress($resource: ResourceIdentifierInput) {
        getTipAddress(resource: $resource) {
            address
        }
    }
`

export const stageTip = gql`
    mutation stageTip(
        $transactionHash: String
        $recipientResourceId: ResourceIdentifierInput
    ) {
        stageTip(
            transactionHash: $transactionHash
            recipientResourceId: $recipientResourceId
        ) {
            hash
        }
    }
`
