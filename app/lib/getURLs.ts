import slugify from 'slugify'
interface IArticleProps {
    title: string
    id: string
    version?: number
}

export const getArticleURL = (
    { title, id, version }: IArticleProps,
    type?: string
) => {
    switch (type) {
        case 'update':
            return {
                href: `/app/update-article?id=${id}&version=${version}`,
                as: `/article/${id}/v${version}/update-article`,
            }
        case 'draft':
            return {
                as: `/draft/${id}/${version}`,
                href: `/draft?id=${id}&version=${version}`,
            }
        case 'review':
            return {
                as: `/review/${id}/${version}`,
                href: `/article-review?id=${id}&version=${version}`,
            }
        default:
            return {
                as: `/${slugify(title, { lower: true })}/${id}/a`,
                href: `/article?article_id=${id}`,
            }
    }
}

interface ICollectionProps {
    name?: string | null
    id?: string | null
    urlType?: string
}
export const getCollectionURL = ({ name, id }: ICollectionProps) => ({
    as: `/${slugify(String(name), { lower: true })}/${String(id)}/c`,
    href: `/collection?collection_id=${String(id)}`,
})

export const getUpdateCollectionURL = ({
    id,
}: Pick<ICollectionProps, 'id'>) => ({
    as: `/collection/${String(id)}/update-collection`,
    href: `/update-collection?collection_id=${String(id)}`,
})

export interface IProfileLinkProps {
    username?: string | null
    id?: string
    urlType?: string
    userId?: string
}

export const getProfileURL = ({ username, id, userId }: IProfileLinkProps) => ({
    as: `/${slugify(String(username), { lower: true })}/${String(
        id || userId
    )}/p`,
    href: `/public-profile?user_id=${String(id || userId)}`,
})

interface ICommunityProps {
    id: string
    name: string | null
}

export const getCommunityURL = ({ name, id }: ICommunityProps) => ({
    as: `/${slugify(String(name), { lower: true })}/${String(id)}/com`,
    href: `/community?community_id=${String(id)}`,
})

export const getUpdateCommunityURL = ({ id }: Pick<ICommunityProps, 'id'>) => ({
    as: `/community/${String(id)}/update-community`,
    href: `/update-community?community_id=${String(id)}`,
})
