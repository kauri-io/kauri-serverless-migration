import gql from 'graphql-tag'
import { UserOwner, CommunityOwner, Link } from './Fragments'

export const searchAutocomplete = gql`
    query searchAutocomplete(
        $page: Int
        $size: Int
        $query: String
        $filter: SearchFilterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
        ) {
            totalElements
            totalPages
            totalElementsBreakdown
            content {
                resourceIdentifier {
                    id
                    type
                }
                tags
                name
                description
                score
            }
        }
    }
`

export const searchResultsAutocompleteTotalElementsBreakdown = gql`
    query searchAutocomplete(
        $page: Int
        $size: Int
        $query: String
        $filter: SearchFilterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
        ) {
            totalElements
            totalPages
            totalElementsBreakdown
        }
    }
`

export const searchResultsAutocomplete = gql`
    query searchResultsAutocomplete(
        $page: Int
        $size: Int
        $query: String
        $filter: SearchFilterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
        ) {
            totalElements
            totalPages
            totalElementsBreakdown
            content {
                resourceIdentifier {
                    id
                    type
                }
                resource {
                    ... on ExternalLinkDTO {
                        ...Link
                    }
                    ... on PublicUserDTO {
                        id
                        username
                        publicUserName: name
                        avatar
                        userTitle: title
                    }
                    ... on ArticleDTO {
                        id
                        version
                        title
                        description
                        authorId
                        dateCreated
                        datePublished
                        status
                        attributes
                        contentHash
                        checkpoint
                        tags
                        voteResult {
                            sum
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
                                posted
                                body
                            }
                            totalPages
                            totalElements
                        }
                    }

                    ... on CollectionDTO {
                        id
                        name
                        description
                        tags
                        background
                        dateUpdated
                        owner {
                            ...UserOwner
                            ...CommunityOwner
                        }
                        resourceIdentifier {
                            type
                            id
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
                                    id
                                    version
                                }
                            }
                        }
                    }
                    ... on CommunityDTO {
                        id
                        dateCreated
                        dateUpdated
                        creatorId
                        name
                        description
                        website
                        avatar
                        social
                        attributes
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
                    }
                }
            }
        }
    }

    ${UserOwner}
    ${CommunityOwner}
    ${Link}
`
