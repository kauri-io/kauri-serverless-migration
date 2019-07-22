import ArticleCard from '../../components/Card/ArticleCardMaterial'
import CollectionCard from '../../components/Card/CollectionCard'
import Link from '../../components/Link'
import {
    Community_approved_CollectionDTO,
    Community_approved_ArticleDTO,
} from '../../queries/Fragments/__generated__/Community'
import Masonry from '../../components/Masonry'
import styled from 'styled-components'
import PrimaryButton from '../../components/Button/PrimaryButton'
import AlertView from '../../components/Modal/AlertView'
import { BodyCard } from '../../components/Typography'
import { removeResourceVariables } from '../../queries/__generated__/removeResource'
import ArticlesEmptyState from './EmptyStates/Articles'
import CollectionsEmptyState from './EmptyStates/Collections'

const Container = styled.div`
    margin-left: ${props => props.theme.space[3]}px;
`

interface IProps {
    type?: string
    resources?: any
    communityId: string | null
    isMember: boolean
    closeModalAction?: () => void
    openModalAction?: (payload: { children: any }) => void
    removeResourceAction?: (payload: removeResourceVariables) => void
}

const RenderEmptyState: React.FunctionComponent<{ type: string }> = ({
    type,
}) => {
    if (type === 'articles') {
        return <ArticlesEmptyState />
    }
    if (type === 'collections') {
        return <CollectionsEmptyState />
    }
    return null
}

const RenderResources = (
    isMember: boolean,
    communityId: string | null,
    destination?: string,
    openModalAction?: (payload: { children: any }) => void,
    closeModalAction?: () => void,
    removeResourceAction?: (payload: removeResourceVariables) => void
) => (i: Community_approved_ArticleDTO | Community_approved_CollectionDTO) => {
    const owner =
        i.owner && i.owner.__typename === 'PublicUserDTO'
            ? {
                  avatar: i.owner.avatar,
                  id: i.owner.id || 'not_found',
                  type: 'USER',
                  username: i.owner.username,
              }
            : i.owner && i.owner.__typename === 'CommunityDTO'
            ? {
                  avatar: i.owner.avatar,
                  id: i.owner.id || 'not_found',
                  type: 'COMMUNITY',
                  username: i.owner.communityName,
              }
            : {
                  avatar: '',
                  id: '',

                  username: '',
              }
    if (i.__typename === 'ArticleDTO') {
        return <ArticleCard {...i} />
    } else if (i.__typename === 'CollectionDTO') {
        const counter =
            i.sections &&
            i.sections.reduce(
                (sum, section) => {
                    if (!section || !section.resources) {
                        return sum
                    } else {
                        const resArticleCount =
                            section.resources.filter(
                                res => res && res.__typename === 'ArticleDTO'
                            ).length || 0
                        const resCollectionCount =
                            section.resources.filter(
                                res => res && res.__typename === 'CollectionDTO'
                            ).length || 0
                        sum.articles += resArticleCount
                        sum.collections += resCollectionCount
                        return sum
                    }
                },
                {
                    articles: 0,
                    collections: 0,
                }
            )

        return (
            <CollectionCard
                key={String(i.id)}
                id={String(i.id)}
                description={i.description || ''}
                date={i.dateUpdated}
                name={i.name || ''}
                username={owner.username}
                userId={owner.id}
                userAvatar={owner.avatar}
                imageURL={i.background}
                articleCount={counter ? counter.articles.toString() : '0'}
                collectionCount={counter ? counter.collections.toString() : '0'}
                cardHeight={310}
                canAccessHoverChildren={isMember}
                resourceType={owner.type || 'USER'}
                hoverChildren={() => (
                    <PrimaryButton
                        onClick={() =>
                            openModalAction &&
                            closeModalAction &&
                            removeResourceAction &&
                            openModalAction({
                                children: (
                                    <AlertView
                                        closeModalAction={() =>
                                            closeModalAction()
                                        }
                                        confirmButtonAction={() =>
                                            removeResourceAction({
                                                id: String(communityId),
                                                resource: {
                                                    id: String(
                                                        i.resourceIdentifier &&
                                                            i.resourceIdentifier
                                                                .id
                                                    ),
                                                    type:
                                                        i.resourceIdentifier &&
                                                        i.resourceIdentifier
                                                            .type,
                                                },
                                            })
                                        }
                                        content={
                                            <div>
                                                <BodyCard>
                                                    If this collection is
                                                    removed, it will no longer
                                                    appear in this community, or
                                                    on the home page. This
                                                    cannot be undone.
                                                </BodyCard>
                                            </div>
                                        }
                                        title={'Are you sure?'}
                                    />
                                ),
                            })
                        }
                    >
                        Remove Collection
                    </PrimaryButton>
                )}
                linkComponent={(
                    childrenProps: React.ReactElement<any>,
                    route: string
                ) => (
                    <Link
                        useAnchorTag={true}
                        href={
                            destination
                                ? `${route}`
                                : typeof communityId === 'string' &&
                                  destination === 'review'
                                ? `${route}?proposed-community-id=${communityId}`
                                : route
                        }
                    >
                        {childrenProps}
                    </Link>
                )}
            />
        )
    } else {
        return null
    }
}

const DisplayResources = ({
    resources,
    communityId,
    isMember,
    openModalAction,
    closeModalAction,
    removeResourceAction,
    type,
}: IProps) => {
    if (
        Array.isArray(resources) &&
        resources.length === 0 &&
        typeof type === 'string'
    ) {
        return <RenderEmptyState type={type} />
    }
    return (
        <Masonry>
            {Array.isArray(resources) && resources.length
                ? resources.map(
                      RenderResources(
                          isMember,
                          communityId,
                          undefined,
                          openModalAction,
                          closeModalAction,
                          removeResourceAction
                      )
                  )
                : null}
        </Masonry>
    )
}

export const DisplayManagedResources = ({
    resources,
    communityId,
    review,
    isMember,
    openModalAction,
    closeModalAction,
    removeResourceAction,
}: IProps & { review?: boolean }) => {
    return (
        <Container>
            <Masonry withPadding={false}>
                {Array.isArray(resources) && resources.length
                    ? resources.map(
                          RenderResources(
                              isMember,
                              communityId,
                              review ? 'review' : undefined,
                              openModalAction,
                              closeModalAction,
                              removeResourceAction
                          )
                      )
                    : null}
            </Masonry>
        </Container>
    )
}

export default DisplayResources
