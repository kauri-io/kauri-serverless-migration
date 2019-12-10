import gql from 'graphql-tag'
import { ArticleCard, LinkCard, CollectionCard, CommunityCard, UserAvatarLink } from './Fragments/cards'

export const ResourceFragment = gql`
    fragment ResourceFragment on AbstractResourceDTO {
        ...on CollectionDTO {
            ...CollectionCard
        }
        ...on ExternalLinkDTO {
            ...LinkCard
        }
        ...on ArticleDTO {
            ...ArticleCard
        }
        ...on CommunityDTO {
            ...CommunityCard
        }
    }

    ${CollectionCard}
    ${LinkCard}
    ${ArticleCard}
    ${CommunityCard}
`

export const HomepageComponentFragment = gql`
    fragment HomepageComponentFragment on HomepageComponentDTO {
        ...on Categories {
            type
            properties
            content {
                propertyName: name
                description
                image
                link
            }
        }
        ...on Featured {
            type
            properties
            content {
                resource {
                    ...ResourceFragment
                }
            }
        }
        ...on Actions {
            type
            properties
            content {
                actionName: name
                link
            }
        }
        ...on TopTags {
            type
            properties
            content {
                tagName: name
            }
        }
        ...on TopContributors {
            type
            properties
            content {
                user {
                    ...UserAvatarLink
                }
            }
        }
        ...on Promo {
            type
            properties
            content {
                resource {
                    ...ResourceFragment
                }
            }
        }
        ...on LatestContent {
            type
            properties
            content {
                ...ResourceFragment
            }
        }
        ...on Newsletter {
            type
            properties
        }
        ...on Import {
            type
            properties
        }
    }

    ${ResourceFragment}
    ${UserAvatarLink}
    ${ResourceFragment}
    ${ResourceFragment}
`

export const homePageContentQuery = gql`

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

    ${HomepageComponentFragment}
`
