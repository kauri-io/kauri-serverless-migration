import gql from 'graphql-tag'
import { Community, Article, Collection, Link } from './Fragments'

export const getCommunity = gql`
    query getCommunity($id: String!) {
        getCommunity(id: $id) {
            ...Community
        }
    }
    ${Community}
`
export const getAllCommunities = gql`
    query searchCommunities(
        $size: Int = 12
        $page: Int = 0
        $filter: CommunityFilterInput
        $sort: String = "dateUpdated"
        $dir: DirectionInput = DESC
    ) {
        searchCommunities(
            size: $size
            page: $page
            filter: $filter
            sort: $sort
            dir: $dir
        ) {
            content {
                id
                dateCreated
                dateUpdated
                members {
                    totalElements
                    content {
                        id
                        role
                    }
                }
                attributes
                approvedId {
                    type
                }
                creatorId
                name
                description
                status
                website
                avatar
                tags
                social
                approvedId {
                    type
                }
            }
            isLast
        }
    }
`

export const prepareCreateCommunityQuery = gql`
    query prepareCreateCommunity(
        $name: String!
        $description: String
        $avatar: String
        $website: String
        $tags: [String]
        $social: Map_String_StringScalar
        $attributes: Map_String_StringScalar
        $invitations: [InvitationInput]
    ) {
        prepareCreateCommunity(
            name: $name
            description: $description
            avatar: $avatar
            website: $website
            social: $social
            attributes: $attributes
            tags: $tags
            invitations: $invitations
        ) {
            messageHash
            attributes
        }
    }
`

export const createCommunityMutation = gql`
    mutation createCommunity(
        $signature: String!
        $name: String!
        $description: String
        $avatar: String
        $website: String
        $tags: [String]
        $social: Map_String_StringScalar
        $attributes: Map_String_StringScalar
        $invitations: [InvitationInput]
    ) {
        createCommunity(
            signature: $signature
            name: $name
            description: $description
            avatar: $avatar
            website: $website
            social: $social
            attributes: $attributes
            tags: $tags
            invitations: $invitations
        ) {
            hash
        }
    }
`

export const updateCommunityMutation = gql`
    mutation updateCommunity(
        $id: String!
        $name: String!
        $description: String
        $avatar: String
        $website: String
        $tags: [String]
        $social: Map_String_StringScalar
        $attributes: Map_String_StringScalar
        $homepage: [SectionDTOInput]
    ) {
        editCommunity(
            id: $id
            name: $name
            description: $description
            avatar: $avatar
            website: $website
            tags: $tags
            social: $social
            attributes: $attributes
            homepage: $homepage
        ) {
            hash
        }
    }
`

export const curateCommunityResourcesMutation = gql`
    mutation curateCommunityResources(
        $id: String!
        $resources: [ResourceIdentifierInput]!
    ) {
        curateResources(id: $id, resources: $resources) {
            hash
        }
    }
`

export const approveResourceMutation = gql`
    mutation approveResource(
        $id: String!
        $resource: ResourceIdentifierInput!
    ) {
        approveResource(id: $id, resource: $resource) {
            hash
        }
    }
`

export const removeResourceMutation = gql`
    mutation removeResource($id: String!, $resource: ResourceIdentifierInput!) {
        removeResource(id: $id, resource: $resource) {
            hash
        }
    }
`
export const prepareSendInvitationQuery = gql`
    query prepareSendInvitation($id: String!, $invitation: InvitationInput!) {
        prepareSendInvitation(id: $id, invitation: $invitation) {
            messageHash
            attributes
        }
    }
`

export const sendInvitationMutation = gql`
    mutation sendInvitation(
        $signature: String!
        $id: String!
        $invitation: InvitationInput!
    ) {
        sendInvitation(
            signature: $signature
            id: $id
            invitation: $invitation
        ) {
            hash
        }
    }
`

export const prepareAcceptInvitationQuery = gql`
    query prepareAcceptInvitation($id: String!, $secret: String!) {
        prepareAcceptInvitation(id: $id, secret: $secret) {
            messageHash
        }
    }
`

export const acceptInvitationMutation = gql`
    mutation acceptInvitation(
        $signature: String!
        $id: String!
        $secret: String!
    ) {
        acceptInvitation(signature: $signature, id: $id, secret: $secret) {
            hash
        }
    }
`

export const prepareRevokeInvitationQuery = gql`
    query prepareRevokeInvitation($id: String!, $invitationId: String!) {
        prepareRevokeInvitation(id: $id, invitationId: $invitationId) {
            messageHash
        }
    }
`

