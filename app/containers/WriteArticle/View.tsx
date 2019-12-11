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
import Image from '../../components/Image'
import Button from '../../components/Button'
import { Typography, Grid } from '@material-ui/core'
import {
    setArticleCacheItem,
    getArticleCachedItem,
} from '../../lib/editor-cache'
import { accountCheck } from '../../lib/accountCheck'

export interface IAttributes {
    background: string | null
    canonical: string | null
}

const ArticleEditor = props => {
    const article = props.data && props.data.getArticle
    const key = article ? article.id : 'unsaved-article'

    const [subject, setSubject] = useState(article ? article.title : null)
    const [tags, setTags] = useState(article ? article.tags : [])
    const [content, setContent] = useState(
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

    const [validationMessages, setValidationMessages] = useState({})
    const [disableActions, setDisableActions] = useState(false)

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
            // routeChangeAction(`/login?r=${router.asPath}&redirected=true`)
            console.log(router)
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
                                    profile or communities you are a member of
                                    you click <i>Publish Article</i>
                                </div>
                            }
                            confirmButtonAction={() => {
                                window.localStorage.setItem(
                                    'community-publishing-modal',
                                    Date.now().toString()
                                )
                                routeChangeAction(`/help`)
                            }}
                            closeModalAction={() => {
                                window.localStorage.setItem(
                                    'community-publishing-modal',
                                    Date.now().toString()
                                )
                                closeModalAction()
                            }}
                            closeButtonText="Close"
                            confirmButtonText="Learn More"
                        />
                    ),
                })
            } else if (!accountCheck()) {
                setTimeout(
                    () =>
                        routeChangeAction(
                            `/account-check?page=${window.location.pathname}`
                        ),
                    1000
                )
            }
        }
        // Track opening the editor
        analytics.track('Write Article Start', {
            category: 'generic',
        })
        // Show prompt if article version is found
        showPromptIfUnsavedChanges()

        setContentAndValidate(content)
        setTagsAndValidate(tags)
    }, [])

    const setContentAndValidate = content => {
        if (!content) {
            onValidation('content', 'Content not set')
        } else {
            onValidation('content', '')
        }
        setContent(content)
    }

    const setTagsAndValidate = tags => {
        if (!tags || tags.length == 0) {
            onValidation('tags', 'At least one tag must be set')
        } else {
            onValidation('tags', '')
        }
        setTags(tags)
    }

    const onValidation = (id, message) => {
        if (!message || message == '') {
            delete validationMessages[id]
        } else {
            validationMessages[id] = message
        }

        setValidationMessages(validationMessages)

        updateDisableActions(validationMessages)
    }

    const updateDisableActions = validationMessages => {
        if (Object.keys(validationMessages).length > 0) {
            setDisableActions(true)
        } else {
            setDisableActions(false)
        }
    }

    const updateState = newState => {
        setContent(newState.content)
        setSubject(newState.subject)
    }

    const showPromptIfUnsavedChanges = () => {
        const item = getArticleCachedItem(key)
        if (
            item &&
            (!article ||
                item.content !== JSON.parse(article.content).markdown ||
                item.subject !== article.title)
        ) {
            props.openModalAction({
                children: (
                    <div>
                        <Typography variant="h5">
                            Unsaved Changes Detected
                        </Typography>
                        <Grid
                            style={{ padding: 20 }}
                            container={true}
                            spacing={3}
                            justify="space-between"
                        >
                            <Button
                                onClick={() => props.closeModalAction()}
                                variant="outlined"
                                color="primary"
                            >
                                Ignore
                            </Button>
                            <Button
                                onClick={() => {
                                    updateState(item)
                                    props.closeModalAction()
                                }}
                                variant="contained"
                                color="primary"
                            >
                                Restore Changes
                            </Button>
                        </Grid>
                    </div>
                ),
            })
        }
    }

    // // this saves edits to a given article version (or an unsaved article) to local storage
    useEffect(() => {
        setArticleCacheItem(key, subject, tags, content, attributes, article)
    }, [subject, tags, content, attributes])

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
        const text = JSON.stringify({ markdown: content })
        const showNotificationAction = props.showNotificationAction

        const createErrorNotificationAction = (desc, msg?) => {
            console.log('ERROR: ', desc)

            if (!msg) {
                msg = `Error`
            }
            return showNotificationAction({
                description: desc,
                message: msg,
                notificationType: 'error',
            })
        }

        if (!tags || tags === null || tags.length === 0) {
            return createErrorNotificationAction(
                'Please set at least 1 tag for your article'
            )
        }

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
                    return createErrorNotificationAction(
                        'Generic Error',
                        'Submission'
                    )
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
                    return createErrorNotificationAction(
                        'Generic Error',
                        'Submission'
                    )
                }
            case 'PENDING':
            // pending articles should not be shown in the editor
            default:
                return createErrorNotificationAction(
                    'Generic Error',
                    'Submission'
                )
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
            <div style={{ position: 'relative' }}>
                {attributes.background && (
                    <Image
                        height="100%"
                        width="100%"
                        overlay={{ opacity: 0.5 }}
                        asBackground={true}
                        image={attributes.background}
                    />
                )}
                <Actions
                    owner={article && article.owner && article.owner.id}
                    status={article && article.status}
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
                    disableActions={disableActions}
                />
                <Header
                    title={subject}
                    setTitle={setSubject}
                    tags={tags}
                    setTags={setTagsAndValidate}
                    onValidation={onValidation}
                />
            </div>

            <Editor
                setTitle={setSubject}
                withTabs={true}
                withToolbar={true}
                compact={false}
                text={content}
                openModalAction={props.openModalAction}
                closeModalAction={props.closeModalAction}
                onChange={content => setContentAndValidate(content)}
                attributes={attributes}
                setAttributes={setAttributes}
                onValidation={onValidation}
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
                        <code>Text:</code> {content}
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
