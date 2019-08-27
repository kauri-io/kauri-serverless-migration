import React from 'react'
import { EditorState, ContentState } from 'draft-js'
import ReactMde, { DraftUtil } from '@rej156/react-mde'
import { getDefaultCommands } from '@rej156/react-mde/lib/js/commands'
import uploadImageCommand from '../../lib/reactmde-commands/upload-image'
import youtubeCommand from '../../lib/reactmde-commands/youtube'
import mediumImport from '../../lib/reactmde-commands/mediumImport'
import advancedModalCommand from '../../lib/reactmde-commands/advanced-modal'
import Head from 'next/head'
import { MdeState } from '@rej156/react-mde/lib/definitions/types'
import MDRenderer from '../Markdown/Renderer'
import { renderToStaticMarkup } from 'react-dom/server'

let reactMdeCommands = getDefaultCommands()
reactMdeCommands[2][5] = mediumImport
reactMdeCommands[1][3] = uploadImageCommand
reactMdeCommands[1][5] = youtubeCommand
reactMdeCommands[2][4] = advancedModalCommand

interface IProps {
    editorState: {
        draftEditorState: EditorState
        markdown: string
    }
    setFieldsValue: any
    getFieldsValue: any
    handleChange: (mdeState: MdeState) => void
}

export class SharedEditor extends React.Component<IProps> {
    commands = reactMdeCommands

    async componentDidMount() {
        if (this.props.editorState) {
            const mdeState = await DraftUtil.getMdeStateFromDraftState(
                (this.props.editorState &&
                    this.props.editorState.draftEditorState) ||
                    EditorState.createWithContent(
                        ContentState.createFromText(
                            typeof this.props.editorState === 'string'
                                ? JSON.parse(this.props.editorState).markdown
                                : this.props.editorState.markdown
                        )
                    ),
                markdown =>
                    Promise.resolve(
                        renderToStaticMarkup(<MDRenderer markdown={markdown} />)
                    )
            )
            this.props.handleChange(mdeState)
        }

        global.window.setFieldsValue = this.props.setFieldsValue
        global.window.getFieldsValue = this.props.getFieldsValue
    }

    render() {
        const { editorState, handleChange } = this.props

        return (
            <div className="container">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
                        rel="stylesheet"
                    />
                </Head>
                <ReactMde
                    commands={this.commands}
                    // editorKey="foobaz"
                    layout="tabbed"
                    placeholder={'Write markdown content here!'}
                    // spellCheck={true}
                    stickyToolbar
                    onChange={handleChange}
                    editorState={editorState}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(
                            renderToStaticMarkup(
                                <MDRenderer markdown={markdown} />
                            )
                        )
                    }
                />
            </div>
        )
    }
}

export default SharedEditor
