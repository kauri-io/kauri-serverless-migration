import gql from 'graphql-tag'

export const extractLinkMetadata = gql`
    query extractLinkMetadata($url: String!) {
        extractLinkMetadata (url: $url) {
            url,
            type,
            title,
            description,
            image,
            author
        }
    }
`