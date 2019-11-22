import { Grid, Tabs, Tab, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import Nav from './components/Navbar'
import LinkInput from './components/LinkInput'
import Editor from '../../components/Markdown/Editor'
import { useStyles } from './styles'
import Details from './components/Details'
import CardPreview from './components/Preview'
import FullPreview from '../../containers/ViewLink/components/Content'
import Loading from '../../components/Loading'
import Existing from './components/Existing'

const CreateLink = ({ client, submitExtenalLinkAction, userId, user }) => {
    const [tab, setTab] = useState(0)
    const [description, setDescription] = useState<null | string>(null)
    const [title, setTitle] = useState<null | string>(null)
    const [image, setImage] = useState<null | { background_image: string }>(
        null
    )
    const [tags, setTags] = useState<any>([])
    const [summary, setSummary] = useState<null | string>(null)
    const [loading, setLoading] = useState(false)
    const [url, setURL] = useState<null | string>(null)
    const [authorName, setAuthorName] = useState<null | string>(null)
    const [authorSocial, setAuthorSocial] = useState<null | {
        twitter: string
    }>(null)
    const classes = useStyles({})
    const [existing, setExisting] = useState<any>(null)

    const setData = data => {
        setExisting(data.kauriMetadata)
        setDescription(data.description)
        setTitle(data.title)
        setImage(data.image)
        setURL(data.url)
        setAuthorName(data.author)
        setAuthorSocial(data.authorSocial)
    }

    const hasSomeData = title || description || image
    const hasAllData = title && description && image && summary

    return (
        <Grid>
            <Nav
                disabled={!hasAllData}
                submitExtenalLinkAction={() =>
                    submitExtenalLinkAction({
                        title,
                        description,
                        image,
                        summary,
                        authorName,
                        authorSocial,
                        url,
                        tags: tags.map(i => i.label),
                        ownerId: {
                            type: 'USER',
                            id: userId.toLowerCase(),
                        },
                    })
                }
            />
            <Tabs
                centered={true}
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="Editor" />
                <Tab label="Preview" disabled={!hasSomeData} />
            </Tabs>
            {tab === 0 && (
                <>
                    <Paper className={classes.linkInputContainer}>
                        <LinkInput
                            client={client}
                            setData={setData}
                            setLoading={setLoading}
                        />
                        {loading && <Loading />}
                        {!existing && !loading && hasSomeData && (
                            <CardPreview
                                classes={classes}
                                title={title}
                                description={description}
                                image={image}
                            />
                        )}
                        {existing && (
                            <Typography
                                variant="subtitle1"
                                className={classes.error}
                            >
                                This link already exists on Kauri! Check the
                                below card*
                            </Typography>
                        )}
                    </Paper>

                    {existing && existing.existingLinkId && (
                        <Grid
                            className={classes.existing}
                            container={true}
                            justify="center"
                        >
                            <Existing id={existing.existingLinkId} />
                        </Grid>
                    )}

                    {!existing && !loading && hasSomeData && (
                        <>
                            <Paper className={classes.details}>
                                <Details
                                    tags={tags}
                                    setTags={setTags}
                                    client={client}
                                    authorName={authorName}
                                    authorSocial={authorSocial}
                                />
                            </Paper>

                            <Paper className={classes.editor}>
                                <Editor
                                    minHeight={200}
                                    withTabs={false}
                                    withToolbar={true}
                                    compact={true}
                                    text={summary || ''}
                                    placeholder="Enter a description for the link"
                                    onChange={e => setSummary(e)}
                                />
                            </Paper>
                        </>
                    )}
                </>
            )}
            {tab === 1 && (
                <Grid className={classes.fullPreview}>
                    <FullPreview
                        owner={user}
                        dateCreated={Date.now()}
                        linkTitle={{ value: title }}
                        linkAttributes={{
                            background_image: { value: image },
                        }}
                        linkDescription={{ value: description }}
                        summary={{ value: summary }}
                        tags={tags.map(i => i.label)}
                        authorName={{ value: authorName }}
                        authorSocial={authorSocial}
                        url={{ value: url }}
                        isBookmarked={false}
                        id={'test-id'}
                        openModalAction={() => {}}
                        routeChangeAction={() => {}}
                        userId={userId}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default CreateLink
