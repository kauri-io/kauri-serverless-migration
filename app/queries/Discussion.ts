import gql from 'graphql-tag'
import { UserOwner } from './Fragments'

export const DiscussionCardFragment = gql`
    fragment DiscussionCardFragment on DiscussionDTO {
        resourceIdentifier { id type } 
        parentId {id type} 
        id 
        status 
        title 
        message 
        dateCreated 
        dateUpdated 
        authorId 
        author { ...on PublicUserDTO {...UserOwner } } 
        tags 
        contributors(size: 5) { totalElements content { ...on PublicUserDTO {...UserOwner } } }
        comments { totalElements }
        voteResult { sum }
    }
    ${UserOwner}
`
export const DiscussionViewFragment = gql`
    fragment DiscussionViewFragment on DiscussionDTO {
        resourceIdentifier { id type } 
        parentId {id type} 
        id 
        status 
        title 
        message 
        dateCreated 
        dateUpdated 
        authorId 
        author { ...on PublicUserDTO {...UserOwner } } 
        tags 
        comments { content { posted author { ...on PublicUserDTO {...UserOwner } }, body, replyTo }, totalPages, totalElements }
        voteResult { sum }
        lastActivity
    }
    ${UserOwner}
`

export const searchDiscussionsQuery = gql`
    query searchDiscussionsQuery($page: Int = 0, $size: Int = 10, $sort: String = 'dateCreated', $dir: DirectionInput = DESC, $filter: DiscussionFilterInput) { 
        searchDiscussions(page: $page, size: $size, sort: $sort, dir: $dir, filter: $filter) { 
            totalPages 
            totalElements, 
            isLast, 
            content { 
                {
                    ...on DiscussionDTO { ...DiscussionCardFragment }
                }
            } 
        } 
    }
    ${DiscussionCardFragment}
`

export const getDiscussionQuery = gql`
    query getDiscussionQuery($id: String!) { 
        getDiscussion(id: $id) {  
            ...on DiscussionDTO { ...DiscussionViewFragment }
        } 
    }
    ${DiscussionViewFragment}
`

export const createDiscussionMutation = gql`
    mutation createDiscussionMutation($parent: ResourceIdentifierInput!, $title: String!, $message: String!, $tags: [String]) { 
        createDiscussion (parent: $parent, title: $title, message: $message, tags: $tags) {
            hash
        }    
    }
`
export const editDiscussionMutation = gql`
    mutation editDiscussionMutation($id: String!, $title: String!, $message: String!, $tags: [String]) { 
        editDiscussion (id: $id, title: $title, message: $message, tags: $tags) {
            hash
        }    
    }
`
export const closeDiscussionMutation = gql`
    mutation closeDiscussionMutation($id: String!) { 
        closeDiscussion (id: $id) {
            hash
        }    
    }
`
export const reopenDiscussionMutation = gql`
    mutation reopenDiscussionMutation($id: String!) { 
        reopenDiscussion (id: $id) {
            hash
        }    
    }
`
export const deleteDiscussionMutation = gql`
    mutation deleteDiscussionMutation($id: String!) { 
        deleteDiscussion (id: $id) {
            hash
        }    
    }
`
