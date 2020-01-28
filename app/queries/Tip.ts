import gql from 'graphql-tag'
import { TipDetails } from './Fragments'

export const getTipAddress = gql`
    query getTipAddress($resource: ResourceIdentifierInput) {
        getTipAddress(resource: $resource) {
            address
        }
    }
`

export const getTips = gql`
    query getTips(
        $page: Int
        $size: Int
        $sort: String
        $dir: DirectionInput
        $filter: TipFilterInput
    ) {
        getTips(
            page: $page
            size: $size
            sort: $sort
            dir: $dir
            filter: $filter
        ) {
            content {
                ...TipDetails
            }
            totalPages
            totalElements
        }
    }

    ${TipDetails}
`

export const stageTip = gql`
    mutation stageTip(
        $transactionHash: String
        $recipientResourceId: ResourceIdentifierInput
        $tipValue: BigDecimal
        $tokenType: String
    ) {
        stageTip(
            transactionHash: $transactionHash
            recipientResourceId: $recipientResourceId
            tipValue: $tipValue
            tokenType: $tokenType
        ) {
            hash
        }
    }
`
