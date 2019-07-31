import slugify from 'slugify'

export default ({
    title,
    id,
}: {
    title: string
    id: string
    __typename: 'ArticleDTO'
}) => ({
    as: `${slugify(title, { lower: true })}/${id}/a`,
    href: `/article?article_id=${id}`,
})
