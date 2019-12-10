import gql from 'graphql-tag'


export const UserAvatarLink = gql`
    fragment UserAvatarLink on PublicUserDTO {
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

export const CommunityAvatarLink = gql`
    fragment CommunityAvatarLink on CommunityDTO {
        id
        communityName: name
        avatar
        resourceIdentifier {
            id
            type
        }
    }
`

export const ArticleCard = gql`
    fragment ArticleCard on ArticleDTO {
        resourceIdentifier {
            id
            type
            version
        }
        id
        version
        title
        description
        dateCreated
        datePublished
        status
        checkpoint
        attributes
        owner {
            ...UserAvatarLink
            ...CommunityAvatarLink
        }
        isBookmarked
    }
    ${UserAvatarLink}
    ${CommunityAvatarLink}
`

export const LinkCard = gql`
    fragment LinkCard on ExternalLinkDTO {
        resourceIdentifier {
            type
            id
        }
        id
        dateCreated
        dateUpdated
        isBookmarked
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
    }
    ${UserAvatarLink}
`

export const CollectionCard = gql`
    fragment CollectionCard on CollectionDTO {
        resourceIdentifier {
            type
            id
        }
        id
        collecionName: name
        description
        dateCreated
        dateUpdated
        background
        owner {
            ...UserAvatarLink
            ...CommunityAvatarLink
        }
        isBookmarked
        sections {
            resourcesId {
                id
                type
            }
        }
    }
    ${UserAvatarLink}
    ${CommunityAvatarLink}
`

export const CommunityCard = gql`
    fragment CommunityCard on CommunityDTO {
        resourceIdentifier {
            type
            id
        }
        id
        dateCreated
        dateUpdated
        communityName: name
        description
        avatar
        attributes
        members {
            id
            name
            username
            avatar
            role
            status
        }
    }
`

export const UserCard = gql`
    fragment UserCard on PublicUserDTO {
        id
        fullName: name
        username
        avatar
        userTitle: title
        social
        articles(page: 0, size: 1, filter: { latestVersion: true }) {
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
`