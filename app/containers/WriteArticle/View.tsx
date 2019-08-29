import { useState, useEffect } from 'react'

import Editor from '../../components/Markdown/Editor'
import Actions from './components/Actions'
import Header from './components/Header'
import analytics from '../../lib/analytics'
import AlertView from '../../components/Modal/AlertView'
import PublishingSelector, {
    IOption,
} from '../../containers/PublishingSelector'
import { path } from 'ramda'

export interface IAttributes {
    background: string | null
    canonical: string | null
}

const ArticleEditor = props => {
    // Component did mount
    useEffect(() => {
        const {
            userId,
            router,
            routeChangeAction,
            communities,
            openModalAction,
            closeModalAction,
        } = props
        if (!userId) {
            routeChangeAction(`/login?r=${router.asPath}&redirected=true`)
        } else {
            analytics.track('Write Article Start', {
                category: 'generic',
            })
            if (
                communities &&
                communities.length > 0 &&
                !window.localStorage.getItem('community-publishing-modal')
            ) {
                openModalAction({
                    children: (
                        <AlertView
                            title="Publish to Community"
                            content={
                                <div>
                                    You can publish articles to your personal
                                    and also communities when selecting Publish
                                </div>
                            }
                            confirmButtonAction={() => {
                                window.localStorage.setItem(
                                    'community-publishing-modal',
                                    Date.now().toString()
                                )
                                closeModalAction()
                            }}
                            closeModalAction={() => {
                                window.localStorage.setItem(
                                    'community-publishing-modal',
                                    Date.now().toString()
                                )
                                closeModalAction()
                            }}
                            closeButtonText="Understood"
                            confirmButtonText="Learn More"
                        />
                    ),
                })
            }
        }
        analytics.track('Write Article Start', {
            category: 'generic',
        })
    }, [])

    const article = props.data && props.data.getArticle
    const [subject, setSubject] = useState(article ? article.title : null)
    const [tags, setTags] = useState(article ? article.tags : [])
    const [textValue, setTextValue] = useState(
        article ? JSON.parse(article.content).markdown : null
    )
    const [attributes, setAttributes] = useState(
        article
            ? article.attributes
            : {
                  background: null,
                  canonical: null,
              }
    )

    const handleSubmit = (
        submissionType: string,
        updateComment?: string,
        destination?: IOption
    ) => (e: React.SyntheticEvent<HTMLButtonElement> | null) => {
        console.log('*** SUBMITTING ***', updateComment)
        if (e) {
            e.preventDefault()
        }
        props.closeModalAction()
        const {
            submitArticleAction,
            submitArticleVersionAction,
            editArticleAction,
            draftArticleAction,
            userId,
            communities,
        } = props

        const articleData: any = props.data && props.data.getArticle
        const text = JSON.stringify({ markdown: textValue })

        // NEW DRAFT
        if (!articleData && submissionType === 'draft') {
            return draftArticleAction({
                attributes: attributes || {},
                subject,
                tags: tags || [],
                text,
            })
        }
        // NEW ARTICLE
        if (!articleData && submissionType === 'submit/update') {
            return submitArticleAction({
                attributes,
                destination,
                selfPublish: true,
                subject,
                tags,
                text,
            })
        }

        const { id, version, status, author, owner } = articleData

        if (!articleData.attributes) {
            articleData.attributes = {}
        }

        switch (status) {
            case 'PUBLISHED':
                // OWNER'S DRAFT
                if (
                    owner &&
                    userId === owner.id &&
                    submissionType === 'draft'
                ) {
                    return submitArticleVersionAction({
                        attributes:
                            (articleData.attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                    })
                    // OWNER'S UPDATE
                } else if (
                    ((owner && userId === owner.id) ||
                        (Array.isArray(communities) &&
                            communities.includes(owner.id))) &&
                    submissionType === 'submit/update'
                ) {
                    return submitArticleVersionAction({
                        attributes:
                            (attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        owner,
                        selfPublish: true,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                    })
                    // CONTRIBUTORS' DRAFT
                } else if (
                    owner &&
                    userId !== owner.id &&
                    submissionType === 'draft'
                ) {
                    return submitArticleVersionAction({
                        attributes:
                            (attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        owner,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                    })
                    // CONTRIBUTORS' UPDATE
                } else if (
                    owner &&
                    userId !== owner.id &&
                    submissionType === 'submit/update'
                ) {
                    return submitArticleVersionAction({
                        attributes:
                            (attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        owner,
                        selfPublish: false,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                        updateComment,
                    })
                } else {
                    console.log('Generic Error')
                }
            case 'DRAFT':
                if (
                    author &&
                    userId === author.id &&
                    submissionType === 'draft'
                ) {
                    return editArticleAction({
                        attributes:
                            (attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                        version,
                    })
                } else if (
                    author &&
                    userId === author.id &&
                    submissionType === 'submit/update'
                ) {
                    return editArticleAction({
                        attributes:
                            (attributes && {
                                ...articleData.attributes,
                                ...attributes,
                            }) ||
                            articleData.attributes,
                        id,
                        selfPublish: true,
                        subject,
                        tags: tags || articleData.tags,
                        text,
                        version,
                    })
                } else {
                    console.log('Generic Error')
                }
            case 'PENDING':
            // pending articles should not be shown in the editor
            default:
                console.log('Generic Error')
        }
    }

    const selectDestination = () => {
        const {
            openModalAction,
            closeModalAction,
            communities,
            userId,
            data,
        } = props

        // Updating article from a community I am in
        if (Number(path(['getArticle', 'version'])(data)) >= 1) {
            return handleSubmit('submit/update')(null)
        }
        // Submitting fresh article and I potentially want to choose a community?
        else if (communities && communities.length > 0) {
            return openModalAction({
                children: (
                    <PublishingSelector
                        userId={userId}
                        type="Articles"
                        closeModalAction={closeModalAction}
                        communities={communities.map(({ community }) => ({
                            ...community,
                            type: 'COMMUNITY',
                        }))}
                        handleSubmit={(destination, e) =>
                            handleSubmit(
                                'submit/update',
                                undefined,
                                destination
                            )(e)
                        }
                    />
                ),
            })
        } else {
            return handleSubmit('submit/update')(null)
        }
    }

    return (
        <>
            <Actions
                owner={props.userId}
                status={props.status}
                selectDestination={selectDestination}
                handleSubmit={handleSubmit}
                communities={props.communities}
                openModalAction={props.openModalAction}
                closeModalAction={props.closeModalAction}
                showNotificationAction={props.showNotificationAction}
                userId={props.userId}
                routeChangeAction={props.routeChangeAction}
                setAttributes={setAttributes}
                attributes={attributes}
            />
            <Header
                title={subject}
                setTitle={setSubject}
                tags={tags}
                setTags={setTags}
                attributes={attributes}
            />
            <Editor
                withTabs={true}
                withToolbar={true}
                compact={false}
                text={textValue}
                // attributes={attributes}
                openModalAction={props.openModalAction}
                closeModalAction={props.closeModalAction}
                onChange={textValue => setTextValue(textValue)}
            />
            {process.env.config === 'development' && (
                <div
                    style={{
                        margin: '1rem 0',
                        background: '#f6f8fa',
                        padding: '.5rem',
                    }}
                >
                    <div>
                        <code>Title:</code> {subject}
                    </div>
                    <div>
                        <code>Text:</code> {textValue}
                    </div>
                    <div>
                        <code>Attributes:</code>
                        {JSON.stringify(attributes)}
                    </div>
                    <div>
                        <code>Tags:</code>
                        {JSON.stringify(tags)}
                    </div>
                </div>
            )}
        </>
    )
}

export default ArticleEditor
