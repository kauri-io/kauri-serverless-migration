import gql from 'graphql-tag'
import { UserCard, ArticleCard, LinkCard, CollectionCard, UserAvatarLink, CommunityAvatarLink } from './cards'

export const ArticleView = gql`
    fragment ArticleView on ArticleDTO {
        resourceIdentifier {
            id
            type
            version
        }
        isRead
        description
        id
        version
        title
        content
        description
        authorId
        dateCreated
        datePublished
        status
        attributes
        contentHash
        checkpoint
        tags
        author {
            ...UserAvatarLink
        }
        owner {
            ...UserAvatarLink
            ...CommunityAvatarLink
        }
        contributors {
            ...UserCard
        }        
        voteResult {
            sum
            count
            hasVoted
            quantity
        }
        comments {
            content {
                author {
                    ...UserAvatarLink
                }
                posted
                body
            }
            totalPages
            totalElements
        }
        updateComment
        isBookmarked
    }

    ${UserAvatarLink}
    ${UserAvatarLink}
    ${CommunityAvatarLink}
    ${UserCard}
    ${UserAvatarLink}
`
export const LinkView = gql`
    fragment LinkView on ExternalLinkDTO {
        resourceIdentifier {
            type
            id
        }
        id
        dateCreated
        dateUpdated
        submitterId
        owner {
            ...UserAvatarLink
            ...CommunityAvatarLink
        }
        submitter {
            ...UserAvatarLink
        }
        url {
            value
            isEditable
        }
        linkTitle: title {
            value
            isEditable
        }
        linkDescription: description {
            value
            isEditable
        }
        summary {
            value
            isEditable
        }
        linkAttributes: attributes
        authorName {
            value
            isEditable
        }
        authorSocial
        tags
        comments {
            content {
                author {
                    ...UserAvatarLink
                }
                posted
                body
            }
            totalPages
            totalElements
        }
        voteResult {
            sum
            count
            hasVoted
            quantity
        }
        isBookmarked
    }
    ${UserAvatarLink}
    ${UserAvatarLink}
    ${CommunityAvatarLink}
    ${UserAvatarLink}
`

export const CollectionView = gql`
    fragment CollectionView on CollectionDTO {
        resourceIdentifier {
            type
            id
        }
        id
        name
        description
        dateCreated
        tags
        background
        dateUpdated
        owner {
            ...UserAvatarLink
            ...CommunityAvatarLink
        }
        sections {
            id
            name
            description
            resourcesId {
                id
                type
            }
            resources {
                ... on ArticleDTO {
                    ...ArticleCard
                }
                ... on ExternalLinkDTO {
                    ...LinkCard
                }
            }
        }
        isBookmarked
    }
    ${UserAvatarLink}
    ${CommunityAvatarLink}
    ${ArticleCard}
    ${LinkCard}
`

export const CommunityView = gql`
    fragment CommunityView on CommunityDTO {
        resourceIdentifier {
            type
            id
        }
        id
        dateCreated
        dateUpdated
        creatorId
        creator {
            ...UserAvatarLink
        }
        name
        description
        status
        website
        avatar
        social
        tags
        attributes
        homepage {
            name
            description
            resourcesId {
                id
                type
            }
            resources {
                ... on ArticleDTO {
                    ...ArticleCard
                }

                ... on ExternalLinkDTO {
                    ...LinkCard
                }

                ... on CollectionDTO {
                    ...CollectionCard
                }
            }
        }
        members {
            id
            name
            username
            avatar
            role
            status
        }
        approvedId {
            id
            type
        }
        pendingId {
            id
            type
        }
        approved {
            ... on ArticleDTO {
                ...ArticleCard
            }

            ... on ExternalLinkDTO {
                ...LinkCard
            }

            ... on CollectionDTO {
                ...CollectionCard
            }
        }
        pending {
            ... on ArticleDTO {
                ...ArticleCard
            }

            ... on ExternalLinkDTO {
                ...LinkCard
            }

            ... on CollectionDTO {
                ...CollectionCard
            }
        }
    }
    ${UserAvatarLink}
    ${ArticleCard}
    ${LinkCard}
    ${CollectionCard}
    ${ArticleCard}
    ${LinkCard}
    ${CollectionCard}
    ${ArticleCard}
    ${LinkCard}
    ${CollectionCard}
`

export const PublicUserView = gql`
    fragment PublicUserView on PublicUserDTO {
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
        links(page: 0, size: 1) {
            totalElements
        }
        collections(page: 0, size: 1) {
            totalElements
        }        
    }
`

export const PrivateUserView = gql`
    fragment PrivateUserView on UserDTO {
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
`