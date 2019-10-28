import { Grid, Tabs, Tab, Paper } from '@material-ui/core'
import { useState } from 'react'
import Nav from './components/Navbar'
import LinkInput from './components/LinkInput'
import Editor from '../../components/Markdown/Editor'
import { useStyles } from './styles'
import Details from './components/Details'

const CreateLink = () => {
    const [tab, setTab] = useState(0)
    const [description, setDescription] = useState<null | string>(null)
    const classes = useStyles({})
    return (
        <Grid>
            <Nav disabled={false} />
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
                    <LinkInput />
                    <Paper className={classes.details}>
                        <Details />
                    </Paper>

                    <Paper className={classes.editor}>
                        <Editor
                            minHeight={200}
                            withTabs={false}
                            withToolbar={true}
                            compact={true}
                            text={description || ''}
                            onChange={e => setDescription(e)}
                        />
                    </Paper>
                </>
            )}
        </Grid>
    )
}

export default CreateLink
