import gql from 'graphql-tag'
import { Article, Collection } from './Fragments'

export const getUserDetails = gql`
    query getUser($userId: String!) {
        getUser(id: $userId) {
            id
            username
            name
            title
            website
            avatar
            social
        }
    }
`

export const getUserByUsername = gql`
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            id
            username
            name
            title
            website
            avatar
            social
            articles(page: 0, size: 1, filter: { latestVersion: true }) {
                totalElements
            }
            collections(page: 0, size: 1) {
                totalElements
            }
        }
    }
`
export const getOwnProfile = gql`
    query getMyProfile {
        getMyProfile {
            id
            email
            username
            name
            title
            website
            avatar
            social
            status
            communities {
                role
                community {
                    id
                    name
                    members {
                        id
                        role
                    }
                }
            }
            subscriptions
            dateCreated
            articles(page: 0, size: 1, filter: { latestVersion: true }) {
                totalElements
            }
            collections(page: 0, size: 1) {
                totalElements
            }
        }
    }
`

export const saveUserMutation = gql`
    mutation saveUser(
        $username: String
        $name: String
        $title: String
        $website: String
        $avatar: String
        $email: String
        $social: Map_String_StringScalar
        $subscriptions: Map_String_BooleanScalar!
    ) {
        saveUser(
            name: $name
            username: $username
            avatar: $avatar
            title: $title
            website: $website
            social: $social
            email: $email
            subscriptions: $subscriptions
        ) {
            hash
        }
    }
`

export const regenerateEmailVerificationCode = gql`
    mutation regenerateEmailVerificationCode {
        regenerateEmailVerificationCode {
            hash
        }
    }
`

export const verifyEmail = gql`
    mutation verifyEmail($code: String!) {
        verifyEmail(code: $code) {
            hash
        }
    }
`

export const emailSubscribe = gql`
    mutation emailSubscribe(
        $emailAddress: String!
        $subscriptions: Map_String_BooleanScalar!
    ) {
        subscribe(email: $emailAddress, subscriptions: $subscriptions) {
            hash
        }
    }
`

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
            currentFolder
            folders {
                name
                total
            }
            bookmarks {
                totalElements
                totalPages
                isLast
                content {
                    id
                    type
                    resource {
                        ... on ArticleDTO {
                            ...Article
                        }
                        ... on CollectionDTO {
                            ...Collection
                        }
                        ... on ExternalLinkDTO {
                            url {
                                value
                            }
                        }
                    }
                }
            }
        }
    }

    ${Article}
    ${Collection}
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
