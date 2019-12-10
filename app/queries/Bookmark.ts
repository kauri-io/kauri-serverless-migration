import gql from 'graphql-tag'
import { ArticleCard, CollectionCard, LinkCard } from './Fragments/cards'

export const getBookmarkFolders = gql`
    query getBookmarkFolders($resourceId: ResourceIdentifierInput) {
        getBookmarkFolders(resourceId: $resourceId) {
            name
            total
            isBookmarked
        }
    }
`

export const getBookmarks = gql`
    query getBookmarks($page: Int = 0, $size: Int = 12, $folder: String) {
        getBookmarks(page: $page, size: $size, folder: $folder) {
            totalElements
            totalPages
            isLast
            content {
                id
                type
                resource {
                    ... on ArticleDTO {
                        ...ArticleCard
                    }
                    ... on CollectionDTO {
                        ...CollectionCard
                    }
                    ... on ExternalLinkDTO {
                        ...LinkCard
                    }
                }
            }
        }
    }

    ${ArticleCard}
    ${CollectionCard}
    ${LinkCard}
`

export const bookmark = gql`
    mutation bookmark($resourceId: ResourceIdentifierInput!, $folder: String) {
        bookmark(resourceId: $resourceId, folder: $folder) {
            hash
        }
    }
`

export const unbookmark = gql`
    mutation unbookmark(
        $resourceId: ResourceIdentifierInput!
        $folder: String
    ) {
        unbookmark(resourceId: $resourceId, folder: $folder) {
            hash
        }
    }
`

export const createBookmarkFolder = gql`
    mutation createBookmarkFolder($folder: String!) {
        createBookmarkFolder(folder: $folder) {
            hash
        }
    }
`

export const deleteBookmarkFolder = gql`
    mutation deleteBookmarkFolder($folder: String!) {
        deleteBookmarkFolder(folder: $folder) {
            hash
        }
    }
`

export const editBookmarkFolder = gql`
    mutation editBookmarkFolder($folder: String!, $newFolder: String!) {
        editBookmarkFolder(folder: $folder, newFolder: $newFolder) {
            hash
        }
    }
`
