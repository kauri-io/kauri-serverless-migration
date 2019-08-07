import { insertText } from '@rej156/react-mde/lib/js/util/MarkdownUtil'
import {
    buildNewDraftState,
    getMarkdownStateFromDraftState,
} from '@rej156/react-mde/lib/js/util/DraftUtil'
import { MdeToolbarIcon } from '@rej156/react-mde/lib/js/components'
import initUppy from '../init-uppy'
import { useEffect } from 'react';
const config = require('../../config').default

let uppy

const InitButton = () => {
    useEffect(() => {
        uppy = initUppy({ allowGifs: true, trigger: '.image-upload' })
    }, [])
    return <MdeToolbarIcon icon="image" />
}

const uploadImageCommand = {
    buttonContent: <InitButton />,

    buttonProps: { 'aria-label': 'Insert a picture', className: "image-upload"},

    execute: state =>
        new Promise(resolve => {
            const { text, selection } = getMarkdownStateFromDraftState(state)
            const { newText, insertionLength } = insertText(
                text,
                '![',
                selection.start
            )
            
            uppy.on('upload-success', (_file, { body: {hash} }) => {
                const finalText = insertText(
                    newText,
                    `](https://${config.gateway}:443/ipfs/${hash})`,
                    selection.end + insertionLength
                ).newText
                const modification = {
                    text: finalText,
                    selection: {
                        start: selection.start + insertionLength,
                        end: selection.end + insertionLength,
                    },
                }
                resolve(buildNewDraftState(state, modification))
            })
        }),
}

export default uploadImageCommand
export { uploadImageCommand }
