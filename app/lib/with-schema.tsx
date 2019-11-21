import Head from 'next/head'

const withSchema = ({
    title,
    description,
    canonicalURL,
    url,
    attributes,
    author,
    datePublished,
    dateCreated,
    hostName,
    tags,
    id,
}) => {
    const schema = `{
        "@context": "http://schema.org",
        "@type": "Article",
        "articleBody": "${description}",
        "author": "${author && (author.name || author.username)}",
        "datePublished": "${datePublished || dateCreated}",
        "description": "${description && description.substring(0, 160)}",
        "genre": "development tutorial",
        "headline": "${title}",
        "image": "${(attributes && attributes.background) ||
            `${hostName}/static/images/logo.png`}",
        "keywords": "${tags}",
        "mainEntityOfPage": {
            "@id": "${id}",
            "@type": "WebPage"
        },
        "publisher": {
            "@type": "Organization",
            "logo": {
                "@type": "ImageObject",
                "url": "${hostName}/static/images/logo.png"
            },
            "name": "Kauri"
        },
        "url": "${hostName}${url.as}"
    };
    `
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schema }}
            />
            <title>{title} - Kauri</title>
            <meta name="description" content={String(description)} />
            <link
                rel="canonical"
                href={canonicalURL ? canonicalURL : `${hostName}${url.as}`}
            />
            <meta property="og:title" content={String(title)} />
            <meta property="og:site_name" content="kauri.io" />
            <meta property="og:url" content={url.as} />
            <meta property="og:description" content={`${description}...`} />
            <meta property="og:type" content="article" />
            <meta
                property="og:image"
                content={
                    (attributes &&
                        attributes.background &&
                        attributes.background) ||
                    'https://kauri.io/static/images/logo.png'
                }
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={url.as} />
            <meta name="twitter:title" content={String(title)} />
            <meta name="twitter:description" content={`${description}...`} />
            <meta name="twitter:creator" content="@kauri_io" />
            <meta
                name="twitter:image"
                content={
                    (attributes &&
                        attributes.background &&
                        attributes.background) ||
                    'https://kauri.io/static/images/logo.png'
                }
            />
        </Head>
    )
}

export default withSchema
