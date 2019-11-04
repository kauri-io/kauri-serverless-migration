import gql from 'graphql-tag'
import { Link } from './Fragments'

export const extractLinkMetadata = gql`
    query extractLinkMetadata($url: String!) {
        extractLinkMetadata(url: $url) {
            url
            type
            title
            description
            image
            author
            authorSocial
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
        $ownerId: ResourceIdentifierInput
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
            ownerId: $ownerId
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
                ...Link
            }
            totalPages
            totalElements
        }
    }
    ${Link}
`

export const getLink = gql`
    query getExternalLink($id: String!) {
        getExternalLink(id: $id) {
            ...Link
        }
    }
    ${Link}
`
