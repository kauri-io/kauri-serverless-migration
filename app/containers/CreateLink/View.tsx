import { Grid, Tabs, Tab, Paper } from '@material-ui/core'
import { useState } from 'react'
import Nav from './components/Navbar'
import LinkInput from './components/LinkInput'
import Editor from '../../components/Markdown/Editor'
import { useStyles } from './styles'
import Details from './components/Details'
import Preview from './components/Preview'
import Loading from '../../components/Loading'

const CreateLink = ({ client, submitExtenalLinkAction, userId }) => {
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
    const classes = useStyles({})

    const setData = data => {
        setDescription(data.description)
        setTitle(data.title)
        setImage(data.image)
        setURL(data.url)
        setAuthorName(data.author)
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
                <Tab label="Preview" />
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
                        {!loading && hasSomeData && (
                            <Preview
                                classes={classes}
                                title={title}
                                description={description}
                                image={image}
                            />
                        )}
                    </Paper>

                    {!loading && hasSomeData && (
                        <>
                            <Paper className={classes.details}>
                                <Details
                                    tags={tags}
                                    setTags={setTags}
                                    client={client}
                                    authorName={authorName}
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
        </Grid>
    )
}

export default CreateLink
