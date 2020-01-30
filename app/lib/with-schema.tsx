import Head from 'next/head'

interface IProps {
    hostName: string
    type?:
        | 'Article'
        | 'Community'
        | 'Collection'
        | 'Discussion'
        | 'Link'
        | 'Profile'
    id: string
    title: string
    description: string
    canonicalURL?: string
    url: any
    background?: string
    author?: any
    datePublished?: Date
    dateCreated?: Date
    tags?: (string | null)[] | null
}

const withSchema = ({
    hostName,
    type = 'Article',
    id,
    title,
    description,
    canonicalURL,
    url,
    background,
    author,
    datePublished,
    dateCreated,
    tags,
}: IProps) => {
    title = title.substr(0, 100)
    description =
        description && description !== null ? description.substr(0, 300) : ''
    background = background && background !== null ? background : undefined

    const schema = `{
        "@context": "http://schema.org",
        "@type": "${type}",
        "articleBody": "${description}",
        "author": "${author && (author.name || author.username)}",
        "datePublished": "${dateCreated}",
        "dateModified": "${datePublished}",
        "description": "${description && description.substring(0, 160)}",
        "genre": "development tutorial",
        "headline": "${title}",
        "image": "${background ||
            `${hostName}/static/images/kauri_ioLogo.png`}",
        "keywords": "${tags && tags.join(', ')}",
        "mainEntityOfPage": {
            "@id": "${id}",
            "@type": "WebPage"
        },
        "publisher": {
            "@type": "Organization",
            "logo": {
                "@type": "ImageObject",
                "url": "${hostName}/static/images/kauri_ioLogo.png'"
            },
            "name": "Kauri"
        },
        "url": "${canonicalURL ? canonicalURL : `${hostName}${url.as}`}"
    };
    `
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schema }}
            />
            <title>{title} - Kauri</title>
            <meta name="description" content={description} />
            <link
                rel="canonical"
                href={canonicalURL ? canonicalURL : `${hostName}${url.as}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="kauri.io" />
            <meta property="og:url" content={url.as} />
            <meta property="og:description" content={`${description}...`} />
            <meta property="og:type" content={type} />
            <meta
                property="og:image"
                content={
                    background ||
                    `https://${hostName}/static/images/kauri_ioLogo.png`
                }
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={url.as} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={`${description}...`} />
            <meta name="twitter:creator" content="@kauri_io" />
            <meta
                name="twitter:image"
                content={
                    background ||
                    `https://${hostName}/static/images/kauri_ioLogo.png`
                }
            />
        </Head>
    )
}

export default withSchema
