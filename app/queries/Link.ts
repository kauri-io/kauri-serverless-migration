import gql from 'graphql-tag'
import { UserOwner } from './Fragments'

export const extractLinkMetadata = gql`
    query extractLinkMetadata($url: String!) {
        extractLinkMetadata(url: $url) {
            url
            type
            title
            description
            image
            author
        }
    }
`

export const submitExternalLink = gql`
    mutation submitExternalLink(
        $url: String!
        $title: String!
        $description: String
        $summary: String
        $attributes: Map_String_StringScalar
        $authorName: String
        $authorSocial: Map_String_StringScalar
        $owner: ResourceIdentifierInput
        $tags: [String]
    ) {
        submitExternalLink(
            url: $url
            title: $title
            description: $description
            summary: $summary
            attributes: $attributes
            authorName: $authorName
            authorSocial: $authorSocial
            owner: $owner
            tags: $tags
        ) {
            hash
        }
    }
`

export const searchExternalLinks = gql`
    query searchExternalLinks(
        $page: Int = 0
        $size: Int = 10
        $sort: String
        $dir: DirectionInput
        $filter: ExternalLinkFilterInput
    ) {
        searchExternalLinks(
            page: $page
            size: $size
            sort: $sort
            dir: $dir
            filter: $filter
        ) {
            content {
                id
                resourceIdentifier {
                    type
                    id
                }
                dateCreated
                dateUpdated
                submitterId
                owner {
                    user {
                        ...UserOwner
                    }
                }
                url {
                    value
                    isEditable
                }
                title {
                    value
                    isEditable
                }
                description {
                    value
                    isEditable
                }
                summary {
                    value
                    isEditable
                }
                attributes
                authorName {
                    value
                    isEditable
                }
                authorSocial
                tags
            }
            totalPages
            totalElements
        }
    }
    ${UserOwner}
`
