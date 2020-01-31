import { useState } from 'react'
import { TextField, Grid } from '@material-ui/core'
import AlertViewComponent from '../Modal/AlertView'

export default ({ classes, closeModalAction, format, type }) => {
    const [url, setURL] = useState('')
    const [text, setText] = useState('')
    return (
        <AlertViewComponent
            title={
                type === 'url'
                    ? 'Add Hyperlink'
                    : type === 'youtube'
                    ? 'Add Youtube URL'
                    : ''
            }
            content={
                <Grid className={classes.urlContainer}>
                    <TextField
                        onChange={e => setURL(e.target.value)}
                        margin="normal"
                        label="URL"
                    />
                    {type !== 'youtube' && (
                        <TextField
                            onChange={e => setText(e.target.value)}
                            margin="normal"
                            label="Text"
                        />
                    )}
                </Grid>
            }
            closeModalAction={() => closeModalAction()}
            confirmButtonText={'Add'}
            closeButtonText={'Cancel'}
            confirmButtonAction={() => {
                if (type === 'url') {
                    format('link', url, text)
                } else if (type === 'youtube') {
                    format('youtube', url)
                }
                closeModalAction()
            }}
        />
    )
}
