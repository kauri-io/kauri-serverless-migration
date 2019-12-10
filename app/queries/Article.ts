import gql from 'graphql-tag'
import { ArticleView } from './Fragments'
import { LinkCard, ArticleCard, CollectionCard, CommunityCard } from './Fragments/cards'

export const submitArticle = gql`
    mutation submitArticle(
        $article_id: String
        $text: String!
        $subject: String!
        $tags: [String]
        $attributes: Map_String_StringScalar
        $version: Int!
    ) {
        submitArticle(
            id: $article_id
            content: $text
            title: $subject
            tags: $tags
            attributes: $attributes
            version: $version
        ) {
            hash
        }
    }
`

export const submitNewArticleMutation = gql`
    mutation submitNewArticle(
        $title: String!
        $content: String!
        $tags: [String]
        $attributes: Map_String_StringScalar
    ) {
        submitNewArticle(
            title: $title
            content: $content
            tags: $tags
            attributes: $attributes
        ) {
            hash
        }
    }
`

export const getArticleQuery = gql`
    query getArticle($id: String!, $version: Int, $published: Boolean = true) {
        getArticle(id: $id, version: $version, published: $published) {
            ...ArticleView
        }
    }

    ${ArticleView}
`

export const editArticle = gql`
    mutation editArticleVersion(
        $id: String!
        $version: Int!
        $text: String!
        $subject: String!
        $tags: [String]
        $attributes: Map_String_StringScalar
    ) {
        editArticleVersion(
            id: $id
            version: $version
            content: $text
            tags: $tags
            title: $subject
            attributes: $attributes
        ) {
            hash
        }
    }
`

export const searchApprovedArticles = gql`
    query searchApprovedArticles(
        $size: Int = 500
        $text: String
        $category: String
        $sort: String = "dateCreated"
        $page: Int = 0
    ) {
        searchArticles(
            page: $page
            size: $size
            dir: DESC
            sort: $sort
            filter: {
                latestVersion: true
                fullText: $text
                statusIn: [PUBLISHED]
                ownerIdEquals: $category
            }
        ) {
            content {
                ...ArticleCard
            }
            isLast
            totalElements
            totalPages
        }
    }

    ${ArticleCard}
`

export const searchPersonalSubmittedArticles = gql`
    query searchPersonalSubmittedArticles($size: Int = 500, $userId: String) {
        searchArticles(
            size: $size
            dir: DESC
            filter: {
                authorIdEquals: $userId
                statusIn: [PUBLISHED]
                latestVersion: true
            }
        ) {
            content {
                ...ArticleCard
            }
        }
    }

    ${ArticleCard}
`

export const searchPendingArticles = gql`
    query searchPendingArticles($size: Int = 500, $filter: ArticleFilterInput) {
        searchArticles(size: $size, dir: DESC, filter: $filter) {
            content {
                ...ArticleCard
            }
            totalElements
        }
    }
    ${ArticleCard}
`

export const getTotalArticlesCount = gql`
    query getTotalArticlesCount($category: String) {
        searchArticles(
            filter: { ownerIdEquals: $category, statusIn: [PUBLISHED] }
        ) {
            totalElements
        }
    }
`

export const totalArticlesCount = gql`
    query totalArticlesCount($filter: ArticleFilterInput) {
        searchArticles(filter: $filter) {
            totalElements
        }
    }
`

export const searchPersonalArticles = gql`
    query searchPersonalArticles(
        $userId: String
        $size: Int = 6
        $page: Int = 0
        $text: String
    ) {
        searchArticles(
            size: $size
            page: $page
            sort: "dateCreated"
            dir: DESC
            filter: {
                ownerIdEquals: $userId
                statusIn: [PUBLISHED]
                latestVersion: true
                fullText: $text
            }
        ) {
            totalElements
            isLast
            content {
                ...ArticleCard
            }
            totalPages
            totalElements
        }
    }
    ${ArticleCard}
`

export const searchPersonalDrafts = gql`
    query searchPersonalDrafts($userId: String, $size: Int = 8, $page: Int = 0) {
        searchArticles(
            size: $size
            page: $page
            sort: "dateCreated"
            dir: DESC
            filter: { authorIdEquals: $userId, statusIn: [DRAFT] }
        ) {
            totalElements
            isLast
            content {
                ...ArticleView
            }
        }
    }
    ${ArticleView}
`

export const submitArticleVersionMutation = gql`
    mutation submitArticleVersion(
        $id: String!
        $subject: String!
        $text: String!
        $tags: [String]
        $attributes: Map_String_StringScalar
    ) {
        submitArticleVersion(
            id: $id
            title: $subject
            content: $text
            tags: $tags
            attributes: $attributes
        ) {
            hash
        }
    }
`

export const addCommentMutation = gql`
    mutation addComment($parent: ResourceIdentifierInput!, $body: String!) {
        addComment(parent: $parent, body: $body) {
            hash
        }
    }
`

