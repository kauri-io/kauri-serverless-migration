import gql from 'graphql-tag'
import { Collection, CommunityOwner, UserOwner, Link } from './Fragments'

export const homePageContentQuery = gql`
    fragment ResourceFragment on AbstractResourceDTO {
        ... on CollectionDTO {
            ...Collection
        }
        ... on ExternalLinkDTO {
            ...Link
        }
        ... on ArticleDTO {
            resourceIdentifier {
                id
                type
            }
            description
            id
            version
            title
            content
            description
            authorId
            dateCreated
            datePublished
            attributes
            contentHash
            checkpoint
            tags
            comments {
                totalElements
            }
            voteResult {
                sum
                count
                hasVoted
                quantity
            }
            author {
                id
                publicUserName: name
                username
                avatar
            }
            contributors {
                id
                publicUserName: name
                username
                avatar
            }
            owner {
                ...UserOwner
                ...CommunityOwner
            }
            resourceIdentifier {
                id
                type
                version
            }
            updateComment
            isBookmarked
        }
        ... on CommunityDTO {
            id
            name
            dateCreated
            dateUpdated
            creatorId
            creator {
                id
                username
                publicUserName: name
            }
            communityName: name
            description
            website
            members {
                id
                name
                username
                avatar
                role
                status
            }
            avatar
            social
            tags
            attributes
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
                    id
                    version
                }

                ... on CollectionDTO {
                    id
                }
            }
        }
    }

    fragment UserFragment on PublicUserDTO {
        id
        username
        avatar
    }

    fragment HomepageComponentFragment on HomepageComponentDTO {
        ... on Categories {
            type
            properties
            content {
                propertyName: name
                description
                image
                link
            }
        }
        ... on Featured {
            type
            properties
            content {
                resource {
                    ...ResourceFragment
                }
            }
        }
        ... on Actions {
            type
            properties
            content {
                actionName: name
                link
            }
        }
        ... on TopTags {
            type
            properties
            content {
                tagName: name
            }
        }
        ... on TopContributors {
            type
            properties
            content {
                user {
                    ...UserFragment
                }
            }
        }
        ... on Promo {
            type
            properties
            content {
                resource {
                    ...ResourceFragment
                }
            }
        }
        ... on LatestContent {
            type
            properties
            content {
                ...ResourceFragment
            }
        }
        ... on Newsletter {
            type
            properties
        }
        ... on Import {
            type
            properties
        }
    }

    query homePageContent($populate: Boolean = true) {
        getLatestHomepageDescriptor(populate: $populate) {
            rows {
                main {
                    ...HomepageComponentFragment
                }
                sidebar {
                    ...HomepageComponentFragment
                }
            }
        }
    }

    ${Collection}
    ${CommunityOwner}
    ${UserOwner}
    ${Link}
`
