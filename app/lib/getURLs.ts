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
        case 'draft':
            return {
                as: `/draft/${id}/${version}`,
                href: `/draft?id=${id}&version=${version}`,
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

interface IProfileProps {
    username?: string | null
    id?: string
    urlType?: string
}

export const getProfileURL = ({ username, id }: IProfileProps) => ({
    as: `/${slugify(String(username), { lower: true })}/${String(id)}/p`,
    href: `/public-profile?user_id=${String(id)}`,
})

interface ICommunityProps {
    id: string
    name: string | null
}

export const getCommunityURL = ({ name, id }: ICommunityProps) => ({
    as: `/${slugify(String(name), { lower: true })}/${String(id)}/cm`,
    href: `/community_id=${String(id)}`,
})
