import slugify from 'slugify'
interface IArticleProps {
    title: string
    id: string
    urlType?: string
}

export const getArticleURL = ({ title, id }: IArticleProps) => ({
    as: `${slugify(title, { lower: true })}/${id}/a`,
    href: `/article?article_id=${id}`,
})

interface ICollectionProps {
    name?: string | null
    id?: string | null
    urlType?: string
}
export const getCollectionURL = ({ name, id }: ICollectionProps) => ({
    as: `${slugify(String(name), { lower: true })}/${String(id)}/c`,
    href: `/collection?collection_id=${String(id)}`,
})

interface IProfileProps {
    username?: string | null
    userId?: string
    urlType?: string
}

export const getProfileURL = ({ username, userId }: IProfileProps) => ({
    as: `${slugify(String(username), { lower: true })}/${String(userId)}/p`,
    href: `/public-profile?user_id=${String(userId)}`,
})
