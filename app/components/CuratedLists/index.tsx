import moment from 'moment'
import ArticleCard from '../Card/ArticleCardMaterial'
import CollectionCard from '../Card/CollectionCard'
import CommunityCard from '../Card/CommunityCard'
import slugify from 'slugify'
import { Article } from '../../queries/Fragments/__generated__/Article'
import { Community } from '../../queries/Fragments/__generated__/Community'
import { Collection } from '../../queries/Fragments/__generated__/Collection'

interface IRenderCardContentProps {
    fromAdmin: boolean
    Link: any
    onCardClick?: (input: any) => void
}
export const RenderCardContent = ({
    fromAdmin,
    Link,
    onCardClick,
}: IRenderCardContentProps) => (card: Article | Collection | Community) => {
    switch (card.__typename) {
        case 'ArticleDTO':
            return (
                <ArticleCard
                    href={`/${slugify(String(card.title), { lower: true })}/${
                        card.id
                    }/a`}
                    {...card}
                />
            )
        case 'CollectionDTO':
            const articleCount =
                card.sections &&
                card.sections.reduce((current, next) => {
                    if (next && Array.isArray(next.resources)) {
                        const articlesInSection = next.resources.filter(
                            sectionResource => {
                                return (
                                    sectionResource &&
                                    sectionResource.__typename
                                        .toLowerCase()
                                        .includes('article')
                                )
                            }
                        )
                        return articlesInSection.length + current
                    }
                    return current
                }, 0)

            const collectionCount =
                card.sections &&
                card.sections.reduce((current, next) => {
                    if (next && Array.isArray(next.resources)) {
                        const collectionsInSection = next.resources.filter(
                            sectionResource =>
                                sectionResource &&
                                sectionResource.__typename
                                    .toLowerCase()
                                    .includes('collection')
                        )
                        return collectionsInSection.length + current
                    }
                    return current
                }, 0)

            return card.owner && card.owner.__typename === "ArticleDTO" ? null : (
                <CollectionCard
                    key={String(card.id)}
                    id={String(card.id)}
                    resourceType="CollectionDTO"
                    name={String(card.name)}
                    date={moment(card.dateUpdated).format('D MMM YYYY')}
                    description={String(card.description)}
                    username={
                        card.owner && (card.owner.name || card.owner.username)
                    }
                    userId={card.owner && card.owner.id}
                    userAvatar={card.owner && card.owner.avatar}
                    articleCount={String(articleCount)}
                    collectionCount={String(collectionCount)}
                    imageURL={card.background}
                    cardHeight={310}
                    linkComponent={(childrenProps, route) => {
                        if (fromAdmin) {
                            return (
                                <div
                                    onClick={() =>
                                        onCardClick &&
                                        onCardClick({
                                            id: card.id,
                                            type: 'COLLECTION',
                                        })
                                    }
                                >
                                    {childrenProps}
                                </div>
                            )
                        } else {
                            return (
                                <Link
                                    toSlug={
                                        route &&
                                        route.includes('article') &&
                                        card.name
                                    }
                                    useAnchorTag
                                    href={route}
                                >
                                    {childrenProps}
                                </Link>
                            )
                        }
                    }}
                />
            )
            case 'CommunityDTO': {
                return (
                    <CommunityCard
                        articleCount={""}
                        collectionCount={""}
                        key={String(card.id)}
                        name={String(card.name)}
                        description={String(card.description)}
                        imageURL={card.attributes.background}
                        cardHeight={310}
                        logo={card.avatar}
                        linkComponent={childrenProps => (
                            <Link useAnchorTag route={`/community/${card.id}`}>
                                {childrenProps}
                            </Link>
                        )}
                    />
                )
            }
            default:
                return null
    }
}