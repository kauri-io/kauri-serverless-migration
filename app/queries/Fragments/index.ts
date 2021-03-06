import gql from 'graphql-tag'

export const User = gql`
    fragment User on PublicUserDTO {
        id
        publicUserName: name
    }
`

export const UserOwner = gql`
    fragment UserOwner on PublicUserDTO {
        id
        publicUserName: name
        username
        avatar
        resourceIdentifier {
            id
            type
        }
    }
`

export const CommunityOwner = gql`
    fragment CommunityOwner on CommunityDTO {
        id
        communityName: name
        avatar
        resourceIdentifier {
            id
            type
        }
    }
`

export const Article = gql`
    fragment Article on ArticleDTO {
        associatedNfts {
            tokenType
            contractAddress
            name
            image
            externalUrl
        }
        resourceIdentifier {
            id
            type
        }
        contributors {
            id
            name
            username
            avatar
            title
            social
            articles(page: 0, size: 1, filter: { statusIn: [PUBLISHED] }) {
                totalElements
            }
            collections(page: 0, size: 1) {
                totalElements
            }
            links(page: 0, size: 1) {
                totalElements
            }
            communities {
                community {
                    id
                    name
                }
            }
        }
        isRead
        description
        id
        version
        title
        content
        description
        authorId
        ownerId {
            id
            type
        }
        dateCreated
        datePublished
        status
        attributes
        contentHash
        checkpoint
        tags
        voteResult {
            sum
            count
            hasVoted
            quantity
        }
        author {
            id
            name
            username
            avatar
        }
        owner {
            ...UserOwner
            ...CommunityOwner
        }
        comments {
            content {
                author {
                    id
                    name
                    username
                    avatar
                }
                id
                posted
                body
                replyTo
            }
            totalPages
            totalElements
            isLast
        }
        resourceIdentifier {
            id
            type
            version
        }
        updateComment
        isBookmarked
        tips {
            totals
        }
        hasTipped
    }

    ${UserOwner}
    ${CommunityOwner}
`
export const Link = gql`
    fragment Link on ExternalLinkDTO {
        id
        resourceIdentifier {
            type
            id
        }
        dateCreated
        dateUpdated
        submitterId
        isBookmarked
        ownerId {
            id
            type
        }
        owner {
            ...UserOwner
            ...CommunityOwner
        }
        submitter {
            id
            username
            name
            avatar
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
        comments {
            content {
                author {
                    id
                    name
                    username
                    avatar
                }
                posted
                body
                id
                replyTo
            }
            totalPages
            totalElements
            isLast
        }
        authorSocial
        tags
        voteResult {
            sum
            count
            hasVoted
            quantity
        }
    }
    ${UserOwner}
    ${CommunityOwner}
`

export const Collection = gql`
    fragment Collection on CollectionDTO {
        id
        name
        description
        dateCreated
        tags
        background
        dateUpdated
        owner {
            ...UserOwner
            ...CommunityOwner
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
                    ...Article
                }
                ... on ExternalLinkDTO {
                    ...Link
                }
            }
        }
        resourceIdentifier {
            type
            id
        }
        isBookmarked
    }
    ${UserOwner}
    ${CommunityOwner}
    ${Link}
    ${Article}
`

export const Community = gql`
    fragment Community on CommunityDTO {
        id
        dateCreated
        dateUpdated
        creatorId
        creator {
            id
            username
            name
        }
        name
        description
        status
        website
        avatar
        social
        tags
        resourceIdentifier {
            type
            id
        }
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
                    ...Article
                }

                ... on ExternalLinkDTO {
                    ...Link
                }

                ... on CollectionDTO {
                    ...Collection
                }
            }
        }
        members(size: 10, sort: "role", dir: ASC) {
            totalElements
            totalElementsBreakdown
            content {
                id
                role
                user {
                    id
                    username
                    avatar
                }
            }
        }
        approvedId {
            id
            type
        }
        pendingId {
            id
            type
        }
        discussions(filter: { statusIn: [OPENED, CLOSED] }) {
            totalElements
        }
    }
    ${Article}
    ${Collection}
    ${Link}
`

export const TipDetails = gql`
    fragment TipDetails on TipDetailsDTO {
        transactionHash
        tipper {
            id
            username
            name
            avatar
        }
        recipient {
            id
            username
            name
            avatar
        }
        resource {
            ... on ArticleDTO {
                id
                title
            }
        }
        fromAddress
        toAddress
        tokenType
        value
        blockHash
        contractAddress
        dateStaged
        dateMined
        status
    }
`
