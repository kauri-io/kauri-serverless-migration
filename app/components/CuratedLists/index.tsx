import ArticleCard from '../Card/ArticleCard'
import CollectionCard from '../Card/CollectionCard'
import CommunityCard from '../Card/CommunityCard'
import { Article } from '../../queries/Fragments/__generated__/Article'
import { Community } from '../../queries/Fragments/__generated__/Community'
import {
    Collection,
    Collection_owner_PublicUserDTO,
    Collection_owner_CommunityDTO,
} from '../../queries/Fragments/__generated__/Collection'
import {
    getArticleURL,
    getCollectionURL,
    getCommunityURL,
} from '../../lib/getURLs'

export const RenderCardContent = () => (
    card: Article | Collection | Community
) => {
    switch (card.__typename) {
        case 'ArticleDTO':
            return (
                <ArticleCard
                    key={card.id}
                    href={getArticleURL(card)}
                    {...card}
                />
            )
        case 'CollectionDTO':
            const typedOwner =
                card &&
                (card.owner as
                    | Collection_owner_PublicUserDTO
                    | Collection_owner_CommunityDTO)

            return (
                <CollectionCard
                    {...card}
                    href={getCollectionURL(card)}
                    key={card.id}
                    owner={typedOwner}
                />
            )
        case 'CommunityDTO': {
            return (
                <CommunityCard
                    {...card}
                    key={card.id}
                    id={card.id}
                    href={getCommunityURL({ name: card.name, id: card.id })}
                />
            )
        }
        default:
            return null
    }
}

export default RenderCardContent