export const revokeInvitationMutation = gql`
    mutation revokeInvitation(
        $signature: String!
        $id: String!
        $invitationId: String!
    ) {
        revokeInvitation(
            signature: $signature
            id: $id
            invitationId: $invitationId
        ) {
            hash
        }
    }
`

export const getCommunityInvitationsQuery = gql`
    query getCommunityInvitations(
        $id: String!
        $page: Int = 0
        $size: Int = 500
        $sort: String = "dateCreated"
        $dir: DirectionInput = DESC
        $filter: CommunityInvitationFilterInput
    ) {
        getCommunityInvitations(
            id: $id
            page: $page
            size: $size
            sort: $sort
            dir: $dir
            filter: $filter
        ) {
            totalElements
            totalPages
            isLast
            content {
                invitationId
                communityId
                dateCreated
                dateExpiration
                dateClosed
                status
                recipientEmail
                recipientRole
            }
        }
    }
`

export const prepareRemoveGrantedMemberQuery = gql`
    query prepareRemoveGrantedMember($id: String!, $account: String!) {
        prepareRemoveGrantedMember(id: $id, account: $account) {
            messageHash
        }
    }
`

export const removeGrantedMemberMutation = gql`
    mutation removeGrantedMember(
        $signature: String!
        $id: String!
        $account: String!
    ) {
        removeGrantedMember(signature: $signature, id: $id, account: $account) {
            hash
        }
    }
`

export const prepareChangeGrantedMemberRoleQuery = gql`
    query prepareChangeGrantedMemberRole(
        $id: String!
        $account: String!
        $role: CommunityPermissionInput!
    ) {
        prepareChangeGrantedMemberRole(
            id: $id
            account: $account
            role: $role
        ) {
            messageHash
        }
    }
`

export const changeGrantedMemberRoleMutation = gql`
    mutation changeGrantedMemberRole(
        $signature: String!
        $id: String!
        $account: String!
        $role: CommunityPermissionInput!
    ) {
        changeGrantedMemberRole(
            signature: $signature
            id: $id
            account: $account
            role: $role
        ) {
            hash
        }
    }
`

export const resendInvitationMutation = gql`
    mutation resendInvitation(
        $id: String!
        $invitationId: String!
        $email: String!
    ) {
        resendInvitation(id: $id, invitationId: $invitationId, email: $email) {
            hash
        }
    }
`

export const initiateArticleTransferMutation = gql`
    mutation initiateArticleTransfer(
        $id: String!
        $recipient: ResourceIdentifierInput!
    ) {
        initiateArticleTransfer(id: $id, recipient: $recipient) {
            hash
        }
    }
`

export const getCommunityContent = gql`
    query getCommunityContent(
        $id: String!
        $page: Int = 0
        $size: Int
        $filter: CommunityResourceFilterInput
    ) {
        getCommunityContent(
            id: $id
            page: $page
            size: $size
            filter: $filter
        ) {
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
                        ...Link
                    }
                }
            }
            totalPages
            totalElements
            isLast
        }
    }

    ${Article}
    ${Collection}
    ${Link}
`

export const getCommunityMembers = gql`
    query getCommunityMembers(
        $id: String!
        $page: Int = 0
        $size: Int
        $sort: String
        $dir: DirectionInput
        $filter: CommunityMemberFilterInput
    ) {
        getCommunityMembers(
            id: $id
            page: $page
            size: $size
            sort: $sort
            dir: $dir
            filter: $filter
        ) {
            content {
                id
                role
                user {
                    id
                    username
                    publicUserName: name
                    avatar
                    social
                    userTitle: title
                    articles(
                        page: 0
                        size: 1
                        filter: { latestVersion: true }
                    ) {
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
            }
            totalPages
            totalElements
            isLast
        }
    }
`

export const joinCommunityMutation = gql`
    mutation joinCommunity($id: String!) {
        joinCommunity(communityId: $id) {
            hash
        }
    }
`

export const leaveCommunityMutation = gql`
    mutation leaveCommunity($id: String!) {
        leaveCommunity(communityId: $id) {
            hash
        }
    }
`

export const removeMemberMutation = gql`
    mutation removeMember($id: String!, $userId: String!) {
        removeMember(communityId: $id, userId: $userId) {
            hash
        }
    }
`

export const banMemberMutation = gql`
    mutation banMember($id: String!, $userId: String!) {
        banMember(communityId: $id, userId: $userId) {
            hash
        }
    }
`

export const unbanMemberMutation = gql`
    mutation unbanMember($id: String!, $userId: String!) {
        unbanMember(communityId: $id, userId: $userId) {
            hash
        }
    }
`
