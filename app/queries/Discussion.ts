import gql from 'graphql-tag'
import { UserOwner } from './Fragments'

export const DiscussionCardFragment = gql`
    fragment DiscussionCardFragment on DiscussionDTO {
        resourceIdentifier {
            id
            type
        }
        parentId {
            id
            type
        }
        id
        status
        title
        message
        dateCreated
        dateUpdated
        authorId
        author {
            ... on PublicUserDTO {
                ...UserOwner
            }
        }
        tags
        contributors(size: 3) {
            totalElements
            content {
                resource {
                    ... on PublicUserDTO {
                        ...UserOwner
                    }
                }
            }
        }
        lastActivity
        comments {
            totalElements
        }
        voteResult {
            sum
        }
    }
    ${UserOwner}
`
export const DiscussionViewFragment = gql`
    fragment DiscussionViewFragment on DiscussionDTO {
        resourceIdentifier {
            id
            type
        }
        parentId {
            id
            type
        }
        id
        status
        title
        message
        dateCreated
        dateUpdated
        authorId
        author {
            ... on PublicUserDTO {
                ...UserOwner
            }
        }
        tags
        contributors(size: 10) {
            totalElements
            content {
                resource {
                    ... on PublicUserDTO {
                        ...UserOwner
                    }
                }
            }
        }
        comments {
            content {
                posted
                author {
                    ... on PublicUserDTO {
                        ...UserOwner
                    }
                }
                body
                replyTo
            }
            totalPages
            totalElements
        }
        voteResult {
            sum
            hasVoted
        }
        lastActivity
    }
    ${UserOwner}
`

export const searchDiscussions = gql`
    query searchDiscussions(
        $page: Int = 0
        $size: Int = 10
        $sort: String = "dateCreated"
        $dir: DirectionInput = DESC
        $filter: DiscussionFilterInput
    ) {
        searchDiscussions(
            page: $page
            size: $size
            sort: $sort
            dir: $dir
            filter: $filter
        ) {
            totalPages
            totalElements
            isLast
            content {
                ... on DiscussionDTO {
                    ...DiscussionCardFragment
                }
            }
        }
    }
    ${DiscussionCardFragment}
`

export const getDiscussion = gql`
    query getDiscussion($id: String!) {
        getDiscussion(id: $id) {
            ... on DiscussionDTO {
                ...DiscussionViewFragment
            }
        }
    }
    ${DiscussionViewFragment}
`

export const createDiscussion = gql`
    mutation createDiscussion(
        $parent: ResourceIdentifierInput!
        $title: String!
        $message: String!
        $tags: [String]
    ) {
        createDiscussion(
            parent: $parent
            title: $title
            message: $message
            tags: $tags
        ) {
            hash
        }
    }
`
export const editDiscussion = gql`
    mutation editDiscussion(
        $id: String!
        $title: String!
        $message: String!
        $tags: [String]
    ) {
        editDiscussion(id: $id, title: $title, message: $message, tags: $tags) {
            hash
        }
    }
`
export const closeDiscussion = gql`
    mutation closeDiscussion($id: String!) {
        closeDiscussion(id: $id) {
            hash
        }
    }
`
export const reopenDiscussion = gql`
    mutation reopenDiscussion($id: String!) {
        reopenDiscussion(id: $id) {
            hash
        }
    }
`
export const deleteDiscussion = gql`
    mutation deleteDiscussion($id: String!) {
        deleteDiscussion(id: $id) {
            hash
        }
    }
`
