import Toolbar from './Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Theme, Tabs, Tab } from '@material-ui/core'
import formatMarkdown from './format'
import { useState } from 'react'
import Renderer from './Renderer'
import Button from '../Button'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'
import Metadata from './Metadata'

let uppy: { on: (arg0: string, arg1: (_data: any, data2: any) => void) => void }

const useStyles = makeStyles((theme: Theme) => ({
    editorContainer: {
        background: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 580,
        padding: theme.spacing(2),
        maxWidth: 1242,
        width: '100%',
        margin: 'auto',
    },
    editor: {
        fontSize: '1.3em',
        resize: 'none',
        minHeight: 400,
        border: 'none',
        paddingTop: theme.spacing(2),
    },
}))

const Editor = ({
    withTabs,
    withToolbar,
    compact,
    openModalAction,
    closeModalAction,
    onChange,
    text,
}) => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    const [value, setValue] = useState(text)

    const format = (type: string, url?: string, text?: string) => {
        console.log(type, url, text)
        const input = document.getElementById(
            'editor-text-area'
        ) as HTMLTextAreaElement
        if (input) {
            const start = input.selectionStart
            const end = input.selectionEnd
            const value = input.value
            const output = formatMarkdown(start, end, value, type, url, text)
            input.value = output
            setValue(output)
            onChange(output)
        }
    }

    useEffect(() => {
        uppy = initUppy({
            allowGifs: true,
            trigger: '#article-image-upload',
        })
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            format('image', url)
        })
    }, [])

    return (
        <div className={classes.editorContainer}>
            {withTabs && (
                <Tabs
                    TabIndicatorProps={{ style: { height: 3 } }}
                    indicatorColor="primary"
                    value={tab}
                    onChange={(_e, tab) => setTab(tab)}
                >
                    <Tab label="Editor" />
                    <Tab label="Preview" />
                    <Tab label="Metadata" />
                    <Tab label="Import" />
                </Tabs>
            )}
            {tab === 0 && withToolbar && (
                <Toolbar
                    closeModalAction={closeModalAction}
                    openModalAction={openModalAction}
                    compact={compact}
                    format={format}
                />
            )}
            {tab === 0 && (
                <textarea
                    onChange={e => {
                        setValue(e.target.value)
                        onChange(e.target.value)
                    }}
                    value={value}
                    id="editor-text-area"
                    className={classes.editor}
                    placeholder="Start writing..."
                />
            )}
            {tab === 1 && <Renderer markdown={value} />}
            {tab === 2 && <Metadata />}
            {tab === 3 && (
                <>
                    <Button variant="text" color="primary">
                        Import from Wordpress
                    </Button>
                    <Button variant="text" color="primary">
                        Import from Medium
                    </Button>
                </>
            )}
        </div>
    )
}

export default Editor
