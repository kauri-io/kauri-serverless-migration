import Toolbar from './Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Theme, Tabs, Tab } from '@material-ui/core'
import formatMarkdown from './format'
import { useState } from 'react'
import Renderer from './Renderer'
import Metadata from './Metadata'
import { IOpenModalAction, ICloseModalAction } from '../Modal/Module'
import { IAttributes } from '../../containers/WriteArticle/View'
import Importer from '../../containers/Importer'

interface IProps {
    withTabs: boolean
    withToolbar: boolean
    compact: boolean
    openModalAction?: IOpenModalAction
    closeModalAction?: ICloseModalAction
    onChange: (e: string) => void
    text: string
    minHeight?: number
    attributes?: IAttributes
    setAttributes?: (a: IAttributes) => void
    onValidationError?: (e: string) => void
    setTitle?: (title: string) => void
    placeholder?: string
}

const Editor = ({
    withTabs,
    withToolbar,
    compact,
    openModalAction,
    closeModalAction,
    onChange,
    text,
    minHeight,
    attributes,
    setAttributes,
    setTitle,
    onValidationError,
    placeholder
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        editorContainer: {
            background: theme.palette.common.white,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 1242,
            width: '100%',
            margin: 'auto',
            minHeight: minHeight ? minHeight : 400,
        },
        editor: {
            fontSize: '16px',
            resize: 'vertical',
            border: 'none',
            paddingTop: theme.spacing(2),
            flex: 1,
        },
        root: {
            width: '100%',
            background: theme.palette.common.white,
        },
    }))
    const classes = useStyles()
    const [tab, setTab] = useState(0)

    const format = (type: string, url?: string, text?: string) => {
        const input = document.getElementById(
            'editor-text-area'
        ) as HTMLTextAreaElement
        if (input) {
            const start = input.selectionStart
            const end = input.selectionEnd
            const value = input.value
            const output = formatMarkdown(start, end, value, type, url, text)
            input.value = output
            onChange(output)
        }
    }

    return (
        <div className={classes.root}>
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
                            onChange(e.target.value)
                        }}
                        onKeyDown={e => {
                            if (e.keyCode === 9) {
                                e.preventDefault()
                                const start = e.currentTarget.selectionStart
                                const value = e.currentTarget.value
                                e.currentTarget.value = [
                                    value.slice(0, start),
                                    '\t',
                                    value.slice(start),
                                ].join('')
                                e.currentTarget.selectionEnd = start + 1
                            }
                        }}
                        value={text}
                        id="editor-text-area"
                        className={classes.editor}
                        placeholder={placeholder || "Start writing..."}
                    />
                )}
                {tab === 1 && <Renderer markdown={text || ''} />}
                {tab === 2 && (
                    <Metadata
                        attributes={attributes}
                        setAttributes={setAttributes}
                        onValidationError={onValidationError}
                    />
                )}
                {tab === 3 && (
                    <Importer
                        attributes={attributes}
                        setAttributes={setAttributes}
                        onFetch={data => {
                            onChange(data.md)
                            if (setTitle) {
                                setTitle(data.title)
                            }
                            setTab(1)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default Editor