export const searchAwaitingApproval = gql`
    query searchAwaitingApproval($size: Int = 8, $page: Int = 0, $owners: [String]) {
        searchArticles(
            size: $size
            page: $page
            sort: "dateCreated"
            dir: DESC
            filter: { ownerIdIn: $owners, statusIn: [PENDING] }
        ) {
            totalElements
            isLast
            content {
                ...ArticleCard
            }
        }
    }
    ${ArticleCard}
`

export const searchPending = gql`
    query searchPending($size: Int = 666, $page: Int = 0, $author: String) {
        searchArticles(
            size: $size
            page: $page
            sort: "dateCreated"
            dir: DESC
            filter: { authorIdEquals: $author, statusIn: [PENDING] }
        ) {
            totalElements
            isLast
            content {
                ...ArticleCard
            }
        }
    }
    ${ArticleCard}
`

export const approveArticleMutation = gql`
    mutation approveArticle($id: String!, $version: Int!, $signature: String!) {
        approveArticle(id: $id, version: $version, signature: $signature) {
            hash
        }
    }
`

export const rejectArticleMutation = gql`
    mutation rejectArticle($id: String!, $version: Int!, $cause: String) {
        rejectArticle(id: $id, version: $version, cause: $cause) {
            hash
        }
    }
`

export const checkpointArticles = gql`
    mutation checkpointArticles {
        checkpointArticles {
            hash
        }
    }
`

export const globalSearchApprovedArticles = gql`
    query searchAutocompleteArticles(
        $page: Int = 0
        $size: Int = 6
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
        }
    }
    ${ArticleCard}
    ${LinkCard}
    ${CollectionCard}
`

export const relatedArticles = gql`
    query relatedArticles(
        $page: Int
        $size: Int
        $resourceId: ResourceIdentifierInput!
        $filter: SearchFilterInput
    ) {
        searchMoreLikeThis(
            page: $page
            size: $size
            resourceId: $resourceId
            filter: $filter
        ) {
            totalElements
            totalElementsBreakdown
            totalPages
            content {
                resourceIdentifier {
                    id
                    type
                }
                resource {
                    ... on ArticleDTO {
                        ...ArticleCard
                    }

                    ... on CollectionDTO {
                        ...CollectionCard
                    }
                    ... on CommunityDTO {
                        ...CommunityCard
                    }
                }
            }
        }
    }
    ${ArticleCard}
    ${CollectionCard}
    ${CommunityCard}
`

export const vote = gql`
    mutation vote($resourceId: ResourceIdentifierInput!, $value: Float!) {
        vote(resourceId: $resourceId, value: $value) {
            hash
        }
    }
`

export const getArticleTransfers = gql`
    query getArticleTransfers(
        $page: Int = 0
        $size: Int = 100
        $recipient: String!
        $sort: String = "id"
        $dir: DirectionInput = DESC
    ) {
        getArticleTransfers(
            page: $page
            size: $size
            recipient: $recipient
            sort: $sort
            dir: $dir
        ) {
            content {
                id
                article {
                    ... on ArticleDTO {
                        ...ArticleCard
                    }
                }
                transferrer {
                    type
                    id
                    version
                }
                recipient {
                    type
                    id
                    version
                }
            }
            totalPages
            totalElements
        }
    }
    ${ArticleCard}
`

export const rejectArticleTransferMutation = gql`
    mutation rejectArticleTransfer($id: String!) {
        rejectArticleTransfer(id: $id) {
            hash
        }
    }
`

export const acceptArticleTransferMutation = gql`
    mutation acceptArticleTransfer($id: String!) {
        acceptArticleTransfer(id: $id) {
            hash
        }
    }
`

export const finaliseArticleTransferMutation = gql`
    mutation finaliseArticleTransfer($id: String!, $signature: String!) {
        finaliseArticleTransfer(id: $id, signature: $signature) {
            hash
        }
    }
`

export const getCollectionTitleQuery = gql`
    query getCollectionTitle($id: String!) {
        getCollection(id: $id) {
            id
            name
        }
    }
`

export const deleteDraftArticleMutation = gql`
    mutation deleteDraftArticle($id: String!, $version: Int!) {
        cancelArticle(id: $id, version: $version) {
            hash
        }
    }
`

export const getArticleTitleQuery = gql`
    query getArticleTitle($id: String!, $version: Int!) {
        getArticle(id: $id, version: $version) {
            title
        }
    }
`

export const publishArticleMutation = gql`
    mutation publishArticle(
        $id: String!
        $version: Int!
        $owner: ResourceIdentifierInput
        $signature: String!
        $updateComment: String
    ) {
        publishArticle(
            id: $id
            version: $version
            owner: $owner
            signature: $signature
            updateComment: $updateComment
        ) {
            hash
        }
    }
`
