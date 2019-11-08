import gql from 'graphql-tag'
import { CommunityOwner, UserOwner, Collection } from './Fragments'

export const globalCollectionDetails = gql`
    query getCollection($id: String!) {
        getCollection(id: $id) {
            ...Collection
        }
    }

    ${Collection}
`

export const getCollectionQuery = globalCollectionDetails
export const getCollectionForAnalytics = globalCollectionDetails

export const createCollectionMutation = gql`
    mutation createCollection(
        $name: String!
        $description: String!
        $background: String
        $tags: [String]
        $owner: ResourceIdentifierInput
    ) {
        createCollection(
            name: $name
            description: $description
            background: $background
            tags: $tags
            owner: $owner
        ) {
            hash
        }
    }
`

export const editCollectionMutation = gql`
    mutation editCollection(
        $id: String!
        $name: String!
        $description: String!
        $background: String
        $tags: [String]
    ) {
        createCollection(
            id: $id
            name: $name
            description: $description
            tags: $tags
            background: $background
        ) {
            hash
        }
    }
`

export const composeCollectionMutation = gql`
    mutation composeCollection($id: String!, $sections: [SectionDTOInput]!) {
        composeCollection(id: $id, sections: $sections) {
            hash
        }
    }
`

export const getLatestCollections = gql`
    query searchAutocompleteCollections(
        $page: Int = 0
        $size: Int = 12
        $query: String
        $filter: SearchFilterInput
        $parameter: SearchParameterInput
    ) {
        searchAutocomplete(
            page: $page
            size: $size
            query: $query
            filter: $filter
            parameter: $parameter
        ) {
            totalElements
            totalPages
            isLast
            content {
                resourceIdentifier {
                    id
                    type
                }
                resource {
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
                        sections {
                            id
                            name
                            description
                            resourcesId {
                                version
                                id
                                type
                            }
                        }
                        resourceIdentifier {
                            type
                            id
                        }
                        isBookmarked
                    }
                }
            }
        }
    }

    ${UserOwner}
    ${CommunityOwner}
`

export const searchCollections = gql`
    query searchCollections($filter: CollectionFilterInput) {
        searchCollections(size: 10, filter: $filter) {
            content {
                ...Collection
            }
        }
    }
    ${Collection}
`

export const addResourceToCollectionMutation = gql`
    mutation addResourceToCollection(
        $id: String!
        $sectionId: String!
        $resourceId: ResourceIdentifierInput!
        $position: Int
    ) {
        addCollectionResource(
            id: $id
            sectionId: $sectionId
            resourceId: $resourceId
            position: $position
        ) {
            hash
        }
    }
`

export const getCollectionsForUser = gql`
    query getCollectionsForUser(
        $filter: CollectionFilterInput
        $size: Int = 8
        $page: Int = 0
        $sort: String = "dateUpdated"
        $dir: DirectionInput
    ) {
        searchCollections(
            filter: $filter
            page: $page
            size: $size
            sort: $sort
            dir: $dir
        ) {
            totalElements
            content {
                ...Collection
            }
            isLast
        }
    }
    ${Collection}
`
