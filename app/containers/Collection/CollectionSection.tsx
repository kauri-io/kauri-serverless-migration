import styled from 'styled-components'
import Empty from '../PublicProfile/Empty'
import { Title2, PageDescription } from '../../components/Typography'
import ArticleCard from '../../components/Card/ArticleCard'
import { Article } from '../../queries/Fragments/__generated__/Article'
import {
    Collection,
    Collection_owner_PublicUserDTO,
} from '../../queries/Fragments/__generated__/Collection'
import CollectionCard from '../../components/Card/CollectionCard'
import { getArticleURL, getCollectionURL } from '../../lib/getURLs'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
`

const ResourcesSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    > div {
        margin: ${props => props.theme.space[2]}px;
    }
`

const StyledTitle = styled(Title2)`
    margin-top: ${props => props.theme.space[3]}px;
`

const StyledDescription = styled(PageDescription)`
    margin-bottom: ${props => props.theme.space[3]}px;
`

interface IProps {
    resources: [Article | Collection]
    currentUser: string | undefined
    description: string | null
    isLoggedIn: boolean
    isOwnedByCurrentUser: boolean
    name: string
    openModalAction: any
}

const CollectionSection: React.SFC<IProps> = props => {
    const { name, description, resources } = props
    if (resources) {
        return (
            <Container>
                <StyledTitle>{name}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                <ResourcesSection>
                    {resources.map((resource, key) => {
                        if (resource.__typename === 'ArticleDTO') {
                            return (
                                <ArticleCard
                                    key={key}
                                    href={getArticleURL(resource)}
                                    {...resource}
                                />
                            )
                        } else if (resource.__typename === 'CollectionDTO') {
                            const collection = resource
                            const articleCount =
                                collection.sections &&
                                collection.sections.reduce((current, next) => {
                                    if (next && Array.isArray(next.resources)) {
                                        const articlesInSection = next.resources.filter(
                                            sectionResource =>
                                                sectionResource &&
                                                sectionResource.__typename
                                                    .toLowerCase()
                                                    .includes('article')
                                        )
                                        current += articlesInSection.length
                                    }
                                    return current
                                }, 0)

                            const collectionCount =
                                collection.sections &&
                                collection.sections.reduce((current, next) => {
                                    if (next && Array.isArray(next.resources)) {
                                        const collectionsInSection = next.resources.filter(
                                            sectionResource =>
                                                sectionResource &&
                                                sectionResource.__typename
                                                    .toLowerCase()
                                                    .includes('collection')
                                        )
                                        current += collectionsInSection.length
                                    }
                                    return current
                                }, 0)

                            const ownerResource =
                                collection.owner &&
                                collection.owner.__typename === 'PublicUserDTO'
                                    ? {
                                          avatar: collection.owner.avatar,
                                          id:
                                              collection.owner.id ||
                                              'not_found',
                                          type: 'USER',
                                          username: collection.owner.username,
                                      }
                                    : collection.owner &&
                                      collection.owner.__typename ===
                                          'CommunityDTO'
                                    ? {
                                          avatar: collection.owner.avatar,
                                          id:
                                              collection.owner.id ||
                                              'not_found',
                                          type: 'COMMUNITY',
                                          username:
                                              collection.owner.communityName,
                                      }
                                    : {
                                          avatar: '',
                                          id: '',

                                          username: '',
                                      }

                            return (
                                <CollectionCard
                                    href={getCollectionURL(collection)}
                                    key={String(collection.id)}
                                    id={String(collection.id)}
                                    articleCount={String(articleCount)}
                                    collectionCount={String(collectionCount)}
                                    description={
                                        collection.description
                                            ? collection.description
                                            : ''
                                    }
                                    date={collection.dateUpdated}
                                    name={
                                        collection.name ? collection.name : ''
                                    }
                                    userId={String(
                                        collection.owner &&
                                            (collection.owner as Collection_owner_PublicUserDTO)
                                                .id
                                    )}
                                    username={
                                        collection.owner &&
                                        (collection.owner as Collection_owner_PublicUserDTO)
                                            .username
                                    }
                                    userAvatar={
                                        collection.owner &&
                                        (collection.owner as Collection_owner_PublicUserDTO)
                                            .avatar
                                    }
                                    imageURL={collection.background}
                                    cardHeight={310}
                                    resourceType={ownerResource.type || 'USER'}
                                />
                            )
                        }
                        return null
                    })}
                </ResourcesSection>
            </Container>
        )
    }
    return <Empty />
}

export default CollectionSection
