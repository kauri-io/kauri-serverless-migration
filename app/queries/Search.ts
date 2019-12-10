import gql from 'graphql-tag'
import { LinkCard, ArticleCard, CollectionCard, CommunityCard, UserCard } from './Fragments/cards'

export const searchAutocomplete = gql`
    query searchAutocomplete(
        $page: Int
        $size: Int
        $query: String
        $filter: SearchFilterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
        ) {
            totalElements
            totalPages
            totalElementsBreakdown
            content {
                resourceIdentifier {
                    id
                    type
                }
                tags
                name
                description
                score
            }
        }
    }
`

export const searchResultsAutocomplete = gql`
    query searchResultsAutocomplete(
        $page: Int
        $size: Int
        $query: String
        $filter: SearchFilterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
        ) {
            totalElements
            totalPages
            totalElementsBreakdown
            isLast
            content {
                resourceIdentifier {
                    id
                    type
                }
                resource {
                    ... on ExternalLinkDTO {
                        ...LinkCard
                    }
                    ... on PublicUserDTO {
                        ...UserCard
                    }
                    ... on ArticleDTO {
                        ...ArticleCard
                    }
                    ... on CollectionDTO {
                        ...CollectionCard
                    }
                    ... on CommunityDTO {
                        ...CommunityCard
                    }
                }
            }
        }
    }

    ${LinkCard}
    ${UserCard}
    ${ArticleCard}
    ${CollectionCard}
    ${CommunityCard}
`
