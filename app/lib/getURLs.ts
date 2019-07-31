import slugify from 'slugify'
interface IProps {
    title: string
    id: string
    urlType?: string
}

export const getArticleURL = ({ title, id }: IProps) => ({
    as: `${slugify(title, { lower: true })}/${id}/a`,
    href: `/article?article_id=${id}`,
})

export const getCollectionURL = ({ title, id }: IProps) => ({
    as: `${slugify(title, { lower: true })}/${id}/c`,
    href: `/collection?collection_id=${id}`,
})
