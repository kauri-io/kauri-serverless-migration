import { insertText } from '@rej156/react-mde/lib/js/util/MarkdownUtil'
import {
    buildNewDraftState,
    getMarkdownStateFromDraftState,
} from '@rej156/react-mde/lib/js/util/DraftUtil'
import { MdeToolbarIcon } from '@rej156/react-mde/lib/js/components'
import initUppy from '../init-uppy'
const config = require('../../config').default

const uploadImageCommand = {
    buttonContent: <MdeToolbarIcon icon="image" />,

    buttonProps: { 'aria-label': 'Insert a picture' },

    execute: state =>
        new Promise(resolve => {
            const { text, selection } = getMarkdownStateFromDraftState(state)
            const { newText, insertionLength } = insertText(
                text,
                '![',
                selection.start
            )
            const uppy = initUppy({})

            uppy.run()
            uppy.on('upload-success', (_file, { hash }) => {
                const finalText = insertText(
                    newText,
                    `](https://${config.getApiURL()}:443/ipfs/${hash})`,
                    selection.end + insertionLength
                ).newText
                const modification = {
                    text: finalText,
                    selection: {
                        start: selection.start + insertionLength,
                        end: selection.end + insertionLength,
                    },
                }
                uppy.getPlugin('Dashboard').closeModal()
                uppy.close()
                resolve(buildNewDraftState(state, modification))
            })
            uppy.getPlugin('Dashboard').openModal()
        }),
}

export default uploadImageCommand
export { uploadImageCommand }
